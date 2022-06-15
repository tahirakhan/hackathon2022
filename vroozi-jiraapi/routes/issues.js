const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/user");
const config = require("config");
const bcrypt = require("bcrypt");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

router.get("/", async (req, res) => {
  try {
    var t = await getTeamsList();
    var teamList = t.map((team) => team.teamName);
    var teams = teamList;
    var result = [];
    try {
      var counter = 0;
      var teamSize = teamList.length;
      console.log("**********************" + Array.isArray(teamList));

      teamList.forEach((team, index) => {
        fetch(
          'https://smartoci.atlassian.net/rest/api/3/search?jql=labels = "MANAGMENT_DASHBOARD" and component = "' +
            team +
            '" and labels != BACKLOG ',
          {
            method: "GET",
            headers: {
              Authorization: `Basic ${Buffer.from(
                config.get("jira-token")
              ).toString("base64")}`,
              Accept: "application/json",
            },
          }
        )
          .then((response) => {
            return response.text();
          })
          .then((text) => {
            var obj = { name: team, items: [] };

            JSON.parse(text).issues?.forEach((jira) => {
              var issue = {};
              issue.key = jira.key;
              issue.name = jira.fields.summary;

              fix = jira.fields.fixVersions.map((element) => element.name);
              issue.labels = fix;
              obj.items.push(issue);
            });
            result.push(obj);
            counter++;
            if (counter === teamSize) {
              console.log("+++++++++++++", result.length);
              res.status(200).json({ result });
            }
          })

          .catch((err) => console.error(err));
      });
      // const products = await Product.find().select({ __v: 0 });
    } catch (err) {
      console.log("Error ", err);
      res.status(500).json({ msg: "Server Error" });
    }
  } catch (err) {
    console.log("Error ", err);
    // res.status(500).json({ msg: "Server Error" });
  }
});

async function getTeamsList() {
  return new Promise((resolve, reject) => {
    fetch(config.get("sheet-data-url"))
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        resolve(data);
      });
  });
}

module.exports = router;

const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");

app.use(cors());
app.use(express.json({ extended: false }));

connectDB();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(200).json({ msg: "This is VROOZI Managment Dashboard." });
});

app.use("/api/issues", require("./routes/issues"));

app.listen(PORT, () => {
  console.log(`Server has been started\nhttp://localhost:${PORT}`);
});

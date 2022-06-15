package com.innovationhub.googlesheetdataservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BacklogController {


  @GetMapping(value = "/backlog-detail")
  public String getBacklogData() {
    return "";
  }
}

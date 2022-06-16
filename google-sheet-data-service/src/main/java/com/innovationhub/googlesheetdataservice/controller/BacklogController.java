package com.innovationhub.googlesheetdataservice.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins ="*")
@RestController
public class BacklogController {


  @GetMapping(value = "/backlog-detail")
  public String getBacklogData() {
    return "";
  }
}

package com.innovationhub.googlesheetdataservice.controller;

import com.innovationhub.googlesheetdataservice.modal.TeamDto;
import com.innovationhub.googlesheetdataservice.service.TeamService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins ="*")
@RestController
public class TeamsController {

  @Autowired
  private TeamService teamService;

  @GetMapping(value = "/teams")
  public List<TeamDto> getAll() {
    return teamService.getAll();
  }
}

package com.innovationhub.googlesheetdataservice.modal;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class TeamDto {

  private String teamName;
  private List<Resource> resources;

  public String getTeamName() {
    return teamName;
  }

  public void setTeamName(String teamName) {
    this.teamName = teamName;
  }

  public List<Resource> getResources() {
    return resources;
  }

  public void setResources(
      List<Resource> resources) {
    this.resources = resources;
  }
}

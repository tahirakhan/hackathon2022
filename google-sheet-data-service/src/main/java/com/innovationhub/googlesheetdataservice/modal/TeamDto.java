package com.innovationhub.googlesheetdataservice.modal;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.ArrayList;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class TeamDto {

  private String teamName;
  private String boardId;
  private List<HiringNeeds> hiringNeeds = new ArrayList<>();
  private List<ResourceWithRole> roles;

  public String getTeamName() {
    return teamName;
  }

  public void setTeamName(String teamName) {
    this.teamName = teamName;
  }

  public String getBoardId() {
    return boardId;
  }

  public void setBoardId(String boardId) {
    this.boardId = boardId;
  }

  public List<HiringNeeds> getHiringNeeds() {
    return hiringNeeds;
  }

  public void setHiringNeeds(
      List<HiringNeeds> hiringNeeds) {
    this.hiringNeeds = hiringNeeds;
  }

  public List<ResourceWithRole> getRoles() {
    return roles;
  }

  public void setRoles(
      List<ResourceWithRole> roles) {
    this.roles = roles;
  }
}

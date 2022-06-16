package com.innovationhub.googlesheetdataservice.modal;

import java.util.List;

public class ResourceWithRole {

  private String name;
  private List<Resource> resources;

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public List<Resource> getResources() {
    return resources;
  }

  public void setResources(
      List<Resource> resources) {
    this.resources = resources;
  }
}

package com.innovationhub.googlesheetdataservice.modal;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@JsonIgnoreProperties(ignoreUnknown = true)
@Document(collection = "releases")
public class Release {

  @Id
  private String id;
  private Double order;
  private String release;

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }


  public Double getOrder() {
    return order;
  }

  public void setOrder(Double order) {
    this.order = order;
  }

  public String getRelease() {
    return release;
  }

  public void setRelease(String release) {
    this.release = release;
  }
}

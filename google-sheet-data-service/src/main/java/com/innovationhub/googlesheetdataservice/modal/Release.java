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
  private String name;
  private String earlyAccess;
  private String productionRelease;

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

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEarlyAccess() {
    return earlyAccess;
  }

  public void setEarlyAccess(String earlyAccess) {
    this.earlyAccess = earlyAccess;
  }

  public String getProductionRelease() {
    return productionRelease;
  }

  public void setProductionRelease(String productionRelease) {
    this.productionRelease = productionRelease;
  }
}

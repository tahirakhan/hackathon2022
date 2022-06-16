package com.innovationhub.googlesheetdataservice.controller;

import com.innovationhub.googlesheetdataservice.modal.Release;
import com.innovationhub.googlesheetdataservice.service.ReleasesService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins ="*")
@RestController
public class ReleasesController {

  @Autowired
  private ReleasesService releasesService;

  @GetMapping(value = "/releases")
  public List<Release> getAllReleases() {
    return releasesService.getAllReleases();
  }
}

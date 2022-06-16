package com.innovationhub.googlesheetdataservice.service;

import com.innovationhub.googlesheetdataservice.modal.Release;
import com.innovationhub.googlesheetdataservice.repository.ReleasesRepository;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReleasesServiceImpl implements ReleasesService {

  @Autowired
  private ReleasesRepository releasesRepository;

  @Override
  public List<Release> getAllReleases() {
    return releasesRepository.findAll().stream()
        .sorted(Comparator.comparing(Release::getOrder))
        .collect(Collectors.toList());

  }
}

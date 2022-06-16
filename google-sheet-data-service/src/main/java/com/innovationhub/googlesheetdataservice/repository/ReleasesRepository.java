package com.innovationhub.googlesheetdataservice.repository;

import com.innovationhub.googlesheetdataservice.modal.Release;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReleasesRepository extends MongoRepository<Release, String> {

}

package com.innovationhub.googlesheetdataservice.repository;

import com.innovationhub.googlesheetdataservice.modal.TeamDao;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamRepository extends MongoRepository<TeamDao, String> {

}

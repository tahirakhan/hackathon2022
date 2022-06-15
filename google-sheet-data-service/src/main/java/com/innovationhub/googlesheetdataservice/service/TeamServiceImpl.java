package com.innovationhub.googlesheetdataservice.service;

import static java.util.stream.Collectors.groupingBy;

import com.innovationhub.googlesheetdataservice.modal.Resource;
import com.innovationhub.googlesheetdataservice.modal.TeamDao;
import com.innovationhub.googlesheetdataservice.modal.TeamDto;
import com.innovationhub.googlesheetdataservice.repository.TeamRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

@Service
public class TeamServiceImpl implements TeamService {

  @Autowired
  private TeamRepository teamRepository;

  @Override
  public List<TeamDto> getAll() {
    List<TeamDao> allTeams = teamRepository.findAll();
    Map<String, List<TeamDao>> groupByTeam = allTeams.stream()
        .collect(groupingBy(TeamDao::getTeam));
    return groupByTeam.entrySet().stream().map(team -> {
      TeamDto teamDto = new TeamDto();
      teamDto.setTeamName(team.getKey());
      teamDto.setResources(team.getValue().stream().map(re -> {
        Resource resource1 = new Resource();
        resource1.setName(re.getResource());
        resource1.setRole(re.getRole());
        resource1.setLead(StringUtils.isNotBlank(re.getLead()));
        return resource1;
      }).collect(Collectors.toList()));
      return teamDto;
    }).collect(Collectors.toList());
  }
}

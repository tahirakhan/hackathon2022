package com.innovationhub.googlesheetdataservice.service;

import static java.util.stream.Collectors.groupingBy;
import static org.apache.commons.lang3.StringUtils.isNotBlank;
import static org.apache.logging.log4j.util.Strings.isBlank;

import com.innovationhub.googlesheetdataservice.modal.HiringNeeds;
import com.innovationhub.googlesheetdataservice.modal.Resource;
import com.innovationhub.googlesheetdataservice.modal.ResourceWithRole;
import com.innovationhub.googlesheetdataservice.modal.TeamDao;
import com.innovationhub.googlesheetdataservice.modal.TeamDto;
import com.innovationhub.googlesheetdataservice.repository.TeamRepository;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

@Service
public class TeamServiceImpl implements TeamService {

  @Autowired
  private TeamRepository teamRepository;

  @Override
  public List<TeamDto> getAll() {
    List<TeamDao> allTeams = teamRepository.findAll();
    // Current Teams Structure
    Map<String, List<TeamDao>> groupByTeam = allTeams.stream()
        .filter(team -> isNotBlank(team.getResource()))
        .collect(groupingBy(TeamDao::getTeam));

    // Getting Team wise Hiring Needs
    Map<String, List<TeamDao>> teamWiseHiringNeeds = allTeams.stream()
        .filter(team -> isBlank(team.getResource()))
        .collect(groupingBy(TeamDao::getTeam));

    List<TeamDto> teamDtos = groupByTeam.entrySet().stream().map(team -> {
      TeamDto teamDto = new TeamDto();
      teamDto.setTeamName(team.getKey());

      teamDto.setBoardId(""+allTeams.stream()
          .filter(tm -> tm.getTeam().equalsIgnoreCase(team.getKey()) && isNotBlank(tm.getBoardId()))
          .map(TeamDao::getBoardId)
          .map(Double::parseDouble)
          .map(id -> BigDecimal.valueOf(id).setScale(0))
          .findFirst().orElse(BigDecimal.ZERO));

      //role wise resources
      Map<String, List<TeamDao>> roleWiseResources = team.getValue().stream()
          .collect(groupingBy(TeamDao::getRole));

      teamDto.setRoles(roleWiseResources.entrySet().stream().map(role -> {
        ResourceWithRole resourceWithRole = new ResourceWithRole();
        resourceWithRole.setName(role.getKey());

        resourceWithRole.setResources(role.getValue().stream().map(re -> {
          Resource resource = new Resource();
          resource.setName(re.getResource());
          resource.setLead(isNotBlank(re.getLead()));
          return resource;
        }).collect(Collectors.toList()));
        return resourceWithRole;
      }).collect(Collectors.toList()));

      List<TeamDao> teamHiring = teamWiseHiringNeeds.get(team.getKey());
      if (!CollectionUtils.isEmpty(teamHiring)) {
        Map<String, Long> result = teamHiring.stream()
            .collect(Collectors.groupingBy(TeamDao::getRole, Collectors.counting()));

        teamDto.setHiringNeeds(result.entrySet().stream().map(entry -> {
          HiringNeeds requiredHiring = new HiringNeeds();
          requiredHiring.setResourceType(entry.getKey());
          requiredHiring.setTotal(entry.getValue());
          return requiredHiring;
        }).collect(Collectors.toList()));
      }
      return teamDto;
    }).collect(Collectors.toList());

    return teamDtos;
  }
}

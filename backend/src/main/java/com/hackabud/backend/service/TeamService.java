package com.hackabud.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hackabud.backend.entity.EventTeam;
import com.hackabud.backend.mapper.EventTeamMapper;
import com.hackabud.backend.repository.EventTeamRepository;
import com.hackabud.backend.repository.TeamMemberRepository;
import com.hackabud.backend.response.EventTeamJson;

@Service
public class TeamService {
    private EventTeamRepository eventTeamRepo;
    private TeamMemberRepository memberRepo;
    public TeamService(@Autowired EventTeamRepository eventTeamRepo,
                       @Autowired TeamMemberRepository memberRepo) {
        this.eventTeamRepo = eventTeamRepo;
        this.memberRepo = memberRepo;
    }

    public List<EventTeamJson> findAllTeamsByEventId(Long eventId) {
        List<EventTeam> entities = eventTeamRepo.findAllByEventId(eventId);
        List<EventTeamJson> jsons = entities.stream().map(EventTeamMapper::toJson).toList();
        return jsons;
    }
}

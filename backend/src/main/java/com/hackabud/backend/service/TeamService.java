package com.hackabud.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hackabud.backend.entity.EventTeam;
import com.hackabud.backend.mapper.EventTeamMapper;
import com.hackabud.backend.repository.EventTeamRepository;
import com.hackabud.backend.response.EventTeamJson;

@Service
public class TeamService {
    private EventTeamRepository eventTeamRepo;
    public TeamService(@Autowired EventTeamRepository eventTeamRepo) {
        this.eventTeamRepo = eventTeamRepo;
    }

    public List<EventTeamJson> findAllTeamsByEventId(Long eventId) {
        List<EventTeam> entities = eventTeamRepo.findAllByEventId(eventId);
        List<EventTeamJson> jsons = entities.stream().map(EventTeamMapper::toJson).toList();
        return jsons;
    }
}

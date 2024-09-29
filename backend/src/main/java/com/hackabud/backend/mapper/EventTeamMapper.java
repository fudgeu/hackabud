package com.hackabud.backend.mapper;

import com.hackabud.backend.entity.EventTeam;
import com.hackabud.backend.response.EventTeamJson;

public class EventTeamMapper {
    public static EventTeam toEntity(EventTeamJson json) {
        EventTeam entity = new EventTeam();
        entity.setId(json.getId());
        entity.setEventId(json.getEventId());
        entity.setLeaderId(json.getLeaderId());
        return entity;
    }

    public static EventTeamJson toJson(EventTeam entity) {
        EventTeamJson json = new EventTeamJson();
        json.setId(entity.getId());
        json.setEventId(entity.getEventId());
        json.setLeaderId(entity.getLeaderId());
        return json;
    }
}

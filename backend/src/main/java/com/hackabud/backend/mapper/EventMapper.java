package com.hackabud.backend.mapper;

import com.hackabud.backend.entity.Event;
import com.hackabud.backend.response.EventJson;

public class EventMapper {
    public static Event toEntity(EventJson json) {
        Event entity = new Event();
        entity.setId(json.getId());
        entity.setOrganizerId(json.getOrganizerId());
        entity.setName(json.getName());
        entity.setDescription(json.getDescription());
        entity.setImage(json.getImage());
        entity.setLocation(json.getLocation());
        entity.setTeamSize(json.getTeamSize());
        return entity;
    }

    public static EventJson toJson(Event entity) {
        EventJson json = new EventJson();
        json.setId(entity.getId());
        json.setOrganizerId(entity.getOrganizerId());
        json.setName(entity.getName());
        json.setDescription(entity.getDescription());
        json.setImage(entity.getImage());
        json.setLocation(entity.getLocation());
        json.setTeamSize(entity.getTeamSize());
        return json;
    }
}

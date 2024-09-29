package com.hackabud.backend.mapper;

import com.hackabud.backend.entity.Invitation;
import com.hackabud.backend.response.InvitationJson;

public class InvitationMapper {
    public static Invitation toEntity(InvitationJson json) {
        Invitation entity = new Invitation();
        entity.setFromTeamId(json.getFromTeamId());
        entity.setId(json.getId());
        entity.setToUserId(json.getToUserId());
        return entity;
    }

    public static InvitationJson toJson(Invitation entity) {
        InvitationJson json = new InvitationJson();
        json.setFromTeamId(entity.getFromTeamId());
        json.setId(entity.getId());
        json.setToUserId(entity.getToUserId());
        return json;
    }
}

package com.hackabud.backend.mapper;

import com.hackabud.backend.entity.TeamMember;
import com.hackabud.backend.response.TeamMemberJson;

public class TeamMemberMapper {
    public static TeamMember toEntity(TeamMemberJson json) {
        TeamMember entity = new TeamMember();
        entity.setMemberId(json.getMemberId());
        entity.setTeamId(json.getTeamId());
        return entity;
    }

    public static TeamMemberJson toJson(TeamMember entity) {
        TeamMemberJson json = new TeamMemberJson();
        json.setMemberId(entity.getMemberId());
        json.setTeamId(entity.getTeamId());
        return json;
    }
}

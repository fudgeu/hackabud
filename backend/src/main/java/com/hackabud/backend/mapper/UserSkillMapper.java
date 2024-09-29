package com.hackabud.backend.mapper;

import com.hackabud.backend.entity.UserSkill;
import com.hackabud.backend.response.UserSkillJson;

public class UserSkillMapper {
        public static UserSkill toEntity(UserSkillJson json) {
        UserSkill entity = new UserSkill();
        entity.setUserId(json.getUserId());
        entity.setSkill(json.getSkill());
        return entity;
    }

    public static UserSkillJson toJson(UserSkill entity) {
        UserSkillJson json = new UserSkillJson();
        json.setUserId(entity.getUserId());
        json.setSkill(entity.getSkill());
        return json;
    }

}

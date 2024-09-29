package com.hackabud.backend.mapper;

import com.hackabud.backend.entity.User;
import com.hackabud.backend.response.UserJson;  

public class UserMapper {
    public static User toEntity(UserJson json) {
        User entity = new User();
        entity.setId(json.getId());
        entity.setName(json.getName());
        entity.setUsername(json.getUsername());
        entity.setProfilePictureUrl(json.getProfilePictureUrl());
        entity.setExperienceLevel(json.getExperienceLevel());
        entity.setSchool(json.getSchool());
        return entity;
    }

    public static UserJson toJson(User entity) {
        UserJson json = new UserJson();
        json.setId(entity.getId());
        json.setName(entity.getName());
        json.setUsername(entity.getUsername());
        json.setProfilePictureUrl(entity.getProfilePictureUrl());
        json.setExperienceLevel(entity.getExperienceLevel());
        json.setSchool(entity.getSchool());
        return json;
    }
}

package com.hackabud.backend.mapper;

import com.hackabud.backend.entity.Notification;
import com.hackabud.backend.response.NotificationJson;

public class NotificationMapper {
    public static Notification toEntity(NotificationJson json) {
        Notification entity = new Notification();
        entity.setDate(json.getDate());
        entity.setId(json.getId());
        entity.setUserId(json.getUserId());
        entity.setInvitationId(json.getInvitationId());
        entity.setMessage(json.getMessage());
        return entity;
    }

    public static NotificationJson toJson(Notification entity) {
        NotificationJson json = new NotificationJson();
        json.setDate(entity.getDate());
        json.setId(entity.getId());
        json.setUserId(entity.getUserId());
        json.setInvitationId(entity.getInvitationId());
        json.setMessage(entity.getMessage());
        return json;
    }
}

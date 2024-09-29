package com.hackabud.backend.mapper;

import com.hackabud.backend.entity.Post;
import com.hackabud.backend.response.PostJson;

public class PostMapper {
    public static Post toEntity(PostJson json) {
        Post entity = new Post();
        entity.setId(json.getId());
        entity.setEventId(json.getEventId());
        entity.setAuthorId(json.getAuthorId());
        entity.setSubject(json.getSubject());
        entity.setBody(json.getBody());
        return entity;
    }

    public static PostJson toJson(Post entity) {
        PostJson json = new PostJson();
        json.setId(entity.getId());
        json.setEventId(entity.getEventId());
        json.setAuthorId(entity.getAuthorId());
        json.setSubject(entity.getSubject());
        json.setBody(entity.getBody());
        return json;
    }
}

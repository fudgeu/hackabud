package com.hackabud.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hackabud.backend.entity.Post;
import com.hackabud.backend.mapper.PostMapper;
import com.hackabud.backend.repository.PostRepository;
import com.hackabud.backend.response.PostJson;

@Service
public class PostService {
    private PostRepository repo;

    public PostService(@Autowired PostRepository repo) {
        this.repo = repo;
    }

    public List<PostJson> findAllPostsByEventId(Long eventId) {
        List<Post> entities = repo.findAllByEventId(eventId);
        List<PostJson> jsons = entities.stream().map(PostMapper::toJson).toList();
        return jsons;
    }

    public PostJson addNewPost(PostJson json) { 
        // TODO: add checks for relevant IDs actually existing in the database
        Post entity = PostMapper.toEntity(json);
        Post savedEntity = repo.save(entity);
        return PostMapper.toJson(savedEntity);
    }
}

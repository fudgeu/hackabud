package com.hackabud.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackabud.backend.response.PostJson;
import com.hackabud.backend.service.PostService;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/sec/post")
public class PostController {
    private PostService service;

    public PostController(@Autowired PostService service) {
        this.service = service;
    }

    @PostMapping("")
    public ResponseEntity<PostJson> addNewPost(@RequestBody @Valid PostJson json) {
        PostJson savedJson = service.addNewPost(json);
        return ResponseEntity.status(HttpStatus.OK).body(savedJson);
    }
    
}

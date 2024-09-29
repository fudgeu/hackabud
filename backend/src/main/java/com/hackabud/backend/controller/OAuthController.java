package com.hackabud.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackabud.backend.request.OAuthIdJson;
import com.hackabud.backend.service.OAuthService;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/api/oauth")
public class OAuthController {
    private OAuthService service;

    public OAuthController(@Autowired OAuthService service) {
        this.service = service;
    }

    @PostMapping("")
    public ResponseEntity<Boolean> userRegistered(@RequestBody @Valid OAuthIdJson json) {
        return ResponseEntity.status(HttpStatus.OK).body(service.OAuthIdIsRegistered(json.getOAuthId()));
    }
    
}

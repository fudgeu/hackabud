package com.hackabud.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackabud.backend.repository.OAuthRepository;
import com.hackabud.backend.request.OAuthIdJson;
import com.hackabud.backend.service.OAuthService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/oauth")
public class OAuthController {
    private OAuthService service;

    public OAuthController(@Autowired OAuthService service) {
        this.service = service;
    }

    @GetMapping("")
    public ResponseEntity<Boolean> getMethodName(@RequestBody @Valid OAuthIdJson json) {
        return ResponseEntity.status(HttpStatus.OK).body(service.OAuthIdIsRegistered(json.getOAuthId()));
    }
    
}

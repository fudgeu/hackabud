package com.hackabud.backend.controller;

import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackabud.backend.request.OAuthIdJson;
import com.hackabud.backend.response.OAuthUserJson;
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
    public ResponseEntity<Long> userRegistered(@RequestBody @Valid OAuthIdJson json) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(service.tryGetUserId(json.getOAuthId()).get());
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PostMapping("/new")
    public ResponseEntity<OAuthUserJson> createNewUserBinding(@RequestBody OAuthUserJson json) {
        return ResponseEntity.ok(service.addNewUserBinding(json));
    }
       
}

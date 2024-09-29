package com.hackabud.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackabud.backend.response.InvitationJson;
import com.hackabud.backend.service.InviteService;
import com.hackabud.backend.service.exception.NotFoundException;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.*;
@RestController
@RequestMapping("/api/sec/invite")
public class InviteController {
    private InviteService service;

    public InviteController() {

    }

    @PostMapping("")
    public ResponseEntity<InvitationJson> sendInvitation(@RequestBody @Valid InvitationJson json) {
        return ResponseEntity.status(HttpStatus.OK).body(service.sendInvitation(json));
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<InvitationJson>> findInvitationsByToUserId(@PathVariable("userId") Long toUserId) {
        return ResponseEntity.status(HttpStatus.OK).body(service.findInvitationsByToUserId(toUserId));
    }
    
    @DeleteMapping("/accept/{id}")
    public ResponseEntity<InvitationJson> acceptInvitation(@PathVariable("id") Long id) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(service.acceptInvitation(id));
        } catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
}

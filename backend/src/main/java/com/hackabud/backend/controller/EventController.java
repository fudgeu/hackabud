package com.hackabud.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackabud.backend.response.EventJson;
import com.hackabud.backend.service.EventService;
import com.hackabud.backend.service.exception.BadRequestException;
import com.hackabud.backend.service.exception.NotFoundException;

import jakarta.validation.Valid;



@RestController
@RequestMapping("/api/sec/event")
public class EventController {
    private EventService service;

    public EventController(@Autowired EventService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    public ResponseEntity<EventJson> getEvent(@PathVariable("id") Long id, @AuthenticationPrincipal OidcUser principal) {
        EventJson json;

        try {
            json = service.getEvent(id);
        } catch (BadRequestException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        } catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.status(HttpStatus.OK).body(json);
    }

    @PostMapping("/")
    public ResponseEntity<EventJson> addNewEvent(@RequestBody @Valid EventJson json) {
        EventJson savedJson = service.addNewEvent(json);
        return ResponseEntity.status(HttpStatus.OK).body(savedJson);
    }
    
}

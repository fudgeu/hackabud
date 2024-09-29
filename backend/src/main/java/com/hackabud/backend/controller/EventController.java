package com.hackabud.backend.controller;

import java.util.List;

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
import com.hackabud.backend.response.EventTeamJson;
import com.hackabud.backend.response.PostJson;
import com.hackabud.backend.service.EventService;
import com.hackabud.backend.service.PostService;
import com.hackabud.backend.service.TeamService;
import com.hackabud.backend.service.exception.BadRequestException;
import com.hackabud.backend.service.exception.NotFoundException;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/api/sec/event")
public class EventController {
    private EventService eventService;
    private TeamService teamService;
    private PostService postService;

    public EventController(@Autowired EventService eventService, 
                           @Autowired TeamService teamService,
                           @Autowired PostService postService) {
        this.eventService = eventService;
        this.teamService = teamService;
        this.postService = postService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<EventJson> getEvent(@PathVariable("id") Long id, @AuthenticationPrincipal OidcUser principal) {
        EventJson json;

        try {
            json = eventService.getEvent(id);
        } catch (BadRequestException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        } catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.status(HttpStatus.OK).body(json);
    }

    @PostMapping("")
    public ResponseEntity<EventJson> addNewEvent(@RequestBody @Valid EventJson json) {
        EventJson savedJson = eventService.addNewEvent(json);
        return ResponseEntity.status(HttpStatus.OK).body(savedJson);
    }

    @GetMapping("/{id}/teams")
    public ResponseEntity<List<EventTeamJson>> findAllTeams(@PathVariable("id") Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(teamService.findAllTeamsByEventId(id));
    }

    @GetMapping("/{id}/posts")
    public ResponseEntity<List<PostJson>> findAllPosts(@PathVariable("id") Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(postService.findAllPostsByEventId(id));
    }
    
    
}

package com.hackabud.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackabud.backend.response.EventTeamJson;
import com.hackabud.backend.response.TeamMemberJson;
import com.hackabud.backend.service.TeamService;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/api/sec/team")
public class TeamController {
    private TeamService service;

    public TeamController(@Autowired TeamService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    public ResponseEntity<EventTeamJson> getTeam(@PathVariable Long id) {
        //return ResponseEntity.ok(service.findAllTeamsByEventId(id));
        return null;
    }

    @PostMapping("/new")
    public ResponseEntity<TeamMemberJson> newTeam(@RequestBody @Valid EventTeamJson json) {
        //return ResponseEntity.ok(service.);
        return null;
    }

    @PostMapping("")
    public ResponseEntity<TeamMemberJson> addTeamMember(@RequestBody @Valid TeamMemberJson json) {
        //return ResponseEntity.ok(service.);
        return null;
    }
    
}

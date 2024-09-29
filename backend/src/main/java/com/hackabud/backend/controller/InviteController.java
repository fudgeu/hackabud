package com.hackabud.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackabud.backend.service.InviteService;

@RestController
@RequestMapping("/api/sec/invite")
public class InviteController {
    private InviteService service;

    public InviteController() {

    }
}

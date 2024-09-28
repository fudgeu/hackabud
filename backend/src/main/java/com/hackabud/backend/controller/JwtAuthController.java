package com.hackabud.backend.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackabud.backend.service.JwtAuthService;

@RestController
@RequestMapping("/api/auth")
public class JwtAuthController {

    private final JwtAuthService service;

    public JwtAuthController(JwtAuthService service) {
        this.service = service;
    }

    @PostMapping("/test")
	public void register() {
		this.service.test();
	}
    
}

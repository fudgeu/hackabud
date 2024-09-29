package com.hackabud.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;


@RestController
@RequestMapping("/api/sec/notif")
public class NotificationController {

    @GetMapping("/get")
    public ResponseEntity<List<String>> getNotifications(@RequestParam Integer count, @AuthenticationPrincipal OidcUser principal) {
        final int _count = count == null || count < 1 ? 10 : Math.min(count, 100);

        // TODO: Get notifications using principal
        
        return ResponseEntity.ok().body(List.of("Random notification"));
    }
    
    
}

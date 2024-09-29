package com.hackabud.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackabud.backend.response.NotificationJson;
import com.hackabud.backend.service.NotificationService;
import com.hackabud.backend.service.exception.BadRequestException;
import com.hackabud.backend.service.exception.NotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;


@RestController
@RequestMapping("/api/sec/notif")
public class NotificationController {
    private NotificationService notifService;
    
    public NotificationController(@Autowired NotificationService notifService) {
        this.notifService = notifService;
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<NotificationJson>> getNotifications(@PathVariable("userId") Long userId) {
        List<NotificationJson> jsons;
        try {
            jsons = notifService.getNotifications(userId);
        } catch (BadRequestException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        } catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.status(HttpStatus.OK).body(jsons);
    }
    
    @GetMapping("/{userId}/{count}")
    public ResponseEntity<List<NotificationJson>> getNotifications(@PathVariable("userId") Long userId, @PathVariable("count") Integer count) {
        List<NotificationJson> jsons;
        try {
            jsons = notifService.getNotifications(userId, count);
        } catch (BadRequestException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        } catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.status(HttpStatus.OK).body(jsons);
    }
    
}

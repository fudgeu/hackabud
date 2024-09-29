package com.hackabud.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackabud.backend.response.UserJson;
import com.hackabud.backend.service.UserService;
import com.hackabud.backend.service.exception.BadRequestException;
import com.hackabud.backend.service.exception.NotFoundException;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/user")
public class UserController {
    private UserService service;

    public UserController(@Autowired UserService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserJson> getUser(@PathVariable("id") Long id) {
        UserJson json;
        try {
            json = service.getUser(id);
        } catch (BadRequestException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        } catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.status(HttpStatus.OK).body(json);
    }

    @PostMapping("/")
    public ResponseEntity<UserJson> addNewUser(@RequestBody @Valid UserJson json) {
        UserJson savedJson = service.addNewUser(json);
        return ResponseEntity.status(HttpStatus.OK).body(savedJson);
    }
    
}

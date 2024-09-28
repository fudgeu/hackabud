package com.hackabud.backend.controller;

import org.springframework.web.bind.annotation.RestController;

import static com.hackabud.backend.mapper.EventMapper.*;
import com.hackabud.backend.response.EventJson;
import com.hackabud.backend.service.EventService;
import com.hackabud.backend.service.exception.BadRequestException;
import com.hackabud.backend.service.exception.NotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/event")
public class EventController {
    private EventService service;

    public EventController(@Autowired EventService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    public ResponseEntity<EventJson> getEvent(@PathVariable("id") Long id) {
        EventJson json;
        try {
            json = toJson(service.getEvent(id));
        } catch (BadRequestException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        } catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.status(HttpStatus.OK).body(json);
    }
    
}

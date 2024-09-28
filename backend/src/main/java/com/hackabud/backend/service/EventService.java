package com.hackabud.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hackabud.backend.entity.Event;
import com.hackabud.backend.repository.EventRepository;
import com.hackabud.backend.service.exception.BadRequestException;
import com.hackabud.backend.service.exception.NotFoundException;

@Service
public class EventService {
    private EventRepository repo;

    public EventService(@Autowired EventRepository repo) {
        this.repo = repo;
    }

    public Event getEvent(Long id) throws BadRequestException, NotFoundException {
        if (id == null)
            throw new BadRequestException();
        
        var event = repo.findById(id);
        if (event.isEmpty())
            throw new NotFoundException();
        
        return event.get();
    }
}

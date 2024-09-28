package com.hackabud.backend.service;

import static com.hackabud.backend.mapper.EventMapper.toEntity;
import static com.hackabud.backend.mapper.EventMapper.toJson;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hackabud.backend.entity.Event;
import com.hackabud.backend.repository.EventRepository;
import com.hackabud.backend.response.EventJson;
import com.hackabud.backend.service.exception.BadRequestException;
import com.hackabud.backend.service.exception.NotFoundException;

@Service
public class EventService {
    private EventRepository repo;

    public EventService(@Autowired EventRepository repo) {
        this.repo = repo;
    }

    public EventJson getEvent(Long id) throws BadRequestException, NotFoundException {
        if (id == null)
            throw new BadRequestException();
        
        var event = repo.findById(id);
        if (event.isEmpty())
            throw new NotFoundException();
        
        return toJson(event.get());
    }

    public EventJson addNewEvent(EventJson json) {
        Event entity = toEntity(json);
        Event savedEntity = repo.save(entity);
        return toJson(savedEntity);
    }
}

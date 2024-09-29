package com.hackabud.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hackabud.backend.mapper.*;
import com.hackabud.backend.entity.Event;
import com.hackabud.backend.entity.EventTeam;
import com.hackabud.backend.repository.EventRepository;
import com.hackabud.backend.repository.EventTeamRepository;
import com.hackabud.backend.response.EventJson;
import com.hackabud.backend.response.EventTeamJson;
import com.hackabud.backend.service.exception.BadRequestException;
import com.hackabud.backend.service.exception.NotFoundException;

@Service
public class EventService {
    private EventRepository eventRepo;

    public EventService(@Autowired EventRepository eventRepo) {
        this.eventRepo = eventRepo;
    }

    public EventJson getEvent(Long id) throws BadRequestException, NotFoundException {
        if (id == null)
            throw new BadRequestException();
        
        var event = eventRepo.findById(id);
        if (event.isEmpty())
            throw new NotFoundException();
        
        return EventMapper.toJson(event.get());
    }

    public EventJson addNewEvent(EventJson json) {
        Event entity = EventMapper.toEntity(json);
        Event savedEntity = eventRepo.save(entity);
        return EventMapper.toJson(savedEntity);
    }
}

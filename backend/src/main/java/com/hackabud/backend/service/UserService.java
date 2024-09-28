package com.hackabud.backend.service;

import static com.hackabud.backend.mapper.UserMapper.toEntity;
import static com.hackabud.backend.mapper.UserMapper.toJson;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hackabud.backend.entity.User;
import com.hackabud.backend.repository.UserRepository;
import com.hackabud.backend.response.UserJson;
import com.hackabud.backend.service.exception.BadRequestException;
import com.hackabud.backend.service.exception.NotFoundException;

@Service
public class UserService {
    private UserRepository repo;

    public UserService(@Autowired UserRepository repo) {
        this.repo = repo;
    }

    public UserJson getUser(Long id) throws BadRequestException, NotFoundException {
        if (id == null)
            throw new BadRequestException();
        
        Optional<User> user = repo.findById(id);
        if (user.isEmpty())
            throw new NotFoundException();
        
        return toJson(user.get());
    }

    public UserJson addNewUser(UserJson json) {
        User entity = toEntity(json);
        User savedEntity = repo.save(entity);
        return toJson(savedEntity);
    }
}

package com.hackabud.backend.service;

import static com.hackabud.backend.mapper.UserMapper.toEntity;
import static com.hackabud.backend.mapper.UserMapper.toJson;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hackabud.backend.entity.User;
import com.hackabud.backend.entity.UserSkill;
import com.hackabud.backend.mapper.UserSkillMapper;
import com.hackabud.backend.repository.UserRepository;
import com.hackabud.backend.repository.UserSkillRepository;
import com.hackabud.backend.response.UserJson;
import com.hackabud.backend.response.UserSkillJson;
import com.hackabud.backend.service.exception.BadRequestException;
import com.hackabud.backend.service.exception.NotFoundException;

@Service
public class UserService {
    private UserRepository repo;
    private UserSkillRepository skillRepo;

    public UserService(@Autowired UserRepository repo, @Autowired UserSkillRepository skillRepo) {
        this.repo = repo;
        this.skillRepo = skillRepo;
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

    public List<UserSkillJson> findAllSkills(Long id) {
        List<UserSkill> entity = skillRepo.findAllById(List.of(id));
        List<UserSkillJson> jsons = entity.stream().map(UserSkillMapper::toJson).toList();
        return jsons;
    }

    public UserSkillJson addSkill(UserSkillJson json) {
        UserSkill savedEntity = skillRepo.save(UserSkillMapper.toEntity(json));
        UserSkillJson savedJson = UserSkillMapper.toJson(savedEntity);
        return savedJson;
    }

}

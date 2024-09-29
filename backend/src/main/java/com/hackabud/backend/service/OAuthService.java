package com.hackabud.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hackabud.backend.entity.OAuthUser;
import com.hackabud.backend.repository.OAuthRepository;
import com.hackabud.backend.response.OAuthUserJson;

@Service
public class OAuthService {
    private OAuthRepository repo;

    public OAuthService(@Autowired OAuthRepository repo) {
        this.repo = repo;
    }

    public Boolean OAuthIdIsRegistered(String OAuthId) {
        return repo.existsByOAuthId(OAuthId);
    }

    public OAuthUserJson addNewUserBinding(OAuthUserJson json) {
        OAuthUser entity = new OAuthUser();
        entity.setOAuthId(json.getOAuthId());
        entity.setUserId(json.getUserId());
        OAuthUser savedEntity = repo.save(entity);

        OAuthUserJson savedJson = new OAuthUserJson();
        savedJson.setOAuthId(savedEntity.getOAuthId());
        savedJson.setUserId(savedEntity.getUserId());

        return savedJson;
    }
}

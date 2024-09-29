package com.hackabud.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hackabud.backend.repository.OAuthRepository;

@Service
public class OAuthService {
    private OAuthRepository repo;

    public OAuthService(@Autowired OAuthRepository repo) {
        this.repo = repo;
    }

    public Boolean OAuthIdIsRegistered(String OAuthId) {
        return repo.existsByOAuthId(OAuthId);
    }
}

package com.hackabud.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hackabud.backend.entity.OAuthUser;

@Repository
public interface OAuthRepository extends JpaRepository<OAuthUser, Long> {
    public Boolean existsByOAuthId(String OAuthId);
}

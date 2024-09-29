package com.hackabud.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class OAuthUser {
    @Id
    private Long userId;

    private String OAuthId;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getOAuthId() {
        return OAuthId;
    }

    public void setOAuthId(String OAuthId) {
        this.OAuthId = OAuthId;
    }
}

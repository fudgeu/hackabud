package com.hackabud.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class UserWebsite {
    @Id
    private Long userId;

    private String website;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }
}

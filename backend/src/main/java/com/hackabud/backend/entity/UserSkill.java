package com.hackabud.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class UserSkill {
    @Id
    private Long userId;

    // java, c++, spring, godot, etc.
    private String skill;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }
}

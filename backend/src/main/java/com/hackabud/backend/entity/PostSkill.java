package com.hackabud.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class PostSkill {
    @Id
    private Long postId;

    private String skill;

    public Long getPostId() {
        return postId;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
    }

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }
}

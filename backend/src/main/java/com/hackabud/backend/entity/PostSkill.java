package com.hackabud.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;

@Entity
public class PostSkill {
    @Id
    private Long postId;

    @NotBlank
    private String skill;
}

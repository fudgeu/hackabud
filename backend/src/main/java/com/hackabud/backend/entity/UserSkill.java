package com.hackabud.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;

@Entity
public class UserSkill {
    @Id
    private Long userId;

    @NotBlank // java, c++, spring, godot, etc.
    private String skill;
}

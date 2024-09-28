package com.hackabud.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    @NotBlank
    private String name;

    @NotBlank
    private String username;

    @NotBlank
    private String profilePictureUrl;

    @NotBlank // maybe this shouldn't be a parameter, let's discuss
    private String school;

    @NotBlank //??? maybe split into separate file if multiple experience levels are possible per user
    private String experienceLevel;
}

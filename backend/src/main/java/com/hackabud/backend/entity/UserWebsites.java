package com.hackabud.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;

@Entity
public class UserWebsites {
    @Id
    private Long userId;

    @NotBlank
    private String website;
}

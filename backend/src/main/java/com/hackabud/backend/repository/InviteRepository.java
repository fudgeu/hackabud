package com.hackabud.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hackabud.backend.entity.Invitation;

@Repository
public interface InviteRepository extends JpaRepository<Invitation, Long> {
    
}

package com.hackabud.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hackabud.backend.entity.EventTeam;

@Repository
public interface EventTeamRepository extends JpaRepository<EventTeam, Long> {
    public List<EventTeam> findAllByEventId(Long eventId);
}

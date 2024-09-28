package com.hackabud.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hackabud.backend.entity.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {

}

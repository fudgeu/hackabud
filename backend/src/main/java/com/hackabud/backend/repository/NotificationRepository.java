package com.hackabud.backend.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hackabud.backend.entity.Notification;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {

    List<Notification> findAllById(Long id);

    List<Notification> findAllByIdOrderByDateDesc(Long id);
    
    List<Notification> findAllByIdOrderByDateDesc(Long id, Pageable pageable);
}

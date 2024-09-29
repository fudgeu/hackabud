package com.hackabud.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hackabud.backend.entity.Notification;
import com.hackabud.backend.entity.User;

import java.util.List;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {

    List<Notification> findAllByUser(User user);

    List<Notification> findAllByUserOrderByDateDesc(User user);
    
}

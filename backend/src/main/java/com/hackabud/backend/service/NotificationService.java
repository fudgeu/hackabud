package com.hackabud.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hackabud.backend.entity.Notification;
import com.hackabud.backend.entity.User;
import com.hackabud.backend.repository.NotificationRepository;
import com.hackabud.backend.service.exception.BadRequestException;

import java.util.*;

@Service
public class NotificationService {

    private NotificationRepository notificationRepo;

    public NotificationService(@Autowired NotificationRepository notificationRepo) {
        this.notificationRepo = notificationRepo;
    }

    public List<Notification> getNotifications(User user) throws BadRequestException {
        if (user == null)
            throw new BadRequestException();

        return this.notificationRepo.findAllByUserOrderByDateDesc(user);
    }

    public void sendNotifications(User user, Iterable<Notification> notifications) throws BadRequestException {
        if (user == null)
            throw new BadRequestException();
        
        this.notificationRepo.saveAllAndFlush(notifications);
    }

    public void sendNotifications(User user, Notification... notifications) throws BadRequestException {
        this.sendNotifications(user, Arrays.asList(notifications));
    }

    public void deleteNotifications(Iterable<Long> ids) throws BadRequestException {
        if (ids == null)
            throw new BadRequestException();
        
        this.notificationRepo.deleteAllByIdInBatch(ids);
    }

    public void deleteNotifications(Long... ids) throws BadRequestException {
        this.deleteNotifications(Arrays.asList(ids));
    }
    
}

package com.hackabud.backend.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.hackabud.backend.entity.Notification;
import com.hackabud.backend.mapper.NotificationMapper;
import com.hackabud.backend.repository.NotificationRepository;
import com.hackabud.backend.repository.UserRepository;
import com.hackabud.backend.response.NotificationJson;
import com.hackabud.backend.service.exception.BadRequestException;
import com.hackabud.backend.service.exception.NotFoundException;

@Service
public class NotificationService {

    private NotificationRepository notificationRepo;
    private UserRepository userRepo;

    public NotificationService(@Autowired NotificationRepository notificationRepo,
                               @Autowired UserRepository userRepo) {
        this.notificationRepo = notificationRepo;
        this.userRepo = userRepo;
    }

    public List<NotificationJson> getNotifications(Long userId) throws BadRequestException, NotFoundException {
        if (userId == null)
            throw new BadRequestException();
        if (!userRepo.existsById(userId))
            throw new NotFoundException();

        return this.notificationRepo.findAllByIdOrderByDateDesc(userId).stream().map(NotificationMapper::toJson).toList();
    }

    public List<NotificationJson> getNotifications(Long userId, Integer count) throws BadRequestException, NotFoundException {
        if (userId == null)
            throw new BadRequestException();
        if (!userRepo.existsById(userId))
            throw new NotFoundException();

        Pageable pageable = Pageable.ofSize(count);
        return this.notificationRepo.findAllByIdOrderByDateDesc(userId, pageable).stream().map(NotificationMapper::toJson).toList();
    }

    public List<NotificationJson> sendNotifications(Long userId, Iterable<Notification> notifications) throws BadRequestException, NotFoundException {
        if (userId == null)
            throw new BadRequestException();
        if (!userRepo.existsById(userId))
            throw new NotFoundException();
        
        List<NotificationJson> jsons = this.notificationRepo.saveAllAndFlush(notifications).stream().map(NotificationMapper::toJson).toList();
        return jsons;
    }

    public void sendNotifications(Long userId, Notification... notifications) throws BadRequestException, NotFoundException {
        this.sendNotifications(userId, Arrays.asList(notifications));
    }

    public void deleteNotifications(Iterable<Long> ids) throws BadRequestException {
        if (ids == null)
            throw new BadRequestException();
        
        this.notificationRepo.deleteAllByIdInBatch(ids);
    }

    public void deleteNotifications(Long... ids) throws BadRequestException {
        this.deleteNotifications(Arrays.asList(ids));
    }

    public void deleteNotification(Long id) {
        notificationRepo.deleteById(id);
    }
    
}

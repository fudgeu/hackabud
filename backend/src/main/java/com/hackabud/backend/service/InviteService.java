package com.hackabud.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hackabud.backend.entity.Invitation;
import com.hackabud.backend.entity.Notification;
import com.hackabud.backend.mapper.InvitationMapper;
import com.hackabud.backend.repository.EventTeamRepository;
import com.hackabud.backend.repository.InviteRepository;
import com.hackabud.backend.repository.NotificationRepository;
import com.hackabud.backend.repository.UserRepository;
import com.hackabud.backend.response.InvitationJson;

@Service
public class InviteService {
    private EventTeamRepository eventTeamRepo;
    private InviteRepository invRepo;
    private NotificationRepository notifRepo;
    private UserRepository userRepo;

    public InviteService(@Autowired EventTeamRepository eventTeamRepo,
                         @Autowired InviteRepository invRepo,
                         @Autowired NotificationRepository notifRepo,
                         @Autowired UserRepository userRepo) {
        this.eventTeamRepo = eventTeamRepo;
        this.invRepo = invRepo;
        this.notifRepo = notifRepo;
        this.userRepo = userRepo;
    }

    public InvitationJson sendInvitation(InvitationJson json) {
        Invitation entity = InvitationMapper.toEntity(json);
        Invitation savedEntity = invRepo.save(entity);
        
        String teamLeaderName = userRepo.findById(eventTeamRepo.findById(savedEntity.getFromTeamId()).get().getLeaderId()).get().getName();

        Notification inviteNotif = new Notification();
        inviteNotif.setInvitationId(savedEntity.getId());
        inviteNotif.setMessage("You received an invite to join a team from " + teamLeaderName + "!");
        notifRepo.save(inviteNotif);

        return InvitationMapper.toJson(savedEntity);
    }

}

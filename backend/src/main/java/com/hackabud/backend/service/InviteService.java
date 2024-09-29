package com.hackabud.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

import com.hackabud.backend.entity.Invitation;
import com.hackabud.backend.entity.Notification;
import com.hackabud.backend.entity.TeamMember;
import com.hackabud.backend.mapper.InvitationMapper;
import com.hackabud.backend.repository.EventTeamRepository;
import com.hackabud.backend.repository.InviteRepository;
import com.hackabud.backend.repository.NotificationRepository;
import com.hackabud.backend.repository.TeamMemberRepository;
import com.hackabud.backend.repository.UserRepository;
import com.hackabud.backend.response.InvitationJson;
import com.hackabud.backend.service.exception.NotFoundException;

@Service
public class InviteService {
    private EventTeamRepository eventTeamRepo;
    private InviteRepository invRepo;
    private NotificationRepository notifRepo;
    private UserRepository userRepo;
    private TeamMemberRepository teamMemberRepo;

    public InviteService(@Autowired EventTeamRepository eventTeamRepo,
                         @Autowired InviteRepository invRepo,
                         @Autowired NotificationRepository notifRepo,
                         @Autowired UserRepository userRepo,
                         @Autowired TeamMemberRepository teamMemberRepo) {
        this.eventTeamRepo = eventTeamRepo;
        this.invRepo = invRepo;
        this.notifRepo = notifRepo;
        this.userRepo = userRepo;
        this.teamMemberRepo = teamMemberRepo;
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

    public List<InvitationJson> findInvitationsByToUserId(Long toUserId) {
        List<Invitation> entities = invRepo.findAllByToUserId(toUserId);
        List<InvitationJson> jsons = entities.stream().map(InvitationMapper::toJson).toList();
        return jsons;
    }

    public InvitationJson acceptInvitation(Long id) throws NotFoundException {
        Optional<Invitation> entity = invRepo.findById(id);
        if (entity.isEmpty())
            throw new NotFoundException();
        InvitationJson deleted = InvitationMapper.toJson(entity.get());
        invRepo.deleteById(id);

        TeamMember member = new TeamMember();
        member.setMemberId(deleted.getToUserId());
        member.setTeamId(deleted.getFromTeamId());
        teamMemberRepo.save(member);

        return deleted;
    }

}

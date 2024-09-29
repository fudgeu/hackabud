package com.hackabud.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hackabud.backend.entity.TeamMember;
import com.hackabud.backend.entity.TeamMemberId;

public interface TeamMemberRepository extends JpaRepository<TeamMember, TeamMemberId> {
    
}

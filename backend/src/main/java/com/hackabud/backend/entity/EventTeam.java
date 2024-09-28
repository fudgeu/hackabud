package com.hackabud.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class EventTeam {
    @Id
    private Long teamId;

    private Long teamMemberId;

    public Long getTeamId() {
        return teamId;
    }

    public void setTeamId(Long teamId) {
        this.teamId = teamId;
    }

    public Long getTeamMemberId() {
        return teamMemberId;
    }

    public void setTeamMemberId(Long teamMemberId) {
        this.teamMemberId = teamMemberId;
    }
}

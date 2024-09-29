package com.hackabud.backend.response;

import jakarta.validation.constraints.NotBlank;

public class OAuthUserJson {
    private Long userId;

    @NotBlank
    private String OAuthId;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getOAuthId() {
        return OAuthId;
    }

    public void setOAuthId(String oAuthId) {
        OAuthId = oAuthId;
    }
}

package com.hackabud.backend.request;

import jakarta.validation.constraints.NotBlank;

public class OAuthIdJson {
    @NotBlank
    private String OAuthId;

    public String getOAuthId() {
        return OAuthId;
    }

    public void setOAuthId(String OAuthId) {
        this.OAuthId = OAuthId;
    }
}

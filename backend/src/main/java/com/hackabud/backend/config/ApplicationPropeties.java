package com.hackabud.backend.config;

import java.util.List;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "hackabud")
public class ApplicationPropeties {

    private List<String> corsOrigins;

    public List<String> getCorsOrigins() {
        return this.corsOrigins;
    }

    public void setCorsOrigins(List<String> corsOrigins) {
        this.corsOrigins = corsOrigins;
    }
    
}

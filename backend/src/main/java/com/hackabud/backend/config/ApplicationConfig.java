package com.hackabud.backend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class ApplicationConfig {

    @Value("${hackabud.database.url}")
    private String databaseUrl;

    @Value("${hackabud.database.username}")
    private String databaseUsername;

    @Value("${hackabud.database.password}")
    private String databasePassword;

    
}

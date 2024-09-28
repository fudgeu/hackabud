package com.hackabud.backend.config;

import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import io.jsonwebtoken.lang.Collections;

@Configuration
public class ApplicationConfig {

    private final ApplicationPropeties propeties;

    public ApplicationConfig(ApplicationPropeties propeties) {
        this.propeties = propeties;
    }

    @Bean
    CorsFilter corsFilter() {
		List<String> origins = this.propeties.getCorsOrigins();
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        
		CorsConfiguration config = new CorsConfiguration();
		config.setAllowCredentials(true);
		config.setAllowedOrigins(origins != null ? origins : Collections.emptyList());
		config.addAllowedHeader("*");
		config.addAllowedMethod("*");
		source.registerCorsConfiguration("/**", config);

		return new CorsFilter(source);
	}
    
}

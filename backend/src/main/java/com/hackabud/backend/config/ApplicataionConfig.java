package com.hackabud.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.List;

@Configuration
public class ApplicataionConfig {

    private final ApplicationPropeties applicationPropeties;

    public ApplicataionConfig(ApplicationPropeties applicationProperties) {
        this.applicationPropeties = applicationProperties;
    }

    @Bean
	CorsFilter corsFilter() {
		List<String> origins = this.applicationPropeties.getCorsOrigins();
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration config = new CorsConfiguration();
		config.setAllowCredentials(true);
		config.setAllowedOrigins(origins != null ? origins : List.of());
		config.addAllowedHeader("*");
		config.addAllowedMethod("*");
		source.registerCorsConfiguration("/**", config);
		return new CorsFilter(source);
	}
    
}

package com.hackabud.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http
			.csrf(AbstractHttpConfigurer::disable)
			.cors(c -> c.configure(http))
			.authorizeHttpRequests(r -> r
				.requestMatchers("/api/sec/**").authenticated() // Allow access if authenticated
				.requestMatchers("/**").permitAll())
			.oauth2ResourceServer(Customizer.withDefaults());
		return http.build();
	}
    
}

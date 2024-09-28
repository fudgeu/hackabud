package com.hackabud.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.RegexRequestMatcher;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	private static final RegexRequestMatcher SECURITY_PATTERN = new RegexRequestMatcher("^(?!.*\\/sec\\/).*$", null, true);

    @Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http
			.csrf(AbstractHttpConfigurer::disable)
			.cors(c -> c.configure(http))
			.authorizeHttpRequests(r -> r
				.requestMatchers(SECURITY_PATTERN)
				.permitAll()
				.anyRequest()
				.authenticated());
		return http.build();
	}
    
}

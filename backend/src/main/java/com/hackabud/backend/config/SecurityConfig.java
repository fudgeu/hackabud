package com.hackabud.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
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

	private static final RegexRequestMatcher NO_AUTH_URL = new RegexRequestMatcher("^(\\/api)(\\/.*)((?<=\\/)no-auth(\\/|$))(.*)", null, true);
	private static final RegexRequestMatcher AUTH_URL = new RegexRequestMatcher("^\\/api\\/auth.*", null, true);

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http
			.csrf(AbstractHttpConfigurer::disable)
			.cors(c -> c.configure(http))
			.authorizeHttpRequests(r -> r
				.requestMatchers(AUTH_URL, NO_AUTH_URL)
				.permitAll()
				.anyRequest()
				.authenticated())
			.sessionManagement(s -> s
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

		return http.build();
	}
    
}

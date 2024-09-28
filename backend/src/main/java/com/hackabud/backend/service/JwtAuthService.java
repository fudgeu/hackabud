package com.hackabud.backend.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class JwtAuthService {

    public void test() {
        System.out.println("Yippie");
    }
    
}

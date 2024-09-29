package com.hackabud.backend.entity;

import org.hibernate.annotations.CreationTimestamp;

import com.nimbusds.jose.util.StandardCharset;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import java.time.LocalDateTime;

@Entity
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @CreationTimestamp
    private LocalDateTime date;

    @Column(name = "message", length = 4096)
    private byte[] message;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return this.id;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public LocalDateTime getDate() {
        return this.date;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public User getUser() {
        return this.user;
    }

    public void setMessage(String message) {
        this.setMessage(message.getBytes(StandardCharset.UTF_8));
    }

    public void setMessage(byte[] message) {
        this.message = message;
    }

    public byte[] getMessage() {
        return this.message;
    }
    
}

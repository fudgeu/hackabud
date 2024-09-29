package com.hackabud.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hackabud.backend.entity.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    public List<Post> findAllByEventId(Long eventId);
}

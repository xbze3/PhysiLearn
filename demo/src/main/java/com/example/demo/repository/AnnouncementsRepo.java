package com.example.demo.repository;
import com.example.demo.model.Announcements;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AnnouncementsRepo extends MongoRepository<Announcements, String> {}
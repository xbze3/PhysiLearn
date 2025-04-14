package com.example.demo.repository;
import com.example.demo.model.Submissions;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SubmissionsRepo extends MongoRepository <Submissions, String> {}
package com.example.demo.repository;
import com.example.demo.model.Assignments;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AssignmentsRepo extends MongoRepository <Assignments, String> {}
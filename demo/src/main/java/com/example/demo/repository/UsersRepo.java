package com.example.demo.repository;
import com.example.demo.model.Users;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsersRepo extends MongoRepository <Users, String> {}
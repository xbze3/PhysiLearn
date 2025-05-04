package com.example.demo.repository;

import com.example.demo.model.Users;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsersRepo extends MongoRepository<Users, String> {

    @Query("{ email: ?0 }")
    Optional<Users> findByEmail(String email);

    @Query("{ _id: ?0 }")
    Optional<Users> findById(String id);
}

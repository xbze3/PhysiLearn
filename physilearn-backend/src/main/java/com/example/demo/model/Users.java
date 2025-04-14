package com.example.demo.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document(collection = "User")
public class Users {

    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private String role;
    private String passwordHash;
    private List<String> classrooms;

    // No-args constructor
    public Users() {
    }

    // All-args constructor
    public Users(String id, String firstName, String lastName, String email, String role, String passwordHash, List<String> classrooms) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.role = role;
        this.passwordHash = passwordHash;
        this.classrooms = classrooms;
    }

    // Getters and setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public List<String> getClassrooms() {
        return classrooms;
    }

    public void setClassrooms(List<String> classrooms) {
        this.classrooms = classrooms;
    }
}

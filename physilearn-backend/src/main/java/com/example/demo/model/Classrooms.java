package com.example.demo.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;
import java.time.LocalDate;

@Document(collection = "classroom")
public class Classrooms {
    @Id
    private String id;
    private String code;
    private String name;
    private String instructorId;
    private List<String> members;
    private LocalDate createdAt;

    // Constructors
    public Classrooms() {
    }

    public Classrooms(String id, String code, String name, String instructorId, List<String> members, LocalDate createdAt) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.instructorId = instructorId;
        this.members = members;
        this.createdAt = createdAt;
    }

    // Getters and Setters
    public void setId(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getInstructorId() {
        return instructorId;
    }

    public void setInstructorId(String instructorId) {
        this.instructorId = instructorId;
    }

    public List<String> getMembers() {
        return members;
    }

    public void setMembers(List<String> members) {
        this.members = members;
    }

    public LocalDate getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDate createdAt) {
        this.createdAt = createdAt;
    }
}


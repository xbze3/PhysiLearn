package com.example.demo.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "User")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Users {

    @Id
    private String id;
    @JsonProperty("username")
    private String userName;
    private String email;
    private String role;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;
    private List<String> classrooms;

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getUserName() {
        return userName;
    }
    public void setUserName(String userName) {
        this.userName = userName;
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
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public List<String> getClassrooms() {
        return classrooms;
    }
    public void setClassrooms(List<String> classrooms) {
        this.classrooms = classrooms;
    }
}

package com.example.demo.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;
import java.time.LocalDate;

@Document(collection = "announcement")
public class Announcements {

    @Id
    private String id;
    private String classroomId;
    private String senderId;
    private String content;
    private LocalDate dateSend;

    // Constructors
    public Announcements() {
    }

    public Announcements(String id, String classroomId, String senderId, String content, LocalDate dateSend) {
        this.id = id;
        this.classroomId = classroomId;
        this.senderId = senderId;
        this.content = content;
        this.dateSend = dateSend;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getClassroomId() {
        return classroomId;
    }

    public void setClassroomId(String classroomId) {
        this.classroomId = classroomId;
    }

    public String getSenderId() {
        return senderId;
    }

    public void setSenderId(String senderId) {
        this.senderId = senderId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDate getDateSend() {
        return dateSend;
    }

    public void setDateSend(LocalDate dateSend) {
        this.dateSend = dateSend;
    }

   
}

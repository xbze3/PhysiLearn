package com.example.demo.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;
import java.time.LocalDate;

@Document (collection = "assignment")
public class Assignments {
    private String id;
    private String title;
    private String info;
    private String instructorId;
    private String classroomId;
    private LocalDate dueDate;
    private LocalDate dateAssigned;

    public Assignments(){
    }

    public Assignments(String id, String title, String info, String instructorId, String classroomId, LocalDate dueDate, LocalDate DateAssigned){
        this.id = id;
        this.title = title;
        this.info = info;
        this.instructorId = instructorId;
        this.classroomId = classroomId;
        this.dueDate = dueDate;
        this.dateAssigned = dateAssigned;
    }



    public void setId(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public String getTitle(){
        return title;
    }

    public void setInfo(String info){
        this.info = info;
    }

    public String getInfo(){
        return info;
    }

    public void setInstructorId(String instructorId){
        this.instructorId = instructorId;
    }

    public String getInstructorId(){
        return instructorId;
    }

    public void setClassroomId(String classroomId){
        this.classroomId = classroomId;
    }

    public String getClassroomId(){
        return classroomId;
    }

    public void setDueDate(LocalDate dueDate){
        this.dueDate = dueDate;
    }

    public LocalDate getDueDate(){
        return dueDate;
    }

    public void setDateAssigned(LocalDate dateAssigned){
        this.dateAssigned = dateAssigned;
    }

    public LocalDate getDateAssigned(){
        return dateAssigned;
    }

}
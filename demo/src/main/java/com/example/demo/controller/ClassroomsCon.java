package com.example.demo.controller;
import com.example.demo.model.Classrooms;
import com.example.demo.repository.ClassroomsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/classrooms")
public class ClassroomsCon {

    @Autowired
    private ClassroomsRepo classroomsRepo;

    // CREATE
    @PostMapping
    public Classrooms createClassroom(@RequestBody Classrooms classrooms) {
        System.out.println(">> [POST] Creating classroom: " + classrooms);
        Classrooms saved = classroomsRepo.save(classrooms);
        System.out.println(">> [POST] Saved classroom: " + saved);
        return saved;
    }

    // READ ALL
    @GetMapping
    public List<Classrooms> getAllClassrooms() {
        System.out.println(">> [GET] Fetching all classrooms");
        List<Classrooms> classrooms = classroomsRepo.findAll();
        System.out.println(">> [GET] Found classrooms: " + classrooms.size());
        return classrooms;
    }

    // READ ONE BY ID
    @GetMapping("/{id}")
    public Classrooms getClassroomById(@PathVariable String id) {
        System.out.println(">> [GET] Fetching classroom with ID: " + id);
        Optional<Classrooms> classrooms = classroomsRepo.findById(id);
        if (classrooms.isPresent()) {
            System.out.println(">> [GET] Found classroom: " + classrooms.get());
        } else {
            System.out.println(">> [GET] Classroom not found for ID: " + id);
        }
        return classrooms.orElse(null);
    }

 
    // DELETE
    @DeleteMapping("/{id}")
    public void deleteClassroom(@PathVariable String id) {
        System.out.println(">> [DELETE] Deleting classroom with ID: " + id);
        classroomsRepo.deleteById(id);
        System.out.println(">> [DELETE] Deleted classroom with ID: " + id);
    }
}

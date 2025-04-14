package com.example.demo.controller;
import com.example.demo.model.Assignments;
import com.example.demo.repository.AssignmentsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/assignments")
public class AssignmentsCon {

    @Autowired
    private AssignmentsRepo assignmentsRepo;

    // CREATE
    @PostMapping
    public Assignments createAssignment(@RequestBody Assignments assignment) {
        System.out.println(">> [POST] Creating assignment: " + assignment);
        Assignments saved = assignmentsRepo.save(assignment);
        System.out.println(">> [POST] Saved assignment: " + saved);
        return saved;
    }

    // READ ALL
    @GetMapping
    public List<Assignments> getAllAssignments() {
        System.out.println(">> [GET] Fetching all assignments");
        List<Assignments> list = assignmentsRepo.findAll();
        System.out.println(">> [GET] Found " + list.size() + " assignments");
        return list;
    }

    // READ ONE
    @GetMapping("/{id}")
    public Assignments getAssignmentById(@PathVariable String id) {
        System.out.println(">> [GET] Fetching assignment with ID: " + id);
        Optional<Assignments> assignment = assignmentsRepo.findById(id);
        if (assignment.isPresent()) {
            System.out.println(">> [GET] Found: " + assignment.get());
        } else {
            System.out.println(">> [GET] No assignment found for ID: " + id);
        }
        return assignment.orElse(null);
    }

    // UPDATE
    @PutMapping("/{id}")
    public Assignments updateAssignment(@PathVariable String id, @RequestBody Assignments updatedAssignment) {
        System.out.println(">> [PUT] Updating assignment ID: " + id);
        updatedAssignment.setId(id);
        Assignments saved = assignmentsRepo.save(updatedAssignment);
        System.out.println(">> [PUT] Updated: " + saved);
        return saved;
    }

    // DELETE
    @DeleteMapping("/{id}")
    public void deleteAssignment(@PathVariable String id) {
        System.out.println(">> [DELETE] Deleting assignment with ID: " + id);
        assignmentsRepo.deleteById(id);
        System.out.println(">> [DELETE] Deleted assignment with ID: " + id);
    }
}

package com.example.demo.controller;
import com.example.demo.model.Submissions;
import com.example.demo.repository.SubmissionsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/submissions")
public class SubmissionsCon {

    @Autowired
    private SubmissionsRepo submissionsRepo;

    // CREATE
    @PostMapping
    public Submissions createSubmission(@RequestBody Submissions submission) {
        System.out.println(">> [POST] Creating submission: " + submission);
        Submissions saved = submissionsRepo.save(submission);
        System.out.println(">> [POST] Saved submission: " + saved);
        return saved;
    }

    // READ ALL
    @GetMapping
    public List<Submissions> getAllSubmissions() {
        System.out.println(">> [GET] Fetching all submissions");
        List<Submissions> submissions = submissionsRepo.findAll();
        System.out.println(">> [GET] Found " + submissions.size() + " submissions");
        return submissions;
    }

    // READ ONE BY ID
    @GetMapping("/{id}")
    public Submissions getSubmissionById(@PathVariable String id) {
        System.out.println(">> [GET] Fetching submission with ID: " + id);
        Optional<Submissions> submission = submissionsRepo.findById(id);
        if (submission.isPresent()) {
            System.out.println(">> [GET] Found submission: " + submission.get());
        } else {
            System.out.println(">> [GET] Submission not found for ID: " + id);
        }
        return submission.orElse(null);
    }

    // UPDATE
    @PutMapping("/{id}")
    public Submissions updateSubmission(@PathVariable String id, @RequestBody Submissions updatedSubmission) {
        System.out.println(">> [PUT] Updating submission with ID: " + id);
        updatedSubmission.setId(id);
        Submissions saved = submissionsRepo.save(updatedSubmission);
        System.out.println(">> [PUT] Updated submission: " + saved);
        return saved;
    }

    // DELETE
    @DeleteMapping("/{id}")
    public void deleteSubmission(@PathVariable String id) {
        System.out.println(">> [DELETE] Deleting submission with ID: " + id);
        submissionsRepo.deleteById(id);
        System.out.println(">> [DELETE] Deleted submission with ID: " + id);
    }
}

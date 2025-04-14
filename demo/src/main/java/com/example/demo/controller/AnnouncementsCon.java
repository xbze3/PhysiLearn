package com.example.demo.controller;
import com.example.demo.model.Announcements;
import com.example.demo.repository.AnnouncementsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/announcements")
public class AnnouncementsCon {

    @Autowired
    private AnnouncementsRepo announcementsRepo;

    // CREATE
    @PostMapping
    public Announcements createAnnouncement(@RequestBody Announcements announcements) {
        System.out.println(">> [POST] Creating announcement: " + announcements);
        return announcementsRepo.save(announcements);
    }

    // READ ALL
    @GetMapping
    public List<Announcements> getAllAnnouncements() {
        System.out.println(">> [GET] Fetching all announcements");
        return announcementsRepo.findAll();
    }

    // READ ONE BY ID
    @GetMapping("/{id}")
    public Announcements getAnnouncementById(@PathVariable String id) {
        System.out.println(">> [GET] Fetching announcement with ID: " + id);
        Optional<Announcements> announcement = announcementsRepo.findById(id);
        return announcement.orElse(null);
    }

    // UPDATE
    @PutMapping("/{id}")
    public Announcements updateAnnouncement(@PathVariable String id, @RequestBody Announcements updated) {
        System.out.println(">> [PUT] Updating announcement with ID: " + id);
        updated.setId(id);
        return announcementsRepo.save(updated);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public void deleteAnnouncement(@PathVariable String id) {
        System.out.println(">> [DELETE] Deleting announcement with ID: " + id);
        announcementsRepo.deleteById(id);
    }
}

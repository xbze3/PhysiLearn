package com.example.demo.controller;
import com.example.demo.model.Users;
import com.example.demo.repository.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/users")
public class UsersCon {

    @Autowired
    private UsersRepo usersRepo;

    // CREATE
    @PostMapping
    public Users createUser(@RequestBody Users user) {
        System.out.println(">> [POST] Creating user: " + user);
        Users saved = usersRepo.save(user);
        System.out.println(">> [POST] Saved user: " + saved);
        return saved;
    }

    // READ ALL
    @GetMapping
    public List<Users> getAllUsers() {
        System.out.println(">> [GET] Fetching all users");
        List<Users> users = usersRepo.findAll();
        System.out.println(">> [GET] Found " + users.size() + " users");
        return users;
    }

    // READ ONE BY ID
    @GetMapping("/{id}")
    public Users getUserById(@PathVariable String id) {
        System.out.println(">> [GET] Fetching user with ID: " + id);
        Optional<Users> user = usersRepo.findById(id);
        if (user.isPresent()) {
            System.out.println(">> [GET] Found user: " + user.get());
        } else {
            System.out.println(">> [GET] User not found for ID: " + id);
        }
        return user.orElse(null);
    }

    // UPDATE
    @PutMapping("/{id}")
    public Users updateUser(@PathVariable String id, @RequestBody Users updatedUser) {
        System.out.println(">> [PUT] Updating user with ID: " + id);
        updatedUser.setId(id);
        Users saved = usersRepo.save(updatedUser);
        System.out.println(">> [PUT] Updated user: " + saved);
        return saved;
    }

    // DELETE
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id) {
        System.out.println(">> [DELETE] Deleting user with ID: " + id);
        usersRepo.deleteById(id);
        System.out.println(">> [DELETE] Deleted user with ID: " + id);
    }
}

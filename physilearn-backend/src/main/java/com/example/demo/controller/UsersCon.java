package com.example.demo.controller;

import com.example.demo.model.Users;
import com.example.demo.repository.UsersRepo;
import com.example.demo.response.AuthResponse;
import com.example.demo.securityconfig.JwtProvider;
import com.example.demo.service.UserService;
import com.example.demo.service.UserServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class UsersCon {

    @Autowired
    private UsersRepo usersRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    //@Autowired
    //private UserDetailsService userService;

    @Autowired
    private UserServiceImplementation userService;

    // SIGNUP
    @PostMapping("/registration")
    public ResponseEntity<AuthResponse> registerUser(@RequestBody Users user) {
        Optional<Users> existingUser = usersRepo.findByEmail(user.getEmail());
        if (existingUser.isPresent()) {
            return new ResponseEntity<>(new AuthResponse(false, "Email is already in use", null), HttpStatus.BAD_REQUEST);
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        Users savedUser = usersRepo.save(user);

        Authentication authentication = new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword());
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = JwtProvider.generateToken(authentication);

        AuthResponse response = new AuthResponse(true, "Register Success", token);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // SIGNIN
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> loginUser(@RequestBody Users users) {
        String email = users.getEmail();
        String password = users.getPassword();

        Authentication authentication = authenticate(email, password);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = JwtProvider.generateToken(authentication);
        AuthResponse response = new AuthResponse(true, "Login Success", token);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // AUTHENTICATION HELPER
    private Authentication authenticate(String email, String password) {
        UserDetails userDetails = userService.loadUserByUsername(email);

        if (userDetails == null || !passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new BadCredentialsException("Invalid email or password");
        }

        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }
}

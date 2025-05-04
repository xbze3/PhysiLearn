package com.example.demo.service;

import com.example.demo.repository.UsersRepo;


import com.example.demo.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;


@Service
public class UserServiceImplementation implements UserDetailsService {

    @Autowired
    private UsersRepo usersRepo;
    
    public UserServiceImplementation(UsersRepo usersRepo) {
        this.usersRepo=usersRepo;
    }
    
    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user = usersRepo.findByEmail(username).orElse(null);
        System.out.println(user);
       
        if(user==null) {
            throw new UsernameNotFoundException("User not found with this email"+username);

        }

        
        System.out.println("Loaded user: " + user.getEmail() + ", Role: " + user.getRole());
        List<GrantedAuthority> authorities = new ArrayList<>();
        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPassword(),
                authorities);
    }
}
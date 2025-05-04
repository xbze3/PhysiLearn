package com.example.demo.service;


import com.example.demo.model.Users;
import org.springframework.security.core.userdetails.UserDetails;
import java.util.List;





public interface UserService {

     
     public List<Users> getAllUser()  ;
     
     public Users findUserProfileByJwt(String jwt);
     
     public Users findUserByEmail(String email) ;
     
     public Users findUserById(String userId) ;

     public List<Users> findAllUsers();

     public UserDetails loadUserByUsername(String username);

      
         
}
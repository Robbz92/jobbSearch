package com.example.backend.controllers;

import com.example.backend.entities.User;
import com.example.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public void registerUser(@RequestBody User user) {
        userService.registerUser(user);
    }
}

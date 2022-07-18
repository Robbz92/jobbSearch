package com.example.backend.services;

import com.example.backend.configs.MyUserDetailService;
import com.example.backend.entities.User;
import com.example.backend.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private MyUserDetailService myUserDetailService;

    public void registerUser(User user) {
        myUserDetailService.registerUser(user);
    }
}

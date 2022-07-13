package com.example.backend.configs;

import com.example.backend.entities.User;
import com.example.backend.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
public class MyUserDetailService implements UserDetailsService {

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    public BCryptPasswordEncoder getEncoder() {return encoder;}

    @Autowired
    private UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException{
        User user = userRepo.findByEmail(email);
        if(user == null){
            throw new UsernameNotFoundException("User not found by email:"+ email);
        }
        return toUserDetails(user);
    }
    /*
    tar emot uppgifter och enkrypterar lösenordet
    och sparar användaren i databasen
    annars returnerar den null
     */
    public User registerUser(User user){
        user.setPassword(encoder.encode(user.getPassword()));
        try{
            return userRepo.save(user);
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return null;

    }

    /*
        Kollar inloggsuppgifter om dem stämmer
        stämmer det så loggas vi in
        annars loggas vi inte in
    */
    private UserDetails toUserDetails(User user){
        return org.springframework.security.core.userdetails.User
                .withUsername(user.getEmail())
                .password(user.getPassword())
                .roles("USER").build();
    }
}

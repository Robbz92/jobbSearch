package com.example.backend.configs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private MyUserDetailService myUserDetailService;

    @Override
    protected void configure(HttpSecurity http) throws Exception{

        http
                .csrf().disable()
                .authorizeRequests()
                .antMatchers(HttpMethod.GET,"/", "/rest/**").permitAll()
                .antMatchers("/auth/**").authenticated()
                .antMatchers("/rest/**").permitAll()
                .and()
                .formLogin()
                .loginPage("/login");//tar emot inloggsuppgifter
    }
    /*
          Encoder för lösenord
      */

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception{
        auth
                .userDetailsService(myUserDetailService)
                .passwordEncoder(myUserDetailService.getEncoder());

    }

    /*
    denna används vid egen login sida för autentisering
     */
    @Bean("authenticationManager")
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

}

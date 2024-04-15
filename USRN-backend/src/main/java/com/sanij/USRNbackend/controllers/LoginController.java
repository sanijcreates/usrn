package com.sanij.USRNbackend.controllers;

import com.sanij.USRNbackend.models.Account;
import com.sanij.USRNbackend.services.AccountService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class LoginController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    public AccountService accountService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public ResponseEntity<String> authenticateUser(@RequestBody Account account) {


//        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(account.getEmail(), account.getPassword()));
//
//        SecurityContextHolder.getContext().setAuthentication(authentication);

        String email = account.getEmail();
        String password = account.getPassword();

        // Fetch the user account from the database
        Optional<Account> optionalAccount = accountService.findByEmail(email);

        // If the account is not found, return an error response
        if (optionalAccount.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid email or password");
        }

        // Get the account object
        Account acc = optionalAccount.get();

        // Verify the password using BCrypt
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        if (!passwordEncoder.matches(password, acc.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid email or password");
        }
        return new ResponseEntity<>(account.getEmail(), HttpStatus.OK);
    }
}

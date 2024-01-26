package com.sanij.USRNbackend.controllers;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.sanij.USRNbackend.models.Account;
import com.sanij.USRNbackend.models.Post;
import com.sanij.USRNbackend.services.AccountService;
import com.sanij.USRNbackend.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HomeController {

    @Autowired
    public PostService postService;

    @Autowired
    public AccountService accountService;

    @GetMapping("/")
    public List<Post> home(){
        List<Post> posts = postService.getAllPosts();

        return posts;
    }

    @GetMapping("/posts")
    public List<Post> getPosts() {
        return postService.getAllPosts();
    }

    @GetMapping("/posts/{id}")
    public ResponseEntity<Optional<Post>> getPost(@PathVariable("id") Long id) {
        Optional<Post> post = postService.findById(id);
        return ResponseEntity.ok(post);
    }

    @PostMapping("/posts/create")
    public ResponseEntity<Object> createPost(@RequestBody ObjectNode json) {

        System.out.println(json.get("email").toString());

        Optional<Account> acc = accountService.findByEmail(json.get("email").asText());
        if(acc.isPresent()) {
            System.out.println(json.get("email").asText() + "is present");
            Account account = acc.get();
            Post post = new Post();
            post.setTitle(json.get("title").asText());
            post.setBody(json.get("body").asText());
            post.setAccount(account);
            postService.save(post);
            return ResponseEntity.ok(post);
        } else {
            return ResponseEntity.status(404)
                    .body("Account not found");
        }
    }
}

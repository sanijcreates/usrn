package com.sanij.USRNbackend.services;

import com.sanij.USRNbackend.models.Post;
import com.sanij.USRNbackend.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;


    public Optional<Post> findById(Long id) {
        return postRepository.findById(id);
    }

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Post save(Post post) {
        if(post.getId() == null) {
            post.setCreatedAt(LocalDateTime.now());
        }

        return postRepository.save(post);
    }


}


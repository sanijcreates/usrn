package com.sanij.USRNbackend.services;

import com.fasterxml.jackson.databind.util.NativeImageUtil;
import com.sanij.USRNbackend.models.FileData;
import com.sanij.USRNbackend.models.Post;
import com.sanij.USRNbackend.repositories.FileDataRepository;
import com.sanij.USRNbackend.repositories.PostRepository;
import jakarta.servlet.ServletConfig;
import jakarta.servlet.ServletContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.*;
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

    @Autowired
    private FileDataRepository fileDataRepository;

    private final String FOLDER_PATH = System.getProperty("user.dir") + "/assets/";
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

    public String uploadImageToFileSystem(MultipartFile file) throws IOException {
        String filePath = FOLDER_PATH + file.getOriginalFilename();
        FileData fileData = fileDataRepository.save(FileData.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .filePath(filePath).build()
        );

        file.transferTo(new File(filePath));

        if(fileData != null) {
            return "file uploaded successfully: " + filePath;
        }

        return null;
    }

    public byte[] downloadImageFromFile(String fileName) throws IOException {
        Optional<FileData> fileData = fileDataRepository.findByName(fileName);
        String filePath = fileData.get().getFilePath();
        byte[] images = Files.readAllBytes(new File(filePath).toPath());
        return images;
    }
}


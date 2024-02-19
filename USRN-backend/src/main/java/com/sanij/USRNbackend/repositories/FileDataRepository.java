package com.sanij.USRNbackend.repositories;

import com.sanij.USRNbackend.models.FileData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FileDataRepository extends JpaRepository<FileData, Integer> {
    Optional<FileData> findByName(String fileName);

}

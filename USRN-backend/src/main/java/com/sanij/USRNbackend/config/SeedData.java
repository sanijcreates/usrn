package com.sanij.USRNbackend.config;

import com.sanij.USRNbackend.Role;
import com.sanij.USRNbackend.models.Account;
import com.sanij.USRNbackend.models.Authority;
import com.sanij.USRNbackend.models.Post;
import com.sanij.USRNbackend.repositories.AccountRepository;
import com.sanij.USRNbackend.repositories.AuthorityRepository;
import com.sanij.USRNbackend.services.AccountService;
import com.sanij.USRNbackend.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.util.HashSet;
import java.util.Set;

@Configuration
public class SeedData implements CommandLineRunner {

    @Autowired
    public PostService postService;
    @Autowired
    private AccountService accountService;

    @Autowired
    private AuthorityRepository authorityRepository;
    @Autowired
    private AccountRepository accountRepository;

    @Override
    public void run(String... args) throws Exception {
        if(postService.getAllPosts().size() == 0) {

            Authority user = new Authority();
            user.setName("ROLE_USER");
            authorityRepository.save(user);

            Authority admin = new Authority();
            admin.setName("ROLE_ADMIN");
            authorityRepository.save(admin);

            Account acc1 = new Account();
            acc1.setEmail("saniz@gmail.com");
            acc1.setFirstName("sanij");
            acc1.setLastName("shrestha");
            acc1.setPassword("user");

            Set<Authority> authorities1 = new HashSet<>();
            authorityRepository.findByName("ROLE_ADMIN").ifPresent(authorities1::add);
            acc1.setAuthorities(authorities1);

            Account acc2 = new Account();
            acc2.setEmail("stha@gmail.com");
            acc2.setFirstName("usuer");
            acc2.setLastName("shrestha");
            acc2.setPassword("user");

            Set<Authority> authorities2 = new HashSet<>();
            authorityRepository.findByName("ROLE_USER").ifPresent(authorities2::add);
            authorityRepository.findByName("ROLE_ADMIN").ifPresent(authorities2::add);
            acc2.setAuthorities(authorities2);

//            accountRepository.save(acc1);
//            accountRepository.save(acc2);

            accountService.save(acc1);
            accountService.save(acc2);

            Post post1 = new Post();
            post1.setTitle("post1");
            post1.setDescription("post1description");
            post1.setAccount(acc1);
            post1.setIsVerified(true);

            Post post2 = new Post();
            post2.setTitle("post2");
            post2.setDescription("post2description");
            post2.setAccount(acc2);
            post2.setIsVerified(false);

            postService.save(post1);
            postService.save(post2);
        }
    }
}

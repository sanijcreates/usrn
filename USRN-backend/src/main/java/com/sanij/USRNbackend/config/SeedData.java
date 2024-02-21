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
            post1.setTitle("How to describe your ECAs in 150 characters in Common App?");
            post1.setDescription("For selective colleges/universities, admission officers look beyond your essays, extracurriculars and test scores. The process--as is termed—holistic. As such, one of the main parts of your application, equally as important as other components, is the activities section. You probably know that you will have to list your stellar Extra curriculars activities (ECA) here. However, there are common pitfalls that many applicants fall into because the character limit for describing your ECA’s is barely 150 characters; admission officers barely have time to go through each and everyone’s ECA’s in detail when they have to go to thousands of applicants’ profiles. Hence, it is of utmost importance that you properly show your ECA’s concisely and succinctly, making every use of the 150-word character limit.\n" +
                    "So how do you do it?\n" +
                    "The key point is to avoid description, and instead focus on the depth of your involvement. This space is only meant to show what and how you’ve done your ECA’s. It is not for you to show the eloquence of your English. Therefore, whatever you write, do not include tangential or irrelevant details. For instance, if you want to show how you were a community organizer for a local philanthropic club, try to show what you did, and what impact it made in the community. You could mention the amount of donations you raised, or the relief items you distributed, or personal support you gave to people. Leave out irrelevant details like personal anecdotes, honors you received (you can mention it in the honors section, or the additional info section), mentors (if they’re not very important personalities), weather, settings et cetera. Your only objective should be to go into the complete depth of your involvement, relevant information about how you made that possible, and your involvement’s impact.\n" +
                    "The phrase, “Make every use of the 150-character” not only applies in the descriptive sense, but also applies grammatically. You do need to have perfect grammar here. Incomplete sentences that convey the same meaning, without the use of both subjects and verbs, are just fine! Think of it like taking notes in a class: you don’t copy verbatim whatever your teacher says, isn’t it? You probably copy only the key points briefly in incomplete sentences, such that it preserves the main idea of what is being taught. Similarly, writing in your ECA section need not be complete sentences, as long as it does its job of informing the admissions officer what you did. Write briefly, as if you were taking notes. Instead of writing “I played Guitar in my school programs”, write “played the guitar at school programs”. Both are completely understandable, however the second one is more succinct, allowing you to make full use of the rest of the space. Also, use an active voice: it not only implicitly conveys your proactiveness, but also saves some valuable space that using a passive voice takes up. You can connect two different incomplete points with a semicolon as well.\n" +
                    "Don’t be shy at using common symbols and abbreviations. But be aware of its limitations. You can use the abbreviation “org“ instead of organization or “CS” instead of Computer Science, but don’t make up things and write “mscl” instead of “musical”. No one will get that! Save space by using an ampersand (&) instead of writing “and” and use “@” rather than writing ‘at’. If there are other commonly understandable symbols like these, do use them rather than writing their names. Also, save space by writing numbers. For instance, writing “100” saves a lot more than writing “hundred”.\n" +
                    "Another tip, if you have already mentioned appropriate roles in the title of your ECA, don’t mention them again! As an example, if you have written “Content Creator, XYZ publishing” above the description of your ECA, it will be extremely redundant to then describe your role starting off with “Content creator of 50+ articles” and even more so if you say, “Content creator of 50+ articles at XYZ media”. Leave out the details that have already been mentioned earlier in the time commitment option as well.\n" +
                    "Last tip, only mention the specifics of your ECAs. If you want to go into more detail, there will be more space at the end in the “Additional Info” section. Let your ECAs section highlight only what you did, the level of your involvement, and impact it made.\n" +
                    "Here are some samples for you! :-)\n" +
                    "Volunteer, Nepal Red Cross society\n" +
                    "5 hrs/wk, 30 wks/yr\n" +
                    "DESCRIPTION: Led team (20 stds) on Covid vaccine drives (75+ ppl);distributed 10 PPEs to nurses; organized 1 monthly blood donation campaign (100+ members)\n" +
                    " \n" +
                    "Intern, Bhatbhateni Accounts department\n" +
                    "3 hrs/wk, 3 wks/yr\n" +
                    "DESCRIPTION: Managed a/c files of  supermarket; helped with a/c  proofreading, database mgmt, software optimization with team (15); held daily meetings about revenue turnover\n");

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

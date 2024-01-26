package com.sanij.USRNbackend.services;

import com.sanij.USRNbackend.models.Account;
import com.sanij.USRNbackend.repositories.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    public Account save(Account account) {
        return accountRepository.save(account);
    }

    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

    public Optional<Account> getAccountById(Long id) {
        return accountRepository.findById(id);
    }

    public Optional<Account> findByEmail(String mail) {
        return accountRepository.findOneByEmail(mail);
    }

//    public boolean findByEmail(String mail) {
//        if (accountRepository.findOneByEmail(mail).isPresent()) {
//            return true;
//        } else {
//            return false;
//        }
//    }
}

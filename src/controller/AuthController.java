package src.controller;


import src.model.User;
import src.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthController(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/login")
    public String login(@RequestBody Map<String, String> creds) {
        User user = userRepository.findByUsername(creds.get("username")).orElse(null);
        if (user != null && passwordEncoder.matches(creds.get("password"), user.getPassword())) {
            return "{\"token\": \"mock-jwt-token-for-" + user.getUsername() + "\"}";
        }
        return "{\"error\": \"Invalid credentials\"}";
    }
}


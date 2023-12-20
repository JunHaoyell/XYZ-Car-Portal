package com.educlaas.sociallogin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.educlaas.sociallogin.dao.AuthProvider;
import com.educlaas.sociallogin.dao.Users;
import com.educlaas.sociallogin.exception.BadRequestException;
import com.educlaas.sociallogin.payload.AfterRegister;
import com.educlaas.sociallogin.payload.Register;
import com.educlaas.sociallogin.repository.UsersRepository;

@RestController
@RequestMapping(value = "/kyn")
public class RegisterController {
	@Autowired
	private UsersRepository usersRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;                      ;
	
	//Register User for Local 
	@PostMapping(value="/register")
	public ResponseEntity<?> registerUser(@RequestBody Register register){
		//Checking duplicate email
		if(usersRepository.existsByEmail(register.getEmail())) {
			throw new BadRequestException("Duplicate Email");
		}
		
		//Create new register user
		Users users = new Users();
		users.setUserName(register.getUserName());
		users.setEmail(register.getEmail());
		users.setPassword(register.getPassword());
		users.setProvider(AuthProvider.local);
		
		//Encode Password
		users.setPassword(passwordEncoder.encode(users.getPassword()));
		
		//Save new user in the database
		Users newUser = usersRepository.save(users);
		
		java.net.URI location = ServletUriComponentsBuilder
				.fromCurrentContextPath().path("/user/me")
				.buildAndExpand(newUser.getUsersId()).toUri();
		
		//Return to RegisterResponse Payload
		return ResponseEntity.created(location)
				.body(new AfterRegister(true, "Successful Register"));
	}
	
}

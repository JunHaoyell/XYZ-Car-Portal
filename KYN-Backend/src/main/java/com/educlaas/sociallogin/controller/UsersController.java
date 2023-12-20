package com.educlaas.sociallogin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.educlaas.sociallogin.dao.Users;
import com.educlaas.sociallogin.exception.ResourceNotFoundException;
import com.educlaas.sociallogin.repository.UsersRepository;
import com.educlaas.sociallogin.service.UsersPrincipal;

@RestController
@RequestMapping(value = "/kyn")
public class UsersController {
	
	@Autowired
	private UsersRepository usersRepo;

	@GetMapping("/user/me") 
	public Users getUser(@CurrentUser UsersPrincipal usersPrincipal) {
	   return usersRepo.findById((usersPrincipal.getUsersId())) 
	                .orElseThrow(() -> new ResourceNotFoundException("Users", "userId", usersPrincipal.getUsersId()));
	}
}

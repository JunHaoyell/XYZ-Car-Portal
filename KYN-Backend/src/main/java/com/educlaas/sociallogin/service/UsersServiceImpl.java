package com.educlaas.sociallogin.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.educlaas.sociallogin.dao.Users;
import com.educlaas.sociallogin.exception.ResourceNotFoundException;
import com.educlaas.sociallogin.repository.UsersRepository;

@Service
@Transactional
public class UsersServiceImpl implements UserDetailsService{

	@Autowired
	private UsersRepository usersRepo;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Users users = usersRepo.findByEmail(email)
				.orElseThrow( () -> new UsernameNotFoundException("This email cannot be found" + email));
		
		return UsersPrincipal.createUser(users);
	}

	//It is used for JWT Authentication Filter
		public UserDetails loadUserById(long userId){
			Users users = usersRepo.findById(userId)
			.orElseThrow( () -> new ResourceNotFoundException("Users", "userId", userId));
			
			return UsersPrincipal.createUser(users);
		}
}

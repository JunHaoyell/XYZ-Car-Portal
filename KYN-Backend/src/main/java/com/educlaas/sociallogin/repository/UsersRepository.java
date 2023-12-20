package com.educlaas.sociallogin.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.educlaas.sociallogin.dao.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long>{
	Optional<Users> findByEmail(String email);
	Optional<Users> findByUserName (String userName);
	
	 //Check or Find existing mail - return true or false
    //For Register (duplicate mail)
    Boolean existsByEmail(String email);
}

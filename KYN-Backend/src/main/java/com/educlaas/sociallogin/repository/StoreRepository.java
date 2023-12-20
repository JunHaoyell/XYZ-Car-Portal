package com.educlaas.sociallogin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.educlaas.sociallogin.dao.*;
import java.util.Optional;

@Repository
public interface StoreRepository extends JpaRepository<Store, Long> {
	
    Store findByEmail(String email);
}

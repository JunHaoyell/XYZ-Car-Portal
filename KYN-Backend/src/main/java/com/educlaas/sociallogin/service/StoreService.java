package com.educlaas.sociallogin.service;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;
import com.educlaas.sociallogin.repository.*;
import com.educlaas.sociallogin.dao.*;

@Service
@Transactional
public class StoreService {
	
 

   
	@Autowired
	private StoreRepository s_repo;

	//Save or update Store
	public Store saveStore(Store store) {
		return s_repo.save(store);
		
	}
	
	//Get all stores
	public List<Store> getAllStores(){
		return s_repo.findAll();
	}
	
	//delete store by ID
	public void delete_store(long id) {
		s_repo.deleteById(id);
	}

	//Get the store data by ID
	public Store getStoreByID(long id) {
		return s_repo.getById(id);
	}

	public Store findStoreByEmail(String email) {
		// TODO Auto-generated method stub
		return s_repo.findByEmail(email);
	}


}

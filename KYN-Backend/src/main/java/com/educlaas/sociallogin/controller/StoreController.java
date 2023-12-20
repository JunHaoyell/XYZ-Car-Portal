package com.educlaas.sociallogin.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.educlaas.*;
import com.educlaas.sociallogin.dao.*;
import com.educlaas.sociallogin.exception.StoreNotFoundException;
import com.educlaas.sociallogin.service.StoreService;

import java.util.List;



@RestController
@RequestMapping(value = "/kyn")
public class StoreController {


	@Autowired
	public StoreService storeService;
	

	//To save & update the store
	@PostMapping("/stores")
	public Store saveStore(@RequestBody Store store) {	
		return storeService.saveStore(store);
	}
	
	//To View the stores
	@GetMapping("/stores")
	public List<Store> getallstores() {
		//Get all the stores
		List<Store> allStores=storeService.getAllStores();
		return allStores;
		
	}
	
	//To delete the store by id
	@DeleteMapping("/store/{id}")
	public String deleteStore(@PathVariable long id) {
		storeService.delete_store(id);
		return "Delete Store Succesfully";
	}
	
	

}

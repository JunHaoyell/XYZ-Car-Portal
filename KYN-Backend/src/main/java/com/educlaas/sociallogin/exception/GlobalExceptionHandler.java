package com.educlaas.sociallogin.exception;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(StoreNotFoundException.class)
	public String handleStoreNotFoundException(Model model) {
		System.out.println("Inside Store Not Found Handler Method");
		model.addAttribute("error_message","Exception is working ,Store Not Found- Try with another email");
		return "search_result";		
	}

}

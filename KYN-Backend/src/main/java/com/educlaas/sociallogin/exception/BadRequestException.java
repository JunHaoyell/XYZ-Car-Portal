package com.educlaas.sociallogin.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class BadRequestException extends RuntimeException{
	
	private static final long serialVersionUID = 1L;
	
	private String message;

	public BadRequestException() {
		super();
	}

	public BadRequestException(String message) {
		super();
		this.message = message;
	}

	public BadRequestException(String message, Throwable cause) {
		super(message, cause);
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
		
}

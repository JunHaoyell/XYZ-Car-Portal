package com.educlaas.sociallogin.exception;

import org.springframework.security.core.AuthenticationException;

public class OAuthAuthenticationException extends AuthenticationException{

	private static final long serialVersionUID = 1L;

	public OAuthAuthenticationException(String msg) {
		super(msg);
	}

}

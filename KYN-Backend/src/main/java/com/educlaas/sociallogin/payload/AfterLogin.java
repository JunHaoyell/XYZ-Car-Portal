package com.educlaas.sociallogin.payload;

public class AfterLogin {
	
	private String accessToken;
	private String tokenType = "Bearer Token";
	
	public String getAccessToken() {
		return accessToken;
	}
	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}
	public String getTokenType() {
		return tokenType;
	}
	public void setTokenType(String tokenType) {
		this.tokenType = tokenType;
	}
	
	public AfterLogin(String accessToken) {
		super();
		this.accessToken = accessToken;
	}

}

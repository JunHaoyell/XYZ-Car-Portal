package com.educlaas.sociallogin.configuration;

public class Auth {
	private String tokenSecret;
	private long tokenExpirationMsec;
	
	public String getTokenSecret() {
		return tokenSecret;
	}
	public void setTokenSecret(String tokenSecret) {
		this.tokenSecret = tokenSecret;
	}
	public long getTokenExpirationMsec() {
		return tokenExpirationMsec;
	}
	public void setTokenExpirationMsec(long tokenExpirationMsec) {
		this.tokenExpirationMsec = tokenExpirationMsec;
	}	
}

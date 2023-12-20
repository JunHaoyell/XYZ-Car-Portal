package com.educlaas.sociallogin.oauth2users;

import java.util.Map;

public abstract class OAuth2Users {
	protected Map<String, Object> attributes;

	public OAuth2Users(Map<String, Object> attributes) {
		super();
		this.attributes = attributes;
	}
	
	public abstract String getId();
	public abstract String getName();
	public abstract String getEmail();
	public abstract String getImageUrl();
}

package com.educlaas.sociallogin.jwtsecurity;

import java.util.Date;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.educlaas.sociallogin.configuration.AppProperties;
import com.educlaas.sociallogin.service.UsersPrincipal;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;

@Service
public class TokenProvider {
	private AppProperties appProperties;

    public TokenProvider(AppProperties appProperties) {
        this.appProperties = appProperties;
    }

    public String createToken(Authentication authentication) {
        UsersPrincipal userPrincipal = (UsersPrincipal) authentication.getPrincipal();

        //Define expire date for token key 
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + appProperties.getAuth().getTokenExpirationMsec());

        //Use Jwts.builder method
        //HS512 is Signature Algorithm to generate token, it requires a key with minimum size of 512
        return Jwts.builder()
                .setSubject(Long.toString(userPrincipal.getUsersId()))
                .setIssuedAt(new Date())
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, appProperties.getAuth().getTokenSecret())
                .compact();
    }

    //To parse Jwt String
    public int getUserIdFromToken(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(appProperties.getAuth().getTokenSecret())
                .parseClaimsJws(token)
                .getBody();

        return Integer.parseInt(claims.getSubject());
    }

	//Validate Token
	public boolean validateToken(String authToken) {
		try {
			Jwts.parser()
			.setSigningKey(appProperties.getAuth().getTokenSecret())
			.parseClaimsJws(authToken);
			return true;
		} catch (ExpiredJwtException e) {
			e.printStackTrace();
		} catch (UnsupportedJwtException e) {
			e.printStackTrace();
		} catch (MalformedJwtException e) {
			e.printStackTrace();
		} catch (SignatureException e) {
			e.printStackTrace();
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
		}
		return false;
	}
}

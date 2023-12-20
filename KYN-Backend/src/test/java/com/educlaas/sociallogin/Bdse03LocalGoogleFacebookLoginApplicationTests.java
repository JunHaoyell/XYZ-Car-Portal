package com.educlaas.sociallogin;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.awt.PageAttributes.MediaType;
import java.util.List;

import org.apache.catalina.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;import org.springframework.mock.web.MockRequestDispatcher;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.educlaas.sociallogin.dao.Store;
import com.educlaas.sociallogin.dao.Users;
import com.educlaas.sociallogin.payload.Login;
import com.educlaas.sociallogin.repository.StoreRepository;
import com.educlaas.sociallogin.repository.UsersRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

@SpringBootTest
@AutoConfigureMockMvc
class Bdse03LocalGoogleFacebookLoginApplicationTests {

	@Autowired
	private MockMvc mockMvc;
	StoreRepository s_repo;
	UsersRepository u_repo;

	@Test
	void contextLoads() {
	}
	

	
	@Test
	public void userLoginTest() throws Exception{
		Login logInRequest = new Login();
		logInRequest.setEmail("test@gmail.com");
		logInRequest.setPassword("test12345");
		
		mockMvc.perform(MockMvcRequestBuilders.post("/kyn/login")
				.contentType(org.springframework.http.MediaType.APPLICATION_JSON)
				.content(asJsonString(logInRequest)))
				.andExpect(MockMvcResultMatchers.status().isOk())
				.andExpect(MockMvcResultMatchers.jsonPath("$.accessToken").isString());
	
	}

	private String asJsonString(final Object obj) {
		try {
			return new ObjectMapper().writeValueAsString(obj);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	

	

}
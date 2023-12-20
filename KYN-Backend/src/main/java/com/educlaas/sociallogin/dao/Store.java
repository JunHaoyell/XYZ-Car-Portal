package com.educlaas.sociallogin.dao;

import javax.persistence.*;

@Entity
public class Store {
	
    @Id
    @Column(name="id")
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="phone_number")
    private String phoneNumber;

    @Column
    private String email;

    @Column
    private String address;
    
    @Column
    private String[] localities;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

	public Store(Long id, String name, String phoneNumber, String email, String address) {
		
		this.id = id;
		this.name = name;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.address = address;
	}

	public Store() {
		super();
	}

	public String[] getLocalities() {
		return localities;
	}

	public void setLocalities(String[] localities) {
		this.localities = localities;
	}

	
	
	
 

}

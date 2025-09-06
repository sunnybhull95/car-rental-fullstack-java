package com.example.car_rental.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.car_rental.dto.LoginResponse;
import com.example.car_rental.dto.LoginUserDto;
import com.example.car_rental.dto.RegisterUserDto;
import com.example.car_rental.entity.UsersDetailsEntity;
import com.example.car_rental.securityconfiguration.JwtUtils;
import com.example.car_rental.service.AuthenticationService;

@RestController
public class AuthenticateController {

	
	@Autowired
	private JwtUtils jwtService;
	
	@Autowired
	private AuthenticationService authenticationService;
	
	
	@PostMapping("/register")
	public ResponseEntity<UsersDetailsEntity> register(@RequestBody RegisterUserDto registerUserDto){
		
		UsersDetailsEntity registeredUser = authenticationService.signup(registerUserDto);
		
		
		
		return ResponseEntity.ok(registeredUser);
		
	}
	
	@PostMapping("/login")
	public ResponseEntity<LoginResponse> authenticate(@RequestBody LoginUserDto loginUserDto){
		
		UsersDetailsEntity authenticatedUser= authenticationService.authenticate(loginUserDto);
		
		String JwtToken = jwtService.generateToken(authenticatedUser);
		
		LoginResponse loginResponse = new LoginResponse();
		
		loginResponse.setToken(JwtToken);
		
		loginResponse.setExpiresIn(5);
		
		
		
		return ResponseEntity.ok(loginResponse);
	}


	
	
	
}

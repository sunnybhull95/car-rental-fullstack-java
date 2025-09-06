package com.example.car_rental.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.car_rental.dto.LoginUserDto;
import com.example.car_rental.dto.RegisterUserDto;
import com.example.car_rental.entity.UsersDetailsEntity;
import com.example.car_rental.repo.UserDetailsRepo;
import com.example.car_rental.service.AuthenticationService;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {
	
	@Autowired
	private UserDetailsRepo userRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private AuthenticationManager authenticationManager;

	@Override
	public UsersDetailsEntity signup(RegisterUserDto input) {
		
		UsersDetailsEntity user = new UsersDetailsEntity();
		
		user.setFullName(input.fullName());
		user.setPassword(passwordEncoder.encode(input.password()));
		user.setEmail(input.email());
		user.setRole("User");
		
		
		
		return userRepo.save(user);
	}

	@Override
	public UsersDetailsEntity authenticate(LoginUserDto input) {
		
		authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(
						
						input.email(),
						input.password()
						
						)
				);
		
		return userRepo.findByEmail(input.email()).orElseThrow();
	}

}

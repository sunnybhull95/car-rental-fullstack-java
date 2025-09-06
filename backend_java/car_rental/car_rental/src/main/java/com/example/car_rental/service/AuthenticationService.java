package com.example.car_rental.service;

import com.example.car_rental.dto.LoginUserDto;
import com.example.car_rental.dto.RegisterUserDto;
import com.example.car_rental.entity.UsersDetailsEntity;

public interface AuthenticationService {
	
	UsersDetailsEntity signup(RegisterUserDto input);
	UsersDetailsEntity authenticate(LoginUserDto input);

}

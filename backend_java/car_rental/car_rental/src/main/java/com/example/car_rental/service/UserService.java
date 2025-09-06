package com.example.car_rental.service;

import java.util.List;

import com.example.car_rental.entity.UsersDetailsEntity;

public interface UserService {

	List<UsersDetailsEntity> getAllUsers();

	String deleteUserById(int id);

}

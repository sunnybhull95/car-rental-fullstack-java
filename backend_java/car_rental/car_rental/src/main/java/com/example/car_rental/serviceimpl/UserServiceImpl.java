package com.example.car_rental.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.car_rental.entity.UsersDetailsEntity;
import com.example.car_rental.repo.UserDetailsRepo;
import com.example.car_rental.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserDetailsRepo repo;

	@Override
	public List<UsersDetailsEntity> getAllUsers() {
		
		return repo.findAll();
	}

	@Override
	public String deleteUserById(int id) {
		   repo.deleteById(id);
		return "User as been deleted ";
	}

}

package com.example.car_rental.controller;

import java.awt.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.car_rental.bean.CarBean;
import com.example.car_rental.entity.UsersDetailsEntity;
import com.example.car_rental.service.CarService;
import com.example.car_rental.service.UserService;

@RestController
@RequestMapping("/admin/cars")
public class AdminController {
	
	@Autowired
	CarService service;
	
	@Autowired
	UserService user;
	
	
	
	@PostMapping("/addCar")
	@PreAuthorize("hasRole('Admin')")
	public String addCar(@RequestBody CarBean car) {
		
		return service.addCar(car);
		
	}
	
	
	@DeleteMapping("/deletById/{id}")
	public String deletById(@PathVariable int id) {
		
		return service.deletById(id);
	}
	
	@PostMapping("/updateById/{id}")
	public String updateById(@PathVariable int id,@RequestBody CarBean car) {
		
		return service.updateById(id,car);
		
	}
	
	   @GetMapping("/getAllUsers")
	    public java.util.List<UsersDetailsEntity> getAllUsers() {
	        return user.getAllUsers();
	    }


@DeleteMapping("/userDeletById/{id}")
public String deleteUserById(@PathVariable int id) {
return user.deleteUserById(id);
    }
	
	

	
	
	
	
	

}

package com.example.car_rental.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.car_rental.entity.CarEntity;
import com.example.car_rental.service.CarService;
import com.example.car_rental.service.UserService;

@RestController
public class UserController {
	
	@Autowired
	CarService service;
	
	
	
	
	@GetMapping("/allCars")
	public List<CarEntity> allCars(){
		
		return service.allCars();
	}
	
	@GetMapping("/getCarById/{id}")
	public ResponseEntity<CarEntity> getCarById(@PathVariable int id){
		
		CarEntity cars = service.getCarById(id);
		
		return ResponseEntity.ok(cars);
		
	}
	
	

	
	
	@GetMapping("/getCarByMake/{make}")
	public ResponseEntity<List<CarEntity>> getCarByMake(@PathVariable String make){
		
		List<CarEntity> cars = service.getCarByMake(make);
		
		return ResponseEntity.ok(cars);
		
	}
	
	@GetMapping("/getCarByType/{cartype}")
	public ResponseEntity<List<CarEntity>> getCarByType(@PathVariable String cartype){
		
		List<CarEntity> cars = service.getCarByType(cartype);
		
		return ResponseEntity.ok(cars);
		
	}
	
	
	@GetMapping("/getCarByModel/{model}")
	public ResponseEntity<List<CarEntity>> getCarByModel(@PathVariable String model){
		
		List<CarEntity> cars = service.getCarByModel(model);
		
		return ResponseEntity.ok(cars);
		
	}
	
	
	

	
	

}

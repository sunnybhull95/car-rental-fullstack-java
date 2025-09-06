package com.example.car_rental.service;

import java.util.List;

import com.example.car_rental.bean.CarBean;
import com.example.car_rental.entity.CarEntity;

public interface CarService {

	String addCar(CarBean car);


	String deletById(int id);

	String updateById(int id, CarBean car);

	List<CarEntity> allCars();

	CarEntity getCarById(int id);

	List<CarEntity> getCarByMake(String make);


	List<CarEntity> getCarByType(String cartype);


	List<CarEntity> getCarByModel(String model);







	






}

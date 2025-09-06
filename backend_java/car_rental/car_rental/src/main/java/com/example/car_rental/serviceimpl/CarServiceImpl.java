package com.example.car_rental.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.car_rental.bean.CarBean;
import com.example.car_rental.entity.CarEntity;
import com.example.car_rental.repo.CarRepo;
import com.example.car_rental.service.CarService;

@Service
public class CarServiceImpl implements CarService {
	
	@Autowired
	CarRepo repo;

	@Override
	public String addCar(CarBean car) {
		
		CarEntity addCar = new CarEntity();
		
		addCar.setMake(car.getMake());
		addCar.setModel(car.getModel());
		addCar.setYear(car.getYear());
		addCar.setPrice(car.getPrice());
		addCar.setStatus(car.getStatus());
		addCar.setImageUrl(car.getImageUrl());
		addCar.setFeatures(car.getFeatures());
		addCar.setReviews(car.getReviews());
		addCar.setCartype(car.getCartype());
		addCar.setTotalpassengers(car.getTotalpassengers());
		addCar.setTotalluggage(car.getTotalluggage());
		addCar.setGeartype(car.getGeartype());
		addCar.setCardoors(car.getCardoors());
		addCar.setNotIncluded(car.getNotIncluded());
		addCar.setTerms(car.getTerms());
		addCar.setPricePerHour(car.getPricePerHour());
		
		repo.save(addCar);
		return "Car added";
	}


	@Override
	public String deletById(int id) {
		
		repo.findById(id).orElseThrow(()-> new UsernameNotFoundException("Car Not Found"));
		repo.deleteById(id);
		
		
		return "Car Deleted Successfully";
	}

	@Override
	public String updateById(int id, CarBean car) {
		
		CarEntity carEnt = repo.findById(id).orElseThrow(() -> new UsernameNotFoundException("Car Not Found."));
		
		carEnt.setMake(car.getMake());
		carEnt.setModel(car.getModel());
		carEnt.setYear(car.getYear());
		carEnt.setPrice(car.getPrice());
		carEnt.setStatus(car.getStatus());
		carEnt.setImageUrl(car.getImageUrl());
		carEnt.setFeatures(car.getFeatures());
		carEnt.setReviews(car.getReviews());
		carEnt.setCartype(car.getCartype());
		carEnt.setTotalpassengers(car.getTotalpassengers());
		carEnt.setTotalluggage(car.getTotalluggage());
		carEnt.setGeartype(car.getGeartype());
		carEnt.setCardoors(car.getCardoors());
		carEnt.setNotIncluded(car.getNotIncluded());
		carEnt.setTerms(car.getTerms());
		carEnt.setPricePerHour(car.getPricePerHour());
		
		
		
		repo.save(carEnt);
		
		return "Car Detail's Updated";
	}
	


	@Override
	public List<CarEntity> allCars() {
		
		return repo.findAll();
	}


	@Override
	public CarEntity getCarById(int id) {
		
		return repo.findById(id).orElseThrow(()-> new UsernameNotFoundException("This id " +id+ "is not available"));
	}
	



	@Override
	public List<CarEntity> getCarByMake(String make) {
		
		List<CarEntity> cars = repo.findByMakeIgnoreCase(make);
		
		if(cars.isEmpty()) {
			
			throw new UsernameNotFoundException("No car found with make "+make);
			
		}
		
		
		return cars;
	}


	@Override
	public List<CarEntity> getCarByType(String cartype) {
List<CarEntity> cars = repo.findByCartypeIgnoreCase(cartype);
		
		if(cars.isEmpty()) {
			
			throw new UsernameNotFoundException("No car found with make "+cartype);
			
		}
		
		
		return cars;
	}


	@Override
	public List<CarEntity> getCarByModel(String model) {
List<CarEntity> cars = repo.findBymodelIgnoreCase(model);
		
		if(cars.isEmpty()) {
			
			throw new UsernameNotFoundException("No car found with model "+model);
			
		}
		
		
		return cars;
	}


	





	



	



}

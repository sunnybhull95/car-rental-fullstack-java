package com.example.car_rental.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.car_rental.entity.CarEntity;

public interface CarRepo extends JpaRepository<CarEntity, Integer>{

	List<CarEntity> findByMakeIgnoreCase(String make);
	List<CarEntity> findByCartypeIgnoreCase(String cartype);
	List<CarEntity> findBymodelIgnoreCase(String model);
	

	

}

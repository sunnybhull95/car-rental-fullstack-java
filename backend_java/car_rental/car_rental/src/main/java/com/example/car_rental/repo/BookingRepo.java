package com.example.car_rental.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.car_rental.entity.BookingEntity;

public interface BookingRepo extends JpaRepository<BookingEntity, Integer> {
	
}

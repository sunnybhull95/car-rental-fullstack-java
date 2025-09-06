package com.example.car_rental.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.car_rental.bean.BookingBean;
import com.example.car_rental.entity.BookingEntity;
import com.example.car_rental.service.BookingService;

import jakarta.validation.Valid;

@RestController
public class BookingController {
	
	@Autowired
	BookingService service;
	
	
	@PostMapping("/addBooking")
	public ResponseEntity<BookingEntity> addBooking(@Valid @RequestBody BookingBean bean){
		
		BookingEntity booking = service.addBooking(bean);
		
		return new ResponseEntity<>(booking, HttpStatus.CREATED);
		
	}
	
	@DeleteMapping("/cancelBooking/{id}")
	public ResponseEntity<String> cancelBooking(@PathVariable Integer id){
		
		service.cancelBooking(id);
		
		return new ResponseEntity<>("Booking Cancel Successfully",HttpStatus.OK);
	}
	
	@GetMapping("/allBookings")
	public ResponseEntity<List<BookingEntity>> allBookings(){
		
		List<BookingEntity> bookings = service.allBookings();
		
		return new ResponseEntity<>(bookings,HttpStatus.OK);
		
	}
	
	
	
	
	

}

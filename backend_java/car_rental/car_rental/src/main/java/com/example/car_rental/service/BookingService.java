package com.example.car_rental.service;

import java.util.List;

import com.example.car_rental.bean.BookingBean;
import com.example.car_rental.entity.BookingEntity;

public interface BookingService {

	BookingEntity addBooking(BookingBean bean);

	void cancelBooking(Integer id);

	List<BookingEntity> allBookings();

}

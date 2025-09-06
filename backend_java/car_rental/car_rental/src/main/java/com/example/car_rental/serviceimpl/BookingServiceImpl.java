package com.example.car_rental.serviceimpl;

import java.time.Duration;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.car_rental.bean.BookingBean;
import com.example.car_rental.entity.BookingEntity;
import com.example.car_rental.entity.CarEntity;
import com.example.car_rental.entity.UsersDetailsEntity;
import com.example.car_rental.repo.BookingRepo;
import com.example.car_rental.repo.CarRepo;
import com.example.car_rental.repo.UserDetailsRepo;
import com.example.car_rental.service.BookingService;

@Service
public class BookingServiceImpl implements BookingService{

	
	@Autowired
	BookingRepo bookingRepo;
	
	@Autowired
	UserDetailsRepo userRepo;
	
	@Autowired
	CarRepo carRepo;
	
	
	@Override
	public BookingEntity addBooking(BookingBean bean) {
		
		
		
		BookingEntity booking = new BookingEntity()
;
		
		booking.setPickUpLocation(bean.getPickUpLocation());
		booking.setDropLocation(bean.getDropLocation());
		booking.setPickUpDateTime(bean.getPickUpDateTime());
		booking.setDropOffDateTime(bean.getDropOffDateTime());
		booking.setBillingName(bean.getBillingName());
		booking.setBillingEmail(bean.getBillingEmail());
		booking.setBillingPhone(bean.getBillingPhone());
		booking.setBillingAddress(bean.getBillingAddress());
		booking.setCity(bean.getCity());
		booking.setState(bean.getState());
		booking.setPincode(bean.getPincode());
		booking.setCountry(bean.getCountry());
		
		
		
		Long hours = Duration.between(bean.getPickUpDateTime(), bean.getDropOffDateTime()).toHours();		
		
		booking.setStatus("Confirmed");
		booking.setPaymentStatus("Unpaid");
		
		
		
		
		return bookingRepo.save(booking);
	}


	@Override
	public void cancelBooking(Integer id) {
			BookingEntity booking = bookingRepo.findById(id).orElseThrow(() -> new RuntimeException("Booking not find with id"+id));
			
			booking.setStatus("cancelled");
			
			bookingRepo.save(booking);
					
	}


	@Override
	public List<BookingEntity> allBookings() {

		return bookingRepo.findAll();
	}

}

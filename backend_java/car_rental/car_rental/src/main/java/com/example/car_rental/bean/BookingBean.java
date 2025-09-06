package com.example.car_rental.bean;

import java.time.LocalDateTime;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;


public class BookingBean {
	
	

	
	@NotBlank
	private String pickUpLocation;
	@NotBlank
	private String dropLocation;
	
	@NotNull(message = "Pickup date is required")
	private LocalDateTime pickUpDateTime;
	@NotNull(message = "Drop-off date required")
    private LocalDateTime dropOffDateTime;
	
    private double totalPrice;
	
	private String status;
	private String paymentStatus;
	
	@NotBlank(message = "Billing name is required")
	private String billingName;
	
	@Email(message ="Invalid email format")
	private String billingEmail;
	
	 @NotBlank(message = "Billing phone is required")
	 @Pattern(regexp = "^[0-9]{10}$", message = "Phone must be 10 digits")
	private String billingPhone;
	 
	 @NotBlank(message = "Billing address is required")
	private String billingAddress;
	 
	 @NotBlank(message = "City name is required")
	private String city;
	 
	 @NotBlank(message = "State name is required")
	private String state;
	 
	 public String getPincode() {
		return pincode;
	}
	 public void setPincode(String pincode) {
		 this.pincode = pincode;
	 }
	 @NotBlank(message = "Pincode is required")
	private String pincode;
	 
	 @NotBlank(message = "Country name is required")
	private String country;

	
	

	public String getBillingName() {
		return billingName;
	}
	public void setBillingName(String billingName) {
		this.billingName = billingName;
	}
	public String getBillingEmail() {
		return billingEmail;
	}
	public void setBillingEmail(String billingEmail) {
		this.billingEmail = billingEmail;
	}
	public String getBillingPhone() {
		return billingPhone;
	}
	public void setBillingPhone(String billingPhone) {
		this.billingPhone = billingPhone;
	}
	public String getBillingAddress() {
		return billingAddress;
	}
	public void setBillingAddress(String billingAddress) {
		this.billingAddress = billingAddress;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}

	

	
	public String getPickUpLocation() {
		return pickUpLocation;
	}
	public void setPickUpLocation(String pickUpLocation) {
		this.pickUpLocation = pickUpLocation;
	}
	public String getDropLocation() {
		return dropLocation;
	}
	public void setDropLocation(String dropLocation) {
		this.dropLocation = dropLocation;
	}
	public LocalDateTime getPickUpDateTime() {
		return pickUpDateTime;
	}
	public void setPickUpDateTime(LocalDateTime pickUpDateTime) {
		this.pickUpDateTime = pickUpDateTime;
	}
	public LocalDateTime getDropOffDateTime() {
		return dropOffDateTime;
	}
	public void setDropOffDateTime(LocalDateTime dropOffDateTime) {
		this.dropOffDateTime = dropOffDateTime;
	}
	public double getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getPaymentStatus() {
		return paymentStatus;
	}
	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}
	

}

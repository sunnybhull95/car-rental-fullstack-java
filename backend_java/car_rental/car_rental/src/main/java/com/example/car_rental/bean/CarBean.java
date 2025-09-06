package com.example.car_rental.bean;

import java.util.List;

import jakarta.persistence.Column;

public class CarBean {
	
	private String model;
	private String make;
	private Integer year;
	private double price;
	private String status;
	private String reviews;
	private String cartype;
	private String totalpassengers;
	private String totalluggage;
	private String geartype;
	private String cardoors;
	private double pricePerHour;

	private List<String> features;
	@Column(name = "image_url")
	

	
	private String imageUrl;
	private List<String> notIncluded;
	private List<String> terms;

	
	public List<String> getNotIncluded() {
		return notIncluded;
	}
	public void setNotIncluded(List<String> notIncluded) {
		this.notIncluded = notIncluded;
	}
	public List<String> getTerms() {
		return terms;
	}
	public void setTerms(List<String> terms) {
		this.terms = terms;
	}
	public String getTotalpassengers() {
		return totalpassengers;
	}
	public void setTotalpassengers(String totalpassengers) {
		this.totalpassengers = totalpassengers;
	}
	public String getTotalluggage() {
		return totalluggage;
	}
	public void setTotalluggage(String totalluggage) {
		this.totalluggage = totalluggage;
	}
	public String getGeartype() {
		return geartype;
	}
	public void setGeartype(String geartype) {
		this.geartype = geartype;
	}
	public String getCardoors() {
		return cardoors;
	}
	public void setCardoors(String cardoors) {
		this.cardoors = cardoors;
	}
	public String getCartype() {
		return cartype;
	}
	public void setCartype(String cartype) {
		this.cartype = cartype;
	}
	public String getReviews() {
		return reviews;
	}
	public void setReviews(String reviews) {
		this.reviews = reviews;
	}
	
	
	public List<String> getFeatures() {
		return features;
	}
	public void setFeatures(List<String> features) {
		this.features = features;
	}
	
	
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getMake() {
		return make;
	}
	public void setMake(String make) {
		this.make = make;
	}
	public Integer getYear() {
		return year;
	}
	public void setYear(Integer year) {
		this.year = year;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public double getPricePerHour() {
		return pricePerHour;
	}
	public void setPricePerHour(double pricePerHour) {
		this.pricePerHour = pricePerHour;
	}

}

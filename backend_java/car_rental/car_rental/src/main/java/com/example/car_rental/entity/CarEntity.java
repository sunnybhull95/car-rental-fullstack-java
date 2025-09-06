package com.example.car_rental.entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class CarEntity {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String model;
	private String make;
	private String cartype;
	private Integer year;
	private double price;
	private double pricePerHour;
	
	private String reviews;
	private String totalpassengers;
	private String totalluggage;
	private String geartype;
	private String cardoors;
	private String status;
	
	@ElementCollection
	@Lob	
	private List<String> terms;
	
	@ElementCollection
	private List<String> notIncluded;

	
	@ElementCollection
	private List<String> features;
	
	
	@Column(name = "image_url")
	private String imageUrl;

	
	public List<String> getFeatures() {
		return features;
	}
	public void setFeatures(List<String> features) {
		this.features = features;
	}
	
	public String getCartype() {
		return cartype;
	}
	public void setCartype(String cartype) {
		this.cartype = cartype;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
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
	public String getReviews() {
		return reviews;
	}
	public void setReviews(String reviews) {
		this.reviews = reviews;
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
	public double getPricePerHour() {
		return pricePerHour;
	}
	public void setPricePerHour(double pricePerHour) {
		this.pricePerHour = pricePerHour;
	}
}

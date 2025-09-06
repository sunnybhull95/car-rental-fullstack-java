package com.example.car_rental.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.car_rental.entity.UsersDetailsEntity;

public interface UserDetailsRepo extends JpaRepository<UsersDetailsEntity, Integer> {
	
	Optional<UsersDetailsEntity> findByEmail(String email);
}

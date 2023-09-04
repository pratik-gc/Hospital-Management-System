package com.app.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Patient;

public interface PatientRepository extends JpaRepository<Patient, Integer>{

	Optional<Patient> findByUserEmail(String email);
	
	Optional<Patient> findByUserUserId(Integer id);
	
}

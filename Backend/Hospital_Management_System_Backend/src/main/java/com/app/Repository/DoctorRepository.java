package com.app.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Integer>{

	Optional<Doctor> findByEmployeeUserUserId(Integer id);
}

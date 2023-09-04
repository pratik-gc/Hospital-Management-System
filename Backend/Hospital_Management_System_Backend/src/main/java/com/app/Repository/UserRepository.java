package com.app.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.User;


public interface UserRepository extends JpaRepository<User, Integer>{
	Optional<User> findByEmailAndPassword(String email,String password);
	Optional<User> findByEmail(String email);
	Optional<User> findByPassword(String password);
	
}

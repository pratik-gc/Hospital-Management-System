package com.app.service;

import com.app.dto.LoginRequestDto;
import com.app.dto.UserDto;
import com.app.dto.UserResponseDto;
import com.app.entities.User;

public interface UserService {

	User addUser(UserDto user);
	
	User getUserById(Integer id);
	
	UserResponseDto getUserByEmail(String email);
	
	UserDto getUserByEmailAndPassword(String email,String password);
	
	String updatePassword(LoginRequestDto dto);
	
	String updateStatus(Integer id,String status);
	
	UserResponseDto findUserById(Integer id);
}

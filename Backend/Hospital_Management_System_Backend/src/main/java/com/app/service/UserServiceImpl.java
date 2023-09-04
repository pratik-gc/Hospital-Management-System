package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.Repository.UserRepository;
import com.app.dto.LoginRequestDto;
import com.app.dto.UserDto;
import com.app.dto.UserResponseDto;
import com.app.entities.Status;
import com.app.entities.User;
import com.app.exception_handler.ResourceNotFoundException;
import static com.app.dto.UserResponseDto.createSingleUser;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository repo ;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private PasswordEncoder enc;
	
	
	@Override
	public User addUser(UserDto user) {
		// TODO Auto-generated method stub
		
		user.setPassword(enc.encode(user.getPassword()));
		return repo.save(mapper.map(user, User.class)) ;
	}

	@Override
	public User getUserById(Integer id) {
		// TODO Auto-generated method stub
		return repo.findById(id).orElseThrow(()-> new ResourceNotFoundException("User Not Found"));
	}

	@Override
	public UserDto getUserByEmailAndPassword(String email, String password) {
		// TODO Auto-generated method stub
		
		User u = repo.findByEmailAndPassword(email, password).orElseThrow(()-> new ResourceNotFoundException("User Not Found"));
		
		
		return mapper.map(u, UserDto.class);
	}

	@Override
	public String updatePassword(LoginRequestDto dto) {
		// TODO Auto-generated method stub
		
//		User u = repo.findById(id).orElseThrow(()-> new ResourceNotFoundException("User Not Found"));
		
		User u = repo.findByEmail(dto.getEmail()).orElseThrow(()-> new ResourceNotFoundException("user not found"));
		
		u.setPassword(enc.encode(dto.getPassword()));
		
		return "password changed successfully";
	}

	@Override
	public String updateStatus(Integer id, String status) {
		// TODO Auto-generated method stub
		
		Status status1 = Status.valueOf(status);
		
		User u = repo.findById(id).orElseThrow(()-> new ResourceNotFoundException("User Not Found"));
		
		u.setStatus(status1);
		
		return "Status updated Successfully";
	}

	@Override
	public UserResponseDto getUserByEmail(String email) {
		
		User u = repo.findByEmail(email).orElseThrow(()-> new ResourceNotFoundException("user not found"));
		
		return createSingleUser(u, 0);
	}

	@Override
	public UserResponseDto findUserById(Integer id) {
		
		User u = repo.findById(id).orElseThrow(()-> new ResourceNotFoundException("User Not Found"));
		
		return createSingleUser(u, 0);
	}
	
	

}

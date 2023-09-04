package com.app.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.Repository.DoctorRepository;
import com.app.Repository.EmployeeRepository;
import com.app.Repository.PatientRepository;
import com.app.Repository.UserRepository;
import com.app.dto.ApiResponse;
import com.app.dto.LoginRequestDto;
import com.app.entities.User;
import com.app.exception_handler.ResourceNotFoundException;
import com.app.service.DoctorService;
import com.app.service.EmployeeService;
import com.app.service.PatientService;
import com.app.service.UserService;

import lombok.NoArgsConstructor;
import static com.app.dto.UserResponseDto.createSingleUser;


@RestController
@RequestMapping("/users")
@NoArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	@Autowired
	private UserService service;
	
	@Autowired
	private UserRepository repo;
	
	@Autowired
	private EmployeeService empService;
	
	@Autowired
	private DoctorService docService;
	
	@Autowired
	private PatientService patientService;
	

	
//	@Autowired
//	private PasswordEncoder encoder;
	
	
	
	private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
	
	
	@PostMapping("/login")
	public ResponseEntity<?> getUserDetails(@RequestBody LoginRequestDto dto){
		
		Integer roleId;
		
		User u = repo.findByEmail(dto.getEmail()).orElseThrow(()->new ResourceNotFoundException("user not found"));
		
		//User u = service.getUserByEmailAndPassword(dto.getEmail(), dto.getPassword());
		if(encoder.matches(dto.getPassword(),u.getPassword())) {
			
			if((u.getRole().name().equals("ADMIN")) || (u.getRole().name().equals("RECEPTIONIST")) || (u.getRole().name().equals("ACCOUNTANT"))) {
				roleId = empService.findEmpIdByUserId(u.getUserId());
				
				return new ResponseEntity<>(createSingleUser(u, roleId), HttpStatus.OK);
				
			}
			else if(u.getRole().name().equals("PATIENT")) {
				roleId = patientService.findPatientIdByUserId(u.getUserId());
				return new ResponseEntity<>(createSingleUser(u, roleId), HttpStatus.OK);
			}
			else if(u.getRole().name().equals("DOCTOR")){
				roleId = docService.getDoctorIdByUserId(u.getUserId());
				return new ResponseEntity<>(createSingleUser(u, roleId), HttpStatus.OK);
			}
			else {
				throw new ResourceNotFoundException("role does not found");
			}
			
			
			
		}
		else {
			throw new ResourceNotFoundException("password incorrect");
		}
		
		
	}
	
	@PutMapping("/changepassword")
	public ResponseEntity<?> updateUserPassword(@RequestBody LoginRequestDto dto){
		return new ResponseEntity<>(new ApiResponse(service.updatePassword(dto)), HttpStatus.OK);
	}
	
	@PutMapping("/getUserByEmail")
	public ResponseEntity<?> updateUserByEmail(@RequestBody LoginRequestDto dto){
		return new ResponseEntity<>(service.getUserByEmail(dto.getEmail()), HttpStatus.OK);
	}
	
	@GetMapping("/getUser/{userId}")
	public ResponseEntity<?> findUserById(@PathVariable Integer userId){
		return new ResponseEntity<>(service.findUserById(userId), HttpStatus.OK);
	}
	
	
}

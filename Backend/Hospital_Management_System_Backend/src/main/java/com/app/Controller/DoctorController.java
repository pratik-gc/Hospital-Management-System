package com.app.Controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.DoctorRequestDto;
import com.app.service.DoctorService;

@RestController
@RequestMapping("/doctors")
@CrossOrigin(origins = "http://localhost:3000")
public class DoctorController {

	@Autowired
	private DoctorService service;
	
	
	@PostMapping
	public ResponseEntity<?> addNewDoctor(@RequestBody @Valid DoctorRequestDto dr){
		return new ResponseEntity<>(new ApiResponse(service.addDoctor(dr)),HttpStatus.CREATED);
	}
	
	@GetMapping
	public ResponseEntity<?> getAllDoctors(){
		return new ResponseEntity<>(service.getAllDoctors(), HttpStatus.OK);
	}
	
	@GetMapping("/{doctorId}")
		public ResponseEntity<?> getDoctorById(@PathVariable Integer doctorId){
			return new ResponseEntity<>(service.getDoctorById(doctorId), HttpStatus.OK);
		}
	
	@PutMapping("/{doctorId}")
	public ResponseEntity<?> updateDoctor(@PathVariable Integer doctorId,@RequestBody DoctorRequestDto dr){
		return new ResponseEntity<>(service.updateEmployee(doctorId, dr), HttpStatus.OK);
	}
	
	@DeleteMapping("/{doctorId}")
	public ResponseEntity<?> deleteDoctor(@PathVariable Integer doctorId){
		return new ResponseEntity<>(service.removeDoctor(doctorId), HttpStatus.OK);
	}
	
	@GetMapping("/patients/{doctorId}")
	public ResponseEntity<?> getAllPatients(@PathVariable Integer doctorId){
		return new ResponseEntity<>(service.getAllPatients(doctorId), HttpStatus.OK);
	}
}

	


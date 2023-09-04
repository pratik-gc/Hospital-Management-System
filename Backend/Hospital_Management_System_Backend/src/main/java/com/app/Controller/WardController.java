package com.app.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.WardRequestDto;
import com.app.service.WardService;

@RestController
@RequestMapping("/wards")
@CrossOrigin(origins = "http://localhost:3000")
public class WardController {

	@Autowired
	private WardService service;
	
	@PostMapping
	public ResponseEntity<?> addNewWard(@RequestBody WardRequestDto wr){
		return new ResponseEntity<>(new ApiResponse(service.addWard(wr)), HttpStatus.CREATED);
	}
	
	@GetMapping
	public ResponseEntity<?> getAllWards(){
		return new ResponseEntity<>(service.getAllWards(), HttpStatus.OK);
	}
	
	
	@GetMapping("/{wardId}")
	public ResponseEntity<?> getWardById(@PathVariable Integer wardId){
		return new ResponseEntity<>(service.getWardById(wardId), HttpStatus.OK);
	}
	
	@GetMapping("/patients/{wardId}")
	public ResponseEntity<?> getAllPatients(@PathVariable Integer wardId){
		return new ResponseEntity<>(service.getAllPatients(wardId), HttpStatus.OK);
	}
}

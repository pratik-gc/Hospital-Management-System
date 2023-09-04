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
import com.app.dto.PatientEditDto;
import com.app.dto.PatientRequestDto;
import com.app.service.PatientService;

@RestController
@RequestMapping("/patients")
@CrossOrigin(origins = "http://localhost:3000")
public class PatientController {

	@Autowired
	private PatientService service;
	
	@PostMapping
	public ResponseEntity<?> addNewPatient(@RequestBody @Valid PatientRequestDto pt){
		return new ResponseEntity<>(new ApiResponse(service.addPatient(pt)), HttpStatus.CREATED);
	}
	
	@GetMapping
	public ResponseEntity<?> getAllPatients(){
		return new ResponseEntity<>(service.getAllPatients(), HttpStatus.OK);
	}
	
	@GetMapping("/{patientId}")
	public ResponseEntity<?> getPatientById(@PathVariable Integer patientId){
		return new ResponseEntity<>(service.getPatientById(patientId), HttpStatus.OK);
	}
	
	@PutMapping("/{patientId}")
	public ResponseEntity<?> updatePatient(@PathVariable Integer patientId,@RequestBody PatientEditDto pt){
		return new ResponseEntity<>(new ApiResponse(service.updatePatient(patientId, pt)), HttpStatus.OK);
	}
	
	@DeleteMapping("/{patientId}")
	public ResponseEntity<?> deletePatient(@PathVariable Integer patientId){
		return new ResponseEntity<>(new ApiResponse(service.removePatient(patientId)), HttpStatus.OK);
	}
	
	@GetMapping("/doctors/{patientId}")
	public ResponseEntity<?> getAllDoctors(@PathVariable Integer patientId){
		return new ResponseEntity<>(service.getAllDoctors(patientId), HttpStatus.OK);
	}
	
	@PutMapping("/patient/{patientId}/doctor/{doctorId}")
	public ResponseEntity<?> assignDoctor(@PathVariable Integer patientId,@PathVariable Integer doctorId){
		return new ResponseEntity<>(new ApiResponse(service.assignDoctor(patientId, doctorId)), HttpStatus.OK);
	}
	
	@GetMapping("/inactive")
	public ResponseEntity<?> getAllDeletedPatients(){
		return new ResponseEntity<>(service.getAllDeletedPatients(), HttpStatus.OK);
	}
	
	@PutMapping("/reassigned/{patientId}")
	public ResponseEntity<?> reassignPatient(@PathVariable Integer patientId){
		return new ResponseEntity<>(new ApiResponse(service.reAssignPatient(patientId)), HttpStatus.OK);
	}
	
	
}

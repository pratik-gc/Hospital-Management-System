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
import com.app.dto.EmployeeEditDto;
import com.app.dto.EmployeeRequestDto;
import com.app.entities.Employee;
import com.app.service.EmployeeService;

import lombok.NoArgsConstructor;

@RestController
@RequestMapping("/employees")
@NoArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")

public class EmployeeController {

	@Autowired
	private EmployeeService service;
	
	
	@PostMapping
	public ResponseEntity<?> addEmployee(@RequestBody @Valid EmployeeRequestDto emp){
		Employee e = service.addNewEmployee(emp);
		return new ResponseEntity<>(new ApiResponse("Emplyoee with ID:"+e.getEmpId()+" added successfully"), HttpStatus.CREATED);
	}
	
	@GetMapping("/{empId}")
	public ResponseEntity<?> getEmployeeById(@PathVariable Integer empId){
		return new ResponseEntity<>(service.getEmployeeById(empId), HttpStatus.OK);
	}
	
	@GetMapping
	public ResponseEntity<?> getAllEmployeeDetails(){
		return new ResponseEntity<>(service.displayEmployees(), HttpStatus.OK);
	}
	
	@DeleteMapping("/{empId}")
	public ResponseEntity<?> deleteEmployee(@PathVariable Integer empId){
		return new ResponseEntity<>(new ApiResponse(service.removeEmployee(empId)), HttpStatus.OK);
	}
	
	@PutMapping("/{empId}")
	public ResponseEntity<?> updateEmployee(@PathVariable Integer empId,@RequestBody EmployeeEditDto emp){
		return new ResponseEntity<>(new ApiResponse(service.updateEmployee(empId, emp)), HttpStatus.OK);
	}
	
	@GetMapping("/inactive")
	public ResponseEntity<?> getAllDeletedEmployeeDetails(){
		return new ResponseEntity<>(service.displayDeletedEmployees(), HttpStatus.OK);
	}
	
	@PutMapping("/reassign/{empId}")
	public ResponseEntity<?> updateEmployee(@PathVariable Integer empId){
		return new ResponseEntity<>(new ApiResponse(service.reAssignEmployee(empId)), HttpStatus.OK);
	}
	
}

package com.app.service;

import java.util.List;

import com.app.dto.DoctorRequestDto;
import com.app.dto.DoctorResponseDto;
import com.app.dto.PatientResponseDto;



public interface DoctorService {

//	String addNewEmployee(EmployeeRequestDto emp);
//	
//	String removeEmployee(Integer empId);
//	
//	EmployeeResponseDto getEmployeeById(Integer empId);
//	
//	List<EmployeeResponseDto> displayEmployees();
//
//	String updateEmployee(Integer empId,EmployeeRequestDto emp);
	
	
	String addDoctor(DoctorRequestDto dr);
	
	String removeDoctor(Integer doctorId);
	
	DoctorResponseDto getDoctorById(Integer doctorId);
	
	List<DoctorResponseDto> getAllDoctors();
	
	String updateEmployee(Integer doctorId,DoctorRequestDto dr);
	
	List<PatientResponseDto> getAllPatients(Integer doctorId);
	
	Integer getDoctorIdByUserId(Integer userId);
	
}

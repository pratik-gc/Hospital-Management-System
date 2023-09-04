package com.app.service;

import java.util.List;

import com.app.dto.DoctorResponseDto;
import com.app.dto.PatientEditDto;
import com.app.dto.PatientRequestDto;
import com.app.dto.PatientResponseDto;
import com.app.entities.Patient;

public interface PatientService {

	String addPatient(PatientRequestDto pt);
	
	PatientResponseDto getPatientById(Integer patientId);
	
	PatientResponseDto getPatientByName(String name);
	
	List<PatientResponseDto> getAllPatients();
	
	String removePatient(Integer patientId);
	
	String reAssignPatient(Integer patientId);
	
	
	String updatePatient(Integer patientId,PatientEditDto pt);
	
	List<DoctorResponseDto> getAllDoctors(Integer patientId);
	
	String assignDoctor(Integer patientId,Integer doctorId);
	
	Integer findPatientIdByUserId(Integer userId);
	
	List<PatientResponseDto> getAllDeletedPatients();
	
	
}

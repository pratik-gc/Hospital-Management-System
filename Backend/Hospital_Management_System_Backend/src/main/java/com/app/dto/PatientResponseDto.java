package com.app.dto;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


import com.app.entities.BloodGroup;

import com.app.entities.Gender;
//import com.app.entities.Doctor;
import com.app.entities.Patient;
import com.app.entities.PaymentStatus;
import com.app.entities.Role;
import com.app.entities.Status;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PatientResponseDto {

	private Integer patientId;
	private String firstName;
	private String lastName;
	private String email;
	@JsonProperty(access = Access.WRITE_ONLY)
	private String password;
	@JsonProperty(access = Access.WRITE_ONLY)
	private String confirmPassword;
	private Role role;
	private LocalDate dob;
	private Gender gender;
	private double contactNo;
	private LocalDate dateOfAdmission;
	private BloodGroup bloodGroup;
	private String disease;
	private PaymentStatus paymentStatus;
	private String prescription;
//	private List<Doctor> doctors;
	private Integer wardId;
	
	private Status status;
	
	
	public static List<PatientResponseDto> createPatientList(List<Patient> pt){
		List<PatientResponseDto> list = new ArrayList<>();
		
		for(Patient p : pt) {
			PatientResponseDto pr = new PatientResponseDto();
			
			pr.setPatientId(p.getPatientId());
			pr.setFirstName(p.getUser().getFirstName());
			pr.setLastName(p.getUser().getLastName());
			pr.setEmail(p.getUser().getEmail());
			pr.setRole(p.getUser().getRole());
			pr.setDob(p.getUser().getDob());
			pr.setGender(p.getUser().getGender());
			pr.setContactNo(p.getUser().getContactNo());
			pr.setDateOfAdmission(p.getDateOfAdmission());
			pr.setBloodGroup(p.getBloodGroup());
			pr.setDisease(p.getDisease());
			pr.setPaymentStatus(p.getPaymentStatus());
			pr.setPrescription(p.getPrescription());
//			pr.setDoctors(p.getDoctors());
			pr.setWardId(p.getWard().getWardId());
			pr.setStatus(p.getUser().getStatus());
			
			if(pr.getStatus().name().equals("ACTIVE")) {
				list.add(pr);
			}
			

		}
		
		return list;
	}
	
	public static PatientResponseDto createSinglePatient(Patient p) {
		
		PatientResponseDto pr = new PatientResponseDto();
		
		pr.setPatientId(p.getPatientId());
		pr.setFirstName(p.getUser().getFirstName());
		pr.setLastName(p.getUser().getLastName());
		pr.setEmail(p.getUser().getEmail());
		pr.setRole(p.getUser().getRole());
		pr.setDob(p.getUser().getDob());
		pr.setGender(p.getUser().getGender());
		pr.setContactNo(p.getUser().getContactNo());
		pr.setDateOfAdmission(p.getDateOfAdmission());
		pr.setBloodGroup(p.getBloodGroup());
		pr.setDisease(p.getDisease());
		pr.setPaymentStatus(p.getPaymentStatus());
		pr.setPrescription(p.getPrescription());
//		pr.setDoctors(p.getDoctors());
		pr.setWardId(p.getWard().getWardId());
		pr.setStatus(p.getUser().getStatus());
		
//		if(pr.getStatus().name().equals("ACTIVE")) {
//			return pr;
//		}
//		else {
//			throw new ResourceNotFoundException("User is not active");
//		}
		
		return pr;
		
	}
	
	public static List<PatientResponseDto> createDeletedPatientList(List<Patient> pt){
		List<PatientResponseDto> list = new ArrayList<>();
		
		for(Patient p : pt) {
			PatientResponseDto pr = new PatientResponseDto();
			
			pr.setPatientId(p.getPatientId());
			pr.setFirstName(p.getUser().getFirstName());
			pr.setLastName(p.getUser().getLastName());
			pr.setEmail(p.getUser().getEmail());
			pr.setRole(p.getUser().getRole());
			pr.setDob(p.getUser().getDob());
			pr.setGender(p.getUser().getGender());
			pr.setContactNo(p.getUser().getContactNo());
			pr.setDateOfAdmission(p.getDateOfAdmission());
			pr.setBloodGroup(p.getBloodGroup());
			pr.setDisease(p.getDisease());
			pr.setPaymentStatus(p.getPaymentStatus());
			pr.setPrescription(p.getPrescription());
//			pr.setDoctors(p.getDoctors());
			pr.setWardId(p.getWard().getWardId());
			pr.setStatus(p.getUser().getStatus());
			
			if(pr.getStatus().name().equals("INACTIVE")) {
				list.add(pr);
			}
			

		}
		
		return list;
	}
	
	
	
}

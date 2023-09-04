package com.app.dto;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.app.entities.Doctor;
import com.app.entities.Gender;


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
public class DoctorResponseDto {

	private Integer doctorId;
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
	private LocalDate hiringDate;
	private double salary;
	private double charges;
	private Status status;
//	private List<Patient> patients;

	
	public static List<DoctorResponseDto> createDoctorsList(List<Doctor> dc){
		List<DoctorResponseDto> list = new ArrayList<>();
		
		for(Doctor d : dc) {
			DoctorResponseDto dr = new DoctorResponseDto();
			dr.setDoctorId(d.getDoctorId());
			dr.setFirstName(d.getEmployee().getUser().getFirstName());
			dr.setLastName(d.getEmployee().getUser().getLastName());
			dr.setEmail(d.getEmployee().getUser().getEmail());
			dr.setRole(d.getEmployee().getUser().getRole());
			dr.setDob(d.getEmployee().getUser().getDob());
			dr.setGender(d.getEmployee().getUser().getGender());
			dr.setContactNo(d.getEmployee().getUser().getContactNo());
			dr.setHiringDate(d.getEmployee().getHiringDate());
			dr.setSalary(d.getEmployee().getSalary());
			dr.setCharges(d.getCharges());
			dr.setStatus(d.getEmployee().getUser().getStatus());
//			dr.setPatients(d.getPatients());
			
//			if(dr.getStatus().name().equals("ACTIVE")) {
//				list.add(dr);
//			}
			
			list.add(dr);
			
		}
		return list;
	}
	
	public static DoctorResponseDto createSingleDoctor(Doctor d) {
		DoctorResponseDto dr = new DoctorResponseDto();
		
		dr.setDoctorId(d.getDoctorId());
		dr.setFirstName(d.getEmployee().getUser().getFirstName());
		dr.setLastName(d.getEmployee().getUser().getLastName());
		dr.setEmail(d.getEmployee().getUser().getEmail());
		dr.setRole(d.getEmployee().getUser().getRole());
		dr.setDob(d.getEmployee().getUser().getDob());
		dr.setGender(d.getEmployee().getUser().getGender());
		dr.setContactNo(d.getEmployee().getUser().getContactNo());
		dr.setHiringDate(d.getEmployee().getHiringDate());
		dr.setSalary(d.getEmployee().getSalary());
		dr.setCharges(d.getCharges());
		dr.setStatus(d.getEmployee().getUser().getStatus());
//		dr.setPatients(d.getPatients());
		
//		if(dr.getStatus().name().equals("ACTIVE")) {
//			return dr;
//		}
//		else {
//			throw new ResourceNotFoundException("User is not active");
//		}
		
		return dr;
		
	}
	
}

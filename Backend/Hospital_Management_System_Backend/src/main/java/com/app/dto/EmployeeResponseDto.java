package com.app.dto;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.app.entities.Employee;
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
public class EmployeeResponseDto {

	private Integer empId;
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
	private Status status;
	
	
	public static List<EmployeeResponseDto> createEmployeeList(List<Employee> emps){
		List<EmployeeResponseDto> list = new ArrayList<>();
		
		
		
		for(Employee e : emps) {
			EmployeeResponseDto er = new EmployeeResponseDto();
			er.setEmpId(e.getEmpId());
			er.setFirstName(e.getUser().getFirstName());
			er.setLastName(e.getUser().getLastName());
			er.setEmail(e.getUser().getEmail());
			er.setRole(e.getUser().getRole());
			er.setDob(e.getUser().getDob());
			er.setGender(e.getUser().getGender());
			er.setContactNo(e.getUser().getContactNo());
			er.setHiringDate(e.getHiringDate());
			er.setSalary(e.getSalary());
			er.setStatus(e.getUser().getStatus());
			
			if(er.getStatus().name().equals("ACTIVE")) {	
				list.add(er);
			}
			
		}
		return list;
	}
	
	public static EmployeeResponseDto createSingleEmployee(Employee e) {
		EmployeeResponseDto dto = new EmployeeResponseDto();
		
		dto.setEmpId(e.getEmpId());
		dto.setFirstName(e.getUser().getFirstName());
		dto.setLastName(e.getUser().getLastName());
		dto.setEmail(e.getUser().getEmail());
		dto.setRole(e.getUser().getRole());
		dto.setDob(e.getUser().getDob());
		dto.setGender(e.getUser().getGender());
		dto.setContactNo(e.getUser().getContactNo());
		dto.setHiringDate(e.getHiringDate());
		dto.setSalary(e.getSalary());
		dto.setStatus(e.getUser().getStatus());
		
//		if(dto.getStatus().name().equals("ACTIVE")) {
//			return dto;
//		}
//		else {
//			throw new ResourceNotFoundException("User is not active");
//		}
		
		return dto;
		
	}
	
	public static List<EmployeeResponseDto> createDeletedEmployeeList(List<Employee> emps){
		List<EmployeeResponseDto> list = new ArrayList<>();
		
		
		
		for(Employee e : emps) {
			EmployeeResponseDto er = new EmployeeResponseDto();
			er.setEmpId(e.getEmpId());
			er.setFirstName(e.getUser().getFirstName());
			er.setLastName(e.getUser().getLastName());
			er.setEmail(e.getUser().getEmail());
			er.setRole(e.getUser().getRole());
			er.setDob(e.getUser().getDob());
			er.setGender(e.getUser().getGender());
			er.setContactNo(e.getUser().getContactNo());
			er.setHiringDate(e.getHiringDate());
			er.setSalary(e.getSalary());
			er.setStatus(e.getUser().getStatus());
			
			if(er.getStatus().name().equals("INACTIVE")) {	
				list.add(er);
			}
			
		}
		return list;
	}
	
	
}

package com.app.dto;

import java.time.LocalDate;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.constraints.PastOrPresent;

import com.app.entities.BloodGroup;
import com.app.entities.Gender;
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
public class EmployeeEditDto {

	
	private String firstName;
	
	
	private String lastName;
	
	
	private String email;
	
	
	private Role role;
	
	private LocalDate dob;
	private Gender gender;
	
	private double contactNo;
	
	private LocalDate hiringDate;
	
	private double salary;
	
	private Status status;
}

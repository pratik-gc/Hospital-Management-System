package com.app.dto;

import java.time.LocalDate;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.constraints.PastOrPresent;

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
public class EmployeeRequestDto {

	@NotBlank(message = "first name should not be null")
	private String firstName;
	
	@NotBlank(message = "last name should not be null")
	private String lastName;
	
	@NotBlank(message = "email should not be null")
	@Email(message = "email not valid")
	private String email;
	
	@NotBlank(message = "password should not be null")
	@JsonProperty(access = Access.WRITE_ONLY)
	private String password;
	
	@NotBlank(message = "confirm password should not be null")
	@JsonProperty(access = Access.WRITE_ONLY)
	private String confirmPassword;
	
	private Role role;
	
	@Past
	private LocalDate dob;
	private Gender gender;
	
	@NotNull(message = "contact no should not be null")
	private double contactNo;
	
	@PastOrPresent
	private LocalDate hiringDate;
	
	@NotNull(message = "salary should not be null")
	private double salary;
	
	private Status status;
	
}

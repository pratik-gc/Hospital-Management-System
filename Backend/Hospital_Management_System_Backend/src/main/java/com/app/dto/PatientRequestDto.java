package com.app.dto;

import java.time.LocalDate;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Past;

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
public class PatientRequestDto {

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
	
	private double contactNo;
	private LocalDate dateOfAdmission;
	private BloodGroup bloodGroup;
	private String disease;
	private PaymentStatus paymentStatus;
	private String prescription;
	private Integer doctorId;
	private Integer wardId;
	
	private Status status;
}

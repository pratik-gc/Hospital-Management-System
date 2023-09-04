package com.app.dto;

import java.time.LocalDate;



import com.app.entities.BloodGroup;
import com.app.entities.Gender;
import com.app.entities.PaymentStatus;
import com.app.entities.Status;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PatientEditDto {

	
	private String firstName;
	
	
	private String lastName;
	
	
	private String email;
	
	private LocalDate dob;
	private Gender gender;
	private double contactNo;
	private LocalDate dateOfAdmission;
	private BloodGroup bloodGroup;
	private String disease;
	private PaymentStatus paymentStatus;
	private String prescription;
	private Integer wardId;
	private Status status;
}

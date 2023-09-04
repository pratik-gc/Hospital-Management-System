package com.app.entities;

import java.time.LocalDate;
import java.util.ArrayList;

import java.util.List;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;



@Entity
@Table(name = "patients")
@Getter
@Setter
@NoArgsConstructor

public class Patient {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "patient_id")
	private Integer patientId;
	
	private LocalDate dateOfAdmission;
	
	@Enumerated(EnumType.STRING)
	private BloodGroup bloodGroup;
	
	private String disease;
	
	@Enumerated(EnumType.STRING)
	private PaymentStatus paymentStatus;
	
	@Column(length = 400)
	private String prescription;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private User user;
	
	
	@ManyToMany(mappedBy = "patients",cascade = CascadeType.DETACH.MERGE.PERSIST)
	private List<Doctor> doctors = new ArrayList<>();
	
	
	@ManyToOne
	@JoinColumn(name = "ward_id")
	private Ward ward;


	public Patient(LocalDate dateOfAdmission, BloodGroup bloodGroup, String disease, PaymentStatus paymentStatus,
			String prescription) {
		super();
		this.dateOfAdmission = dateOfAdmission;
		this.bloodGroup = bloodGroup;
		this.disease = disease;
		this.paymentStatus = paymentStatus;
		this.prescription = prescription;
	}
	
	public void addDoctor(Doctor d) {
		doctors.add(d);
	}
	
	public void removeDoctor(Doctor d) {
		doctors.remove(d);
	}

	@Override
	public String toString() {
		return "Patient [patientId=" + patientId + ", dateOfAdmission=" + dateOfAdmission + ", bloodGroup=" + bloodGroup
				+ ", disease=" + disease + ", paymentStatus=" + paymentStatus + ", prescription=" + prescription
				+ ", user=" + user +  "]";
	}

	
	
	

	
	
	
}

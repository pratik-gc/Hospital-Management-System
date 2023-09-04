package com.app.entities;


import java.util.ArrayList;

import java.util.List;


import javax.persistence.CascadeType;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "doctors")
@Getter
@Setter
@NoArgsConstructor

public class Doctor {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer doctorId;
	
	
	private double charges;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "emp_id")
	private Employee employee;
	
	@ManyToMany(cascade = CascadeType.DETACH.MERGE.PERSIST)
	@JoinTable(
			name = "doctor_patients",
			joinColumns = @JoinColumn(name="doctor_id"),
			inverseJoinColumns = @JoinColumn(name="patient_id")
			)
	private List<Patient> patients = new ArrayList<>();
	
	
	
	public void addPatient(Patient p) {
		patients.add(p);
//		p.getDoctors().add(this);
	}
	
	public void removePatient(Patient p) {
		patients.remove(p);
//		p.getDoctors().remove(this);
	}

	public Doctor(double charges) {
		super();
		this.charges = charges;
	}

	@Override
	public String toString() {
		return "Doctor [doctorId=" + doctorId + ", charges=" + charges + ", employee=" + employee + "]";
	}
	
	
	
	
}

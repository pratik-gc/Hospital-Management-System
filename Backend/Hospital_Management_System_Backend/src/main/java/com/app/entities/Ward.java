package com.app.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.ToString.Exclude;

@Entity @Table(name = "wards")@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Ward {
	@Id@GeneratedValue(strategy =GenerationType.IDENTITY )
	private int wardId;
	
	@Enumerated(EnumType.STRING)
	@Column(unique = true)
	private WardType type;
	
	private double charges;
	 
	private double availability;
	private double maxCapacity;
	
	
	@OneToMany(mappedBy = "ward",cascade = CascadeType.ALL)
	private List<Patient> patients;
	
	public void addPatient(Patient p) {
		patients.add(p);
		p.setWard(this);
	}
	
	public void removePatient(Patient p) {
		patients.remove(p);
		p.setWard(null);
	}

	public Ward(WardType type, double charges, double availability, double maxCapacity) {
		super();
		this.type = type;
		this.charges = charges;
		this.availability = availability;
		this.maxCapacity = maxCapacity;
	}

	
	

}

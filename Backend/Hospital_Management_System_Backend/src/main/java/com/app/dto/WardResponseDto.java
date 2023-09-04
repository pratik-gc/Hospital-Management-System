package com.app.dto;

import java.util.ArrayList;
import java.util.List;

import com.app.entities.Patient;
import com.app.entities.Ward;
//import java.util.List;
//
//import com.app.entities.Patient;
import com.app.entities.WardType;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class WardResponseDto {

	private Integer wardId;
	private WardType type;
	private double charges;
	private double availability;
	private double maxCapacity;
//	private List<Patient> patients;
	
	
	public static List<WardResponseDto> createWardList(List<Ward> wl){
		
		List<WardResponseDto> list = new ArrayList<>();
		
		for(Ward w : wl) {
			
			WardResponseDto wr = new WardResponseDto();
			
			wr.setWardId(w.getWardId());
			wr.setType(w.getType());
			wr.setCharges(w.getCharges());
			wr.setAvailability(w.getAvailability());
			wr.setMaxCapacity(w.getMaxCapacity());
			
			list.add(wr);
		}
		
		return list;
	}
}

package com.app.dto;

import com.app.entities.WardType;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class WardRequestDto {

	private WardType type;
	private double charges;
	private double availability;
	private double maxCapacity;
}

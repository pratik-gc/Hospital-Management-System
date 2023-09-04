package com.app.service;

import java.util.List;

import com.app.dto.PatientResponseDto;
import com.app.dto.WardRequestDto;
import com.app.dto.WardResponseDto;
import com.app.entities.Ward;
import com.app.entities.WardType;

public interface WardService {

	String addWard(WardRequestDto wd);
	
	WardResponseDto getWardById(Integer wardId);
	
	List<WardResponseDto> getAllWards();
	
	String removeWard(Integer wardId);
	
	Ward getWardByType(WardType type);
	
	String updateWard(Integer wardId,WardRequestDto wd);
	
	List<PatientResponseDto> getAllPatients(Integer wardId);
}

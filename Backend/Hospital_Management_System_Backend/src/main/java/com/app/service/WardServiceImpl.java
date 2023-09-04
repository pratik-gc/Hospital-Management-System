package com.app.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.Repository.WardRepository;
import com.app.dto.PatientResponseDto;
import com.app.dto.WardRequestDto;
import com.app.dto.WardResponseDto;
import com.app.entities.Patient;
import com.app.entities.Ward;
import com.app.entities.WardType;
import com.app.exception_handler.ResourceNotFoundException;
import static com.app.dto.WardResponseDto.createWardList;

import static com.app.dto.PatientResponseDto.createPatientList;

@Service
@Transactional
public class WardServiceImpl implements WardService {

	
	@Autowired
	private WardRepository repo;
	
	@Autowired
	private ModelMapper mapper;
	
	
	@Override
	public String addWard(WardRequestDto wd) {
		// TODO Auto-generated method stub
		
		Ward w = repo.save(mapper.map(wd, Ward.class));
		
		
		return "Ward added successfully with Id:"+w.getWardId();
	}

	@Override
	public WardResponseDto getWardById(Integer wardId) {
		// TODO Auto-generated method stub
		
		Ward w = repo.findById(wardId).orElseThrow(()-> new ResourceNotFoundException("invalid ward id") );
		
		return mapper.map(w, WardResponseDto.class);
	}

	@Override
	public List<WardResponseDto> getAllWards() {
		// TODO Auto-generated method stub
		
		List<Ward> wl = repo.findAll();
		
		return createWardList(wl);
	}

	@Override
	public String removeWard(Integer wardId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String updateWard(Integer wardId, WardRequestDto wd) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Ward getWardByType(WardType type) {
		// TODO Auto-generated method stub
		
		Ward w = repo.findByType(type).orElseThrow(()-> new ResourceNotFoundException("Invalid ward type"));
		return w;
	}

	@Override
	public List<PatientResponseDto> getAllPatients(Integer wardId) {
		// TODO Auto-generated method stub
		
		Ward w = repo.findById(wardId).orElseThrow(()-> new ResourceNotFoundException("invalid ward id"));
		
		List<Patient> list = w.getPatients();
		
		return createPatientList(list);
	}

}

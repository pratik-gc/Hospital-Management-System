package com.app.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.Repository.DoctorRepository;
import com.app.dto.DoctorRequestDto;
import com.app.dto.DoctorResponseDto;
import com.app.dto.EmployeeRequestDto;
import com.app.dto.PatientResponseDto;
import com.app.entities.Doctor;
import com.app.entities.Employee;
import com.app.entities.Status;
import com.app.exception_handler.ResourceNotFoundException;
import static com.app.dto.DoctorResponseDto.*;
import static com.app.dto.PatientResponseDto.createPatientList;

@Service
@Transactional
public class DoctorServiceImpl implements DoctorService {
	
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private DoctorRepository repo;
	
	@Autowired
	private EmployeeService employeeService;
	

	
	
	
	
	
	
	

	@Override
	public String addDoctor(DoctorRequestDto dr) {
		// TODO Auto-generated method stub
		
		Employee e = employeeService.addNewEmployee(mapper.map(dr, EmployeeRequestDto.class));
		
		Doctor d = mapper.map(dr, Doctor.class);
		
		d.setEmployee(e);
		
		d=repo.save(d);
		
		
		return "Doctor Added with Doctor ID:"+d.getDoctorId();
	}

//	@Override
//	public String removeDoctor(Integer doctorId) {
//		// TODO Auto-generated method stub
//		
//		repo.deleteById(doctorId);
//		
//		return "Doctor deleted";
//	}
	
	@Override
	public String removeDoctor(Integer doctorId) {
		// TODO Auto-generated method stub
		
		Status status = Status.valueOf("INACTIVE");
		
		
		Doctor d = repo.findById(doctorId).orElseThrow(()-> new ResourceNotFoundException("doctor not found"));
		
		
		d.getEmployee().getUser().setStatus(status);
		
		
		return "Doctor deleted";
	}

	@Override
	public DoctorResponseDto getDoctorById(Integer doctorId) {
		// TODO Auto-generated method stub
		
		Doctor d = repo.findById(doctorId).orElseThrow(()-> new ResourceNotFoundException("invalid doctor id"));
		
		return createSingleDoctor(d);
	}

	@Override
	public List<DoctorResponseDto> getAllDoctors() {
		// TODO Auto-generated method stub
		
		List<Doctor> list = repo.findAll();
		
		return createDoctorsList(list);
	}

	@Override
	public String updateEmployee(Integer doctorId, DoctorRequestDto dr) {
		// TODO Auto-generated method stub
		
		Doctor d = repo.findById(doctorId).orElseThrow(()-> new ResourceNotFoundException("invalid doctor id"));
		
		
		d.getEmployee().getUser().setFirstName(dr.getFirstName());
		d.getEmployee().getUser().setLastName(dr.getLastName());
		d.getEmployee().getUser().setDob(dr.getDob());
		d.getEmployee().getUser().setGender(dr.getGender());
		d.getEmployee().getUser().setContactNo(dr.getContactNo());
		d.getEmployee().setHiringDate(dr.getHiringDate());
		d.getEmployee().setSalary(dr.getSalary());
		d.setCharges(dr.getCharges());
		d.getEmployee().getUser().setStatus(dr.getStatus());
		
		return "employee is updated";
	}

	@Override
	public List<PatientResponseDto> getAllPatients(Integer doctorId) {
		// TODO Auto-generated method stub
		
		Doctor d = repo.findById(doctorId).orElseThrow(()->new ResourceNotFoundException("invalid doctor id"));
		
		
		
		return createPatientList(d.getPatients());
	}

	@Override
	public Integer getDoctorIdByUserId(Integer userId) {
		
		Doctor d = repo.findByEmployeeUserUserId(userId).orElseThrow(()-> new ResourceNotFoundException("doctor not found"));
		
		return d.getDoctorId();
	}

}

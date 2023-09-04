package com.app.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.Repository.DoctorRepository;
import com.app.Repository.PatientRepository;
import com.app.Repository.WardRepository;
import com.app.dto.DoctorResponseDto;
import com.app.dto.PatientEditDto;
import com.app.dto.PatientRequestDto;
import com.app.dto.PatientResponseDto;
import com.app.dto.UserDto;
import com.app.entities.Doctor;
import com.app.entities.Patient;
import com.app.entities.Status;
import com.app.entities.User;
import com.app.entities.Ward;
import com.app.exception_handler.ResourceNotFoundException;
import static com.app.dto.PatientResponseDto.*;
import static com.app.dto.DoctorResponseDto.createDoctorsList;

@Service
@Transactional
public class PatientServiceImpl implements PatientService {

	
	@Autowired
	private PatientRepository repo;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private WardService wardService;
	
	@Autowired
	private DoctorService doctorService;
	
	@Autowired
	private DoctorRepository doctorRepo;
	
	@Autowired
	private WardRepository wardRepo;
	
	@Override
	public String addPatient(PatientRequestDto pt) {
		// TODO Auto-generated method stub
		
		User u = userService.addUser(mapper.map(pt, UserDto.class));
		
		Patient p = mapper.map(pt, Patient.class);
		
		Doctor d = doctorRepo.findById(pt.getDoctorId()).orElseThrow(()-> new ResourceNotFoundException("invalid doctor id"));
		
		Ward w = wardRepo.findById(pt.getWardId()).orElseThrow(()-> new ResourceNotFoundException("invalid doctor id"));
		
		p.setUser(u);
		
		p.setWard(w);
		
		p.addDoctor(d);
		
		p = repo.save(p);
		
		d.addPatient(p);
	
		w.addPatient(p);
		
		return "Patient added successfully with Id:"+p.getPatientId();
	}

	@Override
	public PatientResponseDto getPatientById(Integer patientId) {
		// TODO Auto-generated method stub
		
		Patient p = repo.findById(patientId).orElseThrow(()->new ResourceNotFoundException("invalid patient Id"));
		return createSinglePatient(p);
	}

	@Override
	public PatientResponseDto getPatientByName(String name) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<PatientResponseDto> getAllPatients() {
		// TODO Auto-generated method stub
		
		List<Patient> list = repo.findAll();
		
		return createPatientList(list);
	}

//	@Override
//	public String removePatient(Integer patientId) {
//		// TODO Auto-generated method stub
//		
//		Patient p = repo.findById(patientId).orElseThrow(()->new ResourceNotFoundException("invalid patient id"));
//		
//		Ward w = wardRepo.findById(p.getWard().getWardId()).orElseThrow(()->new ResourceNotFoundException("invalid ward id"));
//			
//		for(Doctor d : p.getDoctors()) {
//			d.removePatient(p);
//		}
//		
//		w.removePatient(p);
//		
//		repo.delete(p);
//		
//		return "Patient deleted having id:"+p.getPatientId();
//	}
	
	@Override
	public String removePatient(Integer patientId) {
		// TODO Auto-generated method stub
		
		Status status = Status.valueOf("INACTIVE");
		
		Patient p = repo.findById(patientId).orElseThrow(()->new ResourceNotFoundException("invalid patient id"));
		
		 p.getUser().setStatus(status);
		
		return "Patient deleted";
	}

	@Override
	public String updatePatient(Integer patientId, PatientEditDto pt) {
		// TODO Auto-generated method stub
		
		
		Patient p = repo.findById(patientId).orElseThrow(()->new ResourceNotFoundException("invalid patient id"));
		
		p.getUser().setFirstName(pt.getFirstName());
		p.getUser().setLastName(pt.getLastName());
		p.getUser().setDob(pt.getDob());
		p.getUser().setGender(pt.getGender());
		p.getUser().setContactNo(pt.getContactNo());
		p.setBloodGroup(pt.getBloodGroup());
		p.setDateOfAdmission(pt.getDateOfAdmission());
		p.setDisease(pt.getDisease());
		p.setPrescription(pt.getPrescription());
		p.setPaymentStatus(pt.getPaymentStatus());
		p.getUser().setStatus(pt.getStatus());
		p.setWard(wardRepo.findById(pt.getWardId()).orElseThrow(()->new ResourceNotFoundException("invalid ward id")));
	
		
		return "Details updated successfully";
	}

	@Override
	public List<DoctorResponseDto> getAllDoctors(Integer patientId) {
		// TODO Auto-generated method stub
		
		Patient p = repo.findById(patientId).orElseThrow(()->new ResourceNotFoundException("invalid patient id"));
		
		
		return createDoctorsList(p.getDoctors());
	}

	@Override
	public String assignDoctor(Integer patientId, Integer doctorId) {
		// TODO Auto-generated method stub
		
		Patient p = repo.findById(patientId).orElseThrow(()->new ResourceNotFoundException("invalid patient id"));
		
		Doctor d = doctorRepo.findById(doctorId).orElseThrow(()-> new ResourceNotFoundException("invalid doctor id"));
		
		p.addDoctor(d);
		
		d.addPatient(p);
		
		return "Doctor with DoctorID:"+d.getDoctorId()+" has been successfully assigned to Patient with patientId:"+p.getPatientId();
	}

	@Override
	public Integer findPatientIdByUserId(Integer userId) {
		
		Patient p = repo.findByUserUserId(userId).orElseThrow(()->new ResourceNotFoundException("patient not found"));
		
		return p.getPatientId();
	}

	@Override
	public List<PatientResponseDto> getAllDeletedPatients() {
		
		List<Patient> list = repo.findAll();
		
		return createDeletedPatientList(list);
	}

	@Override
	public String reAssignPatient(Integer patientId) {
		// TODO Auto-generated method stub
		
		Status status = Status.valueOf("ACTIVE");
		
		Patient p = repo.findById(patientId).orElseThrow(()->new ResourceNotFoundException("invalid patient id"));
		
		 p.getUser().setStatus(status);
		
		return "Patient Reassigned";
		
	}

}

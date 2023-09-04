package com.app.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.Repository.EmployeeRepository;
import com.app.dto.EmployeeEditDto;
import com.app.dto.EmployeeRequestDto;
import com.app.dto.EmployeeResponseDto;
import com.app.dto.UserDto;
import com.app.entities.Employee;
import com.app.entities.Status;
import com.app.entities.User;
import com.app.exception_handler.ResourceNotFoundException;
import static com.app.dto.EmployeeResponseDto.createEmployeeList;
import static com.app.dto.EmployeeResponseDto.createDeletedEmployeeList;
import static com.app.dto.EmployeeResponseDto.createSingleEmployee;
@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService {

	
	@Autowired
	private EmployeeRepository repo;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private UserService userService;
	
	
	
	
	
	@Override
	public Employee addNewEmployee(EmployeeRequestDto emp) {
		
		User u = userService.addUser(mapper.map(emp, UserDto.class));
		
		Employee e = mapper.map(emp, Employee.class);
		
		e.setUser(u);
		
		return repo.save(e);
		
		
	}

//	@Override
//	public String removeEmployee(Integer empId) {
//		// TODO Auto-generated method stub
//		
//		Employee e = repo.findById(empId).orElseThrow(()-> new ResourceNotFoundException("EmployeeNotFound"));
//		
//		repo.delete(e);
//		
//		return "employee with Id:"+e.getEmpId()+" is deleted";
//	}
	
	
	@Override
	public String removeEmployee(Integer empId) {
		// TODO Auto-generated method stub
		
		Status status = Status.valueOf("INACTIVE");
		
		Employee e = repo.findById(empId).orElseThrow(()-> new ResourceNotFoundException("EmployeeNotFound"));
		
		e.getUser().setStatus(status);
		
		return "employee with Id:"+e.getEmpId()+" is deleted";
	}

	@Override
	public EmployeeResponseDto getEmployeeById(Integer empId) {
		// TODO Auto-generated method stub
		
		Employee e = repo.findById(empId).orElseThrow(()-> new ResourceNotFoundException("employee not found"));
		
		
		return createSingleEmployee(e);
	}

	@Override
	public List<EmployeeResponseDto> displayEmployees() {
		// TODO Auto-generated method stub
		
		List<Employee> list = repo.findAll();
		
		return createEmployeeList(list);
	}
	
	
	
	
	
	

	@Override
	public String updateEmployee(Integer empId,EmployeeEditDto emp) {
		// TODO Auto-generated method stub
		
		Employee e = repo.findById(empId).orElseThrow(()-> new ResourceNotFoundException("employee not found"));
		
		e.setHiringDate(emp.getHiringDate());
		e.setSalary(emp.getSalary());
		e.getUser().setFirstName(emp.getFirstName());
		e.getUser().setLastName(emp.getLastName());
//		e.getUser().setEmail(emp.getEmail());
//		e.getUser().setPassword(emp.getPassword());
//		e.getUser().setConfirmPassword(emp.getConfirmPassword());
		e.getUser().setContactNo(emp.getContactNo());
		e.getUser().setDob(emp.getDob());
		e.getUser().setGender(emp.getGender());
//		e.getUser().setRole(emp.getRole());
		e.getUser().setStatus(emp.getStatus());
		
		return "employee with empId: "+ e.getEmpId()+" updated successfully" ;
		
	}

	@Override
	public Integer findEmpIdByUserId(Integer userId) {
		
		Employee e = repo.findByUserUserId(userId).orElseThrow(()-> new ResourceNotFoundException("employee not found"));
		
		
		
		return e.getEmpId();
	}

	@Override
	public List<EmployeeResponseDto> displayDeletedEmployees() {
		
		List<Employee> list = repo.findAll();
		
		return createDeletedEmployeeList(list);
	}

	@Override
	public String reAssignEmployee(Integer empId) {
		
		Status status = Status.valueOf("ACTIVE");
		
		Employee e = repo.findById(empId).orElseThrow(()-> new ResourceNotFoundException("EmployeeNotFound"));
		
		e.getUser().setStatus(status);
		
		return "employee is Reassigned";
		
	}

}

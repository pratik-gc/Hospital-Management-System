package com.app.service;

import java.util.List;

import com.app.dto.EmployeeEditDto;
import com.app.dto.EmployeeRequestDto;
import com.app.dto.EmployeeResponseDto;
import com.app.entities.Employee;



public interface EmployeeService {

	Employee addNewEmployee(EmployeeRequestDto emp);
	
	String removeEmployee(Integer empId);
	
	EmployeeResponseDto getEmployeeById(Integer empId);
	
	List<EmployeeResponseDto> displayEmployees();
	
	List<EmployeeResponseDto> displayDeletedEmployees();

	String updateEmployee(Integer empId,EmployeeEditDto emp);
	
	Integer findEmpIdByUserId(Integer userId);
	
	String reAssignEmployee(Integer empId);
}

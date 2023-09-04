package com.app.service;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class TestEmployeeService {

	@Autowired
	private EmployeeService empService;
	
	
	@Test
	void test() {
		
		assertNotEquals(null, empService.displayEmployees());
	}

}

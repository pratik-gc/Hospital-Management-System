package com.app.service;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class TestWardService {

	@Autowired
	private WardService wardService;
	
	@Test
	void test() {

			assertNotEquals(null, wardService.getAllWards());
			
			

	}

}

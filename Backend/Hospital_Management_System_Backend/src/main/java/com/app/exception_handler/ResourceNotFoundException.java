package com.app.exception_handler;

public class ResourceNotFoundException extends RuntimeException{

	private String msg;

	public ResourceNotFoundException(String msg) {
		super(msg);
		
	};
	
	
}

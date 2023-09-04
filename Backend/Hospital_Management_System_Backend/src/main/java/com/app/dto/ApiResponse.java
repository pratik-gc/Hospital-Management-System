package com.app.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
public class ApiResponse {

	private String msg;
	private LocalDateTime timestmp;
	public ApiResponse(String msg) {
		super();
		this.msg = msg;
		this.timestmp=LocalDateTime.now();
	}
	
	
}

package com.app.dto;

import java.time.LocalDate;

import com.app.entities.Gender;
import com.app.entities.Role;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class LoginRequestDto {

	private String email;
	private String password;
}

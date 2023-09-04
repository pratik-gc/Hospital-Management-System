package com.app.dto;

import java.time.LocalDate;

import com.app.entities.Employee;
import com.app.entities.Gender;
import com.app.entities.Role;
import com.app.entities.Status;
import com.app.entities.User;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserResponseDto {

	private Integer userId;
	private String firstName;
	private String lastName;
	private String email;
	@JsonProperty(access = Access.WRITE_ONLY)
	private String password;
	@JsonProperty(access = Access.WRITE_ONLY)
	private String confirmPassword;
	private Role role;
	private LocalDate dob;
	private Gender gender;
	private double contactNo;
	private Status status;
	private Integer roleId;
	
	
	
	public static UserResponseDto createSingleUser(User u,Integer roleId) {
		UserResponseDto dto = new UserResponseDto();
		
		dto.setUserId(u.getUserId());
		dto.setFirstName(u.getFirstName());
		dto.setLastName(u.getLastName());
		dto.setEmail(u.getEmail());
		dto.setRole(u.getRole());
		dto.setDob(u.getDob());
		dto.setContactNo(u.getContactNo());
		dto.setGender(u.getGender());
		dto.setStatus(u.getStatus());
		dto.setRoleId(roleId);
		
		return dto;
		
		
		
	}
}

package com.app.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Ward;
import com.app.entities.WardType;
import java.util.List;

public interface WardRepository extends JpaRepository<Ward, Integer>{

	Optional<Ward> findByType(WardType type);
}

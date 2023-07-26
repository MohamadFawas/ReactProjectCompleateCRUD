package com.crud.practiceCRUD.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.crud.practiceCRUD.entity.Library_management;

public interface BookRepository extends JpaRepository<Library_management , Long>{

	public boolean existsByIndexNumberIgnoreCase(String indexNumber);
	//public boolean exiexistsById(Long id);
}

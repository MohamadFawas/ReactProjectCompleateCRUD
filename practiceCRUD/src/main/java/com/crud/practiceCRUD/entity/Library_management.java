package com.crud.practiceCRUD.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Library_management {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String indexNumber;
	private String name;
	private String title;
	

}

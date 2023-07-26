package com.crud.practiceCRUD.requestdto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BookRequestDto {

	private Long id;
	private String indexNumber;
	private String name;
	private String title;
}

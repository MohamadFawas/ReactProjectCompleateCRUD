package com.crud.practiceCRUD.service;

import java.util.List;

import com.crud.practiceCRUD.requestdto.BookRequestDto;
import com.crud.practiceCRUD.responce.BookResponceDto;

public interface BookService {
	public void saveLibrary_management(BookRequestDto bookRequestDto ); 
	public List<BookResponceDto> getAllLibrary_management();
	
	public boolean existsIndexNumberIgnoreCase(String indexNumber);
	public boolean existByLibrary_management(Long id);
	
	public BookResponceDto getLibrary_managementById(Long id);
	
	//public boolean getLibrary_managementById(Long id);
	public void deleteLibrary_management(Long id);
}

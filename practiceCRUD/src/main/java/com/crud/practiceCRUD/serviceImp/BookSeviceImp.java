package com.crud.practiceCRUD.serviceImp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crud.practiceCRUD.entity.Library_management;
import com.crud.practiceCRUD.repository.BookRepository;
import com.crud.practiceCRUD.requestdto.BookRequestDto;
import com.crud.practiceCRUD.responce.BookResponceDto;
import com.crud.practiceCRUD.service.BookService;

import jakarta.transaction.Transactional;

@Service
public class BookSeviceImp implements BookService {
	@Autowired
	private BookRepository bookRepository;

	@Transactional
	public void saveLibrary_management(BookRequestDto bookRequestDto) {
		// TODO Auto-generated method stub
		Library_management library_management=new Library_management();
		BeanUtils.copyProperties(bookRequestDto, library_management);
		bookRepository.save(library_management);
		
	}

	@Transactional
	public List<BookResponceDto> getAllLibrary_management() {
		List<BookResponceDto> bookResponceDtos=new ArrayList<>();
		List<Library_management> library_managements=bookRepository.findAll();
		
		for(Library_management library_management:library_managements) {
			BookResponceDto bookResponceDto=new BookResponceDto();
			BeanUtils.copyProperties(library_management , bookResponceDto);
			bookResponceDtos.add(bookResponceDto);
		}
		return bookResponceDtos;
	}

	@Override
	public boolean existsIndexNumberIgnoreCase(String indexNumber) {
		if(bookRepository.existsByIndexNumberIgnoreCase(indexNumber)) {
		return true;
		}
		return false;
	}

	@Override
	public BookResponceDto getLibrary_managementById(Long id) {
		Library_management library_management=bookRepository.findById(id).get();
		BookResponceDto bookResponceDto=new BookResponceDto();
		BeanUtils.copyProperties(library_management, bookResponceDto);
		
		return bookResponceDto;
	}

	@Override
	public boolean existByLibrary_management(Long id) {
		if(bookRepository.existsById(id)) {
			return true;
		}
		return false;
	}

	@Override
	public void deleteLibrary_management(Long id) {
//		bookRepository.deleteById(id);
		bookRepository.deleteById(id);
		
	}
	



}

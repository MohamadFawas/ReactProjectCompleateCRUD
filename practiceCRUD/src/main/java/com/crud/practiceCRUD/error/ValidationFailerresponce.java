package com.crud.practiceCRUD.error;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;
import lombok.Getter;
import lombok.Setter;

@Component
@PropertySource("classpath:MessagesAndCodes.properties")
@Getter
@Setter
public class ValidationFailerresponce {

	@Value("${code.success.common}")
	private String commonSuccessCode;

	@Value("${code.failure.common}")
	private String failureCode;
	
	@Value("${code.validation.book.alreadyExists}")
	private String bookAlreadyExists;
	
	@Value("${code.validation.book.errorNotFound}")
	private String errorNotFoundIdCode;
	

	// Validation code for Designation

	@Value("${message.success.save.book}")
	private String saveBookSuccessMessage;

	@Value("${message.validation.book.alreadyExists}")
	private String validationBookAlreadyExists;
	
	
	@Value("${message.validation.book.getAllBookDetails}")
	private String getAllBookSuccessMessage;
	
	@Value("${message.validation.book.getByIdBookDetails}")
	private String getByIdBookSuccessMessage;
	
	@Value("${message.validation.book.errorNotFound}")
	private String errorNotFoundIdMessage;
	
	
	@Value("${message.validation.book.deleteSuccess}")
	private String deleteSuccessMessage;
}

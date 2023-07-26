package com.crud.practiceCRUD.common.responce;

import lombok.Getter;
import lombok.Setter;

import java.util.HashMap;
import java.util.Map;

@Getter
@Setter
public class ContentResponse<T> extends BaseResponse{
	private Map<String, T> result = new HashMap<>();
//
//	public ContentResponse(String statusCode, String message) {
//		super(statusCode, message);
//		// TODO Auto-generated constructor stub
//	}
	public ContentResponse(String key, T dto, String statusCode, String message) {
	    super( statusCode, message);
	    result.put(key, dto);
	  }

}

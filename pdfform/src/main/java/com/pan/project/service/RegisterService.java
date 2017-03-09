package com.pan.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pan.project.dao.RegisterDao;
import com.pan.project.model.Register;

@Service
public class RegisterService {

	
	@Autowired
	private RegisterDao registerdao;
	
	
	@Transactional
	public void addUser(Register register) {
		registerdao.addUser(register);
	}
}

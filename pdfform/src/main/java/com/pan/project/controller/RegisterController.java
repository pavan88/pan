package com.pan.project.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.pan.project.model.Register;
import com.pan.project.service.RegisterService;

@Controller
public class RegisterController {

	@Autowired
	private RegisterService registerService;
	
	@RequestMapping(value = "/")
	public ModelAndView mainPage() {
		return new ModelAndView("login");
	}

	@RequestMapping(method = RequestMethod.POST, value = "/index.pdf")
	public String getJSPData(Model model, HttpServletRequest request, @ModelAttribute("userForm") Register userForm) {
		registerService.addUser(userForm);
		System.out.println("Register Data::" + userForm.toString());
		model.addAttribute("userForm", userForm);
		return "index";

	}
	
	@RequestMapping(value = "success")
	public ModelAndView onSuccess() {
		return new ModelAndView("success");
	}
	
	@RequestMapping(value = "register")
	public ModelAndView startRegistering() {
		return new ModelAndView("register");
	}
	
	@RequestMapping(value = "listApplications")
	public ModelAndView listApplications() {
		return new ModelAndView("listApplications");
	}
	
}

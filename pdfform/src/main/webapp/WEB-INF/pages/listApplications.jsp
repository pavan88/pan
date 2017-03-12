<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Applications List.....</title>
</head>

<body>

	Please Enter the Application Number:
	<form action="listapplications" method="post">

		<input type="text" name="search" id="search" /> 
		
		<input type="submit"
			value="submit">
	</form>
</body>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

</head>
<body>

	<h4>Login Page</h4>

	<form:form action="success" method="post" modelAttribute="loginform">

		<div>
			<label>Username:</label> <input type="text" id="username"
				name="username">
		</div>


		<div>
			<label>Password:</label> <input type="text" id="password"
				name="password">
		</div>

		<div>
			<input type="submit" value="Login">
		</div>

	</form:form>

</body>
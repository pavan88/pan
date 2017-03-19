<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="description"
	content="eMudhra specializes in providing new PAN card application online, pan card form online, pan card application form online, apply pan card online form." />
<meta name="keywords"
	content="eMudhra online pan card application, pan card form, pan card application online, pan card new form, apply form for online pan card." />
<title>New PAN Card Application Form Online, PAN Card Form</title>
<link href="https://www.applypanonline.com/images/favicon.png"
	type="image/png" rel="icon">
<link type="text/css" rel="stylesheet" href="/resources/bootstrap.css">
<link type="text/css" rel="stylesheet" href="/resources/style.css">
<link type="text/css" rel="stylesheet"
	href="/resources/font-awesome.css">
<!--[if lt IE 9]>	
    <link rel="stylesheet" href="css/ielt9.css">
    <script src="js/html5shiv.js"></script>
    <script src="js/respond.min.js"></script>		
<![endif]-->
<script src="/resources/analytics.js"></script>
<script src="/resources/jquery.min.js"></script>
<script src="/resources/bootstrap.js"></script>

<script language="javascript" src="/resources/javascript.js"></script>
<script language="javascript" src="/resources/getdistrictjs.php"></script>
<script language="javascript" src="/resources/getdistrictjs1.php"></script>
<script language="javascript" src="/resources/getdistrictjs2.php"></script>
<script language="javascript" src="/resources/apply-new-pan-card.js"></script>
</head>
<body>
	<form:form modelAttribute="userForm" action="index.pdf" method="post">
		<div class="row">
			<div class="col-lg-12">

				<div class="form-content">
					<div class="form-title">
						<span class="tab-number">1</span>PERSONAL INFORMATION
					</div>

					<div class="form-row col-md-10">
						<div class="form-group">
							<div class="col-md-3">
								<label class="control-label">Applicant Name <span
									class="mandatory">*</span></label><span class="tooltip in"
									data-toggle="tooltip"
									title="Please do not use abbreviations in the First and the Last name/Surname"><span>i</span></span>
							</div>
							<div class="col-md-3">
								<input name="firstnameupp" placeholder="First Name" type="text"
									id="firstnameupp" class="form-control"
									onchange="upperMe('firstnameupp')" autocomplete="off"
									onkeypress="return lettersOnly(event)"
									onblur="initialvalidation('firstnameupp');" maxlength="25"
									value="FIRSTNAME" />
							</div>
							<div class="col-md-3">
								<input name="lastnameupp" placeholder="Last Name" type="text"
									id="lastnameupp" class="form-control"
									onchange="upperMe('lastnameupp')" autocomplete="off"
									onkeypress="return lettersOnly(event)"
									onblur="initialvalidation('lastnameupp');" maxlength="25"
									value="LASTNAME" />
							</div>
							<div class="col-md-3">
								<input name="middlenameupp" placeholder="Middle Name"
									type="text" id="middlenameupp" class="form-control"
									onchange="upperMe('middlenameupp')" autocomplete="off"
									onkeypress="return lettersOnly(event)"
									onblur="initialvalidation('middlenameupp');" maxlength="25"
									value="M" />
							</div>
						</div>
						<div class="form-group">
							<div class="col-md-offset-3 notecss">(Name should be
								exactly as per the ID proof. ID proof should have expansion of
								the initials)</div>
						</div>
					</div>
					
					 <div class="form-row col-md-10">
                        <div class="form-group">
                            <div class="col-md-3"><label class="control-label">Gender <span class="mandatory">*</span></label></div>
                            <div class="col-md-3 check-box">
                              <input type="radio" name="gender" value="male" id="gender">
                              <label for="gender1">Male</label>
                              <input type="radio" name="gender" value="female" id="gender">
                              <label for="gender2">Female</label>
                            </div>
                            <div class="col-md-2"><label class="control-label">Marital Status <span class="mandatory">*</span></label></div>
                            <div class="col-md-4 check-box">
                              <input type="radio" name="maritalstatus" value="single" id="maritalstatus">
                              <label for="maritalstatus">Single</label>
                              <input type="radio" name="maritalstatus" value="married" id="maritalstatus">
                              <label for="maritalstatus">Married</label>
                        	</div>
                        </div>
                    </div>

					<div class="form-row col-md-10">
						<div class="form-group">
							
						</div>
					</div>
					<div class="form-row col-md-10">
						<div class="form-group">
							<div class="col-md-3">
								<label class="control-label">Name on the PAN Card <span
									class="mandatory">*</span></label><span class="tooltip in"
									title="Full/Abbreviated name to be printed on the PAN card"><span>i</span></span>
							</div>
							<div class="col-md-6">
								<input name="print_firstname" id="print_firstname"
									placeholder="First Name" type="text" class="form-control" value="PAN-FNAME"
									onchange="upperMe('print_firstname')"
									onblur="initialvalidation('print_firstname');"
									autocomplete="off" onkeypress="return lettersOnly(event)"
									maxlength="50" />
							</div>
							<div class="col-md-3">
								<input name="print_lastname" id="print_lastname" value="PAN-LNAME"
									placeholder="Last Name" type="text" class="form-control"
									onchange="upperMe('print_lastname')" autocomplete="off"
									readonly disabled="disabled"
									onkeypress="return lettersOnly(event)" />
							</div>
						</div>
						<div class="form-group">
							<div class="col-md-offset-3 notecss">(Name on the PAN Card
								should be based on the name of the applicant)</div>
						</div>
					</div>
					<div class="form-row col-md-10">
						<div class="form-group">
							<div class="col-md-3">
								<label for="chk" class="control-label">Any Other Name</label> <span
									class="tooltip in"
									title="Please check the box if you have been known by any other name and providing details of the other name is mandatory. Title should be similar to the one provided in applicant name"><span>i</span></span>
								<input type="checkbox" name="chk" id="chk" value="1"
									onclick="enableothernamenamediv()" style="margin-left: 20px;" />
							</div>
							<div class="col-md-3">
								<input name="First other name" type="text" id="firstnameothr"
									class="form-control" onchange="upperMe('firstnameothr')"
									style="background-color: #E9E9E9" disabled="disabled"
									autocomplete="off" onkeypress="return lettersOnly(event)" value = "OFirstName"
									onblur="initialvalidation('firstnameothr');" maxlength="25" />
							</div>
							<div class="col-md-3">
								<input name="Middle other name" type="text" id="middlenameothr"
									class="form-control" onchange="upperMe('middlenameothr')"
									style="background-color: #E9E9E9" disabled="disabled"
									autocomplete="off" onkeypress="return lettersOnly(event)" value = "OMiddleName"
									onblur="initialvalidation('middlenameothr');" maxlength="25" />
							</div>
							<div class="col-md-3">
								<input name="Last other name" type="text" id="lastnameothr"
									class="form-control" onchange="upperMe('lastnameothr')"
									style="background-color: #E9E9E9" disabled="disabled"
									autocomplete="off" onkeypress="return lettersOnly(event)" value = "OLastName"
									onblur="initialvalidation('lastnameothr');" maxlength="25" />
							</div>
						</div>
					</div>
					<div class="form-row col-md-10">
						<div class="form-group">
							<div class="col-md-3">
								<label class="control-label">Father's Name <span
									class="mandatory">*</span></label><span class="tooltip in"
									title="Should not be prefixed with titles such as Shri, Smt, Kumari, Dr., Major, M/s etc and married women applicants should give only their Fatherâs name and not Husbandâs name"><span>i</span></span>
							</div>
							<div class="col-md-3">
								<input name="father_fname" id="father_fname" value="FatherFNAME"
									placeholder="First Name" type="text" class="form-control"
									onchange="upperMe('father_fname')" autocomplete="off"
									onkeypress="return lettersOnly(event)"
									onblur="initialvalidation('father_fname');" maxlength="25" />
							</div>
							<div class="col-md-3">
								<input name="father_lname" id="father_lname" value="FatherLNAME"
									placeholder="Last Name" type="text" class="form-control"
									onchange="upperMe('father_lname')" autocomplete="off"
									onkeypress="return lettersOnly(event)"
									onblur="initialvalidation('father_lname');" maxlength="25" />
							</div>
							<div class="col-md-3">
								<input name="father_mname" id="father_mname" value="FatherMNAME"
									placeholder="Middle Name" type="text" class="form-control"
									onchange="upperMe('father_mname')" autocomplete="off"
									onkeypress="return lettersOnly(event)"
									onblur="initialvalidation('father_mname');" maxlength="25" />
							</div>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-lg-4">
				<div class="form-content">
					<div class="form-title">
						<span class="tab-number">2</span>CONTACT DETAILS
					</div>
					<table border="0" cellspacing="0" cellpadding="0" width="100%">
						<tbody>
							<tr>
								<td width="40%"><label class="control-label">Mobile
										<span class="mandatory">*</span>
								</label><span class="tooltip in" title=""
									data-original-title="Application status updates are sent using the SMS facility on the mobile numbers mentioned in the application form. (applicable for Indian mobile numbers)."><span>i</span></span></td>
								<td width="60%">
									<div class="mobile-control">
										<input name="" type="text" id="" class="numeric form-control"
											maxlength="7" value="91"
											style="background-color: #E9E9E9; width: 25%;"
											disabled="disabled" autocomplete="off"> <input
											type="text" name="mobile" id="mobile"
											class="form-control" maxlength="10" placeholder="Mobile No"
											autocomplete="off" onkeypress="return isNumber(event)" value="9986339732">
									</div>
								</td>
							</tr>
							<tr>
								<td><label class="control-label">Email ID <span
										class="mandatory">*</span></label><span class="tooltip in" title=""
									data-original-title="Valid e-mail id to be provided so that applicant can be contacted in case of any discrepancy in the application and/or for receiving PAN through e-mail."><span>i</span></span></td>
								<td><input type="text" name="email" id="email"
									placeholder="Email ID" class="form-control"
									style="text-transform: uppercase" autocomplete="off"
									maxlength="37" value="test@gmall.com"></td>
							</tr>
							<tr>
								<td><label class="control-label">Land Line</label></td>
								<td>
									<div class="mobile-control">
										<input name="" type="text" id="codenumb"
											class="numeric form-control" maxlength="7" autocomplete="off"
											placeholder="STD" style="width: 35%;"
											onkeypress="return isNumber(event)"> <input name="landLine"
											type="text" id="landLine" class="numeric form-control"
											maxlength="10" autocomplete="off" placeholder="Land Line No"
											style="width: 62.5%;" onkeypress="return isNumber(event)" value="011123456789">
									</div>
								</td>
							</tr>
							<tr>
								<td><label class="control-label">Communication <span
										class="mandatory">*</span></label></td>
								<td><div class="check-box">
										<input type="radio" name="communication" value="0" id="communication"
											onchange="officemandhide();"> <label for="resid1">Residence</label>
										<input type="radio" name="communication" value="1" id="communication"
											onchange="officemand();"> <label for="resid2">Office</label>
									</div></td>
							</tr>
						</tbody>
					</table>
					<div class="clearfix"></div>
				</div>
			</div>
			<div class="col-lg-4">
				<div class="form-content">
					<div class="form-title">
						<span class="tab-number">3</span>DOCUMENT PROOF
					</div>
					<table border="0" cellspacing="0" cellpadding="0" width="100%">
						<tbody>
							<tr>
								<td width="40%"><label class="control-label">ID
										Proof <span class="mandatory">*</span>
								</label></td>
								<td width="60%"><select name="proofofidentity"
									id="proofofidentity" class="form-control"
									onchange="selchange();replaceprrofid()">
										<option value="">Select</option>
										<option value="1">Voters Identity Card</option>
										<option value="2">Driving License</option>
										<option value="3">Passport</option>
										<option value="13">Certificate of Identity signed by
											a Gazetted Officer in prescribed format only</option>
										<option value="14">Certificate of Identity signed by
											a MP in prescribed format only</option>
										<option value="15">Certificate of Identity signed by
											a MLA in prescribed format only</option>
										<option value="16">Certificate of Identity signed by
											a Municipal Councilor in prescribed format only</option>
										<option value="18">Ration Card with photograph</option>
										<option value="19">Arms License</option>
										<option value="20">Pensioner Card with Photograph</option>
										<option value="21">Central Government Health Scheme
											Card</option>
										<option value="22">Ex-servicemen Contributory Heath
											Scheme photo card</option>
										<option value="24">Photo Identity card issued by the
											Central Government/State Government/Public Sector Undertaking</option>
										<option value="26">Bank certificate in original on
											letter head from the branch (along with name and stamp of the
											issuing officer) containing duly attested photograph and bank
											account number of the applicant</option>
								</select></td>
							</tr>
							<tr>
								<td><label class="control-label">Address Proof <span
										class="mandatory">*</span></label></td>
								<td><select name="proofofresidence" id="proofofresidence"
									class="form-control"
									onchange="residchange();replaceproofofresidence()">
										<option value="">Select</option>
										<option value="1">Voters Identity Card</option>
										<option value="2">Driving License</option>
										<option value="3">Passport</option>
										<option value="4">Bank Account Statement</option>
										<option value="5">Credit Card Statement</option>
										<option value="7">Landline telephone or broadband
											connection bill</option>
										<option value="8">Employer Certificate</option>
										<option value="10">Electricity Bill</option>
										<option value="11">Depository Account Statement</option>
										<option value="13">Certificate of Address signed by a
											Gazetted Officer in prescribed format only</option>
										<option value="18">Certificate of Address signed by a
											MP in prescribed format only</option>
										<option value="19">Certificate of Address signed by a
											MLA in prescribed format only</option>
										<option value="20">Certificate of Address signed by a
											Municipal Councillor in prescribed format only</option>
										<option value="22">Water Bill</option>
										<option value="23">Consumer Gas Connection Card</option>
										<option value="24">Credit Card Statement</option>
										<option value="26">Passport of the spouse</option>
										<option value="27">Post office pass book</option>
										<option value="29">Domicile Certificate issued by the
											Government</option>
										<option value="30">Allotment letter of accommodation
											issued by Central/state Government less than 3 years old</option>
										<option value="31">Property Registration Document</option>
										<option value="32">Latest Property Tax Assessment
											Order</option>
										<option value="33">Elector's Photo Identity Card</option>
								</select></td>
							</tr>
							<tr>
								<td><label class="control-label">Date of Birth <span
										class="mandatory">*</span></label></td>
								<td><select name="dobproof" id="dobproof"
									class="form-control" onchange="idhange();replaceproofofdob()">
										<option value="">Select</option>
										<option value="1">Birth Certificate issued by the
											Municipal Authority</option>
										<option value="2">Pension Payment Order</option>
										<option value="3">Marriage certificate issued by
											Registrar of Marriages</option>
										<option value="4">Matriculation certificate</option>
										<option value="5">Domicile certificate issued</option>
										<option value="6">Affidavit sworn before a magistrate
											stating the date of birth by the Government</option>
										<option value="7">Driving License</option>
										<option value="8">Passport</option>
										<option value="10">Voters Identity Card</option>
								</select></td>
							</tr>
							<tr>
								<td><label class="control-label"><span
										class="ofcadrs">Office Address <span class="mandatory"
											id="ofcmand" style="display: none;">*</span></span></label></td>
								<td><select name="proofofoffice" class="form-control"
									id="proofofoffice" onchange="proofofofficehange()"
									disabled="disabled">
										<option value="">Select</option>
										<option value="1">Credit Card Statement carrying
											Office Address</option>
										<option value="2">Bank Account Statement carrying
											Office Address</option>
										<option value="3">Employer Certificate carrying
											Office Address</option>
										<option value="4">Electricity Bill carrying Office
											Address</option>
										<option value="5">Telephone Bill carrying Office
											Address</option>
										<option value="6">Depository Account Statement
											carrying Office Address</option>
										<option value="7">Office Property Tax Assessment
											Order</option>
										<option value="8">Bank Account Statement carrying
											Office Address</option>
								</select></td>
							</tr>
						</tbody>
					</table>
					<div class="clearfix"></div>
				</div>
			</div>
			<div class="col-lg-4">
				<div class="form-content">
					<div class="form-title">
						<span class="tab-number">4</span>INCOME SOURCE
					</div>
					<table border="0" cellspacing="0" cellpadding="0" width="100%">
						<tbody>
							<tr>
								<td width="45%"><input type="checkbox" name="chksalary"
									id="chkincome" value="6" onclick="enableincchk()"> <label
									for="chkincome" class="form-label">No Income</label></td>
								<td width="55%"><input type="checkbox" name="chksalary"
									id="chksalary3" value="2"
									onclick="showbusinesstypesel();enableincome()"> <label
									for="chksalary3" class="form-label">Business/Profession
								</label></td>
							</tr>
							<tr>
								<td><input type="checkbox" name="chksalary" id="chksalary1"
									value="1" onclick="enableincome()"> <label
									for="chksalary1" class="form-label">Salary</label></td>
								<td><input type="checkbox" name="chksalary" id="chksalary2"
									value="3" onclick="enableincome()"> <label
									for="chksalary2" class="form-label">House Property</label></td>
							</tr>
							<tr>
								<td><input type="checkbox" name="chksalary" id="chksalary4"
									value="4" onclick="enableincome()"> <label
									for="chksalary4" class="form-label">Capital Gains</label></td>
								<td><input type="checkbox" name="chksalary" id="chksalary5"
									value="5" onclick="enableincome()"> <label
									for="chksalary5" class="form-label">Other Sources</label></td>
							</tr>
							<tr>
								<td><select name="annualincome" id="annualincome"
									class="form-control" onchange="annualincomechange()"
									disabled="disabled">
										<option value="">ANNUAL INCOME</option>
										<option value="2">Less Than 3,00,000</option>
										<option value="3">Between 3,00,001 to 5,00,000</option>
										<option value="4">Between 5,00,001 to 8,00,000</option>
										<option value="5">Greater than 8,00,000</option>
								</select></td>
								<td><select name="businesscode" id="businesscode"
									class="form-control" onchange="businesscodechange()"
									disabled="disabled">
										<option value="">BUSINESS TYPE</option>
										<option value="1">Medical Profession and Business</option>
										<option value="2">Engineering</option>
										<option value="3">Architecture</option>
										<option value="4">Chartered Accountant / Accountancy</option>
										<option value="5">Interior Decoration</option>
										<option value="6">Technical Consultancy</option>
										<option value="7">Company Secretary</option>
										<option value="8">Legal Practitioner and Solicitors</option>
										<option value="9">Government Contractors</option>
										<option value="10">Insurance Agency</option>
										<option value="11">Films, TV and Such other
											Entertainment</option>
										<option value="12">Information technology</option>
										<option value="13">Builders and developers</option>
										<option value="14">Members of Stock Exchange, Share
											Brokers and Sub- Brokers</option>
										<option value="15">Performing Arts and Yatra</option>
										<option value="16">Operation of Ships, Hovercrafts,
											Aircrafts or Helicopters</option>
										<option value="17">Plying Taxies, Lorries, Trucks,
											Buses or other commercial vehicles</option>
										<option value="18">Ownership of Horses or Jockeys</option>
										<option value="19">Cinema Halls and other theatres</option>
										<option value="20">Others</option>
								</select></td>
							</tr>
						</tbody>
					</table>
					<div class="clearfix"></div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-lg-12">
				<div class="form-content">
					<div class="form-title">
						<span class="tab-number">5</span>ADDRESS INFORMATION
					</div>
					<div class="col-lg-6">
						<h4>
							Residence Address <span class="mandatory">*</span><span
								class="tooltip in" title=""
								data-original-title="Residential address is mandatory for individuals"><span>i</span></span>
						</h4>
						<table border="0" cellspacing="0" cellpadding="0" width="100%">
							<tbody>
								<tr>
									<td width="50%"><label class="form-label">Flat/Room/Door/Block
											No.</label></td>
									<td width="50%"><input name="input" type="text" value = "100"
										class="form-control" id="flatroomnoresidence"
										autocomplete="off" maxlength="25"></td>
								</tr>
								<tr>
									<td><label class="form-label">Name of
											Premises/Building/Village</label></td>
									<td><input name="input" type="text" class="form-control" value = "Place Building"
										id="premiseresidence" autocomplete="off" maxlength="25"></td>
								</tr>
								<tr>
									<td><label class="form-label">Road/Street/Lane/Post
											Office</label></td>
									<td><input name="input" type="text" class="form-control" value = "Road"
										id="roadstreetresidence" autocomplete="off" maxlength="25"></td>
								</tr>
								<tr>
									<td><label class="form-label">Area/Locality/Taluka/Sub-Division</label></td>
									<td><input name="input" type="text" class="form-control" value = "Division"
										id="arealocalityresidence" autocomplete="off" maxlength="25"></td>
								</tr>
								<tr>
									<td><label class="form-label">State/Union
											Territory</label></td>
									<td><select name="searchstate" class="form-control"
										id="searchstate"
										onchange="getdistrict(&#39;districtcodedisplay&#39;,this.value);searchstatechange()"
										onkeyup="getdistrict(&#39;districtcodedisplay&#39;,this.value);">
											<option value="">Select</option>
											<option value="3">ANDAMAN &amp; NICOBAR ISLANDS</option>
											<option value="4">ANDHRA PRADESH</option>
											<option value="5">ARUNACHAL PRADESH</option>
											<option value="6">ASSAM</option>
											<option value="7">BIHAR</option>
											<option value="8">CHANDIGARH</option>
											<option value="36">CHHATTISGARH</option>
											<option value="10">DADRA &amp; NAGAR HAVELI</option>
											<option value="9">DAMAN &amp; DIU</option>
											<option value="26">DELHI</option>
											<option value="11">GOA</option>
											<option value="12">GUJARAT</option>
											<option value="13">HARYANA</option>
											<option value="14">HIMACHAL PRADESH</option>
											<option value="15">JAMMU &amp; KASHMIR</option>
											<option value="16">JHARKHAND</option>
											<option value="17">KARNATAKA</option>
											<option value="18">KERALA</option>
											<option value="19">LAKSHADWEEP</option>
											<option value="24">MADHYA PRADESH</option>
											<option value="20">MAHARASHTRA</option>
											<option value="21">MANIPUR</option>
											<option value="22">MEGHALAYA</option>
											<option value="23">MIZORAM</option>
											<option value="25">NAGALAND</option>
											<option value="27">ORISSA</option>
											<option value="28">PONDICHERRY</option>
											<option value="29">PUNJAB</option>
											<option value="30">RAJASTHAN</option>
											<option value="31">SIKKIM</option>
											<option value="32">TAMIL NADU</option>
											<option value="38">TELANGANA</option>
											<option value="33">TRIPURA</option>
											<option value="34">UTTAR PRADESH</option>
											<option value="35">UTTARAKHAND</option>
											<option value="37">WEST BENGAL</option>
									</select></td>
								</tr>
								<tr>
									<td><label class="form-label">Town/City/District</label></td>
									<td><div id="districtcodedisplay">
											<select name="district" disabled="disabled"
												class="selectfield form-control" id="district"
												onchange="districtchange()">
												<option value="">Select</option>
											</select>
										</div></td>
								</tr>
								<tr>
									<td><label class="form-label">Pincode</label></td>
									<td><input name="pincoderesidence" type="text"
										id="pincoderesidence" maxlength="6" value = "123456"
										class="numeric form-control" autocomplete="off"
										onkeypress="return isNumber(event)"></td>
								</tr>
								<tr>
									<td><label class="form-label">Country</label></td>
									<td><input name="input" type="text" id="residence_country"
										value="INDIA" class="form-control"
										style="background: rgb(241, 241, 241)" disabled="disabled"></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="divider hidden-sm hidden-md hidden-lg"></div>
					<div class="col-lg-6">
						<h4>
							<span class="ofcadrswid">Office Address <span
								style="font-size: 12px" id="opttext"> (Optional)</span> <span
								class="mandatory" id="mand" style="display: none">*</span></span> <span
								class="tooltip in" title=""
								data-original-title="If Address for Communication is selected as Office then Proof of Office Address along with Proof of residential address is mandatory "><span>i</span></span>
						</h4>
						<table border="0" cellspacing="0" cellpadding="0" width="100%">
							<tbody>
								<tr>
									<td width="50%"><label class="form-label">Name of
											Office</label></td>
									<td width="50%"><input name="input" type="text" value = "Office Name"
										class="form-control" id="nameofofc" autocomplete="off"
										maxlength="25"></td>
								</tr>
								<tr>
									<td><label class="form-label">Flat/Room/Door/Block
											No.</label></td>
									<td><input name="input" type="text" class="form-control" value = "1000"
										id="floorrommno" autocomplete="off" maxlength="25"></td>
								</tr>
								<tr>
									<td><label class="form-label">Name of
											Premises/Building/Village</label></td>
									<td><input name="input" type="text" class="form-control" value = "Building"
										id="nameofpremis" autocomplete="off" maxlength="25"></td>
								</tr>
								<tr>
									<td><label class="form-label">Road/Street/Lane/Post
											Office</label></td>
									<td><input name="input" type="text" class="form-control" value  = "Road"
										id="roadstreet" autocomplete="off" maxlength="25"></td>
								</tr>
								<tr>
									<td><label class="form-label">Area/Locality/Taluka/Sub-Division</label></td>
									<td><input name="input" type="text" class="form-control" value = "Area"
										id="arealocaldiv" autocomplete="off" maxlength="25"></td>
								</tr>
								<tr>
									<td><label class="form-label">State/Union
											Territory</label></td>
									<td><select name="stateunion" id="stateunion"
										class="form-control"
										onchange="getdistrict1(&#39;districtcodedisplay1&#39;,this.value);stateunionchange()"
										onkeyup="getdistrict1(&#39;districtcodedisplay1&#39;,this.value);">
											<option value="">Select</option>
											<option value="3">ANDAMAN &amp; NICOBAR ISLANDS</option>
											<option value="4">ANDHRA PRADESH</option>
											<option value="5">ARUNACHAL PRADESH</option>
											<option value="6">ASSAM</option>
											<option value="7">BIHAR</option>
											<option value="8">CHANDIGARH</option>
											<option value="36">CHHATTISGARH</option>
											<option value="10">DADRA &amp; NAGAR HAVELI</option>
											<option value="9">DAMAN &amp; DIU</option>
											<option value="26">DELHI</option>
											<option value="11">GOA</option>
											<option value="12">GUJARAT</option>
											<option value="13">HARYANA</option>
											<option value="14">HIMACHAL PRADESH</option>
											<option value="15">JAMMU &amp; KASHMIR</option>
											<option value="16">JHARKHAND</option>
											<option value="17">KARNATAKA</option>
											<option value="18">KERALA</option>
											<option value="19">LAKSHADWEEP</option>
											<option value="24">MADHYA PRADESH</option>
											<option value="20">MAHARASHTRA</option>
											<option value="21">MANIPUR</option>
											<option value="22">MEGHALAYA</option>
											<option value="23">MIZORAM</option>
											<option value="25">NAGALAND</option>
											<option value="27">ORISSA</option>
											<option value="28">PONDICHERRY</option>
											<option value="29">PUNJAB</option>
											<option value="30">RAJASTHAN</option>
											<option value="31">SIKKIM</option>
											<option value="32">TAMIL NADU</option>
											<option value="38">TELANGANA</option>
											<option value="33">TRIPURA</option>
											<option value="34">UTTAR PRADESH</option>
											<option value="35">UTTARAKHAND</option>
											<option value="37">WEST BENGAL</option>
									</select></td>
								</tr>
								<tr>
									<td><label class="form-label">Town/City/District</label></td>
									<td><div id="districtcodedisplay1">
											<select name="towncity" id="towncity" disabled="disabled"
												class="form-control" onchange="towncitychange()">
												<option value="">Select</option>
											</select>
										</div></td>
								</tr>
								<tr>
									<td><label class="form-label">Pincode</label></td>
									<td><input name="input" type="text" id="pincodezipcode" value = "987654"
										class="numeric form-control" maxlength="6" autocomplete="off"
										onkeypress="return isNumber(event)"></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-lg-12">
				<div class="form-content">
					<div class="form-title">
						<span class="tab-number">5</span>ADDRESS INFORMATION
					</div>
					<div class="col-md-10">
						<input type="checkbox" name="chkincomess1" id="chkincomess1"
							value="1" onclick="showra()"> <label for="chkincomess1"
							class="form-label">Representative Assessee is applicable</label>
						<span class="tooltip in" title=""
							data-original-title="This field is mandatory if applicant is minor, deceased, idiot, lunatic or mentally retarded."><span>i</span></span>
					</div>
					<div style="display: none" id="radiv">
						<div class="col-md-12">
							<div class="form-row col-md-10">
								<div class="form-group">
									<div class="col-md-2">
										<label class="form-label">Title <span
											class="mandatory" id="repmand2" style="display: none">*</span></label>
									</div>
									<div class="col-md-9 check-box">
										<input type="radio" name="rstitle" value="Shri" id="shri1">
										<label for="shri1">Shri</label> <input type="radio"
											name="rstitle" value="Smt." id="shri2"> <label
											for="shri2">Smt.</label> <input type="radio" name="rstitle"
											value="Kumari" id="shri3"> <label for="shri3">Kumari</label>
									</div>
								</div>
							</div>
							<div class="form-row col-md-10">
								<div class="form-group">
									<div class="col-md-2">
										<label class="form-label">Name <span class="mandatory"
											id="repmand1" style="display: none">*</span></label>
									</div>
									<div class="col-md-3">
										<input name="rafirstname" id="rafirstname"
											placeholder="First Name" type="text" class="form-control"
											onchange="upperMe(&#39;rafirstname&#39;)" autocomplete="off"
											onkeypress="return lettersOnly(event)"
											onblur="initialvalidation(&#39;rafirstname&#39;);"
											maxlength="25">
									</div>
									<div class="col-md-3">
										<input name="ramiddlename" id="ramiddlename"
											placeholder="Middle Name" type="text" class="form-control"
											onchange="upperMe(&#39;ramiddlename&#39;)" autocomplete="off"
											onkeypress="return lettersOnly(event)"
											onblur="initialvalidation(&#39;ramiddlename&#39;);"
											maxlength="25">
									</div>
									<div class="col-md-3">
										<input name="ralastname" id="ralastname"
											placeholder="Last Name" type="text" class="form-control"
											onchange="upperMe(&#39;ralastname&#39;)" autocomplete="off"
											onkeypress="return lettersOnly(event)"
											onblur="initialvalidation(&#39;ralastname&#39;);"
											maxlength="25">
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<table border="0" cellspacing="0" cellpadding="0" width="100%">
								<tbody>
									<tr>
										<td width="50%"><label class="form-label">Flat/Room/Door/Block
												No. <span class="mandatory" id="repmand3"
												style="display: none">*</span>
										</label></td>
										<td width="50%"><input name="input" type="text"
											id="ra_flatroom" class="form-control" autocomplete="off"
											maxlength="25"></td>
									</tr>
									<tr>
										<td><label class="form-label">Name of
												Premises/Building/Village <span class="mandatory"
												id="repmand4" style="display: none">*</span>
										</label></td>
										<td><input name="input" type="text" id="ra_premise"
											class="form-control" autocomplete="off" maxlength="25"></td>
									</tr>
									<tr>
										<td><label class="form-label">Road/Street/Lane/Post
												Office <span class="mandatory" id="repmand5"
												style="display: none">*</span>
										</label></td>
										<td><input name="input" type="text" id="ra_roadstreet"
											class="form-control" autocomplete="off" maxlength="25"></td>
									</tr>
									<tr>
										<td><label class="form-label">Area/Locality/Taluka/Sub-Division
												<span class="mandatory" id="repmand6" style="display: none">*</span>
										</label></td>
										<td><input name="input" type="text" id="ra_area"
											class="form-control" autocomplete="off" maxlength="25"></td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="col-md-6">
							<table border="0" cellspacing="0" cellpadding="0" width="100%">
								<tbody>
									<tr>
										<td width="50%"><label class="form-label">State/Union
												Territory <span class="mandatory" id="repmand7"
												style="display: none">*</span>
										</label></td>
										<td width="50%"><select name="stateunion1"
											id="stateunion1" class="form-control"
											onchange="getdistrict2(&#39;districtcodedisplay2&#39;,this.value);stateunion1change()"
											onkeyup="getdistrict2(&#39;districtcodedisplay2&#39;,this.value);">
												<option value="">Select</option>
												<option value="3">ANDAMAN &amp; NICOBAR ISLANDS</option>
												<option value="4">ANDHRA PRADESH</option>
												<option value="5">ARUNACHAL PRADESH</option>
												<option value="6">ASSAM</option>
												<option value="7">BIHAR</option>
												<option value="8">CHANDIGARH</option>
												<option value="36">CHHATTISGARH</option>
												<option value="10">DADRA &amp; NAGAR HAVELI</option>
												<option value="9">DAMAN &amp; DIU</option>
												<option value="26">DELHI</option>
												<option value="11">GOA</option>
												<option value="12">GUJARAT</option>
												<option value="13">HARYANA</option>
												<option value="14">HIMACHAL PRADESH</option>
												<option value="15">JAMMU &amp; KASHMIR</option>
												<option value="16">JHARKHAND</option>
												<option value="17">KARNATAKA</option>
												<option value="18">KERALA</option>
												<option value="19">LAKSHADWEEP</option>
												<option value="24">MADHYA PRADESH</option>
												<option value="20">MAHARASHTRA</option>
												<option value="21">MANIPUR</option>
												<option value="22">MEGHALAYA</option>
												<option value="23">MIZORAM</option>
												<option value="25">NAGALAND</option>
												<option value="27">ORISSA</option>
												<option value="28">PONDICHERRY</option>
												<option value="29">PUNJAB</option>
												<option value="30">RAJASTHAN</option>
												<option value="31">SIKKIM</option>
												<option value="32">TAMIL NADU</option>
												<option value="38">TELANGANA</option>
												<option value="33">TRIPURA</option>
												<option value="34">UTTAR PRADESH</option>
												<option value="35">UTTARAKHAND</option>
												<option value="37">WEST BENGAL</option>
										</select></td>
									</tr>
									<tr>
										<td><label class="form-label">Town/City/District<span
												class="mandatory" id="repmand8" style="display: none">*</span></label></td>
										<td><div id="districtcodedisplay2">
												<select name="towncity2" id="towncity2" class="form-control">
													<option value="">Select A State First</option>
												</select>
											</div></td>
									</tr>
									<tr>
										<td><label class="form-label">Pincode<span
												class="mandatory" id="repmand9" style="display: none">*</span></label></td>
										<td><input name="input" type="text" id="ra_pinzip"
											class="form-control numeric" maxlength="6" autocomplete="off"
											onkeypress="return isNumber(event)"></td>
									</tr>
									<tr>
										<td><label class="form-label">Country</label></td>
										<td><input name="input" type="text" id="ra_country"
											class="form-control" value="INDIA" disabled="disabled"
											style="background-color: #F1F1F1" autocomplete="off"></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-lg-12">
				<div class="form-content">
					<div class="form-title declaration">DECLARATION</div>
					<div class="col-md-12">
						<p>
							I have enclosed <span id="blankline">________________________
							</span><span id="prfid"
								style="text-decoration: underline; display: none;"></span> as
							proof of identity, <span id="blankline1">________________________</span>
							<span id="prfid1"
								style="text-decoration: underline; display: none;"></span> as
							proof of address and <span id="blankline2">________________________</span><span
								id="prfid3" style="text-decoration: underline; display: none"></span>
							as proof of date of birth.
						</p>
						<p>
							I <span id="namepapplicantblank">________________________</span><span
								id="namepapplicant"
								style="text-decoration: underline; display: none"></span>, the
							applicant, in the capacity of do hereby declare that what is
							stated above is true to the best of my information and belief.
						</p>
						<div class="clearfix">
							Date: 2-Mar-2017 <span id="cityres" class="cityres"
								style="margin-left: 23px;">City of residence <span
								id="blankline6">________________________</span> <span
								id="cityid1" style="text-decoration: underline; display: none;">
							</span></span>
						</div>
						<p class="mandatory mt mb">
							* Mandatory. Please ensure the name in the ID Proof matches
							&nbsp;<span id="namepapplicantblank1">(<i><u>Name
										of the Applicant</u></i>)
							</span><span id="namepapplicant1"
								style="text-decoration: underline; display: none"></span>. If
							the name does not match, the application would not be accepted.
						</p>
						<div class="submit-reset">
							<input type="hidden" name="customerid" id="customerid"> <input
								type="hidden" value="true" id="flag" name="flag">

						</div>
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
		</div>

		<input type="submit" value="submit">
	</form:form>
</body>
</html>
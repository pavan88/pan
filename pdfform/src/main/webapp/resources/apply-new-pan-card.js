customerid= 0;
function yearValidation(year,ev) {

  var text = /^[0-9]+$/;
  if(ev.type=="blur" || year.length==4 && ev.keyCode!=8 && ev.keyCode!=46) {
    if (year != 0) {
        if ((year != "") && (!text.test(year))) {

            alert("Please Enter Numeric Values Only");
            return false;
        }

        if (year.length != 4) {
            alert("Year is not proper. Please check");
            return false;
        }
        var current_year=new Date().getFullYear();
        if((year < 1900) || (year > current_year))
            {
            alert("Year should be in range 1900 to current year");
            return false;
            }
        return true;
    } }
}

function validateisAlphabet(string)
{
	var numericExpression = /^[a-zA-Z]+$/i;
	if(string.match(numericExpression)) return true;
	else return false;
}

function nospace(e)
{
 if (e.which == 32)
    return false;
 else 
 	return true;	
}

function getprocessingimagenew()
{ 
  var imagehtml = '<img src="images/loading.gif" border="0"/>';
  return imagehtml;
}


function formsubmit()
{
	var hiddenslno = $('#customerslnoedit').val();
	var error = $("#errormsgs");
	var field = $("#firstnameupp");
	if(!field.val()) {
	  alert("Please enter your First Name");
	  field.focus(); return false; 
	}
	var field = $('#middlenameupp');
	var field = $("#lastnameupp");
	if(!field.val()) {
	 alert("Please enter your Last Name");
	 field.focus(); return false;
	  }
	
	var field = $("#print_firstname");
	if(!field.val()) {
	alert("Enter the First Name to be printed on your PAN Card");
	field.focus(); return false; }

	var field = $("#print_lastname");
	if(!field.val()) {
	alert("Enter the Last Name to be printed on your PAN Card");
	 field.focus(); return false; }
		
	var othernameval=$('input:radio[name=othername]:checked').val();
	
		if($('#chk').is(':checked'))
		{
			var othernamedb = '0';
			var field = $("#firstnameothr");
			if(!field.val()) {
			alert("Please enter any other name that you have been known by");
			field.focus(); return false; }
			var field = $('#middlenameothr');
			var field = $("#lastnameothr");
			if(!field.val()) {alert("Please enter any other name that you have been known by");field.focus(); return false; }
		}
		else
		{
			var othernamedb = '1';	
		}
		
		var field = $("#father_fname");
		if(!field.val()) {alert("Please enter your Father's First Name"); field.focus(); return false; }
		var field = $("#father_mname");
		//initialvalidation('father_mname');
		
		var field = $("#father_lname");
		if(!field.val()) {
		alert("Please enter your Father's Last Name");
		 field.focus(); return false; }
		//initialvalidation('father_lname');

		var field =$("#dd");
		if(field.val() == '') {
			alert("Please select your date");
			field.focus(); return false; }
			var field =$("#mm");
			if(field.val() == '') {
			alert("Please select your month of birth");
			 field.focus(); return false; }
			var field =$("#dob_year");
			if(field.val() == '') {
			alert("Please enter your year of birth");
			 field.focus(); return false; 
		 }
		 
		 if(field.val()) { 
			 if(!validateamountfield(field.val())) {alert("Please Enter the Valid year in numeric"); field.focus(); return false; }
		  }	

		
		var year = $("#dob_year").val();
		var text = /^[0-9]+$/;
   	  if (year != 0) {
        if ((year != "") && (!text.test(year))) {
			alert("Enter the Year in numeric"); return false;
        }

        if (year.length != 4) {
			alert("Year is not proper. Please check");
			field.focus(); return false;
        }
        var current_year=new Date().getFullYear();
        if( year > current_year)
            {
			alert("Year of birth should not exceed the current year");
			 field.focus(); 
            return false;
            }
			
		  if((year < 1910) || (year == 0000) || (year > current_year))
            {
				//alert(year);
			alert("Year of birth should not be less than 1910");
            return false;
            }
	    }
		
		if (!$('input[name=gender]:checked').val() )          
 		{
			alert("Please select the Gender");
			  return false; 
		}
		
		
		  if (!$('input[name=maritalstatus]:checked').val() ) 
		  { 
		  alert("Please select the Marital Status");
		    return false; }
		
		
		/*var field = $('#aadharnumber')
		if(field.val())
		{
			 if(!allnumeric(field.val()) || field.val().length != 12) {alert("Please enter a valid Aadhaar Number"); field.focus(); return false;}
		}*/
			
		var field = $("#mobilenumber");
		if(!field.val()) {
		alert("Please enter a valid Mobile Number");
		 field.focus(); return false;}
		if(field.val()) { if(!validatecell(field.val()) || field.val()=='9999999999' ||field.val() == '7777777777' || field.val() == '8888888888') {
		alert('Please enter a valid Mobile Number');
		field.focus(); return false; } }
		var field = $("#emailids");
		if(!field.val()) {
		alert("Please enter a valid Email ID");
		 field.focus(); return false; }
		 if(field.val()) { if(!emailvalidation(field.val())) {
		alert('Please enter a valid Email ID');
		field.focus(); return false; } }
		 
		 var field = $('#codenumb')
		if(field.val()) {
		if(!validateamountfield(field.val())) {alert("Please enter a valid Land line STD Code"); field.focus(); return false;  }
		}
		if(field.val()) {
			if(!validatestdcode(field.val())) {alert("Please enter a valid Land line STD Code"); field.focus(); return false;  }
		}
			
		var field = $('#codephn')
		if(field.val()) {
		if(!validateamountfield(field.val())) {alert("Please enter a valid Land line Number"); field.focus(); return false;  }
		}
		 
		if (!$('input[name=addressforcom]:checked').val() ) 
		{          
		  alert("Please select the Address for communication");
		  return false; 
		}
		
		var field = $("#proofofidentity");
		if(!field.val()) {
		alert("Please select the proof of Identity");
		 return false; }
		
		
		var field = $("#proofofresidence");
		if(!field.val()) {
		alert("Please select the Address Proof");
		 field.focus(); return false; }
		 
		var field = $("#dobproof");
		if(!field.val()) {
		alert("Please select the Date of Birth Proof");
		field.focus(); return false; }    
			var field = $("#flatroomnoresidence");
			if(!field.val()) {
			alert("Please enter the Residence Address Flat/Room/Door/Block No.");
			field.focus();
			 return false; }	
			var field = $("#premiseresidence");
			if(!field.val()) {
			alert("Please enter the Residence Address Name of Premises/Building/Village");field.focus();
			 return false; }	
		
			var field = $("#roadstreetresidence");
			if(!field.val()) {
			alert("Please enter the Residence Address Road/Street/Lane/Post Office");field.focus();
			return false; }	
		
			var field = $("#arealocalityresidence");
			if(!field.val()) {
			alert("Please enter the Residence Address Area/Locality/Taluka/Sub-Division");field.focus();
			field.focus(); return false; }	
		
			var field = $("#searchstate");
			if(!field.val()) {
			alert("Please enter the Residence Address State/Union Territory.");
			 field.focus(); return false; }	
	
			var field = $("#residencedistrict");
			if(!field.val()) {
			alert("Please enter the Residence Address Town/City/District");
			field.focus(); return false; }	
		
			var field = $("#pincoderesidence");
			if(!field.val()) {
			alert("Please enter the Residence Address Pincode");field.focus();
		 	return false; }		
		
			if(field.val()) { 
				 if(!validatepincodenew(field.val())) {alert("Please enter a Valid Residence Pin Code"); field.focus(); return false;}
			 }
	
			var field = $("#pincodezipcode");

			 if(field.val()) { 
				 if(!validateamountfield(field.val())) {alert("Please enter a Valid Office Pincode"); field.focus(); return false; }
			 }
			 if(field.val()) { 
				 if(!validatepincodenew(field.val())) {alert("Please enter a Valid Office Pincode"); field.focus(); return false; }
		      }			
		
		
		if($('input[name=addressforcom]:checked').val()== '1') 
		{     
			var field = $("#proofofoffice");
			if(!field.val()) {
			alert("Please select the Proof of Office Address");
			field.focus(); return false; }
			
			var field = $("#nameofofc");
			if(!field.val()) {
			alert("Please enter the Name of office");
			 field.focus(); return false; }	
			
			var field = $("#floorrommno");
			if(!field.val()) {
			alert("Please enter Office Flat/Room/Door/Block No.");
			 field.focus(); return false; }	
			
			var field = $("#nameofpremis");
			if(!field.val()) {
			alert("Please enter the Name of Office Premises/Building/Village");
			field.focus(); return false; }	
			
			
			var field = $("#roadstreet");
			if(!field.val()) {
			alert("Please enter the Office Road/Street/Lane/Post Office");
			field.focus(); return false; }	
		
			
			var field = $("#arealocaldiv");
			if(!field.val()) {
			alert("Please enter the Office Area/Locality/Taluka/Sub-Division");
			 field.focus(); return false; }	
			 
			var field = $("#stateunion");
			if(!field.val()) {
			alert("Please select the Office State/Union Territory");
			 field.focus(); return false; }
		
			var field = $("#residencedistrict1");
			if(!field.val()) {
			alert("Please select the Office Town/City/District");
			 field.focus(); return false; }
		
			var field = $("#pincodezipcode");
			if(!field.val()) {
				alert("Please enter the Office pincode");
				field.focus(); return false; }
			
			 if(field.val()) { 
				 if(!validateamountfield(field.val())) {alert("Please enter a Valid Office Pincode"); field.focus(); return false; }
				 
		      }		
			  if(field.val()) { 
				 if(!validatepincodenew(field.val())) {alert("Please enter a Valid  Office Pincode"); field.focus(); return false; }
				 
		      }			
		
		}
		
		var field = $("input[name='chksalary']:checked").length;
        if (field < 1) 
        {
            alert('Please select at least one Income Source');
			 return false;
        }
		
		if($('#chksalary1').is(':checked') || $('#chksalary2').is(':checked') || $('#chksalary3').is(':checked') || $('#chksalary4').is(':checked') ||$('#chksalary5').is(':checked'))
		{
			 if($('#annualincome').val()== '')
			 {
				alert('Please select your Annual Income');
				 return false; 
			 }
			
		}
		//alert("1123213")
		if($("#chksalary1").is(':checked') && $('#chksalary3').is(':checked'))
		{
			//alert("ret")
			 if($('#businesscode').val()== 0)
			 {
				alert('Please select your Business/Profession');
				 return false; 
			 }
		
		}
		//return;
	/*	if($('#chksalary1').is(':checked') || $('#chksalary2').is(':checked') || $('#chksalary3').is(':checked') || $('#chksalary4').is(':checked') ||$('#chksalary5').is(':checked'))
		{
			 if($('#businesscode').val()== '')
			 {
				alert('Please select your Business/Profession');
				 return false; 
			 }
		}  */
		
		if($("input[name='chksalary']:checked").val() == '2')
		{ 
			var field = $('#businesscode');
			if(!field.val()) {
			alert("Please select your Business/Profession");
			field.focus(); return false; }
		}	
		
		if($('#chkincomess1').is(':checked')){
			var repassval = '1'
		}
		else
		{
			var repassval = '0';	
		}

		if(repassval =='1')
		{
			
			var field = $("input:radio[name=rstitle]:checked").length;
			if (field < 1) 
			{
				alert('Please select the title of Representative Assessee');
				return false;
			}
		
			var field = $("#rafirstname");
			if(!field.val()) {
			alert("Please enter the first name of Representive Assessee");
			 field.focus(); return false; }	
			var field = $("#ralastname");	
			if(!field.val()) {
			alert("Please enter the last name of Representive Assessee");
			 field.focus(); return false; }	
			
			var field = $('#ra_flatroom');
			if(!field.val()) {
			alert("Please enter the Representive Assessee's Flat/Room/Door/Block No");
			field.focus(); return false; }	
			var field = $('#ra_premise');
			if(!field.val()) {
			alert("Please enter the Representive Assessee's Name of Premises/Building/Village");
			field.focus(); return false; }	
			var field = $('#ra_roadstreet');
			if(!field.val()) {
			alert("Please enter the Representive Assessee's Road/Street/Lane/Post Office");
			 field.focus();return false;  }	
			var field = $('#ra_area');
			if(!field.val()) {
			alert("Please enter the Representive Assessee's Area/Locality/Taluka/Sub-Division");
			 field.focus(); return false; }
			var field = $('#stateunion1');
			if(!field.val()) {
				alert("Please enter the Representive Assessee's State/Union Territory");
				field.focus();return false; }	
			var field = $('#residencedistrict2');
			if(!field.val()) {
			alert("Please select the Representive Assessee's Town/City/District");
			 field.focus();  return false;  }	
			
			var field = $('#ra_pinzip');
			if(!field.val()) {
			alert("Please enter the Representive Assessee's Pincode");
			 field.focus();return false; }

			 
			 var field = $('#ra_pinzip');
		    if(field.val()) { 
				 if(!validatepincodenew(field.val())) {alert("Please Enter the Valid Pincode"); field.focus(); return false; }
		      }			
		}
	  var dobfield = $('#dob_year').val()+'-'+ $('#mm').val()+'-'+ $('#dd').val();
	  var calculatedage = displayDate(dobfield);
	  if(calculatedage<18 || calculatedage==8)
	  {
		if(!$('#chkincomess1').is(':checked'))
		{
			alert('It is mandatory to select Representative Assessee if applicant is minor');
			/*$('#chkincomess1').focus();*/
			$('#radiv').show();
			$('#chkincomess1').prop('checked',true);
			return false;  
		}
		
	  }
	
		var addrscommval = $('input[name=addressforcom]:checked').val();
		
		
		var field = $('#ra_pinzip');
		 if(field.val()) { 
				 if(!validateamountfield(field.val())) {alert("Please Enter the Valid Pincode"); field.focus(); return false; }
		  }		
		   if(field.val()) { 
				 if(!validatepincodenew(field.val())) {alert("Please Enter the Valid Pincode"); field.focus(); return false; }
		      }			
		
			
			var categoryval = $('input[name=category]:checked').val();
			var genderval = $('input[name=gender]:checked').val();
			var maritalval = $('input[name=maritalstatus]:checked').val();
		
			if($('#chkincome').is(':checked')){
				var noincomeval = '6'
			}
			else
			{
				var noincomeval = '0';	
			}
			
			var annualincomeval = $('#annualincome').val();
			if($('#chksalary1').is(':checked')){var checksalaryval = '1'}
			else
			{ var checksalaryval = '0' }
			if($('#chksalary2').is(':checked')){var housepropertyval = '3'}
			else
			{ var housepropertyval = '0' }
			if($('#chksalary3').is(':checked')){var businessprofval = '2'}
			else
			{ var businessprofval = '0' }
			if($('#chksalary4').is(':checked')){var capgainval = '4'}
			else
			{ var capgainval = '0' }
			if($('#chksalary5').is(':checked')){var othersourceval = '5'}
			else
			{ var othersourceval = '0' }	
		var firstname = $('#firstnameupp').val();
		var middlename = $('#middlenameupp').val();
		var lastname = $('#lastnameupp').val();
		var printfirstname = $('#print_firstname').val();
		var printlastname = $('#print_lastname').val();
		var fatherfirstname = $('#father_fname').val();
		var fathermiddlename = $('#father_mname').val();
		var fatherlastname = $('#father_lname').val();
		var proofofid = $('#proofofidentity').val();
		var sourceofincome = $('#chkincome').val();
		var proofofresidenceaddress = $('#proofofresidence').val();
		var dobproofval =  $('#dobproof').val();
		var addressforcom = $('input:radio[name=addressforcom]:checked').val();
		var proofofofficeadrs = $('#proofofoffice').val();
		var nameofofc = $('#nameofofc').val();
		var roadstreet = $('#roadstreet').val();
		var flatroom = $('#floorrommno').val();
		var nameofpremis = $('#nameofpremis').val();
		var arealocaldiv = $('#arealocaldiv').val();
		var stateunion = $('#stateunion').val();
		var towncity = $('#towncity').val();
		var pincodezipcode = $('#pincodezipcode').val();
		var landlinecode = $('#codenumb').val();
		var landlinenumber = $('#codephn').val();
		var mobilenumber = $('#mobilenumber').val();
		var emailids = $('#emailids').val();
		//var aadharnumber = $('#aadharnumber').val();
		var aadharnumber = "";
		var repassbool = repassval;
		var field = $("input:radio[name=rstitle]:checked").length;
        if (field < 1) 
        {
			var reptitle = '';
		}
		else
		{
			var reptitle = $('input:radio[name=rstitle]:checked').val();
		}
		var rafirstname =  $('#rafirstname').val();
		var ramiddlename =  $('#ramiddlename').val();
		var ralastname =  $('#ralastname').val();
		var raadrsflat = $('#ra_flatroom').val();
		var ra_premise = $('#ra_premise').val();
		var ra_roadstreet = $('#ra_roadstreet').val();
		var ra_area = $('#ra_area').val();
		var ra_pinzipcode = $('#ra_pinzip').val();
		var ra_towncity = $('#ra_towncity').val();
		var ra_country = $('#ra_country').val();
		var flatroomresidence = $('#flatroomnoresidence').val();
		var premiseresidence = $('#premiseresidence').val();
		var roadstreetresidence = $('#roadstreetresidence').val();
		var arealocalityresidence = $('#arealocalityresidence').val();
		var stateuininresidence = $('#stateuininresidence').val();
		var towncityresidence = $('#towncityresidence').val();
		var pincoderesidence = $('#pincoderesidence').val();
		var residence_country = $('#residence_country').val();
		var businesscode = $('#businesscode').val();
		if(businesscode==null){
			businesscode=0;
		}
		if(businesscode==''){
			businesscode=0;
		}
		var dob = $('#dobdate').val();
		var annualincome = $("#annualincome").val();
		var floorrommno = $('#floorrommno').val();
		var roadstreet = $('#roadstreet').val();
		var pincodecity = $('#pincodecity').val();
		var cityresideence = $('#cityofresidence').val();
		var firstnameothr = $('#firstnameothr').val();
		var middlenameothr = $('#middlenameothr').val();
		var lastnameothr = $('#lastnameothr').val();
		var cityresidencetext= $('#residencedistrict option:selected').text();
		var searchstate = $('#searchstate option:selected').text();
		var searchdistrict = $('#residencedistrict option:selected').text();
		var incomesource = $("input[name='chksalary']:checked").val();
		
		if($("#stateunion option:selected").text() == 'Select')
			var officestate = '';
		else
			var officestate = $("#stateunion option:selected").text();
			
		if($('#residencedistrict1 option:selected').text() == 'Select')	
		 	var officedistrict = '';
		else
			var officedistrict = $('#residencedistrict1 option:selected').text();
		var rastate = $('#stateunion1 option:selected').text();
		var radistrict = $('#residencedistrict2 option:selected').text();		
		var dob =$('#dob_year').val()+'-'+ $('#mm').val()+'-'+ $('#dd').val();
		

/*--------------Coded to validate selected date month and time-----------------*/
		
var dobfield = $('#dob_year').val()+''+ $('#mm').val()+''+ $('#dd').val();
var dob_year=$('#dob_year').val();
//var calculatedage = displayDate(dobfield);
var today=new Date();
var age=today.getFullYear()-dob_year;
var day=("0" + today.getDate()).slice(-2);
var month=("0" + (today.getMonth() + 1)).slice(-2);
var year1=today.getFullYear();
var todays = year1+''+ month+''+ day;
var year=$('#dob_year').val();
var mm1=$('#mm').val();
var dd1=$('#dd').val();
var givenparse = parseInt(dobfield);
var todysparse = parseInt(todays);
if(givenparse>todysparse){	 
	alert("Date Of Birth Cannot Be greater Than Today's Date");
	return false; 
}
/*-----------------------------------------------------------------------------*/

		var passData = "";
	
		passData =  "switchtype=save"+"&category=" +encodeURIComponent(categoryval)+"&gender=" +encodeURIComponent(genderval)+"&maritalstatus=" +encodeURIComponent(maritalval)+"&firstname=" +encodeURIComponent(firstname)+"&middlename=" +encodeURIComponent(middlename)+"&lastname=" +encodeURIComponent(lastname)+"&othrfirstname1="+encodeURIComponent(firstnameothr)+"&othrmiddlename1="+encodeURIComponent(middlenameothr)+"&othrlastname1=" +encodeURIComponent(lastnameothr)+"&printfirstname="+encodeURIComponent(printfirstname)+"&printlastname=" +encodeURIComponent(printlastname)+"&fatherfirstname=" +encodeURIComponent(fatherfirstname)+"&fathermiddlename=" +encodeURIComponent(fathermiddlename)+"&fatherlastname=" +encodeURIComponent(fatherlastname)+"&proofofid=" +encodeURIComponent(proofofid)+"&sourceofincome=" +encodeURIComponent(sourceofincome)+"&proofofresidenceaddress=" +encodeURIComponent(proofofresidenceaddress)+"&addressforcom=" +encodeURIComponent(addressforcom)+"&arealocaldiv=" +encodeURIComponent(arealocaldiv)+"& stateunion=" + encodeURIComponent(stateunion)+"&towncity=" +encodeURIComponent(towncity)+"&pincodezipcode=" +encodeURIComponent(pincodezipcode)+"&landlinecode=" +encodeURIComponent(landlinecode) +"&landlinenumber=" +encodeURIComponent(landlinenumber)+"&mobilenumber=" +encodeURIComponent(mobilenumber)+"&emailids=" +encodeURIComponent(emailids)+"&aadharnumber=" +encodeURIComponent(aadharnumber)+"&repassbool=" +encodeURIComponent(repassbool)+"&reptitle=" +encodeURIComponent(reptitle) +"&rafirstname=" +encodeURIComponent(rafirstname)+"&ramiddlename=" +encodeURIComponent(ramiddlename)+"&ralastname=" +encodeURIComponent(ralastname)+"&raadrsflat=" +encodeURIComponent(raadrsflat)+"&ra_premise=" +encodeURIComponent(ra_premise)+"&ra_roadstreet=" +encodeURIComponent(ra_roadstreet)+"&ra_area=" +encodeURIComponent(ra_area)+"&ra_towncity=" +encodeURIComponent(ra_towncity)+"&ra_country=" +encodeURIComponent(ra_country)+"&rapinzipcode=" +encodeURIComponent(ra_pinzipcode)+"&flatroomresidence="+encodeURIComponent(flatroomresidence)+"&premiseresidence=" +encodeURIComponent(premiseresidence)+"&roadstreetresidence=" +encodeURIComponent(roadstreetresidence)+"&arealocalityresidence=" +encodeURIComponent(arealocalityresidence)+"&stateuininresidence=" +encodeURIComponent(stateuininresidence)+"&towncityresidence=" +encodeURIComponent(towncityresidence)+"&pincoderesidence=" +encodeURIComponent(pincoderesidence)+"&residence_country=" +encodeURIComponent(residence_country)+"&othernamedb=" +encodeURIComponent(othernamedb)+"&dob=" +encodeURIComponent(dob)+"&proofofofficeadrs=" +encodeURIComponent(proofofofficeadrs)+"&businesscode=" +encodeURIComponent(businesscode)+"&annualincome=" +encodeURIComponent(annualincome)+"&floorrommno=" +encodeURIComponent(floorrommno)+"&nameofpremis=" +encodeURIComponent(nameofpremis)+"&roadstreet=" +encodeURIComponent(roadstreet)+"&pincodecity=" +encodeURIComponent(pincodecity)+"&nameofofc=" +encodeURIComponent(nameofofc)+"&addrscommval=" +encodeURIComponent(addrscommval)+"&cityresidence=" +encodeURIComponent(cityresideence)+"&cityresidencetext=" +encodeURIComponent(cityresidencetext)+"&repassval=" +encodeURIComponent(repassval)+"&raadrsflat=" +encodeURIComponent(raadrsflat)+"&ra_premise=" +encodeURIComponent(ra_premise)+"&ra_roadstreet=" +encodeURIComponent(ra_roadstreet)+"&ra_area=" +encodeURIComponent(ra_area)+"&ra_pinzipcode=" +encodeURIComponent(ra_pinzipcode)+"&ra_towncity=" +encodeURIComponent(ra_towncity)+"&ra_country=" +encodeURIComponent(ra_country)+"&customerslno=" +encodeURIComponent(hiddenslno)+"&searchstate=" +encodeURIComponent(searchstate)+"&searchdistrict=" +encodeURIComponent(searchdistrict)+"&incomesource=" +encodeURIComponent(incomesource)+"&officestate=" +encodeURIComponent(officestate)+"&officedistrict=" +encodeURIComponent(officedistrict)+"&rastate=" +encodeURIComponent(rastate)+"&radistrict=" +encodeURIComponent(radistrict)+"&dobproofval=" +encodeURIComponent(dobproofval)+"&noincomeval=" + encodeURIComponent(noincomeval)+"&annualincomeval=" +encodeURIComponent(annualincomeval)+"&checksalaryval=" +encodeURIComponent(checksalaryval)+"&housepropertyval=" +encodeURIComponent(housepropertyval)+"&businessprofval=" +encodeURIComponent(businessprofval)+"&capgainval=" +encodeURIComponent(capgainval)+"&othersourceval=" +encodeURIComponent(othersourceval)+"&dummy=" + Math.floor(Math.random()*100000000);
		
		/*alert(passData);*/
		var error=$('#declarebuttons');
		queryString = 'ajax/apply-new-pan-card.php';
		error.html(getprocessingimagenew());
		ajaxcall0 = $.ajax(
		{
			type: "POST",url: queryString, data: passData, cache: false,dataType: "json",
			success: function(ajaxresponse,status)
			{	
					var response = ajaxresponse.split('^');
					
					if(response[0] == '1')
					{
							
							$('#customerid').val(response[2]);
							$('#mainform').submit();	
					}
					else if(response[0] == '2')
					{
						
						$('#customerid').val(response[2]);
						$('#mainform').submit();
					}
					else
					{
						error.html(invaliderror());	
					}
			}, 
			error: function(jqXHR,textStatus)
			{
				alert("herer")
				if(jqXHR.status!='200' && jqXHR.status!='')
					error.html(errorstatuscodecheck(jqXHR.status));
				else 
					error.html(errorstatustextcheck(textStatus));	
			}
		});		
		

}

function displayDate(dobfield) 
{
	var d1 = new Date(dobfield); //from date yyyy-MM-dd
	var d2 = new Date(); //to date yyyy-MM-dd (taken currentdate)
	var Months = d2.getMonth() - d1.getMonth();
	var Years = d2.getFullYear() - d1.getFullYear();
	var Days = d2.getDate() - d1.getDate();
	Months = (d2.getMonth() + 12 * d2.getFullYear()) - (d1.getMonth() + 12 * d1.getFullYear());
	var MonthOverflow = 0;
	if (Months - (Years * 12) < 0)
		MonthOverFlow = -1;
	else
		MonthOverFlow = 1;
	if (MonthOverFlow < 0)
		Years = Years - 1; Months = Months - (Years * 12);
	var LastDayOfMonth = new Date(d2.getFullYear(), 
			d2.getMonth() + 1, 0, 23, 59, 59);
	LastDayOfMonth = LastDayOfMonth.getDate();
	if (MonthOverFlow < 0 && (d1.getDate() > d2.getDate())) {
		Days = LastDayOfMonth + (d2.getDate() - d1.getDate()) - 1;
	}
	else
		Days = d2.getDate() - d1.getDate();
	if (Days < 0)
		Months = Months - 1;
	var l = new Date(d2.getFullYear(), d2.getMonth(), 0);
	var l1 = new Date(d1.getFullYear(), d1.getMonth() + 1, 0);
	if (Days < 0) 
	{
		if (l1 > l)
			Days = l1.getDate() + Days;
		else
			Days = l.getDate() + Days;
	}
	/*document.getElementById("demo").innerHTML = Years + 
	"Year(s), " + Months + " Month(s), " + Days + "Day(s)";*/
	return Years;
}


function showra()
{
	
	if($('#chkincomess1').is(':checked')){
	$('#radiv').show();
	$('#repmand').show();
	$('#repmand1').show();
	$('#repmand2').show();
	$('#repmand3').show();
	$('#repmand4').show();
	$('#repmand5').show();
	$('#repmand6').show();
	$('#repmand7').show();
	$('#repmand8').show();
	$('#repmand9').show();
	}
	else
	{
	$('#radiv').hide();	
	$('#repmand').hide();
	$('#repmand1').hide();
	$('#repmand2').hide();
	$('#repmand3').hide();
	$('#repmand4').hide();
	$('#repmand5').hide();
	$('#repmand6').hide();
	$('#repmand7').hide();
	$('#repmand8').hide();
	$('#repmand9').hide();
	}
}

function selchange()
{
    if($('#proofofidentity').val() == "") 
	{
	$('#proofofidentity').addClass("empty");
	}
    else 
	{
	$('#proofofidentity').removeClass("empty");
	}
}

function citychange()
{
    if($('#cityofresidence').val() == "") 
	{
	$('#cityofresidence').addClass("empty");
	}
    else 
	{
	$('#cityofresidence').removeClass("empty");
	}
}

function residchange()
{
    if($('#proofofresidence').val() == "") 
	{
	$('#proofofresidence').addClass("empty");
	}
    else 
	{
	$('#proofofresidence').removeClass("empty");
	}
}

function idhange()
{
	if($('#dobproof').val() == "") 
	{
	$('#dobproof').addClass("empty");
	}
    else 
	{
	$('#dobproof').removeClass("empty");
	}
}


function proofofofficehange()
{
	if($('#proofofoffice').val() == "") 
	{
	$('#proofofoffice').addClass("empty");
	}
    else 
	{
	$('#proofofoffice').removeClass("empty");
	}
}

function annualincomechange()
{
	if($('#annualincome').val() == "") 
	{
	$('#annualincome').addClass("empty");
	}
    else 
	{
	$('#annualincome').removeClass("empty");
	}
}

function businesscodechange()
{
	if($('#businesscode').val() == 0) 
	{
	$('#businesscode').addClass("empty");
	}
    else 
	{
	$('#businesscode').removeClass("empty");
	}
}

function ddchange()
{
	if($('#dd').val() == "") 
	{
	$('#dd').addClass("empty");
	}
    else 
	{
	$('#dd').removeClass("empty");
	}
	if($('#dd').val() != "" && $('#mm').val() != "" && $('#dob_year').val() != "")
	{
		var dobfield1 = $('#dob_year').val()+'-'+ $('#mm').val()+'-'+ $('#dd').val();
		var calculatedage = displayDate(dobfield1);
		if(calculatedage>18)
	  	{ 
			if($('#chkincomess1').is(':checked'))
			{	//alert(2);
				//alert('It is mandatory to select Representative Assessee if applicant is minor');
				/*$('#chkincomess1').focus();*/
				$('#radiv').hide();
				$('#chkincomess1').prop('checked', false);
				$('#chkincomess1').attr("disabled", true);
			}else{ //alert(3);
				$('#radiv').hide();
				$('#chkincomess1').prop('checked', false);
				$('#chkincomess1').attr("disabled", true);		  
			}		
	  	}else{
			$('#radiv').show();
			$('#chkincomess1').prop('checked',true);
			$('#chkincomess1').attr("disabled", false);
		}
	}
}

function mmchange()
{ 
	if($('#mm').val() == "") 
	{
	$('#mm').addClass("empty");
	}
    else 
	{
	$('#mm').removeClass("empty");
	}
	if($('#dd').val() != "" && $('#mm').val() != "" && $('#dob_year').val() != "")
	{
		var dobfield1 = $('#dob_year').val()+'-'+ $('#mm').val()+'-'+ $('#dd').val();
		var calculatedage = displayDate(dobfield1);
		if(calculatedage>18)
	  	{ 
			if($('#chkincomess1').is(':checked'))
			{	//alert(2);
				//alert('It is mandatory to select Representative Assessee if applicant is minor');
				/*$('#chkincomess1').focus();*/
				$('#radiv').hide();
				$('#chkincomess1').prop('checked', false);
				$('#chkincomess1').attr("disabled", true);
			}else{ //alert(3);
				$('#radiv').hide();
				$('#chkincomess1').prop('checked', false);
				$('#chkincomess1').attr("disabled", true);		  
			}		
	  	}else{
			$('#radiv').show();
			$('#chkincomess1').prop('checked',true);
			$('#chkincomess1').attr("disabled", false);
		}
	}
	
}
function yyyychange()
{ 
	if($('#dd').val() != "" && $('#mm').val() != "" && $('#dob_year').val() != "")
	{ 
		var dobfield1 = $('#dob_year').val()+'-'+ $('#mm').val()+'-'+ $('#dd').val();
		var calculatedage = displayDate(dobfield1);
		if(calculatedage>18)
	  	{ //alert(1234);
			if($('#chkincomess1').is(':checked'))
			{	//alert(2);
				//alert('It is mandatory to select Representative Assessee if applicant is minor');
				/*$('#chkincomess1').focus();*/
				$('#radiv').hide();
				$('#chkincomess1').prop('checked', false);
				$('#chkincomess1').attr("disabled", true);
			}else{ //alert(3);
				$('#radiv').hide();
				$('#chkincomess1').prop('checked', false);
				$('#chkincomess1').attr("disabled", true);		  
			}		
	  	}else{
			$('#radiv').show();
			$('#chkincomess1').prop('checked',true);
			$('#chkincomess1').attr("disabled", false);
		}
	}
	
}

function searchstatechange()
{
	if($('#searchstate').val() == "") 
	{
		$('#searchstate').addClass("empty");
		$('#residencedistrict').attr("disabled",true).addClass("empty");
	}
    else 
	{
		$('#searchstate').removeClass("empty");
	}
}
function stateunion1change()
{
	if($('#stateunion1').val() == "") 
	{
	$('#stateunion1').addClass("empty");
	}
    else 
	{
	$('#stateunion1').removeClass("empty");
	}
}

function districtchange()
{
	if($('#district').val() == "") 
	{
	$('#district').addClass("empty");
	}
    else 
	{
	$('#district').removeClass("empty");
	}
}

function stateunionchange()
{
	if($('#stateunion').val() == "") 
	{
	$('#stateunion').addClass("empty");
	$('#officedistrict').attr("disabled",true).addClass("empty");
	}
    else 
	{
	$('#stateunion').removeClass("empty");
	}
}


function towncitychange()
{
	if($('#towncity').val() == "") 
	{
	$('#towncity').addClass("empty");
	}
    else 
	{
	$('#towncity').removeClass("empty");
	}
}

function stateunion1change()
{
	if($('#stateunion1').val() == "") 
	{
	$('#stateunion1').addClass("empty");
	}
    else 
	{
	$('#stateunion1').removeClass("empty");
	}
}
function towncity2change()
{
	if($('#towncity2').val() == "") 
	{
	$('#towncity2').addClass("empty");
	}
    else 
	{
	$('#towncity2').removeClass("empty");
	}
}

function showothernamediv()
{
	if($('#chk').is(':checked')){
	$('#radiv').show();
	}
	else
	{
	$('#radiv').hide();	
	}
}

function showbusinesstypesel()
{
	if($('#chksalary3').is(':checked')){
		$('#businesscode').removeAttr('disabled');
	}
	else
	{
		$('#businesscode').val(0);
		businesscodechange();
		$('#businesscode').attr("disabled","disabled");
	}
}

function enableothernamenamediv()
{
	
	if($('#chk').is(':checked')){
		$('#firstnameothr').css("background-color", "");
		$('#middlenameothr').css("background-color", "");
		$('#lastnameothr').css("background-color", "");
		$('#firstnameothr').removeAttr("backgroundColor");
		$('#firstnameothr').removeAttr("disabled");
		$('#middlenameothr').removeAttr("backgroundColor");
		$('#middlenameothr').removeAttr("disabled");
		$('#lastnameothr').removeAttr("backgroundColor");
		$('#lastnameothr').removeAttr("disabled");
		$('#firstnameothr').attr("placeholder","First Name");
		$('#middlenameothr').attr("placeholder","Middle Name");
		$('#lastnameothr').attr("placeholder","Last Name");
	}
	else
	{

		$('#firstnameothr').css("background-color", "#E9E9E9");
		$('#middlenameothr').css("background-color", "#E9E9E9");
		$('#lastnameothr').css("background-color", "#E9E9E9");
		$('#firstnameothr').attr("disabled","disabled");
		$('#middlenameothr').attr("disabled","disabled");
		$('#lastnameothr').attr("disabled","disabled");
		$('#firstnameothr').removeAttr("placeholder");
		$('#middlenameothr').removeAttr("placeholder");
		$('#lastnameothr').removeAttr("placeholder");
		$('#firstnameothr').val('');
		$('#middlenameothr').val('');
		$('#lastnameothr').val('');
	}
}

function enableincchk()
{
	
	if($('#chkincome').is(':checked')){
		$('#chksalary1').attr('disabled','disabled');
		$('#chksalary2').attr('disabled','disabled');
		$('#chksalary3').attr('disabled','disabled');
		$('#chksalary4').attr('disabled','disabled');
		$('#chksalary5').attr('disabled','disabled');
		$('#chksalary1').prop('checked',false);
		$('#chksalary2').prop('checked',false);
		$('#chksalary3').prop('checked',false);
		$('#chksalary4').prop('checked',false);
		$('#chksalary5').prop('checked',false);
		$('#annualincome').val('');
		$('#businesscode').val(0);
		annualincomechange();
		businesscodechange();
		$('#annualincome').attr('disabled','disabled');
		$('#businesscode').attr('disabled','disabled');
	}
	else
	{	
		$('#chksalary1').removeAttr('disabled');
		$('#chksalary2').removeAttr('disabled');
		$('#chksalary3').removeAttr('disabled');
		$('#chksalary4').removeAttr('disabled');
		$('#chksalary5').removeAttr('disabled');
		$('#annualincome').removeAttr('disabled');
		enableincome();
	}
}



function enablera()
{
	if($('#chkincomess').is(':checked')){
		$('#ra_flatroom').css("background-color", "");
		$('#ra_premise').css("background-color", "");
		$('#ra_roadstreet').css("background-color", "");
		$('#ra_area').css("background-color", "");
		$('#stateunion1').css("background-color", "");
		$('#towncity2').css("background-color", "");
		$('#ra_roadstreet').css("background-color", "");
		$('#ra_roadstreet').css("background-color", "");
		$("#ra_pinzip").css("background-color", "");
		$('#ra_flatroom').removeAttr("disabled");
		$('#ra_premise').removeAttr("disabled");
		$('#ra_area').removeAttr("disabled");
		$('#stateunion1').removeAttr("disabled");
		$('#towncity2').removeAttr("disabled");
		$("#ra_pinzip").removeAttr("disabled");
	}
	else
	{
		  $('#ra_flatroom').css("background-color", "#E9E9E9");
		  $('#ra_premise').css("background-color", "#E9E9E9");
		  $('#ra_roadstreet').css("background-color", "#E9E9E9");
		  $('#ra_area').css("background-color", "#E9E9E9");
		  $('#stateunion1').css("background-color", "#E9E9E9");
		  $('#towncity2').css("background-color", "#E9E9E9");
		  $('#ra_roadstreet').css("background-color", "#E9E9E9");
		  $('#ra_roadstreet').css("background-color", "#E9E9E9");
		  $("#ra_pinzip").css("background-color", "#E9E9E9");
		  $('#ra_flatroom').attr("disabled","disabled");
		  $('#ra_premise').attr("disabled","disabled");
		  $('#ra_area').attr("disabled","disabled");
		  $('#stateunion1').attr("disabled","disabled");
		  $('#towncity2').attr("disabled","disabled");
		  $("#ra_pinzip").attr("disabled","disabled");
	}
	
}


function showbusinessc()
{
	if($('#chksalary3').is(':checked')){
		$('#businesscode').show();
		
	}
	else
	{
		$('#businesscode').hide();
	}
	
}

function officemandhide()
{
	$('#mand').hide();	
	$('#ofcmand').hide();
	$('#opttext').show();
	$('#proofofoffice').attr('disabled','disabled');	
	$('#proofofoffice').val("");
	$('#proofofoffice').addClass("empty");
}



function officemand()
{
	$('#mand').show();	
	$('#ofcmand').show();
	$('#opttext').hide();
	$('#proofofoffice').removeAttr('disabled');
	
}

function showbusinessannual()
{
	
	if($('#sourceofincome').val() == '2')
	{	
		$('#business_row').show();
		$('#annual_row').show();	
	}
	else if($('#sourceofincome').val() == '6')
	{
		$('#annual_row').hide();
		$('#business_row').hide();	
	}
	else if($('#sourceofincome').val() == '')
	{
		$('#annual_row').hide();
		$('#business_row').hide();	
	}
	else 
	{
		$('#annual_row').show();
		$('#business_row').hide();	
	}
}

function validatepincode()
{
	var field = $("#pincodecity");
	var error = $("#errormsgs");
	if(!field.val()) 
	{ 
		alert("Please enter a Valid Pin Code");
		return false;
	}
	if(field.val()) 
	{
		$('#pincodecity').attr('disabled', 'disabled');
		$('#nextbtn').removeClass('disable');
		$('#nextbtn').addClass('enable');
		$('#pincodecity').css('background-color', '#F3F3F3');
		var pincodeval = $('#pincodecity').val();	
		var passData = "";
		passData =  "switchtype=pincodepickup"+"&pincodeval=" +pincodeval+"&dummy=" + Math.floor(Math.random()*100000000);
		queryString ='ajax/apply-new-pan-card.php';
		/*error.html(getprocessingimage());*/
		ajaxcall0 = $.ajax(
		{
			type: "POST",url: queryString, data: passData, cache: false,dataType: "json",
			success: function(ajaxresponse,status)
			{	
				
					var response = ajaxresponse.split('^');
					if(response[0] == '1')
					{
						$('#pickuppincoderow').show();
					}
					else if(response[0] == '2')
					{
						$('#pickuppincoderow').hide();
					}
			}, 
			error: function(jqXHR,textStatus)
			{
				if(jqXHR.status!='200' && jqXHR.status!='')
					error.html(errorstatuscodecheck(jqXHR.status));
				else 
					error.html(errorstatustextcheck(textStatus));	
			}
		});		
	
	}
	
		
}

function residencechange()
{
	$('#proofofcaddress_row').hide();
	$('#proofoffice').hide();
}


function residenceaddressshow()
{
	
	var field = $('#proofofresidence').val();
	if(!field)
	$('#proofresidencerow').hide();
	else
	$('#proofresidencerow').show();
}

function representiveassshow()
{
	$('#repasss_row').show();
}
function representiveasshide()
{
	$('#repasss_row').hide();
}



function upperMe(specificid) {
var specificid1 = specificid;
	if(specificid1 == 'firstnameupp')
	{ $("#namepapplicantblank,#namepapplicantblank1").show();
	 document.getElementById("firstnameupp").value = document.getElementById("firstnameupp").value.toUpperCase(); 
	  document.getElementById("print_firstname").value = document.getElementById("firstnameupp").value.toUpperCase()+ ' '+document.getElementById("middlenameupp").value.toUpperCase();
	  
	   var names = document.getElementById("firstnameupp").value.toUpperCase()+' '+document.getElementById("middlenameupp").value.toUpperCase() +' '+document.getElementById("lastnameupp").value.toUpperCase();
	
	$("#namepapplicant, #namepapplicant1").show();
	$("#namepapplicant, #namepapplicant1").html(names);
	$("#namepapplicantblank, #namepapplicantblank1").hide();
	$("#namepapplicant, #namepapplicant1").css('text-decoration', 'underline'); 
	}
	if(specificid1 == 'middlenameupp')
	{ 
		$("#namepapplicantblank,#namepapplicantblank1").show();
	    document.getElementById("middlenameupp").value = document.getElementById("middlenameupp").value.toUpperCase();
	  /*document.getElementById("print_middlename").value = document.getElementById("middlenameupp").value.toUpperCase();*/
	    document.getElementById("print_firstname").value = document.getElementById("firstnameupp").value.toUpperCase() + ' '+document.getElementById("middlenameupp").value.toUpperCase();
		
			  var names = document.getElementById("firstnameupp").value.toUpperCase()+' '+document.getElementById("middlenameupp").value.toUpperCase() +' '+document.getElementById("lastnameupp").value.toUpperCase();
	
	$("#namepapplicant, #namepapplicant1").show();
	$("#namepapplicant, #namepapplicant1").html(names);
	
	$("#namepapplicantblank, #namepapplicantblank1").hide();
	$("#namepapplicant, #namepapplicant1").css('text-decoration', 'underline'); 
	  
	}
	 if(specificid1 == 'lastnameupp')
	 {
	 document.getElementById("lastnameupp").value = document.getElementById("lastnameupp").value.toUpperCase();
	 document.getElementById("print_lastname").value = document.getElementById("lastnameupp").value.toUpperCase();
	 
	  var names = document.getElementById("firstnameupp").value.toUpperCase()+' '+document.getElementById("middlenameupp").value.toUpperCase() +' '+document.getElementById("lastnameupp").value.toUpperCase();
	
	$("#namepapplicant, #namepapplicant1").show();
	$("#namepapplicant, #namepapplicant1").html(names);
	
		$("#namepapplicantblank, #namepapplicantblank1").hide();
	$("#namepapplicant, #namepapplicant1").css('text-decoration', 'underline'); 
	 
	 }
	  if(specificid1 == 'firstnameothr')
	 	 document.getElementById("firstnameothr").value = document.getElementById("firstnameothr").value.toUpperCase(); 
	  if(specificid1 == 'middlenameothr')
	 	 document.getElementById("middlenameothr").value = document.getElementById("middlenameothr").value.toUpperCase(); 
	  if(specificid1 == 'lastnameothr')
	 	 document.getElementById("lastnameothr").value = document.getElementById("lastnameothr").value.toUpperCase(); 
	  if(specificid1 == 'print_firstname')
	  	document.getElementById("print_firstname").value = document.getElementById("print_firstname").value.toUpperCase();
	  if(specificid1 == 'print_lastname')
	 	 document.getElementById("print_lastname").value = document.getElementById("print_lastname").value.toUpperCase();
	  if(specificid1 == 'father_fname')
	 	 document.getElementById("father_fname").value = document.getElementById("father_fname").value.toUpperCase();  
	  if(specificid1 == 'father_mname')
	 	 document.getElementById("father_mname").value = document.getElementById("father_mname").value.toUpperCase();  
	  if(specificid1 == 'father_lname')
	 	 document.getElementById("father_lname").value = document.getElementById("father_lname").value.toUpperCase(); 
	  if(specificid1 == 'rafirstname')
	 	 document.getElementById("rafirstname").value = document.getElementById("rafirstname").value.toUpperCase(); 
	  if(specificid1 == 'ramiddlename')
		  document.getElementById("ramiddlename").value = document.getElementById("ramiddlename").value.toUpperCase(); 
	  if(specificid1 == 'ralastname')
	 	 document.getElementById("ralastname").value = document.getElementById("ralastname").value.toUpperCase();
	 /*document.getElementById("firstnameupp").value = document.getElementById("middlenameupp").value.toUpperCase(); 
	 document.getElementById("lastnameupp").value = document.getElementById("lastnameupp").value.toUpperCase(); */
} 


function showmaritalstatus()
{
	$('#marital_row').show();
}

function hidemaritalstatus()
{
	$('#marital_row').hide();	
}


function showothername()
{
	$('#othername_row').show();
}

function hideothername()
{
	$('#othername_row').hide();	
}


function replaceprrofid()
{
		var proofofidentitytext= $('#proofofidentity option:selected').text();
		$('#prfid').show();
		$('#prfid').html(proofofidentitytext);
		$('#blankline').hide();
}

function replacecityresid()
{
		var selectedcity= $('#residencedistrict option:selected').text();
		$('#cityid1').show();
		$('#cityid1').html(selectedcity);
		$('#blankline6').hide();
}


function replaceproofofresidence()
{
		var proofofresidence= $('#proofofresidence option:selected').text();
		$('#prfid1').show();
		$('#prfid1').html(proofofresidence);
		$('#blankline1').hide();
}
function replaceproofofdob()
{
		var proofofresidence= $('#dobproof option:selected').text();
		$('#prfid3').show();
		$('#prfid3').html(proofofresidence);
		$('#blankline2').hide();
}
function resetpincode()
{
	$('#pincodecity').val('');
	$('#pincodecity').removeAttr("disabled"); 
	$('#pincodecity').removeClass('disable');
	
	$('#pincodecity').css('background-color', '');
}

function resetvalues()
{
	$('#firstnameupp').val('');
	$('#middlenameupp').val('');
	$('#lastnameupp').val('');
	$('#print_firstname').val('');
	$('#print_lastname').val('');
	$('#father_fname').val('');
	$('#father_mname').val('');
	$('#father_lname').val('');
	$('#radiv').hide();
	$('#codenumb').val('');
	$('#codephn').val('');
	$("#mainform" )[0].reset();
	$('#form_row').hide();
	$('#business_row').hide();
	$('annual_row').hide();
	$('#proofofcaddress_row').hide();
	$('#proofoffice').hide();
	$('#repasss_row').hide();
	$('#pincode_row').hide();
	$('#msgerr').hide();
	$('#blankline').show();
	$('#blankline1').show();
	$('#blankline2').show();
	$('#namepapplicantblank, #namepapplicantblank1').show();
	$('#blankline1').show();
	$('#blankline2').show();
	$('#blankline6').show();
	$('#cityid1').hide();
	$('#businesscode').attr('disabled','disabled');
	$('#proofofoffice').attr('disabled','disabled');
	$('#annualincome').attr('disabled','disabled');
	$('#namepapplicant, #namepapplicant1').hide();
	$('#prfid1').hide();
	$('#prfid').hide();
	$('#prfid3').hide();	
	$('#chksalary1').prop('checked',false);
}

function editcustomerdetails(customerno)
{

	var customerslnoedit = $('#customerslnoedit').val();
		var passData = "";
		passData =  "switchtype=editapplicantform"+"&customerslnoedit=" +customerslnoedit  +"&dummy=" + Math.floor(Math.random()*100000000);
		queryString ='ajax/apply-new-pan-card.php';
		var error = $("#butsbuy");
		error.html(getprocessingimagenew());
		ajaxcall0 = $.ajax(
		{
			type: "POST",url: queryString, data: passData, cache: false,dataType: "json",
			success: function(ajaxresponse,status)
			{	
					var response = ajaxresponse;
					  if(response['success'] == '1')
					  {
						$('input[name=category][value="' + response['categoryid']+'"]').prop('checked',true);
						$('#firstnameupp').val(response['firstname']);
						$('#middlenameupp').val(response['middlename']) ;
						$('#lastnameupp').val(response['lastname']);
						$('#print_firstname').val(response['printfirstname']);
						$('#print_lastname').val(response['printlastname']);
						$('#father_fname').val(response['fatherfirstname']);
						$('#father_mname').val(response['fathermiddlename']);
						$('#father_lname').val(response['fatherlastname']);
						$('#dobproof').val(response['dobid']);
						$('#dd').val(response['day']);
						$('#mm').val(response['month']);
						$('#dob_year').val(response['year']);
						
						var dobfield2 = response['year']+'-'+ response['month']+'-'+ response['day'];
						var calculatedage = displayDate(dobfield2);
						if(calculatedage>18)
						{ 
							if($('#chkincomess1').is(':checked'))
							{	//alert(2);
								//alert('It is mandatory to select Representative Assessee if applicant is minor');
								/*$('#chkincomess1').focus();*/
								$('#radiv').hide();
								$('#chkincomess1').prop('checked', false);
								$('#chkincomess1').attr("disabled", true);
							}else{ //alert(3);
								$('#radiv').hide();
								$('#chkincomess1').prop('checked', false);
								$('#chkincomess1').attr("disabled", true);		  
							}		
						}
						
						
						$('#blankline').hide();
						$('#blankline1').hide();
						$('#blankline2').hide();
						$('#prfid').show();
						$('#prfid').html(response['iddesc'])
						$('#prfid1').show();
						$('#prfid1').html(response['proofofaddress']);
						$('#prfid3').show();
						$('#prfid3').html(response['dobdecsription']);
						$('#namepapplicantblank, #namepapplicantblank1').hide();
						$('#namepapplicant, #namepapplicant1').show();
						$('#namepapplicant, #namepapplicant1').html(response['fullname']);
						if(response['landlinecodeval'] !=' ')
						$('#codenumb').val(response['landlinecodeval']);
						if(response['landlinenumberval'] !=' ')
						$('#codephn').val(response['landlinenumberval']);
						if(response['aadhaarnumbval']!=' ')
						$('#aadharnumber').val(response['aadhaarnumbval']);
						if(response['genderid'] == '0')
						{
							document.getElementById("gender1").checked=true;
							$('#gender1').prop('checked',true);
							$('#gender2').prop('checked',false);
							
						}
						else
						{
							document.getElementById("gender2").checked=true;
							$('#gender2').prop('checked',true);
							$('#gender1').prop('checked',false);
							
						}
						
						if(response['maritalstatusid'] == '0')
						{
							document.getElementById("RadioGroup10").checked=true;
							$('#RadioGroup10').prop('checked',true);
							$('#RadioGroup11').prop('checked',false);
						}
						else
						{
							document.getElementById("RadioGroup11").checked=true;
							$('#RadioGroup11').prop('checked',true);
							$('#RadioGroup10').prop('checked',false);
							
						}
						if(response['maritalstatusid'] == '1')
						{
							showmaritalstatus();
						}
						$('input[name=othername][value="' + response['othernameid']+'"]').prop('checked',true);
						
						if(response['othernameid'] == '0')
						{
		
							$('#chk').prop('checked',true);
							enableothernamenamediv();
							$('#firstnameothr').val(response['othrfirstname']);
							$('#middlenameothr').val(response['othrmiddlename']);
							$('#lastnameothr').val(response['othrlastname']);
						}
						$('#proofofidentity').val(response['prfofid']);
						if(response['soiid'] == '6')
						{
							$('#chkincome').prop('checked',true);
							enableincchk()
						
						}
						else
						{
							$('#chkincome').prop('checked',false);
						}
						//$('#annualincome').val(response['soiid']);
						if(response['annualincid']!='0')
						{
							$('#annualincome').val(response['annualincid']);
							$('#annualincome').removeAttr('disabled');
							annualincomechange();
						}else{
							$('#annualincome').val("");
						}
					
						if(response['busid']!='0')
						{
							$('#businesscode').val(response['busid']);
							$('#businesscode').removeAttr('disabled');
							$('#chksalary3').prop('checked',true);
							showbusinesstypesel();
							businesscodechange();
						}
						else
						{
							$('#chksalary3').prop('checked',false);
							$('#businesscode').attr('disabled','disabled');
						}
						showbusinessannual();
						$('#proofofresidence').val(response['proofofresid']);
						residenceaddressshow();
						$('#flatroomnoresidence').val(response['residflat']);
						$('#premiseresidence').val(response['residpremise']);
						$('#roadstreetresidence').val(response['residstreet']);
						$('#arealocalityresidence').val(response['residarea']);
						$('#pincoderesidence').val(response['residpincode']);
						
						$('#searchstate').val(response['residstateid']);
						if(typeof response['residstateid'] !== 'undefined')
						{
						var stateid = response['residstateid'].toString();
							getdistrict('districtcodedisplay',stateid);
						$('#residencedistrict').val(response['residcityid']);
						searchstatechange();
						}
						$('input[name=addressforcom][value="' + response['addcomid']+'"]').prop('checked',true);
					
						if(response['addcomid'] == '1' || response['ofcadrsavailable'] == 'yes')
						{
							if(response['profofcid'] != '0')
							{
							$('#proofofoffice').val(response['profofcid']);
							}
							
							if(response['orgname']!=0)
							$('#nameofofc').val(response['orgname']);
							if(response['ofcflat']!=0)
							$('#floorrommno').val(response['ofcflat']);
							if(response['ofcpremise']!=0)
							$('#nameofpremis').val(response['ofcpremise']);
							if(response['ofcstreet']!=0)
							$('#roadstreet').val(response['ofcstreet']);
							if(response['ofcarea']!=0)
							$('#arealocaldiv').val(response['ofcarea']);
							if(response['ofcpincode']!='0')
							$('#pincodezipcode').val(response['ofcpincode']);
							$('#stateunion').val(response['ofcstateid']);
							/*$('#proofofoffice').removeAttr('disabled');
							$('#proofofoffice').css('color','black');*/
												
							if(response['addcomid'] == '1')
							{
							$('#proofofoffice').removeAttr('disabled');
							officemand();
							}
						    else
							{
							officemandhide();
							}
							
							var ofcstateid = response['ofcstateid'].toString();
						
							getdistrict1('districtcodedisplay1',ofcstateid);
							stateunionchange();
							$('#residencedistrict1').val(response['ofccityid']);
						}
						$('input[name=repass][value="' + response['raavailablility']+'"]').prop('checked',true);
						if(response['raavailablility'] == '1')
						{
							/*representiveassshow();*/
							showra();
							$('#radiv').show();
							$('#chkincomess1').prop('checked',true);
							$('input[name=rstitle][value="' + response['ratitle']+'"]').prop('checked',true);
							$('#rafirstname').val(response['rafirstname']);
							$('#ramiddlename').val(response['ramiddlename']);
							$('#ralastname').val(response['ralastname']);
							$('#ra_flatroom').val(response['raflatno']);
							$('#ra_premise').val(response['rapremise']);
							$('#ra_roadstreet').val(response['raresidstreet']);
							$('#ra_area').val(response['raresidarea']);
							$('#ra_pinzip').val(response['raresidpincode']);
							$('#stateunion1').val(response['rastateid']);
							if(typeof response['rastateid'] !== 'undefined')
							{
								
							var stateid1 = response['rastateid'].toString();
						
								getdistrict2('districtcodedisplay2',stateid1);
							$('#residencedistrict2').val(response['racityid']);
							stateunion1change();
							}
						}
						else
						{
							$('#radiv').hide();
						}
						/*$('#chkincome').prop('checked',true);*/
						if(response['salaryval'] == '1')
						{
							$('#chksalary1').prop('checked',true);
						}
						else
						{
							$('#chksalary1').prop('checked',false);	
						}
						
						if(response['houseval'] == '3')
						{
							$('#chksalary2').prop('checked',true);
						}
						else
						{
							$('#chksalary2').prop('checked',false);	
						}
						
						if(response['capval'] == '4')
						{
							$('#chksalary4').prop('checked',true);
						}
						else
						{
							$('#chksalary4').prop('checked',false);	
						}
						
						if(response['incomeother'] == '5')
						{
							$('#chksalary5').prop('checked',true);
						}
						else
						{
							$('#chksalary5').prop('checked',false);	
						}
						
						$('#emailids').val(response['emailid']);
						$('#mobilenumber').val(response['mobile']);
						$('#cityid1').html(response['residcity']);
						$('#blankline6').hide();
						$('#cityid1').show();
						//$('#cityofresidence').val(response['pincodecityid']);
						//citychange();
				}
				else
				{
					 resetvalues();
				}
			}, 
			error: function(jqXHR,textStatus)
			{
				if(jqXHR.status!='200' && jqXHR.status!='')
					error.html(errorstatuscodecheck(jqXHR.status));
				else 
					error.html(errorstatustextcheck(textStatus));	
			}
		});		
	
}

function enableincome()
{
	if( ($('#chksalary1').is(':checked')) || ($('#chksalary2').is(':checked')) || ($('#chksalary3').is(':checked')) ||($('#chksalary4').is(':checked')) || ($('#chksalary5').is(':checked')) )
	{
		$('#annualincome').removeAttr('disabled');
		
	}
	else
	{
		$('#annualincome').val('');
		//$('#annualincome').addClass("empty");
		$('#annualincome').attr('disabled','disabled');
		
	}
	
}

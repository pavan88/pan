function allnumeric(inputtxt)  
   {  
      var numbers = /^[0-9]+$/;  
      if(inputtxt.match(numbers))  
      {  
      return true;  
      }  
      else  
      {  
      return false;  
      }  
   }   // JavaScript Document

function in_array(checkvalue, arrayobject) 
{
	//alert(checkvalue);
	for(var i = 0, l = arrayobject.length; i < l; i++) 
	{
		if(arrayobject[i] == checkvalue) 
		{
			return true;
		}
	}
	return false;
}


function validateisAlphabet(string)
{
	var numericExpression = /^[a-zA-Z]+$/i;
	if(string.match(numericExpression)) return true;
	else return false;
}

function validatepincodenumber(inputtxt)  
   {  
      var numbers = /^(^[5]|[6]|[7]\d{5})+$/i;  
      if(inputtxt.match(numbers))  
      {  
      return true;  
      }  
      else  
      {  
      return false;  
      }  
   }  


function validatestdcode(stdcodenumber)
{
	var numericExpression = /^[0]+[0-9]{2,4}$/i;
	if(stdcodenumber.match(numericExpression)) return true;
	else return false;
}


function validatepincodenew(pincodenumber)
{
	//var numericExpression = /^(^[5]\d{6})$/i;
	var numericExpression = /^[1|2|3|4|5|6|7|8|9]+[0-9]{5}$/i;
	if(pincodenumber.match(numericExpression)) return true;
	else return false;
}

function validatestdcode(stdcodenumber)
{
	var numericExpression = /^[0]+[0-9]{2,4}$/i;
	if(stdcodenumber.match(numericExpression)) return true;
	else return false;
}

function validatephone(phonenumber)
{
	var numericExpression = /^[^9]\d{5,7}(?:(?:([,][\s]|[;][\s]|[,;])[^9]\d{5,7}))*$/i;
	if(phonenumber.match(numericExpression)) return true;
	else return false;
}
function emailvalidation(emailid)
{
	var emailExp = /^[A-Z0-9\._%-]+@[A-Z0-9\.-]+\.[A-Z]{2,4}(?:(?:[,;][A-Z0-9\._%-]+@[A-Z0-9\.-]+))*$/i;
	var emails = emailid.replace(/[,\s]*,[,\s]*/g, ",").replace(/^,/, "").replace(/,$/, "");
	if(emails.match(emailExp)) { return true; }
	else { return false; }
}





function alphanumeric(emailid) {
	  var regularExpression = /^[a-zA-Z0-9]+$/;
	  var valid = regularExpression.test(emailid);
	  if(valid)
	  return true;
	  else return false;
	  
    }

function isNumber(event) {
  var key = window.event ? event.keyCode : event.which;
  //vKey = 86, cKey = 67
  
  if (event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 9 || event.keyCode == 17 || event.keyCode == 37 || event.keyCode == 39 || (event.keyCode == 17 && event.keyCode == 86) || (event.keyCode == 17 && event.keyCode == 67)) 			  {
	  return true;
  }
  else if ( key < 48 || key > 57 ) {
	  return false;
  }
  else return true;
}

function initialvalidation(field)
{
 var fieldid = field;	
 var field = $('#'+field);	
 if(field.val())
  {
	 var fieldval =  field.val();
	 var trimmedval = $.trim(fieldval);
	 var fieldlen = trimmedval.length;
	 if(fieldlen<2)
	 {
		alert('Initials/Whitespaces at beginning are not permitted in first name,middle name and last name');
		field.focus();
		if(fieldid == 'firstnameupp')
		{
			$('#print_firstname').val('');
		}
		field.val('');
		return false; 
	 }
	 else
	 {
		return true; 
	 }
  }	
}


// Allow only Alphabates and White Space for Name
function lettersOnly(evt) {
	evt = (evt) ? evt : event;
	var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
	  ((evt.which) ? evt.which : 0));
	if( String.fromCharCode(charCode) == "'")
		return false;
	if (charCode == 32 || charCode ==8 || charCode == 46 || charCode == 37 || charCode == 39)
		return true;
	if (charCode > 31 && (charCode < 65 || charCode > 90) &&
	  (charCode < 97 || charCode > 122 || charCode == 222 || String.fromCharCode(charCode) == '"')){
		return false;
	}
	else
		return true;
}

function validateamountfield(amount)
{
	var numericExpression = /^[+]?[0-9]\d{0,9}?%?$/;
	if(amount.match(numericExpression)) return true;
	else return false;
}
function validatecell(cellnumber)
{
	var numericExpression = /^[7|8|9]\d{9}(?:(?:([,][\s]|[;][\s]|[,;])[7|8|9]\d{9}))*$/i;
	//var numericExpression = /^((\+)?(\d{2}[-]))?(\d{10})?$/i ;
	if(cellnumber.match(numericExpression)) return true;
	else return false;
}
function getprocessingimage()
{
	var imagehtml = '<img src="./Images/loading.gif" border="0"/>';
	return imagehtml;
}
function scripterror()
{
	var msghtml = '<div >Unable to connect...</div>';
	return msghtml;
}

function invaliderror()
{
	var msghtml = '<div>Invalid Response</div>';
	return msghtml;
}


function errorstatuscodecheck(statuscode)
{
 switch(statuscode)
 {
	case 404:
	{
	  var msghtml = '<div class="informationBlock errormegbox">Network Error</div>';
	  return msghtml;	
	}
	break;
	case 401:
	{
	  var msghtml = '<div class="informationBlock errormegbox"> Unauthorized - authentication is required and was not provided</div>';
	  return msghtml;	
	}
	break;
	case 403:
	{
	  var msghtml = '<div class="informationBlock errormegbox">Forbidden - the server refuses to respond</div>';
	  return msghtml;	
	}
	break;
	case 500:
	{
	  var msghtml = '<div class="informationBlock errormegbox">Internal Server Error</div>';
	  return msghtml;	
	}
	break;
	default:
	{
	   var msghtml = '<div class="informationBlock errormegbox">Something went wrong..</div>';
	  return msghtml;
	}
	break;
 }
	
}

function errorstatustextcheck(statustext)
{
 switch(statustext)
 {
	case 'parsererror':
	{
	  var msghtml = '<div>Requested JSON parse failed.</div>';
	  return msghtml;	
	}
	break;
	case 'timeout':
	{
	  var msghtml = '<div >Time out error</div>';
	  return msghtml;	
	}
	break;
	case 'abort':
	{
	  var msghtml = '<div >Ajax request aborted.</div>';
	  return msghtml;	
	}
	break;
	default:
	{
	  var msghtml = '<div ">Something went wrong..</div>';
	  return msghtml;
	}
	break
 }
	
}




function trimdotspaces(text)
{
	var output = text.replace(/ /g,""); 
	var output2 = output.replace(/\./g,"");
	return output2; 
}
function sessiondiv()
{
	if($('#sessionselect').is(':visible')) 
		$('#sessionselect').hide();
	else
		$('#sessionselect').show();
}

function enableformelemnts()
{
	var count = document.submitform.elements.length;
	for (i=0; i<count; i++) 
	{
		var element = document.submitform.elements[i]; 
		element.disabled=false; 
	}
}


function disableformelemnts()
{
	var count = document.submitform.elements.length;
	for (i=0; i<count; i++) 
	{
		var element = document.submitform.elements[i]; 
		element.disabled=true;
		//$("img").attr('disabled', true); 
	}
}

function displayerrormessage(message)
{
	var msg = '<div class="informationBlock errormegbox">' + message + '</div>';
	return msg;
}

function displaysuccessmessage(message)
{
	var msg = '<div class="informationblocksuccess successmegbox">' + message + '</div>';
	return msg;
}

function autochecknew(selectid,comparevalue)
{
		var selection = selectid;
		if('yes' == comparevalue)
		{
			$(selection).attr('checked',true)
			return;
		}
		else
		{
			$(selection).attr('checked',false)
			return;
		}
}

function validateamountfield(amount)
{
	var numericExpression = /^[+]?[0-9]\d{0,9}?%?$/;
	if(amount.match(numericExpression)) return true;
	else return false;
}

function tabopen3(activetab,tabgroupname)
{
	var totaltabs = 3;
	var activetabheadclass = "tabheadsmallactive";
	var tabheadclass = "tabheadsmall";
	for(var i=1; i<=totaltabs; i++)
	{
		var tabhead = tabgroupname + 'h' + i;
		var tabcontent = tabgroupname + 'c' + i;
		if(i == activetab)
		{
			document.getElementById(tabhead).className = activetabheadclass;
			document.getElementById(tabcontent).style.display = 'block';
		}
		else
		{
			document.getElementById(tabhead).className = tabheadclass;
			document.getElementById(tabcontent).style.display = 'none';
		}
	}

}

function tabopen2(activetab,tabgroupname)
{

	//alert('test');
	var totaltabs = 2;
	var activetabheadclass = "tabheadsmallactive";
	var tabheadclass = "tabheadsmall";
	for(var i=1; i<=totaltabs; i++)
	{
		var tabhead = tabgroupname + 'h' + i;
		var tabcontent = tabgroupname + 'c' + i;
		if(i == activetab)
		{
			if(i=='1')
			{
			  //alert('firsttab')
			  $('#onlinepay').prop('checked',true);
 			  $('#demanddraft').prop('checked',false);	
			}
			document.getElementById(tabhead).className = activetabheadclass;
			document.getElementById(tabcontent).style.display = 'block';
		}
		else
		{
			if(i=='1')
			{
			  //alert('secondtab')
			  $('#demanddraft').prop('checked',true);
 			  $('#onlinepay').prop('checked',false);	
			}
			document.getElementById(tabhead).className = tabheadclass;
			document.getElementById(tabcontent).style.display = 'none';
		}
	}

}

function tabopen1(activetab,tabgroupname)
{
	
	var totaltabs = 1;
	var activetabheadclass = "tabheadsmallactive";
	var tabheadclass = "tabheadsmall";
	for(var i=1; i<=totaltabs; i++)
	{
		var tabhead = tabgroupname + 'h' + i;
		var tabcontent = tabgroupname + 'c' + i;
		if(i == activetab)
		{
			document.getElementById(tabhead).className = activetabheadclass;
			document.getElementById(tabcontent).style.display = 'block';
		}
		else
		{
			document.getElementById(tabhead).className = tabheadclass;
			document.getElementById(tabcontent).style.display = 'none';
		}
	}

}

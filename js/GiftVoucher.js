function checkformGiftVoucher() {
	
	var giftvoucher = "";
	var errormessage = "";
	var firstname = "";
	var lastname = "";
	var phonenumber = "";
	var emailaddress = "";
	var street = "";
	var suburb = "";
	var city = "";
	var postcode = "";
	var payment = "";
	
	//check if all fields have been filled out and check validity of input
    if (document.getElementById('firstName').value == "") {		
    	errormessage += "First name. \n";
		document.getElementById('firstName').style.borderColor = "red";
	} else if(document.getElementById('firstName').value != "") {
		document.getElementById('firstName').style.borderColor = "initial";
		}
    if (document.getElementById('lastName').value == "") {		
    	errormessage += "Last name. \n";
		document.getElementById('lastName').style.borderColor = "red";
	} else if(document.getElementById('lastName').value != "") {
		document.getElementById('lastName').style.borderColor = "initial";
		}
	if (document.getElementById('phoneNumber').value == "") {		
    	errormessage += "Phone number. \n";
		document.getElementById('phoneNumber').style.borderColor = "red";	
	} 	//if field is not empty - check if phone number is valid
		else if(document.getElementById('phoneNumber').value != "") {
		if (isNaN(document.getElementById('phoneNumber').value)) {
			document.getElementById('phoneNumber').style.borderColor = "red";
			alert("Invalid phone number.");
			errormessage += "Phone number.";
		}
		if (document.getElementById('phoneNumber').value.length < 9 || document.getElementById('phoneNumber').value.length > 11) {
			document.getElementById('phoneNumber').style.borderColor = "red";
			alert("Invalid phone number length.");
			errormessage += "Phone number. \n";
		}
		//if field is valid unhighlight input field
		else {
			document.getElementById('phoneNumber').style.borderColor = "initial";
		}		
	}	
	if (document.getElementById('Email').value == "") {		
    	errormessage += "Email. \n";
		document.getElementById('Email').style.borderColor = "red";
	} else if(document.getElementById('Email').value != "") {
		var filter = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
		if (!filter.test(document.getElementById('Email').value)) {
			document.getElementById('Email').style.borderColor = "red";
			alert('Invalid email address');
			errormessage += "Email. \n";
		}
		if (filter.test(document.getElementById('Email').value)){
			document.getElementById('Email').style.borderColor = "initial";
		}
	}
	if (document.getElementById('Street').value == "") {		
    	errormessage += "Street. \n";
		document.getElementById('Street').style.borderColor = "red";
	} else if(document.getElementById('Street').value != "") {
		document.getElementById('Street').style.borderColor = "initial";
		}
	if (document.getElementById('Suburb').value == "") {		
    	errormessage += "Suburb. \n";
		document.getElementById('Suburb').style.borderColor = "red";
	} else if(document.getElementById('Suburb').value != "") {
		document.getElementById('Suburb').style.borderColor = "initial";
		}	
	if (document.getElementById('City').value == "") {		
    	errormessage += "City. \n";
		document.getElementById('City').style.borderColor = "red";
	} else if(document.getElementById('City').value != "") {
		document.getElementById('City').style.borderColor = "initial";
		}
		if (document.getElementById('postCode').value == "") {		
			errormessage += "Postcode. \n";
			document.getElementById('postCode').style.borderColor = "red";
	} else if(document.getElementById('postCode').value != "") {
		if (document.getElementById('postCode').value.length != 4 ||isNaN(document.getElementById('postCode').value)) {
		document.getElementById('postCode').style.borderColor = "red";
		alert("Invalid postcode.");
		return false;
		}
		else {
			document.getElementById('postCode').style.borderColor = "initial";
			}
	}
	//display error message (if any)
	if (errormessage != ""){		
		alert("Please complete the following fields: \n" + errormessage);
		return false;
	}
	//get field input values
	else {
		
		giftvoucher = document.getElementById('giftVoucher').value;
		firstname = document.getElementById('firstName').value;
		lastname = document.getElementById('lastName').value;
		phonenumber = document.getElementById('phoneNumber').value;
		email = document.getElementById('Email').value;
		street = document.getElementById('Street').value;
		suburb = document.getElementById('Suburb').value;
		city = document.getElementById('City').value;
		postcode = document.getElementById('postCode').value;
		payment = document.getElementById('Payment').value;
		
		//run some ajax if conditions are met
		
		alert("Thankou, your details have been successfully submitted.\nYou should receive your vouchers by mail in the next few days.");
		return true;
	}
}

function checkPostcodeNumeric(inputtxt) {
	if (isNaN(inputtxt)) {
		document.getElementById('postCode').style.borderColor = "red";
		alert("Invalid postcode.");
	}
	if (inputtxt.length != 4) {
		document.getElementById('postCode').style.borderColor = "red";
		alert("Invalid postcode length.");
	}
	else {
		document.getElementById('postCode').style.borderColor = "initial";
	}
}

function resetForm() {
	alert("resetForm()...initiate");
	document.getElementByName("giftvoucherForm").reset();
	document.getElementByName('firstName').style.borderColor = "initial";
	document.getElementByName('lastName').style.borderColor = "initial";
	document.getElementByName('phoneNumber').style.borderColor = "initial";
	document.getElementByName('Email').style.borderColor = "initial";
	document.getElementByName('Street').style.borderColor = "initial";
	document.getElementByName('Suburb').style.borderColor = "initial";
	document.getElementByName('City').style.borderColor = "initial";
	document.getElementByName('postCode').style.borderColor = "initial";
	return false;
	
}	

function disableEnterKey(e){ 
	//create a variable to hold the number of the key that was pressed      
	var key; 
 
    //if the users browser is internet explorer 
    if(window.event){ 
      
    //store the key code (Key number) of the pressed key 
    key = window.event.keyCode; 
      
    //otherwise, it is firefox 
    } else { 
      
    //store the key code (Key number) of the pressed key 
    key = e.which;      
    } 
      
    //if key 13 is pressed (the enter key) 
    if(key == 13){ 
      
    //do nothing 
    return false; 
      
    //otherwise 
    } else {       
    //continue as normal (allow the key press for keys other than "enter") 
    return true; 
    }     
} 

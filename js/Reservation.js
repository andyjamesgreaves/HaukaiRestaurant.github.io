//check each field in form is valid  	
function checkformReservation() {		 
	
	var errormessage = "";
	var firstname = "";
	var lastname = "";
	var phonenumber = "";
	var emailaddress = "";
	var date = "";
	var time = "";
	var people = "";
	
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
	} else if(document.getElementById('phoneNumber').value != "") {
		if (isNaN(document.getElementById('phoneNumber').value)) {
			document.getElementById('phoneNumber').style.borderColor = "red";
			alert("Invalid phone number.");
			errormessage += "Phone number. \n";
		}
		if (document.getElementById('phoneNumber').value.length < 9 || document.getElementById('phoneNumber').value.length > 11) {
			document.getElementById('phoneNumber').style.borderColor = "red";
			alert("Invalid phone number length.");
			errormessage += "Phone number length invalid. \n";
		}
		else {
			document.getElementById('phoneNumber').style.borderColor = "initial";
		}		
	}
	if (document.getElementById('Email').value == "") {		
    	errormessage += "Email. \n";
		document.getElementById('Email').style.borderColor = "red";		
	}	//if field is not empty - check if email is valid
		else if(document.getElementById('Email').value != "") {		
			var filter = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
			if (!filter.test(document.getElementById('Email').value)) {
				document.getElementById('Email').style.borderColor = "red";
				alert('Invalid email address');
				errormessage += "Email.";
			}
		//if email is valid unhighlight input field
		if (filter.test(document.getElementById('Email').value)){
			document.getElementById('Email').style.borderColor = "initial";
		}
	}
	//display error message (if any)
	if (errormessage != ""){		
		alert("Please complete the following fields: \n" + errormessage);
		return false;
	} 
	
	//get field input values*
	else {
		firstname = document.getElementById('firstName').value;
		lastname = document.getElementById('lastName').value;
		phonenumber = document.getElementById('phoneNumber').value;
		email = document.getElementById('Email').value;
		date = document.getElementById('Date').value;
		people = document.getElementById('People').value;
		
		/*run some ajax if conditions are met*/
		
		alert("Your details have been successfully submitted.\nYou should receive your vouchers by mail in the next few days.");
		return true;
	}
}		

//reset the form when the cancel button is clicked		
function resetForm() {
	alert("Are you sure?");
	document.getElementById("giftvoucherForm").reset();
	document.getElementById('firstName').style.borderColor = "initial";
	document.getElementById('lastName').style.borderColor = "initial";
	document.getElementById('phoneNumber').style.borderColor = "initial";
	document.getElementById('email').style.borderColor = "initial";
	document.getElementById('street').style.borderColor = "initial";
	document.getElementById('suburb').style.borderColor = "initial";
	document.getElementById('city').style.borderColor = "initial";
	document.getElementById('postcode').style.borderColor = "initial";
}


	

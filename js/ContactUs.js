//check each field in form is valid  	
function checkMessageUs() {		 
	
	var errormessage = "";
	var txtmessage = "";
	var emailaddress = "";
	
	//check if all fields have been filled out and check validity of input	
    if (document.getElementById('textArea').value == "") {		
    	errormessage += "Text area. \n";
		document.getElementById('textArea').style.borderColor = "red";
	} else if(document.getElementById('textArea').value != "") {
		document.getElementById('textArea').style.borderColor = "initial";
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
		textmessage = document.getElementById('textArea').value;
		email = document.getElementById('Email').value;
		
		/*run some ajax if conditions are met*/
		
		alert("Your message has been successfully submitted.\n");
		return true;
	}
}		

//reset the form when the cancel button is clicked		
function resetForm() {
	alert("Are you sure?");
	document.getElementById("messageContainer").reset();
	document.getElementById('textArea').style.borderColor = "initial";
	document.getElementById('Email').style.borderColor = "initial";
}


	

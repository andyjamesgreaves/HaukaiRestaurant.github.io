//check username and password  	
function checkUsernamePassword() {	
	var username;
	var password;
	var user="username";
	var pass="password";
	username=prompt('Username');
	password=prompt('Password');
	if (username==user && password==pass) {
		alert('Authentication successful, click OK to proceed to Roster');
		window.location="Hours/Roster.html";
	}
	else {
		alert('The username or password is incorrect, please try again');
	}
}

	

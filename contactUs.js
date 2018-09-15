function validateItems() {
	var myText = document.forms["contactinfo"]["myTextInput"].value;
	var email = document.forms["contactinfo"]["emailInput"].value;
	var phone = document.forms["contactinfo"]["phoneInput"].value;
	var reason = document.forms["contactinfo"]["inquiry"].value;
	var additional = document.forms["contactinfo"]["additionalInfo"].value;
	var beentoRest = document.forms["contactinfo"]["answer"].value;
	var bestday = document.forms["contactinfo"]["days"].value;
	
	if (myText == "") {
		alert("Your name should be filled in.");
		document.forms["contactinfo"]["myTextInput"]
			.parentElement.className = "form-group has-error";
			document.forms["contactinfo"]["myTextInput"].focus();
			return false;
	}
	if (email == "") {
		alert("Your email should be filled in.");
		document.forms["contactinfo"]["emailInput"]
			.parentElement.className = "form-group has-error";
			document.forms["contactinfo"]["emailInput"].focus();
			return false;
	}
	if (phone == "" || isNaN(phone)) {
		alert("Your phone number should be filled in with numbers.");
		document.forms["contactinfo"]["phoneInput"]
			.parentElement.className = "form-group has-error";
			document.forms["contactinfo"]["phoneInput"].focus();
			return false;
	}
	if (additional == "") {
		alert("If there is no additioanl information, please put N/A.");
		document.forms["contactinfo"]["additionalInfo"]
			.parentElement.className = "form-group has-error";
			document.forms["contactinfo"]["additionalInfo"].focus();
			return false;
	}
	if (bestday == "") {
		alert("Please choose a day.");
		document.forms["contactinfo"]["days"]
			.parentElement.className = "form-group has-error";
			document.forms["contactinfo"]["days"].focus();
			return false;
	}
	return false;
}
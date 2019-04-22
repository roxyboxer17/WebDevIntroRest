// JavaScript source code
function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["restContact"].elements.length; 
        loopCounter++) {
        if (document.forms["restContact"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["restContact"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 
function resetForm() {
    clearErrors();
    document.forms["restContact"]["name"].innerText = "";
    document.forms["restContact"]["email"].innerText = "";
	document.forms["restContact"]["phone"].innerText = "";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["restContact"]["name"].focus();
}
function validateForm() {
	var name = document.forms["restContact"]["name"].value;
	var email = document.forms["restContact"]["email"].value;
	var phone = document.forms["restContact"]["phone"].value;
	var inquiry1 = document.forms["restContact"]["inquiry1"].value;
	var visited1 = document.forms["restContact"]["visited"].value;
	if (name == "") {
    alert("Name must be filled out");
    return false;
	}
	if (email == "") {
    alert("eMail must be filled out");
    return false;
	}
	if (phone == "") {
    alert("Phone must be filled out");
    return false;
	}

	if (!document.getElementById("noVisit").checked && !document.getElementById("yesVisit").checked)
            {alert("Please specify if you have visited the restaurant");
            return false;}

			var contactDay="Placeholder";
		if (document.getElementById("contactDay1").checked) {var contactDay = "Monday";}
		else if (document.getElementById("contactDay2").checked) {var contactDay = "Tuesday";} 
		else if (document.getElementById("contactDay3").checked) {var contactDay = "Wednesday";} 
		else if (document.getElementById("contactDay4").checked) {var contactDay = "Thursday";} 
		else if (document.getElementById("contactDay5").checked) {var contactDay = "Friday";} 
	else {alert("Please select a preferred contact day");
	return false;} 

	alert("Thank you for submitting your feedback.");
	return false;
	}
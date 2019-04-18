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
	var visited1 = document.forms["restContact"]["visited1"].value;
	myCheckbox();
	var contactDay1 = document.forms["restContact"]["contactDay"].value; 
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
	if (inquiry1 == "") {
    alert("Inquiry must be selected");
    return false;
	}
	if (visited1 == "") {
    alert("Visited must be selected");
    return false;
	}
	 
function myCheckbox() {
    
//function myFunction() {
 // var x = document.getElementByName("contactDay").checked;
 // document.getElementById("demo").innerHTML = x;
//  console.log("demo");
//}

  var i,
  chks = document.getElementsByName("contactDay[]");
  
  for (i = 0; i < chks.length; i++){
    if (chks[i].checked){
        
      alert("something checked") ;
        
        return true;
    }else{
        alert("No item selected");
        return false;
    }
	}
}
	
	//if (contactDay1 == "") {
   // alert("Please select a preferred day for contact");
   // return false;
	//}
	alert("Thank you for submitting your feedback.");
	return false;
	}
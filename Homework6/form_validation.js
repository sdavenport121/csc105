const name_field = document.getElementById("name");
const email_field = document.getElementById("email");
const message_field = document.getElementById("message");

const name_error = document.getElementById("name_error");
const email_error = document.getElementById("email_error");
const message_error = document.getElementById("message_error");


function validateName(name) {
    console.log("Validating name:", name); // Debug log
    name = name.trim();
    if (name === "") {
        name_error.innerText = "Your name cannot be blank.";
        return false;
    } else if (!name.includes(" ")) {
        name_error.innerText = "Please include both first and last names.";
        return false;
    } else {
        name_error.innerText = "";
        return true;
    }
}


function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        email_error.innerText = "Email cannot be blank.";
        return false;
    } else if (!emailPattern.test(email)) {
        email_error.innerText = "Please enter a valid email address.";
        return false;
    } else {
        email_error.innerText = "";
        return true;
    }
}


function validateMessage(message) {
    if (!message) {
        message_error.innerText = "Message cannot be blank.";
        return false;
    } else if (message.length > 300) {
        message_error.innerText = "Message cannot exceed 300 characters.";
        return false;
    } else {
        message_error.innerText = "";
        return true;
    }
}



function submitForm(e) {
	
	let verified = true;
	
	const name = name_field.value;
	const email = email_field.value;
	const message = message_field.value;
	
	if (!validateName(name)) {
		verified = false;
	}
	
	if (!validateEmail(email)) {
		verified = false;
	}
	
	if (!validateMessage(message)) {
		verified = false;
	}
	
	if(!verified) {
		e.preventDefault();
	}
}

document.getElementById("messageForm").addEventListener("submit", submitForm);






document.getElementById("registerForm").addEventListener("submit", function(event){
    event.preventDefault(); 

    // Get user input
    let firstname=document.getElementById("firstname").value.trim();
    let lastname=document.getElementById("lastname").value.trim();
    let dateofbirth= document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let phone number = document.getElementById("tel").value;
    let email = document.getElementById("email").value.trim();
    let trn = document.getElementById("trn").value;
    let password = document.getElementById("password").value.trim();
    let confirm = document.getElementById("confirm").value.trim();

    // Basic validation
    if(firstname === "" || lastname===""| dateofbirth === "" || gender===""| phone number===""| email===""|trn=== "" || password === "" || confirm === ""){
        alert("All fields are required.");
        return;
    }

    // Validate email format
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern)){
        alert("Please enter a valid email address.");
        return;
    }

    // Check password length
    if(password.length < 8){
        alert("Password must be at least 8 characters long.");
        return;
    }

    // Check if passwords match
    if(password !== confirm){
        alert("Passwords do not match. Please try again.");
        return;
    }
    let RegistrationData=JSON.parse(localStorage.setItem("RegistrationData")||[];
    RegistrationData.push();
    // Success message
    alert("Registration successful! (Demo only)");
    window.location.href = "login.html"; 
});






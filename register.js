

document.getElementById("registerForm").addEventListener("submit", function(event){
    event.preventDefault(); 

    // Get user input
    let fullname = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirm = document.getElementById("confirm").value.trim();

    // Basic validation
    if(fullname === "" || email === "" || username === "" || password === "" || confirm === ""){
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
    if(password.length < 6){
        alert("Password must be at least 6 characters long.");
        return;
    }

    // Check if passwords match
    if(password !== confirm){
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Success message
    alert("Registration successful! (Demo only)");
    window.location.href = "login.html"; 
});

// === LOGIN PAGE VALIDATION ===
document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); 
 
    let trn= document.getElementById("trn").value;
    let password = document.getElementById("password").value.trim();
    let attempts=0;

    if(trn=== "" || password === ""){
        alert("Please enter both trn and password.");
    } else {
        let RegistrationData=JSON.parse(localStorage.getItem("RegistrationData");
        if (RegistrationData.some(u=>u.trn==trn && u=>u.password===password)
        {
             alert("Login successful! (Demo only)");
             window.location.href = "index.html";
        }
        else
        {
            alert("Incorrect username or password...try again");
            attempts++;
            if (attempts==3)
            {
               alert("Your account has been locked");
            }
        }
        
    }
});



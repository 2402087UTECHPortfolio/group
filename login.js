// === LOGIN PAGE VALIDATION ===
let attempts=0;

document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); 
 
    let trn= document.getElementById("trn").value;
    let password = document.getElementById("password").value.trim();

    if(trn=== "" || password === ""){
        alert("Please enter both trn and password.");
    } else {
        let RegistrationData=JSON.parse(localStorage.getItem("RegistrationData")) || [];
        let user=RegistrationData.find(u=>u.trn==trn && u.password===password);
        if(user)
        {
             alert("Login successful!");
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




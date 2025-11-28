// === LOGIN PAGE VALIDATION ===
document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); e

    let trn= document.getElementById("trn").value;
    let password = document.getElementById("password").value.trim();

    if(trn=== "" || password === ""){
        alert("Please enter both trn and password.");
    } else {
        alert("Login successful! (Demo only)");
        
        window.location.href = "index.html";
    }
});


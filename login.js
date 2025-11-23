// === LOGIN PAGE VALIDATION ===
document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); e

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if(username === "" || password === ""){
        alert("Please enter both username and password.");
    } else {
        alert("Login successful! (Demo only)");
        
        window.location.href = "index.html";
    }
});

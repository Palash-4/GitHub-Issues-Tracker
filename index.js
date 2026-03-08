// Login
function login() {
    // console.log("login");
    const username = document.getElementById("username").value.trim()
    const password = document.getElementById("password").value.trim()

    if (username === "admin" && password === "admin123") {
        window.location.href = "dashboard.html"
    }
    else {
        alert("Invalid username or password")
    }
}
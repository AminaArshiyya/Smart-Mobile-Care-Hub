// ==========================================
// SMART MOBILE CARE HUB - LOGIN.JS
// ==========================================


// USER LOGIN
function userLogin() {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "") {
        alert("Please enter username.");
        return;
    }

    if (password === "") {
        alert("Please enter password.");
        return;
    }

    localStorage.setItem("loggedInUser", username);
    localStorage.setItem("userType", "user");

    // User Dashboard
    window.location.href = "./user/user-dashboard.html";
}


// ADMIN LOGIN
function adminLogin() {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "") {
        alert("Please enter username.");
        return;
    }

    if (password === "") {
        alert("Please enter password.");
        return;
    }

    localStorage.setItem("loggedInUser", username);
    localStorage.setItem("userType", "admin");

    // Admin Dashboard
    window.location.href = "./admin/admin-dashboard.html";
}


// ==========================================
// SHOW / HIDE PASSWORD
// ==========================================

const passwordEye = document.getElementById("passwordEye");
const passwordInput = document.getElementById("password");

if (passwordEye && passwordInput) {

    passwordEye.addEventListener("click", function () {

        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            passwordEye.innerHTML =
                '<i class="fa-solid fa-eye-slash"></i>';

        } else {

            passwordInput.type = "password";

            passwordEye.innerHTML =
                '<i class="fa-solid fa-eye"></i>';
        }

    });
}


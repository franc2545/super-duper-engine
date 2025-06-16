// script.js

let balance = parseInt(localStorage.getItem("balance")) || 0;

function updateBalanceDisplay() {
  document.getElementById("balance").innerText = `Balance: Ksh ${balance}`;
}

function earnMoney() {
  balance += 20; // Earn Ksh 20 per video
  localStorage.setItem("balance", balance);
  updateBalanceDisplay();
  alert("You've earned Ksh 20!");
}

function register() {
  alert("Registration successful. Please wait for admin approval.");
  document.getElementById("register-form").classList.add("hidden");
  document.getElementById("login-form").classList.remove("hidden");
}

function login() {
  alert("Login successful!");
  document.getElementById("auth").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
  updateBalanceDisplay();
}

function withdraw() {
  if (balance >= 1000) {
    alert("Withdrawal request sent!");
    balance = 0;
    localStorage.setItem("balance", balance);
    updateBalanceDisplay();
  } else {
    alert("Minimum withdrawal amount is Ksh 1000.");
  }
}

window.onload = updateBalanceDisplay;

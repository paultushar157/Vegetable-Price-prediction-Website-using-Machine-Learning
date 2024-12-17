// Get elements
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginPopup = document.getElementById('loginPopup');
const signupPopup = document.getElementById('signupPopup');
const closeLogin = document.getElementById('closeLogin');
const closeSignup = document.getElementById('closeSignup');

// Show login popup
loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  loginPopup.style.display = 'flex';
});

// Show signup popup
signupBtn.addEventListener('click', (e) => {
  e.preventDefault();
  signupPopup.style.display = 'flex';
});

// Close login popup
closeLogin.addEventListener('click', () => {
  loginPopup.style.display = 'none';
});

// Close signup popup
closeSignup.addEventListener('click', () => {
  signupPopup.style.display = 'none';
});

// Close popup when clicking outside content
window.addEventListener('click', (e) => {
  if (e.target === loginPopup) {
    loginPopup.style.display = 'none';
  }
  if (e.target === signupPopup) {
    signupPopup.style.display = 'none';
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const predictButton = document.querySelector(".predict-btn");
  const predictionTable = document.querySelector(".prediction-table");

  predictButton.addEventListener("click", () => {
    predictionTable.classList.toggle("hidden");
  });
});



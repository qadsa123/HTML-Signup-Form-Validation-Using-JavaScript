function validateSignUp() {
  
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const gender = document.getElementById("gender").value;
  const birthdate = document.getElementById("birthdate").value;
  const address = document.getElementById("address").value.trim();
  const officeContact = document.getElementById("officeContact").value.trim();
  const signupPassword = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const agreeTerms = document.getElementById("agreeTerms").checked;


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{11}$/;

  let errorMessage = "";

 
  if (fullName === "") {
    errorMessage += "Full Name is required.\n";
  }


  if (!emailRegex.test(email)) {
    errorMessage += "Invalid email format. Please enter a valid email address.\n";
  }


  if (!phoneRegex.test(phone)) {
    errorMessage += "Invalid phone number format. Please enter a valid 11-digit phone number.\n";
  }

  if (gender === "") {
    errorMessage += "Please select your gender.\n";
  }

 
  if (birthdate === "") {
    errorMessage += "Please enter your birthdate.\n";
  }

  // Address validation (add your desired format or length check here)
  if (address === "") {
    errorMessage += "Please enter your address.\n";
  }

 
  if (officeContact === "") {
    errorMessage += "Please enter your office contact number.\n";
  }


  if (signupPassword === "") {
    errorMessage += "Please enter a password.\n";
  } else if (signupPassword.length < 8) {
    errorMessage += "Password must be at least 8 characters long.\n";
  } else if (signupPassword !== confirmPassword) {
    errorMessage += "Passwords do not match. Please re-enter your password.\n";
  }


  if (!agreeTerms) {
    errorMessage += "Please agree to the terms and conditions.\n";
  }


  if (errorMessage !== "") {
    alert(errorMessage); 
  } else {
   
    console.log("Form submitted successfully!");
    localStorage.setItem('username', username);

        
        alert('Successfully logged in as ' + username);
}}

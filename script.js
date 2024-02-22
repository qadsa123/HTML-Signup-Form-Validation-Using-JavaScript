

function validateSignUp() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var gender = document.getElementById("gender").value;
    var birthdate = document.getElementById("birthdate").value;
    var address = document.getElementById("address").value;
    var officeContact = document.getElementById("officeContact").value;
    var signupPassword = document.getElementById("signupPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var agreeTerms = document.getElementById("agreeTerms").checked;

   


    if (
        fullName.trim() === "" ||
        email.trim() === "" ||
        !emailRegex.test(email) ||
        phone.trim() === "" ||
        !phoneRegex.test(phone) ||
        gender.trim() === "" ||
        birthdate.trim() === "" ||
        address.trim() === "" ||
        officeContact.trim() === "" ||
        signupPassword.trim() === "" ||
        confirmPassword.trim() === "" ||
        signupPassword.length < 8 ||
        signupPassword !== confirmPassword ||
        !agreeTerms
    ) {
        alert("Please fill in all fields correctly");
    return false
    } else {
    
        alert("Successfully signed up!");
        return true 
    }
}

function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (name === "" || email === "" || password === "" || confirmPassword === "") {
    alert("All fields are required!");
    return false;
  }
  if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
    alert("Enter a valid email address!");
    return false;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters!");
    return false;
  }
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return false;
  }
  alert("Registration successful!");
  return true;
}

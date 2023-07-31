// JavaScript code for the landing page

// Function to handle form submission and display thank you message
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get the form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
  
    // Validate the form fields (you can add your own validation logic here)
  
    // Display thank you message and hide the registration form
    document.getElementById("registration-form").style.display = "none";
    document.getElementById("thankyou-message").style.display = "block";
    document.getElementById("thankyou-name").textContent = name;
  }
  
  // Attach form submission event listener to the registration form
  var registrationForm = document.getElementById("registration-form");
  registrationForm.addEventListener("submit", handleFormSubmission);
  
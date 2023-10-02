// JavaScript code for user information and secret message

// Add event listener to the "Submit" button
document.getElementById("submitButton").addEventListener("click", function () {
    // Get user inputs
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const zipCode = document.getElementById("zipCode").value.trim();

    // Check if first name + last name has more than 20 characters
    const fullName = firstName + ' ' + lastName;
    if (fullName.length > 20) {
        alert("Your name is too long. Please provide a shorter name.");
        return; // Exit the function
    }

    // Check if zip code is valid (contains 5 digits)
    if (!/^\d{5}$/.test(zipCode)) {
        alert("Invalid zip code. Please enter a 5-digit zip code.");
        return; // Exit the function
    }

    // If inputs are valid, display the secret message
    const secretMessage = "Congratulations! You've unlocked the secret message.";
    document.getElementById("secretMessage").textContent = secretMessage;
});

// You can add additional JavaScript for user interaction and customization here.

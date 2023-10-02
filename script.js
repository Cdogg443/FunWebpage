// JavaScript code for palindrome checking

// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Remove spaces and convert to lowercase for accurate comparison
    str = str.replace(/\s/g, '').toLowerCase();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

// Function to display the result message
function displayResult(isPalindrome) {
    const resultMessage = document.getElementById("resultMessage");
    if (isPalindrome) {
        resultMessage.textContent = "It's a palindrome!";
    } else {
        resultMessage.textContent = "It's not a palindrome.";
    }
}

// Add event listener to the "Check" button
document.getElementById("checkButton").addEventListener("click", function () {
    const inputWord = document.getElementById("inputWord").value;
    const isPalin = isPalindrome(inputWord);
    displayResult(isPalin);
});

// You can add additional JavaScript for user interaction and loop here.

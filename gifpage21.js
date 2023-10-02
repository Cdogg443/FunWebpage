// JavaScript code for controlling meme movement

// Get references to the buttons and the meme image
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const memeImage = document.getElementById("memeImage");

let animationInterval; // Variable to store the animation interval
let positionX = 0; // Initial X position
let positionY = 0; // Initial Y position

// Function to generate a random direction (-1 or 1)
function getRandomDirection() {
    return Math.random() < 0.5 ? -1 : 1;
}

// Function to start moving the meme image
function startMemeMovement() {
    // Disable the Start button and enable the Stop button
    startButton.disabled = true;
    stopButton.disabled = false;

    // Function to move the meme image
    function moveImage() {
        // Generate random directions for X and Y
        const directionX = getRandomDirection();
        const directionY = getRandomDirection();

        // Update the position based on the random directions and longer strides
        positionX += directionX * Math.floor(Math.random() * 10); // Adjust the step size
        positionY += directionY * Math.floor(Math.random() * 10); // Adjust the step size

        // Update the meme image position
        memeImage.style.transform = `translate(${positionX}px, ${positionY}px)`;

        // Get the dimensions of the window
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Check if the meme image goes outside the window
        if (positionX < -memeImage.clientWidth || positionX > windowWidth || positionY < -memeImage.clientHeight || positionY > windowHeight) {
            resetMemePosition();
        }
    }

    // Start the animation
    animationInterval = setInterval(moveImage, 50); // Adjust the interval for faster movement
}

// Function to stop moving the meme image
function stopMemeMovement() {
    // Enable the Start button and disable the Stop button
    startButton.disabled = false;
    stopButton.disabled = true;

    // Clear the animation interval to stop the movement
    clearInterval(animationInterval);

    // Reset the meme image position
    resetMemePosition();
}

// Function to reset the meme image position
function resetMemePosition() {
    positionX = 0;
    positionY = 0;
    memeImage.style.transform = "translate(0px, 0px)";
}

// Add event listeners to the buttons
startButton.addEventListener("click", startMemeMovement);
stopButton.addEventListener("click", stopMemeMovement);

// You can add additional JavaScript code for meme movement here.

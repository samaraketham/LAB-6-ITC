document.addEventListener('DOMContentLoaded', function () {
    // Generate a random number between 1 and 10
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    // Get the main content area element
    const contentArea = document.getElementById('problem-solver');

    // Display instructions in the content area
    contentArea.innerHTML = `
        <h2>Guess the Number Game</h2>
        <p>Try to guess the number between 1 and 10:</p>
        <input type="number" id="userGuess" placeholder="Enter your guess">
        <button onclick="checkGuess()">Submit Guess</button>
        <p id="result"></p>
    `;

    // Function to check the user's guess
    window.checkGuess = function () {
        // Get the user's guess from the input field
        const userGuess = parseInt(document.getElementById('userGuess').value);

        // Get the result element
        const resultElement = document.getElementById('result');

        // Check if the guess is correct
        if (userGuess === randomNumber) {
            resultElement.textContent = 'Congratulations! You guessed the correct number!';
        } else {
            resultElement.textContent = `Sorry, the correct number was ${randomNumber}. Try again!`;
        }
    };
});

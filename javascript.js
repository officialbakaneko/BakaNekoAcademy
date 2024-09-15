// Show the overlay and disable scrolling
function showQuizOverlay() {
    document.getElementById('quizOverlay').style.display = 'flex';
    document.body.classList.add('no-scroll');
}

// Hide the overlay and enable scrolling
function hideQuizOverlay() {
    document.getElementById('quizOverlay').style.display = 'none';
    document.body.classList.remove('no-scroll');
}

function updateProgressBar(progressPercentage) {
    document.getElementById('progressBar').style.width = progressPercentage + '%';
}

// Show the quiz overlay when the button is clicked
document.getElementById('showQuizButton').addEventListener('click', function() {
    document.getElementById('quizOverlay').style.display = 'flex';
});

document.getElementById('exitButton').addEventListener('click', function() {
    document.getElementById('quizOverlay').style.display = 'none';
});

function updateHealth(healthPercentage) {
    const healthBar = document.getElementById('healthBar');
    healthBar.style.width = healthPercentage + '%';

    // Change color based on health percentage
    if (healthPercentage > 70) {
        healthBar.style.backgroundColor = 'green';
    } else if (healthPercentage > 30) {
        healthBar.style.backgroundColor = 'yellow';
    } else {
        healthBar.style.backgroundColor = 'red';
    }
}

// Example usage: Update health to 60%
updateHealth(80);





// Example: Call this function with the desired progress percentage
updateProgressBar(40);  // Sets the progress bar to 75% full


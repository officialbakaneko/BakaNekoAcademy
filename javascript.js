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



// Example: Call this function with the desired progress percentage
updateProgressBar(40);  // Sets the progress bar to 75% full


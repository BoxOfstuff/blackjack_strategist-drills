function selectAction(action) {
    const correctAction = 'Stand'; // Example correct action based on basic strategy
    let feedbackElement = document.getElementById('feedback');

    if (action === correctAction) {
        feedbackElement.textContent = 'Correct!';
    } else {
        feedbackElement.textContent = 'Try again!';
    }

    updateProgress(action === correctAction);
}

function updateProgress(correct) {
    let progress = JSON.parse(localStorage.getItem('progress')) || { total: 0, correct: 0 };
    progress.total += 1;
    if (correct) {
        progress.correct += 1;
    }
    localStorage.setItem('progress', JSON.stringify(progress));
}

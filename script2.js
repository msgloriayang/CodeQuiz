// retrieve high scores from console log
let highScores = localStorage.getItem('highScores');
console.log(highScores);

// display high scores on HTML page
let highScoresDiv = document.getElementById('highScores');
highScoresDiv.innerHTML = highScores;

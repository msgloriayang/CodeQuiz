let start = document.querySelector('.start')
let questionsPage1 = document.querySelector('.questionsPage1')
console.log(questionsPage1.children)
let questionsCount = 0
let questions = [
	{
		question: "Commonly used data types DO NOT include:",
		choices: ["1. strings", "2. boolean", "3. alerts", "4. numbers"],
		correctAnswer: "3. alerts"
	},
	{
		question: "The condition in an if / else statement is enclosed with _________",
		choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
		correctAnswer: "2. curly brackets"
	},
	{
		question: "Arrays in Javascript can be used to store _________",
		choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
		correctAnswer: "4. all of the above"
	},
	{
		question: "String values must be enclosed within _________ when being assigned to variables",
		choices: ["1. commas", "2. curley brackets", "3. quotes", "4. parenthesis"],
		correctAnswer: "3. quotes"

	},
	{
		question: "A very useful tool used during development and debugging for printing content to the debugger is:",
		choices: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
		correctAnswer: "4. console.log"
	}
];

start.addEventListener('click', function (event) {
	let i = 0;

	startTimer()

	console.log(event)

	let startPage = document.querySelector('.startPage')
	startPage.classList.add('hide')

	questionsPage1.classList.remove('hide')
});

let questionsPage2 = document.querySelector('.questionsPage2')
let optionContainer = document.querySelector('.optionContainer')
optionContainer.addEventListener('click', function (event) {
	console.log(event.target.textContent)
	questionsPage1.classList.add('hide')
	questionsPage2.classList.remove('hide')
})

let questionsPage3 = document.querySelector('.questionsPage3')
questionsPage2.addEventListener('click', function (event) {
	console.log(event.target.textContent)
	questionsPage2.classList.add('hide')
	questionsPage3.classList.remove('hide')
})

let questionsPage4 = document.querySelector('.questionsPage4')
questionsPage3.addEventListener('click', function (event) {
	console.log(event.target.textContent)
	questionsPage3.classList.add('hide')
	questionsPage4.classList.remove('hide')
})

let questionsPage5 = document.querySelector('.questionsPage5')
questionsPage4.addEventListener('click', function (event) {
	console.log(event.target.textContent)
	questionsPage4.classList.add('hide')
	questionsPage5.classList.remove('hide')
})

let finalScore = document.querySelector('.finalScore')
questionsPage5.addEventListener('click', function (event) {
	console.log(event.target.textContent)
	questionsPage5.classList.add('hide')
	finalScore.classList.remove('hide')
})

// let endPage = document.querySelector('.endPage')
// finalScore.addEventListener('click', function(event) {
// 	console.log(event.target.textContent)
// 	finalScore.classList.add('hide')
// 	endPage.classList.remove('hide')
// })

function correctAnswer() {
	document.getElementById("answerOne").innerHTML = "Correct!";
	console.log("Correct!")

}
function wrongAnswer() {
	document.getElementById("answerOne").innerHTML = "Wrong!";
	console.log("Wrong!")
}

// timer
var counter= 30;

function startTimer() {
	window.setInterval(function () {
		counter--;
		if (counter >= 0) {
			var span;
			span = document.getElementById("timer");
			span.innerHTML = counter;
		}
		if (counter === 0) {
			clearInterval(counter);
		}
	}, 1000);
}

function timesUp() {
	document.querySelector('.start');
	alert('Times Up');
}

let start = document.querySelector('.start')
let questionsCount = 0
let questions = [
	{
		question: "Commonly used data types DO NOT include:",
		choices: ["1. strings", "2. boolean", "3. alerts", "4. numbers"],
		correctAnswer: "3. alerts",
	},
	{
		question: "The condition in an if / else statement is enclosed with _________",
		choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
		correctAnswer: "2. curly brackets",
	},
	{
		question: "Arrays in Javascript can be used to store _________",
		choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
		correctAnswer: "4. all of the above",
	},
	{
		question: "String values must be enclosed within _________ when being assigned to variables",
		choices: ["1. commas", "2. curley brackets", "3. quotes", "4. parenthesis"],
		correctAnswer: "3. quotes",

	},
	{
		question: "A very useful tool used during development and debugging for printing content to the debugger is:",
		choices: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
		correctAnswer: "4. console.log",
	}
]

start.addEventListener('click', function() {
	let i = 0; 

let startPage = document.querySelector('.startPage')
startPage.classList.add('hide')

let questionsPage1 = document.querySelector('.questionsPage1')
console.log(questionsPage1.children)
for (let i = 0; i <4; i++) {
	let button = document.querySelector(`#question${i+1}`)
button.value = questions[questionsCount].choices[i]
button.textContent = questions[questionsCount].choices[i]
}


	// element.value = questions[questionsCount].choices[i]
	// element.textContent = questions[questionsCount].choices[i]
questionsPage1.classList.remove('hide')

console.log('testing')

	// let timerId = setInterval(function() {
	// 	console.log('!')
	// }, 1000);
});
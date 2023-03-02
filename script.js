let start = document.querySelector('.start')
let questionsCount = 0
let questions = [
	{
		question: "Question 1",
		choices: ["1. strings", "2. boolean", "3. alerts", "4. numbers"],
		correctAnswer: "a",
	},
	{
		question: "Question 2",
		choices: ["e", "f", "g", "h"],
		correctAnswer: "f",
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
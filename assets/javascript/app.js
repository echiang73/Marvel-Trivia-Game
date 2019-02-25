// Global variables
var triviaQuestions = [{
	question: "Who does Bruce Banner become",
	answerList: ["Spider-Man", "Iron Man", "Hulk", "Captain America"],
	answer: 2
	answerjpg: "url: ../images/hulk.jpg"; // is this correct?
},{
	question: "Who is Peter Parker",
	answerList: ["Captain America", "Hulk", "Spider-Man", "Ironman"],
	answer: 2
},{
	question: "Where is Wakanda located?",
	answerList: ["South America", "Africa", "Antarctica", "Australia"],
	answer: 1
},{
	question: "In 'Captain America: Civil War', who rules Wakanda?",
	answerList: ["HYDRA", "Steve Rogers", "Black Panther", "Winter Soldier"],
	answer: 2
},{
	question: "Captain America's shield is made of",
	answerList: ["Vibranium", "Adamantium", "Kryptonite", "Chrome"],
	answer: 0
},{
	question: "What is the name of the Marvel comic legend who has made an appearance in all the films of the Marvel Cinematic Universe?",
	answerList: ["Jack Kirby", "Stan Lee", "Walter Norris", "Steve Rogers"],
	answer: 1
},{
	question: "Thor’s hammer, Mjolnir, is made of metal from the heart of a dying what?",
	answerList: ["Asteroid", "Comet", "Star", "Black Hole"],
	answer: 2
},{
	question: "What is the name of the set of documents that regulate the activities of enhanced person?",
	answerList: ["Sokovia Accords", "Wakanda Accords", "Stark Accords", "Paris Accords"],
	answer: 0
},{
	question: "Which Avenger does Loki briefly take the form of in Thor: The Dark World?",
	answerList: ["Hulk", "Captain America", "Iron Man", "Hawkeye"],
	answer: 1
},{
	question: "This daughter of Thanos is a member of the Guardians of the Galaxy.",
	answerList: ["Mantis", "Gamora", "Jemma Simmons", "Scarlett Witch"],
	answer: 1
},{
	question: "How does Yondu control the Yaka arrow?",
	answerList: ["By whistling", "By flicking his wrist", "With telepathy", "By winking"],
	answer: 0
},{
	question: "In the post-credit scene of Marvel’s The Avengers, what type of restaurant are the Avengers shown eating at?",
	answerList: ["Shawarma", "Pizza", "Churrascaria", "Sushi"],
	answer: 0
},{
	question: "Which of the following is Rocket not called in Guardians of the Galaxy Vol. 2?",
	answerList: ["Smelly chinchilla", "Triangle-faced monkey", "Trash Panda", "Rat"],
	answer: 0
},{
	question: "Who is Thor's adopted sibiling?",
	answerList: ["Odin", "Loki", "Erik Selvig", "Laufey"],
	answer: 1
},{
	question: "What is the name of Odin’s first child – the Goddess of Death?",
	answerList: ["Helena", "Rona", "Lana", "Hela"],
	answer: 3
},{
	question: "Which of the Infinity Stones is embedded in Vision’s forehead?",
	answerList: ["Life Stone", "Death Stone", "Earth Stone", "Mind Stone"],
	answer: 3
},{
	question: "What actor played Ant-Man",
	answerList: ["Chris Hemsworth", "Paul Rudd", "Chris Pratt", "Benedict Cumberbatch"],
	answer: 1
},{
	question: "What is the name of the prison that Peter, Rocket, Gamora, and Groot were detained to?",
	answerList: ["Killer", "Death Prison", "Death Wish", "Kyln"],
	answer: 3
},{
	question: "In Thor, what is the alignment of the Nine Realms referred to as?",
	answerList: ["The Alignment", "The Line", "The Rebirth", "The Convergence"],
	answer: 3
},{
	question: "What is the name of Ego’s servant who has the ability to feel someone’s emotions by touching them?",
	answerList: ["Marleen", "Juniper", "Fray", "Mantis"],
	answer: 3
},{
	question: "Who is Tony Stark/Iron Man's best friend, who when dressed in his battle suit is known as War Machine?",
	answerList: ["Nick Fury", "Bruce Banner", "James Rhodes", "Edwin Jarvis"],
	answer: 2
},{
	question: "In Iron Man, what is the name of Tony Stark’s personal butler?",
	answerList: ["Jeeves", "Jarvis", "Alfred", "Jennings"],
	answer: 1
},{
	question: "What is the name of Tony Stark’s personal secretary?",
	answerList: ["Pepper Potts", "Peggy Carter", "Phil Coulson", "Sam Wilson"],
	answer: 0
},{
	question: "Doctor Strange is played by which actor?",
	answerList: ["Tom Hiddleston", "Benedict Cumberbatch", "Mark Ruffalo", "Chris Evans"],
	answer: 1
},{
	question: "What was Doctor Strange's profession before he became Sorcerer Supreme?",
	answerList: ["Professor", "Dermatologist", "Dentist", "Neurosurgeon"],
	answer: 3
}];

// var gifArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10', 'question11', 'question12', 'question13','question14','question15'];
var currentQuestion;
var correctAnswer;
var incorrectAnswer;
var unanswered;
var seconds;
var time;
var answered;
var userSelect;
var messages = {
	correct: "Corect: I could do this all day! - Captain America",
	incorrect: "Incorrect: I'm sorry, did I step on your moment? - Black Widow",
	outOfTime: "You are out of time!",
	finishedQuote: {
		"Oh oh: All we can do is our best, and sometimes the best we can do is to start over - Agent Carter",
		"Not too bad: No man can win every battle, but no man should fall without a struggle - Peter Parker",
		"Awesome: Heroes are made by the path they choose, not the powers they are graced with - Iron man",
	}
}

$("#startBtn").on("click", function(){
	$(this).hide();
	newGame();
});

$("#startOverBtn").on("click", function(){
	$(this).hide();
	newGame();
});
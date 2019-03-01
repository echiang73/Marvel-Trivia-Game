// Global variables
var triviaQuestions = [{
	question: "Who does Bruce Banner become?",
	answerList: ["Spider-Man", "Iron Man", "Hulk", "Captain America"],
	answer: 2,
	answerGif: "hulk.gif",
}, {
	question: "Who is Peter Parker?",
	answerList: ["Captain America", "Hulk", "Spider-Man", "Ironman"],
	answer: 2,
	answerGif: "spiderman.gif",
}, {
	question: "Where is Wakanda located?",
	answerList: ["South America", "Africa", "Antarctica", "Australia"],
	answer: 1,
	answerGif: "wakandaforever.gif",
}, {
	question: "In 'Captain America: Civil War', who rules Wakanda?",
	answerList: ["HYDRA", "Steve Rogers", "Black Panther", "Winter Soldier"],
	answer: 2,
	answerGif: "blackpanther.gif",
}, {
	question: "Captain America's shield is made of",
	answerList: ["Vibranium", "Adamantium", "Kryptonite", "Chrome"],
	answer: 0,
	answerGif: "capshield.gif",
}, {
	question: "What is the name of the Marvel comic legend who has made an appearance in all the films of the Marvel Cinematic Universe?",
	answerList: ["Jack Kirby", "Stan Lee", "Walter Norris", "Steve Rogers"],
	answer: 1,
	answerGif: "stanlee.gif",
}, {
	question: "Thor’s hammer, Mjolnir, is made of metal from the heart of a dying what?",
	answerList: ["Asteroid", "Comet", "Star", "Black Hole"],
	answer: 2,
	answerGif: "mjolnirstar.gif",
}, {
	question: "What is the name of the set of documents that regulate the activities of enhanced person?",
	answerList: ["Sokovia Accords", "Wakanda Accords", "Stark Accords", "Paris Accords"],
	answer: 0,
	answerGif: "sokoviaaccords.gif",
}, {
	question: "Which Avenger does Loki briefly take the form of in Thor: The Dark World?",
	answerList: ["Hulk", "Captain America", "Iron Man", "Hawkeye"],
	answer: 1,
	answerGif: "lokiascap.gif",
}, {
	question: "This daughter of Thanos is a member of the Guardians of the Galaxy.",
	answerList: ["Mantis", "Gamora", "Jemma Simmons", "Scarlett Witch"],
	answer: 1,
	answerGif: "gamorathanos.gif",
}, {
	question: "How does Yondu control the Yaka arrow?",
	answerList: ["By whistling", "By flicking his wrist", "With telepathy", "By winking"],
	answer: 0,
	answerGif: "yonduyaka.gif",
}, {
	question: "In the post-credit scene of Marvel’s The Avengers, what type of restaurant are the Avengers shown eating at?",
	answerList: ["Shawarma", "Pizza", "Churrascaria", "Sushi"],
	answer: 0,
	answerGif: "avengersshawarma.gif",
}, {
	question: "Which of the following is Rocket not called in Guardians of the Galaxy Vol. 2?",
	answerList: ["Smelly chinchilla", "Triangle-faced monkey", "Trash Panda", "Rat"],
	answer: 0,
	answerGif: "rocketracoon.gif",
}, {
	question: "Who is Thor's adopted sibiling?",
	answerList: ["Odin", "Loki", "Erik Selvig", "Laufey"],
	answer: 1,
	answerGif: "loki.gif",
}, {
	question: "What is the name of Odin’s first child – the Goddess of Death?",
	answerList: ["Helena", "Rona", "Lana", "Hela"],
	answer: 3,
	answerGif: "hela.gif",
}, {
	question: "Which of the Infinity Stones is embedded in Vision’s forehead?",
	answerList: ["Life Stone", "Death Stone", "Earth Stone", "Mind Stone"],
	answer: 3,
	answerGif: "vision.gif",
}, {
	question: "What actor played Ant-Man",
	answerList: ["Chris Hemsworth", "Paul Rudd", "Chris Pratt", "Benedict Cumberbatch"],
	answer: 1,
	answerGif: "paulruddantman.gif",
}, {
	question: "What is the name of the prison that Peter, Rocket, Gamora, and Groot were detained to?",
	answerList: ["Killer", "Death Prison", "Death Wish", "Kyln"],
	answer: 3,
	answerGif: "kyln.gif",
}, {
	question: "In Thor, what is the alignment of the Nine Realms referred to as?",
	answerList: ["The Alignment", "The Line", "The Rebirth", "The Convergence"],
	answer: 3,
	answerGif: "convergence.gif",
}, {
	question: "What is the name of Ego’s servant who has the ability to feel someone’s emotions by touching them?",
	answerList: ["Marleen", "Juniper", "Fray", "Mantis"],
	answer: 3,
	answerGif: "mantis.gif",
}, {
	question: "Who is Tony Stark/Iron Man's best friend, who when dressed in his battle suit is known as War Machine?",
	answerList: ["Nick Fury", "Bruce Banner", "James Rhodes", "Edwin Jarvis"],
	answer: 2,
	answerGif: "warmachinerhodes.gif",
}, {
	question: "In Iron Man, what is the name of Tony Stark’s personal butler?",
	answerList: ["Jeeves", "Jarvis", "Alfred", "Jennings"],
	answer: 1,
	answerGif: "jarvis.gif",
}, {
	question: "What is the name of Tony Stark’s personal secretary?",
	answerList: ["Pepper Potts", "Peggy Carter", "Phil Coulson", "Sam Wilson"],
	answer: 0,
	answerGif: "pepperpottstrash.gif",
}, {
	question: "Doctor Strange is played by which actor?",
	answerList: ["Tom Hiddleston", "Benedict Cumberbatch", "Mark Ruffalo", "Chris Evans"],
	answer: 1,
	answerGif: "drstrange.gif",
}, {
	question: "What was Doctor Strange's profession before he became Sorcerer Supreme?",
	answerList: ["Professor", "Dermatologist", "Dentist", "Neurosurgeon"],
	answer: 3,
	answerGif: "drstrangesurgeon.gif",
}];

var questionNum;
var questionHistory = [""];
var questionUnique
var questionCounter;
var correctCounter;
var incorrectCounter;
var unansweredCounter;
var secondsLeft;
var intervalId;
var answered;
var userSelect;
var messages = {
	correct: "Super, that's correct!",
	incorrect: "Sorry, that's not correct!",
	outOfTime: "You are out of time!",
};
var finishedQuote = [
	'Oh oh: "All we can do is our best, and sometimes the best we can do is to start over" - Agent Carter',
	'Not too bad: "No man can win every battle, but no man should fall without a struggle" - Peter Parker',
	'Awesome: "Heroes are made by the path they choose, not the powers they are graced with" - Iron man',
];

// Variable for timeouts
var videoTime;
var tenSeconds;
var fiveSeconds;
var fourSeconds;
var threeSeconds;
var twoSeconds;
var oneSecond;

// Variable for sounds
var audioWin = new Audio("assets/sound/success.mp3");
var audioLose = new Audio("assets/sound/uhoh.mp3");
var audioTimesup = new Audio("assets/sound/timesup.mp3");
var audioScoreboard = new Audio("assets/sound/applause.mp3");
var audioMusic = new Audio("assets/sound/MusicLoops.mp3");

// Functions

function videoplayed() {
	$("video").remove();
	$("#start-btn").show();
	$("#ironmanLogo").show();
}

function initiateGame() {
	// Clear scoreboard display and values and set answered to false
	$("#finished-quote").empty();
	$("#correct-count").empty();
	$("#incorrect-count").empty();
	$("#unanswered-count").empty();
	questionCounter = 0;
	correctCounter = 0;
	incorrectCounter = 0;
	unansweredCounter = 0;
	answered = false;
	newQuestion();
}

function newQuestion() {
	// Clear main-display from previous game and set answered to true since it can be unanswered/correct/incorrect
	$("#message-quote").empty();
	$("#correct-answer").empty();
	$("#answer-gif").empty();
	answered = true;

	// Non-UNIQUE Pick: Randomly pick a questionNum from 1-25 from triviaQuestions array.
	// questionNum = Math.floor(Math.random() * triviaQuestions.length);
	// questionCounter++;

	// UNIQUE: Randomly pick UNIQUE questionNum from 1-25 from triviaQuetions array.
	var questionUnique = true;
	questionNum = Math.floor(Math.random() * triviaQuestions.length);
	console.log(questionNum);
	for (var i = 0; i < triviaQuestions.length; i++) {
		if (questionNum == questionHistory[i]) {
			console.log(questionNum + " is not unique!");
			newQuestion();
			questionUnique = false;
			break;
		}
	}
	if (questionUnique == true) {
		questionHistory.push(questionNum);
		questionCounter++;
		console.log(questionNum + " is unique!");
		console.log(questionHistory);

		// Display question and answer list
		$("#question-number").html("Question #" + (questionCounter) + " of 10");
		$("#current-question").html(triviaQuestions[questionNum].question);
		for (var i = 0; i < 4; i++) {
			var answerChoice = $("<div>");
			answerChoice.text(triviaQuestions[questionNum].answerList[i]);
			answerChoice.attr({ "data-index": i });
			answerChoice.addClass("newDivChoice");
			$(".answer-choice").append(answerChoice);
		}
		runCountdown();
		$(".newDivChoice").click(function () {
			userSelect = $(this).data("index");
			clearInterval(intervalId);
			clearTimeout(tenSeconds); clearTimeout(fiveSeconds); clearTimeout(fourSeconds); clearTimeout(threeSeconds); clearTimeout(twoSeconds); clearTimeout(oneSecond);
			answerPage();
		});
	}
}

function runCountdown() {
	secondsLeft = 15;
	$("#time-remaining").html("Time Remaining: " + secondsLeft);
	$("#time-remaining").css("background-color", "green");
	$("#time-remaining").css("color", "black");
	clearInterval(intervalId);
	clearTimeout(tenSeconds); clearTimeout(fiveSeconds); clearTimeout(fourSeconds); clearTimeout(threeSeconds); clearTimeout(twoSeconds); clearTimeout(oneSecond);
	intervalId = setInterval(decrement, 1000);
	answered = true;
	setTimeout(tenSeconds, 1000 * 5); // turn yellow
	setTimeout(fiveSeconds, 1000 * 10); // blinking red
	setTimeout(fourSeconds, 1000 * 11); // blinking black
	setTimeout(threeSeconds, 1000 * 12); // blinking red
	setTimeout(twoSeconds, 1000 * 13); // blinking black
	setTimeout(oneSecond, 1000 * 14); // blinking red
}

function decrement() {
	secondsLeft--;
	$("#time-remaining").html("Time Remaining: " + secondsLeft);
	if (secondsLeft === 0) {
		clearInterval(intervalId);
		clearTimeout(tenSeconds); clearTimeout(fiveSeconds); clearTimeout(fourSeconds); clearTimeout(threeSeconds); clearTimeout(twoSeconds); clearTimeout(oneSecond);
		answered = false;
		answerPage();
	}
}

// Timeout for the countdown clock with visual color display
function tenSeconds() {
	$("#time-remaining").css("background-color", "yellow");
	$("#time-remaining").css("color", "black");
}
function fiveSeconds() {
	$("#time-remaining").css("background-color", "red");
	$("#time-remaining").css("color", "yellow");
}
function fourSeconds() {
	$("#time-remaining").css("background-color", "black");
	$("#time-remaining").css("color", "yellow");
}
function threeSeconds() {
	$("#time-remaining").css("background-color", "red");
	$("#time-remaining").css("color", "yellow");
}
function twoSeconds() {
	$("#time-remaining").css("background-color", "black");
	$("#time-remaining").css("color", "yellow");
}
function oneSecond() {
	$("#time-remaining").css("background-color", "red");
	$("#time-remaining").css("color", "yellow");
}

// Display answer page and process conditional logic to determine answer
function answerPage() {
	// Clear display first and reset time-remaining css to default
	$("#current-question").empty();
	$(".newDivChoice").empty();
	$("#time-remaining").empty();
	$("#time-remaining").css("background-color", "green");
	$("#time-remaining").css("color", "black");
	clearInterval(intervalId);
	clearTimeout(tenSeconds); clearTimeout(fiveSeconds); clearTimeout(fourSeconds); clearTimeout(threeSeconds); clearTimeout(twoSeconds); clearTimeout(oneSecond);
	// Retrieve correct triviaQuestions.answer index and display answer and gif
	var correctAnswerIndex = triviaQuestions[questionNum].answer;
	var correctAnswerText = triviaQuestions[questionNum].answerList[correctAnswerIndex];
	// $("#answer-gif").html("<img src = 'assets/images/answers/"+ triviaQuestions[questionNum].answerGif +"' width='20%'>");
	$("#answer-gif").html("<img src = 'assets/images/answers/" + triviaQuestions[questionNum].answerGif + "'>");
	$("#answer-gif").css("width", "10%");

	// Increase correct/incorrect/or unanswered count and display message-quote as appropriate
	if (answered === false) {
		unansweredCounter++;
		audioTimesup.play();
		$("#message-quote").html(messages.outOfTime);
		$("#correct-answer").html("The correct answer is: " + correctAnswerText);
		answered = true;
	}
	else if (userSelect === correctAnswerIndex) {
		correctCounter++;
		audioWin.play();
		$("#correct-answer").html(messages.correct);  // purposely switched the order of target tags for better readibility
		$("#message-quote").html(correctAnswerText + "!"); // purposely switched the order of target tags for better readibility
	}
	else {
		incorrectCounter++;
		audioLose.play();
		$("#message-quote").html(messages.incorrect);
		$("#correct-answer").html("The correct answer is: " + correctAnswerText);
	}
	// Pause for the person to read the answer and determine if next new question or game over
	if (questionCounter === 10) { // default limit to just 10 questions, otherwise use below line of code for entire array of questions.
		// if(questionNum === (triviaQuestions.length-1)){
		setTimeout(scoreboard, 1000 * 5);
	}
	else {
		questionNum++;
		setTimeout(newQuestion, 1000 * 5);
	}
}

function scoreboard() {
	$("#time-remaining").empty();
	$("#question-number").empty();
	$("#message-quote").empty();
	$("#correct-answer").empty();
	$("#answer-gif").empty();
	audioScoreboard.play();
	audioMusic.play();
	if (correctCounter < 3) {
		$("#finished-quote").html(finishedQuote[0]);
	}
	else if (correctCounter >= 3 && correctCounter <= 6) {
		$("#finished-quote").html(finishedQuote[1]);
	}
	else {
		$("#finished-quote").html(finishedQuote[2]);
	}
	$("#correct-count").html("Correct Answers: " + correctCounter);
	$("#incorrect-count").html("Incorrect Answers: " + incorrectCounter);
	$("#unanswered-count").html("Unanswered: " + unansweredCounter);
	$("#start-over-btn").show();
}

// Main process
$("#ironmanLogo").hide();
$("#start-over-btn").hide();
setTimeout(videoplayed, 1000 * 34);


$("#start-btn").click(function () {
	$(this).hide();
	$("video").remove();
	$("#title-heading").hide();
	$("#ironmanLogo").hide();
	initiateGame();
});

$("#start-over-btn").click(function () {
	$(this).hide();
	questionHistory = [""];
	initiateGame();
	audioMusic.pause();
	audioMusic.currentTime = 0;
});
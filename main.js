var currentQuestion = 0;
var timeLeft = 60;
var score = 0;
var timerEl = document.getElementById("timer");
var timerInterval;
var startButton = document.getElementById("beginBtn");


/*start the quiz*/
function startQuiz() {
    document.getElementById("start").classList.add("hide");
    document.getElementById("quizQuestions").classList.remove("hide");
    showQuestion();
    //call timer
    startTimer();
    //change each question
    
}

/*start the timer*/
function startTimer() {
    timerInterval = setInterval(function () {
        timerEl.textContent = timeLeft;
        timeLeft--;
        if (timeLeft < 0){
            timeLeft = 0;
        }
    }, 1000);

}

//show the quiz question
function showQuestion() {
    var index = currentQuestion;
    document.getElementById("question-text").textContent = questions[index].title;
    document.querySelector(".choices").innerHTML = "";
    questions[index].choices.forEach(function (choice, i ){
        var button = document.createElement("button");
        button.textContent = i + 1 + ". " + choice;
        button.setAttribute("value", choice)
        button.onclick = questionClick;

        document.querySelector(".choices").append(button);
    })

}

function questionClick(event) {
    console.log(event.target.value);
    let correct = ("Correct!")
    let wrong = ("Incorrect :( ")
     if (questions[currentQuestion].answer === event.target.value) {
        
        console.log("correct");
     } else {
        console.log("wrong");
     }
           currentQuestion ++;
    if (currentQuestion === questions.length){
        quizEnd();
    } else {
        showQuestion();
    }
        

}
function quizEnd() {
    // stop timer

    // show end screen
    document.getElementById("endOfGame").classList.remove("hide");
    document.getElementById("quizQuestions").classList.add("hide");
    // show final score

    // hide questions section
}
//click events
startButton.addEventListener('click', startQuiz);
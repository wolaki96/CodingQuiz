const currentQuestion = 0;
const timeLeft = 0;
const score = 0;
const timerEl = document.getElementById("timer");
var timerInterval;
var startButton = document.getElementById("beginBtn");


/*start the quiz*/
function startQuiz() {
    document.getElementById("start").classList.add("hide");
    document.getElementById("quizQuestions").classList.remove("hide");
    
    //call timer
    startTimer();
    //change each question
    showQuestion();
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
        // button.onclick = questionClick;

        document.querySelector(".choices").append(button);
    })

}
//click events
startButton.addEventListener('click', startQuiz);
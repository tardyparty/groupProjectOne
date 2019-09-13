//Questions Array

var quiz = [

    {
        question: "What type of scenery do you enjoy?",
        choices: ["Beach", "Mountains", "Urban", "Country", "Small Town"]
    },

    {
        question: "Where do you prefer to drink?",
        choices: ["Clubs", "Bars", "Breweries", "Wineries", "Don't Drink"]
    },

    {
        question: "What type of music do you prefer?",
        choices: ["Blues", "Country", "Jazz", "Club", "Rock"]
    },

    {
        question: "Where do you like to eat?",
        choices: ["Fancy restaurants", "Hole-in-the-wall", "Bars", "Chains", "Street Food"]
    },

    {
        question: "What sort of transportation do you prefer?",
        choices: ["Car", "Walk", "Public Transportation", "Bicycle", "Flight"]
    },

    {
        question: "What type of attractions do you enjoy?",
        choices: ["Casinos", "Outdoors", "Museums", "Theme Parks", "Art Galleries"]
    },

    {
        question: "What types of weather do you prefer?",
        choices: ["Sunny", "Rainy", "Winter Wonderland", "Crisp and Cool", "Hot"]
    }
]

//Global Variables

var currentQuestion = 0;
var questions = $("#questions");
var answersArr = []

//Load Question

function loadQuestion() {
    var question = quiz[currentQuestion].question;
    $("#questions").html(question);
    loadChoices();
    console.log(question)
}

//Load Choices

function loadChoices(choices) {
    var choices = quiz[currentQuestion].choices;
    
    
    $("#choices").html(
        $("<div class='checkbox' id='choice1'><label><input type='checkbox' value=" + choices[0] + "> " + choices[0] + "</label>").append(
        $("<div class='checkbox'><label><input type='checkbox' value=" + choices[1] + "> " + choices[1] + "</label>"),
        $("<div class='checkbox'><label><input type='checkbox' value=" + choices[2] + "> " + choices[2] + "</label>"),
        $("<div class='checkbox'><label><input type='checkbox' value=" + choices[3] + "> " + choices[3] + "</label>"),
        $("<div class='checkbox'><label><input type='checkbox' value=" + choices[4] + "> " + choices[4] + "</label>"),
        $("<button type='button' class='btn btn-primary' id='button'> " + "Next Question" + "</button>")
    ))

    //Button Click

    $("#button").on("click", function() {

        $.each($("input[value]:checked"), function() {
            answersArr.push($(this).val());

            nextQuestion();
            console.log(answersArr)
        })
    })
    
};

//Next Question

function nextQuestion() {
    var quizOver = (quiz.length - 1)  === currentQuestion;
    if (quizOver) {
        quizEnd();
    } else {
        currentQuestion++;
        loadQuestion();

    }
}

//Start Quiz

$("#start").click(function() {
    $("#start").remove();
    loadQuestion();
});

console.log(quiz[currentQuestion].choices[0])
console.log(quiz[currentQuestion].choices[1])

//End Quiz

function quizEnd() {
    $("#questions").html("Please wait while we work our magic!");
    $("#choices").remove();
}


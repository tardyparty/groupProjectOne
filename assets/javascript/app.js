
<<<<<<< HEAD
// compares users answers to city tags and scores city by num matching tags
function score(){
    for (var i=0; i < answers.length; i++){
        for (var x=0; x < cities.length; x++){
            if (cities[x].tags.indexOf(answers[i])){
                cities[x].score++;
            }
        }
    }
}


// bubble sort to rank cities by score
function sort(cities, score) {

    var swapped;

    do {
        swapped = false;
        for (var i=0; i < cities.length-1; i++){
            if (cities[i][score] < cities[i + 1][score]) {
                var temp = cities[i];
                cities[i] = cities[i + 1];
                cities[i + 1] = temp;
                swapped = true;
            }
        }
    }

    while (swapped);
}



// testing
score();
sort(cities, "score");

for (i=0; i < cities.length; i++) {
    console.log(cities[i]);
}
=======
>>>>>>> cc0c660ce9ee068290171dd6f3bbc596401d0033
//Questions Array

var quiz = [

    {
        question: "What type of scenery do you enjoy?",
        choices: ["Beach", "Mountains", "Urban", "Country", "Small Town"],
        image: "https://blog1.fkimg.com/wp-content/uploads/2017/07/Sevierville-Tennessee-Honeymoon-Destinations.jpg"
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
<<<<<<< HEAD
var answers = []
=======
var answers = [];
>>>>>>> cc0c660ce9ee068290171dd6f3bbc596401d0033

//Load Question

function loadQuestion() {
    var question = quiz[currentQuestion].question;
    $("#questions").html(question);
    loadChoices();
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
            answers.push($(this).val());

            nextQuestion();
            console.log(answers)
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
    $(".intro").remove();
    loadQuestion();
});

//End Quiz

function quizEnd() {
<<<<<<< HEAD
   $("#questions").html(score);
=======
    $("#questions").html("Please wait while we work our magic!");
    $("#choices").remove();
    score();
    sort(cities, "score");
    for (i=0; i < cities.length; i++) {
        console.log(cities[i]);
    }
}




// compares users answers to city tags and scores city by num matching tags
function score(){
    for (var i=0; i < answers.length; i++){
        for (var x=0; x < cities.length; x++){
            if (cities[x].tags.indexOf(answers[i])){
                cities[x].score++;
            }
        }
    }
>>>>>>> cc0c660ce9ee068290171dd6f3bbc596401d0033
}


// bubble sort to rank cities by score
function sort(cities, score) {

    var swapped;

    do {
        swapped = false;
        for (var i=0; i < cities.length-1; i++){
            if (cities[i][score] < cities[i + 1][score]) {
                var temp = cities[i];
                cities[i] = cities[i + 1];
                cities[i + 1] = temp;
                swapped = true;
            }
        }
    }

    while (swapped);
}



// testing




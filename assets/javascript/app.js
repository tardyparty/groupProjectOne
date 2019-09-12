var quiz = [
    {
        question: "What type of scenery do you enjoy?",
        choices: ["Beach", "Mountains", "Urban", "Country", "Small Town"]
    },

    {
        question: "Where do you prefer to drink?",
        choices: ["Clubs", "Bars", "Breweries", "Wineries", "Don't Drink"]
    }
]

var currentQuestion = 0;
var questions = $("#questions");

function loadQuestion() {
    var question = quiz[currentQuestion].question;
    $("#questions").html(question);
    loadChoices();
    console.log(question)
}

function loadChoices(choices) {
    var choices = quiz[currentQuestion].choices;
    
    $("#choices").append(
        $("<div class='checkbox'><label><input type='checkbox' value=''> " + quiz[currentQuestion].choices[0] + "</label>"),
        $("<div class='checkbox'><label><input type='checkbox' value=''> " + quiz[currentQuestion].choices[1] + "</label>"),
        $("<div class='checkbox'><label><input type='checkbox' value=''> " + quiz[currentQuestion].choices[2] + "</label>"),
        $("<div class='checkbox'><label><input type='checkbox' value=''> " + quiz[currentQuestion].choices[3] + "</label>"),
        $("<div class='checkbox'><label><input type='checkbox' value=''> " + quiz[currentQuestion].choices[4] + "</label>"),
        $("<button type='button' class='btn btn-primary' id='button'> " + "Next Question" + "</button>")
    )
    
}   

$("#start").click(function() {
    $("#start").remove();
    loadQuestion();
});

console.log(quiz[currentQuestion].choices[0])
console.log(quiz[currentQuestion].choices[1])


//Global Variables
var answers = [];


// Questions Array
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
];




// build tags html
$(document).ready(function buildTags() {
    var id = 0;
    for (var i=0; i < quiz.length; i++){
        
        $("#tags").append(`
        <div class="qDiv col-lg-12 col-xs-12">
            <h4>${quiz[i].question}</h4>
            <div id=${"quiz" + id}>
            </div>
        </div>
        `);
        for (var j=0; j < quiz[i].choices.length; j++){
            $(`${"#quiz" + id}`).append(`
            <button class="tagBtn" value="${quiz[i].choices[j]}">${quiz[i].choices[j]}</button>
            `);
        }
        id++;
    }
});


// add user tags to answers array 
// ***** add ability to remove tag if it already exists (modal asking are you sure??)*******
$(document).on("click", ".tagBtn", function(e){
    // dont reload
    e.preventDefault();

    var addTag = this.value.toLowerCase();
    this.disabled = true;

    // check if its already logged ****doesnt work as is****
    // if(answers.indexOf(addTag)){
    //     answers.filter(e => e !== addTag)
    // }
    // else{
    //     answers.push(addTag);
    // }

    answers.push(addTag);
    console.log(answers);
});


$("#results").on("click", function(){
    displayResults();
});


// compares users answers to city tags and scores city by num matching tags
function score(){
    for (var i=0; i < answers.length; i++){
        // for every tag selected by user...
        for (var x=0; x < cities.length; x++){
            // for every city object...
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

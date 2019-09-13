
// array for testing funcs
var answers = ["history", "culture", "architecture"];


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
var answers = ["history", "culture", "architecture"];

var key = "3d2fa81c65msh322e2d31fe3aebdp19814bjsnceae2e75aeae";

// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://apidojo-kayak-v1.p.rapidapi.com/flights/create-session?origin1=SGN&destination1=DAD&departdate1=2018-12-20&cabin=e&currency=USD&adults=1&bags=0",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "apidojo-kayak-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "7c30733ba7msh4f89d303b05b44cp1b317fjsn69535f3210f2"
// 	}
// }

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

// city objects 

var cities = [
    {
        name: "New York City",
        code: "JFK",
        tags: ["urban", "history", "fancy ass bars"],
        score: 0,
    },
    {
        name: "Melbourne",
        code: "MELa",
        tags: ["beach", ""],
        score: 0,
    },
    {
        name: "Chicago",
        code: "ORD",
        tags: ["urban",],
        score: 0,
    },
    {
        name: "London",
        code: "LHR",
        tags: ["urban", "history"],
        score: 0,
    },
    {
        name: "Los Angeles",
        code: "LAX",
        tags: ["beach", "fancy ass bars"],
        score: 0,
    },
    {
        name: "Montreal",
        code: "YUL",
        tags: ["",],
        score: 0,
    },
    {
        name: "Berlin",
        code: "TXL",
        tags: ["history", "architecture", "clubs"],
        score: 0,
    },
    {
        name: "Glasgow",
        code: "GLA",
        tags: ["",],
        score: 0,
    },
    {
        name: "Paris",
        code: "CDG",
        tags: ["history", "architecture", "fancy ass bars"],
        score: 0,
    },
    {
        name: "Tokyo",
        code: "NRT",
        tags: ["urban", "culture", "clubs", "fancy ass bars"],
        score: 0,
    },
    {
        name: "Madrid",
        code: "MAD",
        tags: ["",],
        score: 0,
    },
    {
        name: "Cape Town",
        code: "CPT",
        tags: ["beach",],
        score: 0,
    },
    {
        name: "Las Vegas",
        code: "LAS",
        tags: ["clubs", "fancy ass bars"],
        score: 0,
    },
    {
        name: "Mexico City",
        code: "TLC",
        tags: ["urban", "culture"],
        score: 0,
    },
    {
        name: "Manchester",
        code: "MHT",
        tags: ["",],
        score: 0,
    },
    {
        name: "Philadelphia",
        code: "PHL",
        tags: ["urban", "history"],
        score: 0,
    },
    {
        name: "Barcelona",
        code: "BCN",
        tags: ["history", "architecture", "culture"],
        score: 0,
    },
    {
        name: "Buenos Aires",
        code: "EZE",
        tags: ["beach", "culture", "clubs"],
        score: 0,
    },
    {
        name: "Lisbon",
        code: "LIS",
        tags: ["",],
        score: 0,
    },
    {
        name: "Washington, D.C.",
        code: "DCA",
        tags: ["history",],
        score: 0,
    },
    {
        name: "Tel Aviv",
        code: "TLV",
        tags: ["",],
        score: 0,
    },
    {
        name: "Mumbai",
        code: "BOM",
        tags: ["", "culture"],
        score: 0,
    },
    {
        name: "Toronto",
        code: "YYZ",
        tags: ["urban",],
        score: 0,
    },
    {
        name: "Birmingham",
        code: "BHX",
        tags: ["country",],
        score: 0,
    },
    {
        name: "Dublin",
        code: "SUB",
        tags: ["culture",],
        score: 0,
    },
    {
        name: "Miami",
        code: "MIA",
        tags: ["beach", "culture", "clubs", "fancy ass bars"],
        score: 0,
    },
    {
        name: "Porto",
        code: "OPO",
        tags: ["",],
        score: 0,
    },
    {
        name: "Singapore",
        code: "SIN",
        tags: ["urban",],
        score: 0,
    },
    {
        name: "Edinburgh",
        code: "EDI",
        tags: ["",],
        score: 0,
    },
    {
        name: "San Francisco",
        code: "SFO",
        tags: ["urban",],
        score: 0,
    },
    {
        name: "Dubai",
        code: "DXBa",
        tags: ["architecture",],
        score: 0,
    },
    {
        name: "Munich",
        code: "MUC",
        tags: ["history",],
        score: 0,
    },
    {
        name: "Vienna",
        code: "VIE",
        tags: [,],
        score: 0,
    },
    {
        name: "Shanghai",
        code: "PVG",
        tags: ["urban",],
        score: 0,
    },
    {
        name: "Moscow",
        code: "PUW",
        tags: ["history",],
        score: 0,
    },
    {
        name: "Delhi",
        code: "DEL",
        tags: ["urban",],
        score: 0,
    },
    {
        name: "Seattle",
        code: "SEA",
        tags: ["",],
        score: 0,
    },
    {
        name: "Sydney",
        code: "SYD",
        tags: ["beach",],
        score: 0,
    },
    {
        name: "Abu Dhabi",
        code: "AUH",
        tags: ["",],
        score: 0,
    },
    {
        name: "Hong Kong",
        code: "HKG",
        tags: ["urban", "architecture", "fancy ass bars"],
        score: 0,
    },
    {
        name: "Boston",
        code: "BOS",
        tags: ["history",],
        score: 0,
    },
    {
        name: "Rio de Janeiro",
        code: "GIG",
        tags: ["beach",],
        score: 0,
    },
    {
        name: "Marseille",
        code: "MRS",
        tags: ["culture", "country", "fancy ass bars"],
        score: 0,
    },
    {
        name: "Bangkok",
        code: "BKKa",
        tags: ["urban", "clubs"],
        score: 0,
    },
    {
        name: "Kuala Lumpur",
        code: "KUL",
        tags: ["",],
        score: 0,
    },
    {
        name: "Beijing",
        code: "PEK",
        tags: ["urban",],
        score: 0,
    },
    {
        name: "Sao Paulo",
        code: "GRU",
        tags: ["clubs",],
        score: 0,
    }
];


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


// bubble sort to rank cities by their score
function sort(cities, score) {

    var swapped;

    do {
        swapped = false;
        for (var i=0; i < cities.length-1; i++){
            if (cities[i][score] > cities[i + 1][score]) {
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
cities.reverse();

for (i=0; i < cities.length; i++) {
    console.log(cities[i]);
}
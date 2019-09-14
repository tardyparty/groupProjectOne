// place api call builder here
var key = "3d2fa81c65msh322e2d31fe3aebdp19814bjsnceae2e75aeae";
var startURL = " https://apidojo-kayak-v1.p.rapidapi.com/";
var homeURL = "locations/search?where=";


// var to store airport code string of users departure city
var homeCode = "";


// var homeInput = $(input from search box on API questions html);


// after saving there home city and dates - pushed to api to find their home airport code
$(document).on("click", "#***add name here***", function(e) {
    e.preventDefault();

    var queryURL = startURL + homeURL + homeInput;

    $.ajax({
        url: queryURL,
        methond: "GET",
    }).then(function(data){
        homeCode = data[0].apicode;
    });
}



// home city ajax
// api builder for home airport code search
var origin = $("#homeInput").val().trim();

// var to store airport code string of users departure city
var homeCode = "";


// api call for origin airport code
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://apidojo-kayak-v1.p.rapidapi.com/locations/search?where=" + origin,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-kayak-v1.p.rapidapi.com",
		"x-rapidapi-key": "3d2fa81c65msh322e2d31fe3aebdp19814bjsnceae2e75aeae"
	}
}


// acccepts api form inputs
$("#apiBtn").on("click", function(e){
    e.preventDefault();
    console.log(origin);
    // console.log(homeURL + origin);
})

$.ajax(settings).done(function (response) {
    homeCode = response[0].apicode;
    // console.log(response);
    console.log(homeCode);
});


// flights ajax
// builds data object for api call
// requestData.destination1;
// requestData.departdate1 = dates;

// edit this object according to user inputs
var requestData = {
    origin1: origin,
    destination1: cities[0].code,
    departdate1: "2019-12-01",
    cabin: "e",
    currency: "USD",
    adults: "1",
    bags: "0"
    };



    $("#apiBtn").on("click", function(e){
    e.preventDefault();
    console.log(origin);
    // console.log(homeURL + origin);
})

$("#results").on("click", function(e){
    e.preventDefault();

    $.ajax({
        type: "GET",
        url: "https://apidojo-kayak-v1.p.rapidapi.com/flights/create-session",
        crossDomain:true,
        headers: { "x-rapidapi-host": "apidojo-kayak-v1.p.rapidapi.com",
                    "x-rapidapi-key": "3d2fa81c65msh322e2d31fe3aebdp19814bjsnceae2e75aeae" },
        data: requestData,
        success: function (response) {
            console.log(response);
            console.log("price" + response.cheapestPriceTotal);
            console.log("airline" + response.airlines[0])
            // ******* code goes here! ********
            }
        });
})

        
      


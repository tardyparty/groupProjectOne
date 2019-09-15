// home city ajax
// api builder for home airport code search
var homeInput = $("#homeInput").val().trim();
var homeURL = "https://apidojo-kayak-v1.p.rapidapi.com/locations/search?where=";

// var to store airport code string of users departure city
var homeCode = "";

var settings = {
	"async": true,
	"crossDomain": true,
	"url": homeURL + homeInput,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-kayak-v1.p.rapidapi.com",
		"x-rapidapi-key": "3d2fa81c65msh322e2d31fe3aebdp19814bjsnceae2e75aeae"
	}
}


$.ajax(settings).done(function (response) {
    homeCode = response[0].apicode;
	console.log(response);
});


// flights ajax
// builds data object for api call
requestData.origin1 = homeCode;
requestData.destination1;
requestData.departdate1 = dates;

// edit this object according to user inputs
var requestData = {
    origin1: "SGN",
    destination1: "DAD",
    departdate1: "2019-12-01",
    cabin: "e",
    currency: "USD",
    adults: "1",
    bags: "0"
    };


$.ajax({
    type: "GET",
    url: "https://apidojo-kayak-v1.p.rapidapi.com/flights/create-session",
    crossDomain:true,
    headers: { "x-rapidapi-host": "apidojo-kayak-v1.p.rapidapi.com",
                "x-rapidapi-key": "3d2fa81c65msh322e2d31fe3aebdp19814bjsnceae2e75aeae" },
    data: requestData,
    success: function (response) {
                console.log(response);
                // ******* code goes here! ********
        }
    });
        
      


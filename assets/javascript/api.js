// home city ajax
// api builder for home airport code search
var origin = ""
var dates = ""
// var to store airport code string of users departure city
var homeCode = "";

var cityCode = '';

var more = 5;

var cityName = '';

var x = 0;

$("#showMore").on("click", function(){
    more += 5;
    displayResults();
});
// creates and displays trip cards after sorted and ranked
function results(){
    score();
    sort();
    console.log(cities);
}


function displayResults(){
    for (var i=x; i < more; i++){
        cityCode = cities[i].code;
        cityName = cities[1].name;
        buildTrip();
        x++;
    }
}


// acccepts api form inputs
$("#apiBtn").on("click", function(e){
   
    console.log(origin, dates);


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


    $.ajax(settings).done(function (response) {
        homeCode = response[0].apicode;
        console.log(response);
        // console.log(origin);
        console.log("code" + homeCode);
});
})





function buildTrip() {
    var requestData = {
        origin1: "BNA", 
        destination1: cityCode,
        departdate1: "2020-04-12",
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
            console.log(cityName);
            console.log("price: " + response.cheapestPriceTotal);
            console.log(response.airportSummary);

            var baseURL = response.baseUrl;
            var shareURL = response.shareURL;
            
            // ******* code goes here! ********
            $("#resultsPage").append(`
                <div class="card">
                    <div class="card-header">
                        <h5>${cityName}</h5>
                    </div>
                    <div class="card-body">
                        <p>Cheapest Flight: $${response.cheapestPriceTotal}</p>
                        <p> Things to do in ${cityName}</p>
                        <button id="shareBtn"><a href="${baseURL + shareURL}" target="_blank" style="color:white">Book Now</a></button>
                    </div>
                </div>
            `)
            }
        });
}


        
      


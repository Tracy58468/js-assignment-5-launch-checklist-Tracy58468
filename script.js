// Write your JavaScript code here!

window.addEventListener("load", function() {

    const form = document.getElementById("launchForm");
    
    const faultyItems = document.getElementById('faultyItems');

    form.addEventListener("submit", function(event) {
        let pilotNameInput = document.querySelector("input[name = pilotName]");
        // console.log(pilotNameInput.value);
        let copilotNameInput = document.querySelector("input[name = copilotName]");
        let fuelLevelInput = document.querySelector("input[name = fuelLevel]");
        let cargoMassInput = document.querySelector("input[name = cargoMass]");
        let list = faultyItems;

        formSubmission(document, list, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value);

        event.preventDefault();
    });

    // myFetch();
    
    // console.log(pilotNameInput);

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()

    let listedPlanetsResponse = myFetch();

    // console.log(`listedPlanetsResponse after init ${listedPlanetsResponse}`);
    // console.log(listedPlanetsResponse);

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;

        let pickedPlanet = {}; // Have to declare pickedPlanet here to get the Mission Destination results to appear. Don't know why. Says it's declared but never read. Why does it say that?

        // console.log("result");
        // console.log(result);
        // console.log("listedPlanets");
        // console.log(listedPlanets);

    }).then(function () {

        // console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       
       
       
       pickPlanet(listedPlanets);

       // addDestinationInfo(document, pickPlanet(listedPlanets));

       addDestinationInfo(document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image);
   })
   
});
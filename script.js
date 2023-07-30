// Write your JavaScript code here!

// window.addEventListener("load", function() {
//     const form = document.getElementById("launchForm");
//     // const launchForm = document.getElementById("launchForm");
//     const pilotName = document.getElementById("pilotName");
//     const copilotName = document.getElementById('[name="copilotName"]');
//     const fuelLevel = document.getElementById('[name="fuelLevel"]');
//     const cargoMass = document.getElementById('[name="cargoMass"]');
//     const faultyItems = document.getElementById('faultyItems');

//     form.addEventListener("submit", function(event) {
//         let pilotNameInput = document.querySelector("input[name = pilotName]");
//         // console.log(pilotNameInput.value);
//         let copilotNameInput = document.querySelector("input[name = copilotName]");
//         let fuelLevelInput = document.querySelector("input[name = fuelLevel]");
//         let cargoMassInput = document.querySelector("input[name = cargoMass]");
//         let list = faultyItems;
//         let launchStatus = document.getElementById('launchStatus');

//         formSubmission(document, list, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value);

//         event.preventDefault();
//     });      
// });

window.addEventListener("load", function() {

    const form = document.getElementById("launchForm");
    // const launchForm = document.getElementById("launchForm");
    const pilotName = document.getElementById("pilotName");
    const copilotName = document.getElementById('[name="copilotName"]');
    const fuelLevel = document.getElementById('[name="fuelLevel"]');
    const cargoMass = document.getElementById('[name="cargoMass"]');
    const faultyItems = document.getElementById('faultyItems');

    form.addEventListener("submit", function(event) {
        let pilotNameInput = document.querySelector("input[name = pilotName]");
        // console.log(pilotNameInput.value);
        let copilotNameInput = document.querySelector("input[name = copilotName]");
        let fuelLevelInput = document.querySelector("input[name = fuelLevel]");
        let cargoMassInput = document.querySelector("input[name = cargoMass]");
        let list = faultyItems;
        let launchStatus = document.getElementById('launchStatus');

        formSubmission(document, list, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value);

        event.preventDefault();
    });

    // myFetch();
    
    // console.log(planetsReturned);

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    // console.log(`listedPlanetsResponse after init ${listedPlanetsResponse}`);
    // console.log(listedPlanetsResponse);
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        // console.log("result");
        // console.log(result);
        // console.log("listedPlanets");
        // console.log(listedPlanets);
    }).then(function () {
        // console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       
        // pickPlanet(listedPlanets);

        // addDestinationInfo(document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.imageUrl);
        // addDestinationInfo(document, pickedPlanetNum.name, pickedPlanetNum.diameter, pickedPlanetNum.star, pickedPlanetNum.distance, pickedPlanetNum.moons, pickedPlanetNum.imageUrl);
        // addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
        addDestinationInfo(document, pickPlanet(listedPlanets));
   })

// ORIGINAL
//    let listedPlanets;
//    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//    let listedPlanetsResponse;
//    listedPlanetsResponse.then(function (result) {
//        listedPlanets = result;
//        console.log(listedPlanets);
//    }).then(function () {
//        console.log(listedPlanets);
//        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//    })
   
});

/*ONLY MODIFY THIS AND SCRIPTHELPER.JS*/
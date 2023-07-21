// Write your JavaScript code here!

// const validateInputs = require("./scriptHelper");

window.addEventListener("load", function() {
    const form = document.getElementById("launchForm");
    const launchForm = document.getElementById("launchForm");
    const pilotName = document.getElementById("pilotName");
    const copilotName = document.getElementById('[name="copilotName"]');
    const fuelLevel = document.getElementById('[name="fuelLevel"]');
    const cargoMass = document.getElementById('[name="cargoMass"]');

    form.addEventListener("submit", function(event) {
        let pilotNameInput = document.querySelector("input[name = pilotName]");
        let copilotNameInput = document.querySelector("input[name = copilotName]");
        let fuelLevelInput = document.querySelector("input[name = fuelLevel]");
        let cargoMassInput = document.querySelector("input[name = cargoMass]");

        // validate pilot's name
        if (validateInput(pilotNameInput.value) === "Not a string" || validateInput(pilotNameInput.value) === "Empty") {
            console.log(`validating pilot's name ${pilotNameInput.value}`);
            alert("The pilot's name is not valid.");
            // event.preventDefault();
        } else if (validateInput(pilotNameInput.value) === "Is a string") {
            alert("it's a string");
        }
        
        // STUCK ON VALIDATING PILOT'S NAME
        
        // // validate co-pilot's name
        // if (validateInput(copilotNameInput === "Not a string" || validateInput(copilotNameInput.value === "Empty"))) {
        //     console.log(`validating pilot's name ${copilotNameInput.value} ${validateInput(copilotNameInput)}`);
        //     alert("The co-pilot's name is not valid.");
        //     // event.preventDefault();
        // }
        
        // // validate fuel level input
        // if (validateInput(fuelLevelInput === "Not a number" || validateInput(fuelLevelInput === "Empty"))) {
        //     alert("The fuel level is not valid.");
        //     // event.preventDefault();
        // }

        // // validate cargo mass input
        // if (validateInput(cargoMassInput === "Not a number" || validateInput(cargoMassInput === "Empty"))) {
        //     alert("The cargo mass is not valid.");
        //     // event.preventDefault();
        // }
        
        if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
            alert("All fields are required!");
            // stop the form submission
            event.preventDefault();
        }
    });
});

// window.addEventListener("load", function() {

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
   
// });

/*ONLY MODIFY THIS AND SCRIPTHELPER.JS*/
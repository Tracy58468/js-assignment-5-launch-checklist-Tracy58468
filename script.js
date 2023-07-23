// Write your JavaScript code here!

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

        // alert(`pilotNameInput.value is ${pilotNameInput.value}`);

        // validateInput(pilotNameInput.value);

        // validate pilot's name
        if (validateInput(pilotNameInput.value) === "Not a string" || validateInput(pilotNameInput.value) === "Empty") {
            // console.log(`pilotNameInput.value is ${pilotNameInput.value} in script.js. Type of pilotNameInput.value is ${typeof(pilotNameInput.value)} in script.js.`);

            alert("The pilot's name is not valid.");
            event.preventDefault();
        }
        
        // NOT REALLY SURE WHY ALL OF THIS IS WORKING
        
        if (validateInput(copilotNameInput.value) === "Not a string" || validateInput(copilotNameInput.value) === "Empty") {
            // console.log(`copilotNameInput.value is ${copilotNameInput.value} in script.js. Type of copilotNameInput.value is ${typeof(copilotNameInput.value)} in script.js.`);

            alert("The co-pilot's name is not valid.");
            event.preventDefault();
        }
        
        if (validateInput(fuelLevelInput.value) === "Not a Number" || validateInput(fuelLevelInput.value) === "Empty") {
            console.log(`fuelLevelInput.value is ${fuelLevelInput.value} in script.js. Type of fuelLevelInput.value is ${typeof(fuelLevelInput.value)} in script.js.`);

            alert("The fuel level input is not valid.");
            event.preventDefault();
        }

        if (validateInput(cargoMassInput.value) === "Not a Number" || validateInput(cargoMassInput.value) === "Empty") {
            // console.log(`cargoMassInput.value is ${cargoMassInput.value} in script.js. Type of cargoMassInput.value is ${typeof(cargoMassInput.value)} in script.js.`);

            alert("The cargo mass input is not valid.");
            event.preventDefault();
        }
        
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
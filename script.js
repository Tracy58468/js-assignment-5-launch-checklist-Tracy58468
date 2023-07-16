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
        if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
            alert("All fields are required!");
            // stop the form submission
            event.preventDefault();
        } else if (validateInput(pilotNameInput.value === "Not a string.")) {
            alert("The pilot's name is not valid.");
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
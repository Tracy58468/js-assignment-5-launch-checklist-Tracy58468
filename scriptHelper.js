// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    // Not really sure why the test works, since things are returned as strings after the if statement tests.

//    console.log(`testInput value in scriptHelper.js is ${testInput}`);
//    console.log(`validateInput testInput ${testInput} type of testInput = ${typeof testInput} in scriptHelper.js`);
   if (testInput === "") { // tests to make sure there is not an empty string. If it is empty, returns empty.

    // console.log(`validateInput testInput ${testInput} type of testInput = ${typeof testInput} in scriptHelper.js testing empty`);

    return "Empty"

   } else if (isNaN(Number(testInput))) { // tests to see if the value can be successfully converted into a number. If it can't, returns not a number.

    // console.log(`validateInput testInput ${testInput} type of testInput = ${typeof testInput} in scriptHelper.js testing NaN`);

    return "Not a Number"

   } else if (typeof (testInput) === String) { // tests to see if the input is a string. If it is, returns is a string.

    // console.log(`validateInput testInput ${testInput} type of testInput = ${typeof testInput} in scriptHelper.js testing is a string`);

    return "Is a string"

   } else { // (typeof (testInput) !== String) {

    // console.log(`validateInput testInput ${testInput} type of testInput = ${typeof testInput} in scriptHelper.js testing not a string`);

    return "Not a string"
   };   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    // list.style.visibility = "visible";
    
    // validate pilot's name

    let pilotStatusId = document.getElementById("pilotStatus");

    if (validateInput(pilot) === "Not a string" || validateInput(pilot) === "Empty") {

        // console.log(`pilot is ${pilot} in formSubmission. Type of pilot is ${typeof(pilot)} in formSubmission.`);

        alert("The pilot's name is not valid.");
        pilotStatusId.innerHTML = "Pilot Ready";

    // event.preventDefault();
    } else {
        pilotStatusId.innerHTML = `Pilot ${pilot} is ready for launch`;
    }

    // NOT REALLY SURE WHY ALL OF THIS IS WORKING

    let copilotStatusId = document.getElementById("copilotStatus");

    if (validateInput(copilot) === "Not a string" || validateInput(copilot) === "Empty") {
        // console.log(`copilot is ${copilot} in script.js. Type of copilot is ${typeof(copilot)} in script.js.`);

        alert("The co-pilot's name is not valid.");
        copilotStatusId.innerHTML = "Co-pilot Ready";
        
        // event.preventDefault();
    } else {
        copilotStatusId.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    }

    if (validateInput(fuelLevel) === "Not a Number" || validateInput(fuelLevel) === "Empty") {
        // console.log(`fuelLevel is ${fuelLevel} in script.js. Type of fuelLevel is ${typeof(fuelLevel)} in script.js.`);

        alert("The fuel level input is not valid.");
        // event.preventDefault();
    }

    let fuelStatusId = document.getElementById("fuelStatus");
    
    if (Number(fuelLevel) < 10000) {
        list.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        fuelStatusId.innerHTML = `Fuel level too low for launch`;
    } else {
        fuelStatusId.innerHTML = `Fuel level high enough for launch`;
    }

    if (validateInput(cargoLevel) === "Not a Number" || validateInput(cargoLevel) === "Empty") {
        
        // console.log(`cargoLevel is ${cargoLevel} in script.js. Type of cargoLevel is ${typeof(cargoLevel)} in script.js.`);

        alert("The cargo mass input is not valid.");
        // event.preventDefault();
    }

    let cargoStatusId = document.getElementById("cargoStatus");
    
    if (Number(cargoLevel) > 10000) {
        list.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        cargoStatusId.innerHTML = `Cargo mass too heavy for launch`;
    } else {
        cargoStatusId.innerHTML = `Cargo mass low enough for launch`;
    }

    if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "") {
        alert("All fields are required!");
        // stop the form submission
        // event.preventDefault();
    }
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

/*ONLY MODIFY THIS AND SCRIPT.JS*/

/*
Adding Validation
Adding Alerts

 In scriptHelper.js, you will use validateInput() to complete the formSubmission() function. formSubmission() will take in a document parameter and strings representing the pilot, co-pilot, fuel level, and cargo mass. Using the values in those strings and the document parameter for your HTML document, update the shuttle requirements as described below. Make sure to call your formSubmission() function at the appropriate time in your script.js file!

Note

If you want to check if something is NaN, you cannot use == or ===. Instead, JavaScript has a built-in method called isNaN(value) that returns true if value is NaN and false if value is not NaN.
*/
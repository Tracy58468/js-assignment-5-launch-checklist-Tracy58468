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
   if (testInput === "") {
    // console.log(`validateInput testInput ${testInput} type of testInput = ${typeof testInput} in scriptHelper.js testing empty`);
    return "Empty"
   } else if (isNaN(Number(testInput))) {
    // console.log(`validateInput testInput ${testInput} type of testInput = ${typeof testInput} in scriptHelper.js testing NaN`);
    return "Not a Number"
   } else if (typeof (testInput) === String) {
    // console.log(`validateInput testInput ${testInput} type of testInput = ${typeof testInput} in scriptHelper.js testing is a string`);
    return "Is a string"
   } else { // (typeof (testInput) !== String) {
    // console.log(`validateInput testInput ${testInput} type of testInput = ${typeof testInput} in scriptHelper.js testing not a string`);
    return "Not a string"
   };   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    // validate pilot's name
    if (validateInput(pilot) === "Not a string" || validateInput(pilot) === "Empty") {
    // console.log(`pilot is ${pilot} in formSubmission. Type of pilot is ${typeof(pilot)} in formSubmission.`);

    alert("The pilot's name is not valid.");
    event.preventDefault();
    }

    // NOT REALLY SURE WHY ALL OF THIS IS WORKING

    if (validateInput(copilot) === "Not a string" || validateInput(copilot) === "Empty") {
        // console.log(`copilot is ${copilot} in script.js. Type of copilot is ${typeof(copilot)} in script.js.`);

        alert("The co-pilot's name is not valid.");
        event.preventDefault();
    }

    if (validateInput(fuelLevel) === "Not a Number" || validateInput(fuelLevel) === "Empty") {
        // console.log(`fuelLevel is ${fuelLevel} in script.js. Type of fuelLevel is ${typeof(fuelLevel)} in script.js.`);

        alert("The fuel level input is not valid.");
        event.preventDefault();
    }

    if (validateInput(cargoLevel) === "Not a Number" || validateInput(cargoLevel) === "Empty") {
        // console.log(`cargoLevel is ${cargoLevel} in script.js. Type of cargoLevel is ${typeof(cargoLevel)} in script.js.`);

        alert("The cargo mass input is not valid.");
        event.preventDefault();
    }

    if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "") {
        alert("All fields are required!");
        // stop the form submission
        event.preventDefault();
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
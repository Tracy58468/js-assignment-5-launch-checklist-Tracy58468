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
    // take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate
   // use validateInput() to complete the formSubmission() function
   console.log(`validateInput testInput ${testInput} type of testInput = ${typeof testInput}`);
   if (typeof testInput !== String) {
    return "Not a string"
   } else if (typeof testInput === String) {
    return "Is a string"
   } else if (testInput === "") {
    return "Empty"
   } else if (isNaN(testInput)) {
    return "Not a Number"
   } else {
    return "Is a Number"
   };   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
}

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

You also want to make sure that the user entered valid info for each of the fields. Valid information for the fields means that the user submits a value that is easily converted to the correct data type for our fellow engineers. The pilot and co-pilot names should be strings and the fuel level and cargo mass should be numbers. To do this, complete the helper function in your scriptHelper.js called validateInput(). validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate. In scriptHelper.js, you will use validateInput() to complete the formSubmission() function. formSubmission() will take in a document parameter and strings representing the pilot, co-pilot, fuel level, and cargo mass. Using the values in those strings and the document parameter for your HTML document, update the shuttle requirements as described below. Make sure to call your formSubmission() function at the appropriate time in your script.js file!

Note

If you want to check if something is NaN, you cannot use == or ===. Instead, JavaScript has a built-in method called isNaN(value) that returns true if value is NaN and false if value is not NaN.
*/
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
    const missionTarget = document.getElementById("missionTarget");

    missionTarget.innerHTML = `
        h2>Mission Destination</h2>
            <ol>
                <li>Name: ${name}</li>
                <li>Diameter: ${diameter}</li>
                <li>Star: ${star}</li>
                <li>Distance from Earth: ${distance}</li>
                <li>Number of Moons: ${moons}</li>
            </ol>
        <img src="${imageUrl}">
    `

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

    return "Is a Number"
   };   
}

// list.style.visibility = "hidden";

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    // validate pilot's name

    let launchStatus = document.getElementById('launchStatus');
    let pilotStatusId = document.getElementById("pilotStatus");

    if (validateInput(pilot) === "Is a Number" || validateInput(pilot) === "Empty") { // Checking to see whether pilot name input is empty or a number. If it is either, alert defect.

        // console.log(`pilot is ${pilot} in formSubmission. Type of pilot is ${typeof(pilot)} in formSubmission.`);

        alert("The pilot's name is not valid.");
        pilotStatusId.innerHTML = "Pilot is not ready";

    // event.preventDefault();
    } else {
        list.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "rgb(65, 159, 106)";
        pilotStatusId.innerHTML = `Pilot ${pilot} is ready for launch`;
    }

    // NOT REALLY SURE WHY ALL OF THE VALIDATION IS WORKING

    let copilotStatusId = document.getElementById("copilotStatus");

    if (validateInput(copilot) === "Is a Number" || validateInput(copilot) === "Empty") { // Checking to see whether pilot name input is empty or a number. If it is either, alert defect.

        // console.log(`copilot is ${copilot} in script.js. Type of copilot is ${typeof(copilot)} in script.js.`);

        alert("The co-pilot's name is not valid.");
        copilotStatusId.innerHTML = "Co-pilot is not ready";
        
        // event.preventDefault();
    } else {
        list.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "rgb(65, 159, 106)";
        copilotStatusId.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    }

    if (validateInput(fuelLevel) === "Not a Number" || validateInput(fuelLevel) === "Empty") {
        // console.log(`fuelLevel is ${fuelLevel} in script.js. Type of fuelLevel is ${typeof(fuelLevel)} in script.js.`);

        alert("The fuel level input is not valid.");
        // event.preventDefault();
    }

    let fuelStatusId = document.getElementById("fuelStatus");
    
    if (Number(fuelLevel) < 10000 || Number(cargoLevel) > 10000 || validateInput(pilot) === "Is a Number" || validateInput(pilot) === "Empty" || validateInput(copilot) === "Is a Number" || validateInput(copilot) === "Empty") {
        list.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199, 37, 78)";
    } else {
        list.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "rgb(65, 159, 106)";
        fuelStatusId.innerHTML = `Fuel level high enough for launch`;
    }

    if (Number(fuelLevel) < 10000) {
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

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        response.json().then(function(json) {
            console.log(json);
            return json;
        })
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let pickedPlanetNum = Math.floor(Math.random()*(planets.length + 1));
    console.log(`pickedPlanetNum:  ${pickedPlanetNum}`);
    // now get planet name
    let pickedPlanet = planets.pickedPlanetNum;
    console.log(`pickedPlanet:  ${pickedPlanet}`);
    return pickedPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

/*ONLY MODIFY THIS AND SCRIPT.JS*/
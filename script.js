window.addEventListener("load", function() {
//    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
//       response.json().then( function(json) {
      const missionDestination = document.getElementById("missionTarget");
      missionDestination.innerHTML = "<h2>Mission Destination</h2>"
//`
//          <h2>Mission Destination</h2>
//             <ol>
//                <li>Name: ${json.name[0]}</li>
//                <li>Diameter: ${json.diameter[0]}</li>
//                <li>Star: ${json.star[0]}</li>
//                <li>Distance from Earth: ${json.distance[0]}</li>
//                <li>Number of Moons: ${json.moons[0]}</li>
//             </ol>
//             <img src="${json.image[0]}">
//             `;
//       });

// });
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoWeightInput = document.querySelector("input[name=cargoWeight]");
      fuelLevelInput = parseInt(fuelLevelInput.value, 10);
      cargoWeightInput = parseInt(cargoWeightInput.value, 10);

      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoWeightInput.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      }

      if (isNaN(fuelLevelInput) || isNaN(cargoWeightInput)) {         
         alert("Please enter numbers in the Fuel Level and Cargo Mass fields.");
         event.preventDefault();
      }
   
      if (isNaN(pilotNameInput.value) && isNaN(copilotNameInput.value)) {
         if (fuelLevelInput < 10000 || cargoWeightInput > 10000) {
            let faultyItems = document.getElementById("faultyItems");
            faultyItems.style.visibility = "visible";
            
            let pilotStatusUpdate = document.getElementById("pilotStatus");
            let coPilotStatusUpdate = document.getElementById("copilotStatus");
            let launchStatusUpdate = document.getElementById("launchStatus");
   
            faultyItems.innerHTML = `
            <ol id="checkList">
            <li>Pilot ${pilotNameInput.value} is ready for launch.</li>
            <li>Co-pilot ${copilotNameInput.value} is ready for launch.</li>
            </ol>`

            launchStatusUpdate.innerHTML = "Shuttle is not ready for launch"
            launchStatusUpdate.style.color = "red"; 

            const checkList = document.getElementById("checkList");

            if (fuelLevelInput < 10000) {
            checkList.innerHTML += `<li>Fuel level too low for launch.</li>`;
            }

            if (cargoWeightInput > 10000) {
               checkList.innerHTML += `<li>Cargo mass too high for launch.</li>`;
            }
            alert("!"); 
         } else {
            launchStatusUpdate.innerHTML = "Shuttle is ready for launch"
            launchStatusUpdate.style.color = "green";  
         }
 
      } else {
      alert("Please enter a name with no numbers for the Pilot and Co-pilot's names.");
      event.preventDefault();
      } 

   });



});

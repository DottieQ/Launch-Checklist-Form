window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
         const div = document.getElementById("missionTarget");
         div.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name:${json[2].name}</li>
               <li>Diameter: ${json[2].diameter}</li>
               <li>Star: ${json[2].star}</li>
               <li>Distance from Earth: ${json[2].distance}</li>
               <li>Number of Moons: ${json[2].moons}</li>
            </ol>
            <img src="${json[2].image}">
            `;
         });
      });

   
      let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoWeightInput = document.querySelector("input[name=cargoWeight]");


      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoWeightInput.value === "") {
         alert("All fields are required!");
         console.log(pilotNameInput.value);
         console.log(copilotNameInput.value);
         console.log(fuelLevelInput.value);
         console.log(cargoWeightInput.value)
         event.preventDefault();
      } else if (isNaN(fuelLevelInput.value) || isNaN(cargoWeightInput.value)) {         
         alert("Please enter numbers in the Fuel Level and Cargo Mass fields.");
         console.log(fuelLevelInput.value);
         event.preventDefault();
      } else if (isNaN(pilotNameInput.value) && isNaN(copilotNameInput.value)) {
         let faultyItems = document.getElementById("faultyItems");
         faultyItems.style.visibility = "visible";
         if (fuelLevelInput.value < 10000 || cargoWeightInput.value > 10000) {
            let launchStatusUpdate = document.getElementById("launchStatus");
   
            faultyItems.innerHTML = `
            <ol id="checkList">
            <li>Pilot ${pilotNameInput.value} is ready for launch.</li>
            <li>Co-pilot ${copilotNameInput.value} is ready for launch.</li>
            </ol>`

            launchStatusUpdate.innerHTML = "Shuttle is not ready for launch"
            launchStatusUpdate.style.color = "red"; 

            const checkList = document.getElementById("checkList");

            if (fuelLevelInput.value < 10000 && cargoWeightInput.value <= 10000) {
            checkList.innerHTML += `
            <li>Fuel level too low for launch.</li>
            <li>Cargo mass low enough for launch.</li>
            `;
            event.preventDefault();
            }

            if (fuelLevelInput.value >= 10000 && cargoWeightInput.value > 10000) {
               checkList.innerHTML += `
               <li>Fuel level high enough for launch.</li>
               <li>Cargo mass too high for launch.</li>
               `;
               event.preventDefault();
            }

            if (fuelLevelInput.value < 10000 && cargoWeightInput.value > 10000) {
               checkList.innerHTML += `
               <li>Fuel level too low for launch.</li>
               <li>Cargo mass too high for launch.</li>
               `;
               event.preventDefault();
            }
         } else {
            let faultyItems = document.getElementById("faultyItems");
            faultyItems.style.visibility = "visible";
            let launchStatusUpdate = document.getElementById("launchStatus");
            launchStatusUpdate.innerHTML = "Shuttle is ready for launch"
            launchStatusUpdate.style.color = "green";

            faultyItems.innerHTML = `
            <ol id="checkList">
            <li>Pilot ${pilotNameInput.value} is ready for launch.</li>
            <li>Co-pilot ${copilotNameInput.value} is ready for launch.</li>
            <li>Fuel level high enough for launch.</li>
            <li>Cargo mass low enough for launch.</li>
            </ol>`
            event.preventDefault();
         }
 
      } else {
      alert("Please enter a name with no numbers for the Pilot and Co-pilot's names.");
      event.preventDefault();
      } 
   });
});

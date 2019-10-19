window.addEventListener("load", function() {
   const missionDestination = document.getElementById("missionTarget");
   missionDestination.innerHTML = 
   '<div>   <h2>Mission Destination</h2><ol><li>hi</li> </ol>  </div>'

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then( function(json) {
`
            <ol>
               <li>Name: ${json.name[0]}</li>
               <li>Diameter: ${json.diameter[0]}</li>
               <li>Star: ${json.star[0]}</li>
               <li>Distance from Earth: ${json.distance[0]}</li>
               <li>Number of Moons: ${json.moons[0]}</li>
            </ol>
            <img src="${json.image[0]}">
            `;
      });

});
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
      } else if (isNaN(fuelLevelInput) || isNaN(cargoWeightInput)) {         
         alert("Please enter numbers in the Fuel Level and Cargo Mass fields.");
         event.preventDefault();
      } else if (isNaN(pilotNameInput.value) && isNaN(copilotNameInput.value)) {
         let faultyItems = document.getElementById("faultyItems");
         faultyItems.style.visibility = "visible";
         if (fuelLevelInput < 10000 || cargoWeightInput > 10000) {
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
            event.preventDefault();
            }

            if (cargoWeightInput > 10000) {
               checkList.innerHTML += `<li>Cargo mass too high for launch.</li>`;
               event.preventDefault();
            }
         } else {
            let faultyItems = document.getElementById("faultyItems");
            faultyItems.style.visibility = "visible";
            let launchStatusUpdate = document.getElementById("launchStatus");
            launchStatusUpdate.innerHTML = "Shuttle is ready for launch"
            launchStatusUpdate.style.color = "green";
            event.preventDefault();
         }
 
      } else {
      alert("Please enter a name with no numbers for the Pilot and Co-pilot's names.");
      event.preventDefault();
      } 

   });





});

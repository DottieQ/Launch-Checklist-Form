window.addEventListener("load", function() {
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
         console.log(cargoWeightInput.value);
      } else {
      alert("Please enter a name with no numbers for the Pilot and Co-pilot's names.");
      event.preventDefault();
      } 



      console.log(typeof(pilotNameInput.value));
      console.log(typeof(copilotNameInput.value));
      console.log(typeof(fuelLevelInput.value));
     

   });

   // let button = document.getElementById("formSubmit");
   // button.addEventListener("click", function() {
   //    let pilotNameInput = document.querySelector("input[name=pilotName]");
   //    let copilotNameInput = document.querySelector("input[name=copilotName]");
   //    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
   //    let cargoWeightInput = document.querySelector("input[name=cargoWeight]");
      
   //    let launchStatusUpdate = document.getElementById("launchStatus");
   //    launchStatusUpdate.style.color = "red"; 

   //    let pilotStatusUpdate = document.getElementById("pilotStatus");
   //    pilotStatusUpdate.innerHTML += `Pilot ${pilotNameInput.value} is ready for launch.`;

   //    let coPilotStatusUpdate = document.getElementById("copilotStatus");
   //    coPilotStatusUpdate.innerHTML += `<li>Co-pilot ${copilotNameInput.value} is ready for launch.</li>`;
   // });
});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

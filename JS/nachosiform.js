// Base ingredient amounts for one portion
const baseAmounts = {
    kjøttdeig: 150,        
    løk: 0.25,      
    cherrytomat: 50,       
    tacokrydder: 7.5,   
    salsa: 1,
    nachochips: 50,
    cheddar: 50,
    vårløk: 0.5, 
    jalapeno: 0.5,
    fetaost: 50,
    koriander: 0.5,
    lime: 0.13,
    rødløk: 25,
  };

  // Function to update ingredient amounts based on portions
  function updateIngredients() {
    const portions = document.getElementById("portion-input").value || 1;
    
    // Update each ingredient amount
    document.getElementById("kjøttdeig-amount").textContent = (baseAmounts.kjøttdeig * portions).toFixed(1);
    document.getElementById("løk-amount").textContent = (baseAmounts.løk * portions).toFixed(1);
    document.getElementById("cherrytomat-amount").textContent = (baseAmounts.cherrytomat * portions).toFixed(1);
    document.getElementById("tacokrydder-amount").textContent = (baseAmounts.tacokrydder * portions).toFixed(1);
    document.getElementById("salsa-amount").textContent = (baseAmounts.salsa * portions).toFixed(1);
    document.getElementById("nachochips-amount").textContent = (baseAmounts.nachochips * portions).toFixed(1);
    document.getElementById("cheddar-amount").textContent = (baseAmounts.cheddar * portions).toFixed(1);
    document.getElementById("vårløk-amount").textContent = (baseAmounts.vårløk * portions).toFixed(1);
    document.getElementById("jalapeno-amount").textContent = (baseAmounts.jalapeno * portions).toFixed(1);
    document.getElementById("fetaost-amount").textContent = (baseAmounts.fetaost * portions).toFixed(1);
    document.getElementById("koriander-amount").textContent = (baseAmounts.koriander * portions).toFixed(1);
    document.getElementById("lime-amount").textContent = (baseAmounts.lime * portions).toFixed(1);
    document.getElementById("rødløk-amount").textContent = (baseAmounts.rødløk * portions).toFixed(1);  
};
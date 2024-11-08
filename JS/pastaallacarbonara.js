// Base ingredient amounts for one portion
const baseAmounts = {
    spagetti: 125,        
    bacon: 50,      
    egg: 1,       
    parmesan: 0.5,  
    timian: 0.5,    
    pepper: 0.25,
  };

  // Function to update ingredient amounts based on portions
  function updateIngredients() {
    const portions = document.getElementById("portion-input").value || 1;
    
    // Update each ingredient amount
    document.getElementById("spagetti-amount").textContent = (baseAmounts.spagetti * portions).toFixed(1);
    document.getElementById("bacon-amount").textContent = (baseAmounts.bacon * portions).toFixed(1);
    document.getElementById("egg-amount").textContent = (baseAmounts.egg * portions).toFixed(1);
    document.getElementById("parmesan-amount").textContent = (baseAmounts.parmesan * portions).toFixed(1);
    document.getElementById("timian-amount").textContent = (baseAmounts.timian * portions).toFixed(1);
    document.getElementById("pepper-amount").textContent = (baseAmounts.pepper * portions).toFixed(1);
    
}

  // Initialize ingredient amounts on load
  updateIngredients();
// Base ingredient amounts for one portion
const baseAmounts = {
    Poteter: 2,        
    hvitløk: 1,
    smør: 75,

  };

  // Function to update ingredient amounts based on portions
  function updateIngredients() {
    const portions = document.getElementById("portion-input").value || 1;
    
    // Update each ingredient amount
    document.getElementById("poteter-amount").textContent = (baseAmounts.Poteter * portions).toFixed(1);
    document.getElementById("hvitløk-amount").textContent = (baseAmounts.hvitløk * portions).toFixed(1);
    document.getElementById("smør-amount").textContent = (baseAmounts.smør * portions).toFixed(1);
};
// Base ingredient amounts for one portion
const baseAmounts = {
    kjøttdeig: 20,        
    tacokrydder: 0.1,      
    vann: 0.1,       
    revetost: 20,  
    chili: 0.2,    
    olje: 0.1,
    hvetemel: 52,
    tørrgjærd: 0.2,
    salt: 0.1,
    sukker: 0.1,
    vann1: 0.35
  };

  // Function to update ingredient amounts based on portions
  function updateIngredients() {
    const portions = document.getElementById("portion-input").value || 1;
    
    // Update each ingredient amount
    document.getElementById("kjøttdeig-amount").textContent = (baseAmounts.kjøttdeig * portions).toFixed(1);
    document.getElementById("tacokrydder-amount").textContent = (baseAmounts.tacokrydder * portions).toFixed(1);
    document.getElementById("vann-amount").textContent = (baseAmounts.vann * portions).toFixed(1);
    document.getElementById("revetost-amount").textContent = (baseAmounts.revetost * portions).toFixed(1);
    document.getElementById("chili-amount").textContent = (baseAmounts.chili * portions).toFixed(1);
    document.getElementById("olje-amount").textContent = (baseAmounts.olje * portions).toFixed(1);
    document.getElementById("hvetemel-amount").textContent = (baseAmounts.hvetemel * portions).toFixed(1);
    document.getElementById("tørrgjærd-amount").textContent = (baseAmounts.tørrgjærd * portions).toFixed(1);
    document.getElementById("salt-amount").textContent = (baseAmounts.salt * portions).toFixed(1);
    document.getElementById("sukker-amount").textContent = (baseAmounts.sukker * portions).toFixed(1);
    document.getElementById("vann1-amount").textContent = (baseAmounts.vann1 * portions).toFixed(1);
  
  
  
  }

  // Initialize ingredient amounts on load
  updateIngredients();
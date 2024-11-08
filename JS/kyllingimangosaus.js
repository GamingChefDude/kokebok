// Base ingredient amounts for one portion
const baseAmounts = {
    kylling: 150,        
    salt: 0.13,      
    pepper: 0.13,       
    olje: 0.25,   
    mangochutney: 62.5,
    kremfløte: 0.5,
    smør: 12.5,
    karripaste: 0.5, 
    vann: 0.13,
    koriander: 0.5,
    peanøtter: 0.5,
    chili: 0.13,
  };

  // Function to update ingredient amounts based on portions
  function updateIngredients() {
    const portions = document.getElementById("portion-input").value || 1;
    
    // Update each ingredient amount
    document.getElementById("kylling-amount").textContent = (baseAmounts.kylling * portions).toFixed(1);
    document.getElementById("salt-amount").textContent = (baseAmounts.salt * portions).toFixed(1);
    document.getElementById("pepper-amount").textContent = (baseAmounts.pepper * portions).toFixed(1);
    document.getElementById("olje-amount").textContent = (baseAmounts.olje * portions).toFixed(1);
    document.getElementById("mango-amount").textContent = (baseAmounts.mangochutney * portions).toFixed(1);
    document.getElementById("kremfløte-amount").textContent = (baseAmounts.kremfløte * portions).toFixed(1);
    document.getElementById("smør-amount").textContent = (baseAmounts.smør * portions).toFixed(1);
    document.getElementById("karripaste-amount").textContent = (baseAmounts.karripaste * portions).toFixed(1);
    document.getElementById("vann-amount").textContent = (baseAmounts.vann * portions).toFixed(1);
    document.getElementById("koriander-amount").textContent = (baseAmounts.koriander * portions).toFixed(1);
    document.getElementById("peanøtter-amount").textContent = (baseAmounts.peanøtter * portions).toFixed(1);
    document.getElementById("chili-amount").textContent = (baseAmounts.chili * portions).toFixed(1);
  };
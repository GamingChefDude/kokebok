// Base ingredient amounts for one portion
const baseAmounts = {
    soyasaus: 0.75,        
    sesamolje: 0.5,      
    honning: 0.25,       
    bruntsukker: 0.25,  
    riseddik: 0.5,    
    lime: 0.25,
    hvitløk: 0.25,
    ingefær: 0.25,
    kyllingklubbe: 2,
    koriander: 0.13,
    chili: 0.25,
  };

  // Function to update ingredient amounts based on portions
  function updateIngredients() {
    const portions = document.getElementById("portion-input").value || 1;
    
    // Update each ingredient amount
    document.getElementById("soyasaus-amount").textContent = (baseAmounts.soyasaus * portions).toFixed(1);
    document.getElementById("sesamolje-amount").textContent = (baseAmounts.sesamolje * portions).toFixed(1);
    document.getElementById("honning-amount").textContent = (baseAmounts.honning * portions).toFixed(1);
    document.getElementById("bruntsukker-amount").textContent = (baseAmounts.bruntsukker * portions).toFixed(1);
    document.getElementById("riseddik-amount").textContent = (baseAmounts.riseddik * portions).toFixed(1);
    document.getElementById("lime-amount").textContent = (baseAmounts.lime * portions).toFixed(1);
    document.getElementById("hvitløk-amount").textContent = (baseAmounts.hvitløk * portions).toFixed(1);
    document.getElementById("ingefær-amount").textContent = (baseAmounts.ingefær * portions).toFixed(1);
    document.getElementById("kyllingklubbe-amount").textContent = (baseAmounts.kyllingklubbe * portions).toFixed(1);
    document.getElementById("koriander-amount").textContent = (baseAmounts.koriander * portions).toFixed(1);
    document.getElementById("chili-amount").textContent = (baseAmounts.chili * portions).toFixed(1);
}

  // Initialize ingredient amounts on load
  updateIngredients();
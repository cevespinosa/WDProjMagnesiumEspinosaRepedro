window.onload = function() {
  const savedData = localStorage.getItem("sortingResult");
  
  if (savedData) {
    const retrieved = JSON.parse(savedData);
    const text = document.getElementById("houseText");
    
    text.textContent = `Welcome back, ${retrieved.name}! The Hat placed you in ${retrieved.house}.`;
    
    const banner = document.querySelector(`.banner.${retrieved.house.toLowerCase()}`);
    if (banner) banner.classList.add("show");
    
    const form = document.getElementById("user-form");
    if (form) form.style.display = "none";
  }
};

function startSorting() {
  const nameInput = document.getElementById("playerName").value;
  
  if (!nameInput) {
    alert("Please enter your name first!");
    return;
  }

  const hat = document.getElementById("sortingHat");
  const text = document.getElementById("houseText");
  const banners = document.querySelectorAll(".banner");

  banners.forEach(b => b.classList.remove("show"));
  text.textContent = "Hmm... difficult... very difficult...";
  hat.classList.add("thinking");

  setTimeout(() => {
    const houses = ["gryffindor", "slytherin", "hufflepuff", "ravenclaw"];
    const chosen = houses[Math.floor(Math.random() * houses.length)];

    hat.classList.remove("thinking");
    text.textContent = `${nameInput.toUpperCase()}, you belong in... ${chosen.toUpperCase()}!`;

    banners.forEach(banner => {
      if (banner.classList.contains(chosen)) {
        banner.classList.add("show");
      }
    });

    const sortingData = {
      name: nameInput,
      house: chosen.charAt(0).toUpperCase() + chosen.slice(1),
      timestamp: new Date().toLocaleString()
    };

    localStorage.setItem("sortingResult", JSON.stringify(sortingData));
  }, 3000);
}

function resetSorting() {
  localStorage.removeItem("sortingResult");
  location.reload(); 
}
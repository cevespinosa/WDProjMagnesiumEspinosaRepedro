window.onload = function() {
  const savedData = localStorage.getItem("sortingResult");
  
  if (savedData) {
    const retrieved = JSON.parse(savedData);
    const text = document.getElementById("houseText");
    
    text.textContent = `The Sorting Hat remembers: You are a ${retrieved.house}!`;
    
    const banner = document.querySelector(`.banner.${retrieved.house.toLowerCase()}`);
    if (banner) banner.classList.add("show");
  }
};

function startSorting() {
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
    text.textContent = `Better be... ${chosen.toUpperCase()}!`;

    banners.forEach(banner => {
      if (banner.classList.contains(chosen)) {
        banner.classList.add("show");
      }
    });

    const sortingData = {
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
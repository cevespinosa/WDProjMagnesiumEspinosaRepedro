function startSorting() {
  const hat = document.getElementById("sortingHat");
  const text = document.getElementById("houseText");
  const banners = document.querySelectorAll(".banner");

  // Reset
  banners.forEach(b => b.classList.remove("show"));

  text.textContent = "Hmm... difficult... very difficult...";
  hat.classList.add("thinking");

  setTimeout(() => {
    const houses = ["gryffindor", "slytherin", "hufflepuff", "ravenclaw"];
    const chosen = houses[Math.floor(Math.random() * houses.length)];

    hat.classList.remove("thinking");
    text.textContent = "Ahh... I know just where to put you!";

    banners.forEach(banner => {
      if (banner.classList.contains(chosen)) {
        banner.classList.add("show");
      }
    });
  }, 3000);
}

const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");

// on écoute l'évènement scroll
//pour modifier la translate de item1 et item2

window.addEventListener("scroll", () => {
  // je vérifie si le scroll sur l'axe y
  //est supérieur à la position de l'item1
  // je modifie le style translate de l'item1
  if (window.scrollY >= 1000) {
    item1.style.transform = "none";
  }

  // je vérifie si le scroll sur l'axe y
  //est supérieur à la position de l'item2
  // je modifie le style translate de l'item2
  if (window.scrollY >= 1400) {
    item2.style.transform = "none";
  }
});



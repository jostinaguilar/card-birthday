import confetti from "canvas-confetti";

function adjustScreen() {
  const card = document.querySelector(".card");
  const viewHeight = window.innerHeight;

  card.style.height = `${viewHeight}px`;
}

window.addEventListener("DOMContentLoaded", () => {
  adjustScreen();

  setTimeout(() => {
    confetti({
      particleCount: 150,
      spread: 50,
      gravity: 0.5,
      origin: { y: 0.75 },
      scalar: 0.8,
      //colors: ["#780CF6", "#300BD4", "#1728EB", "#0B50D4", "#0C9BF6"],
    });
  }, 400);
});

window.addEventListener("resize", adjustScreen);

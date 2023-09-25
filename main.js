import confetti from "canvas-confetti";
import anime from "animejs";

function adjustScreen() {
  const card = document.querySelector(".card");
  const viewHeight = window.innerHeight;

  card.style.height = `${viewHeight}px`;
}

window.addEventListener("DOMContentLoaded", () => {
  adjustScreen();

  anime({
    targets: ".name",
    scale: 0,
    direction: "reverse",
    easing: "easeInElastic(1, .6)",
  });

  anime({
    targets: ".birth",
    scale: 0,
    direction: "reverse",
    delay: 200,
    endDelay: 200,
    easing: "easeInElastic(1, .6)",
  });

  anime({
    targets: ".one",
    scale: 0,
    direction: "reverse",
    delay: 400,
    endDelay: 400,
    easing: "easeInElastic(1, .6)",
  });

  anime({
    targets: ".guest",
    opacity: 0,
    direction: "reverse",
    easing: "easeInOutSine",
  });

  anime({
    targets: [".zenon", ".pollito", ".bartolito"],
    translateY: 200,
    direction: "reverse",
    easing: "easeInOutSine",
  });

  setTimeout(() => {
    confetti({
      particleCount: 150,
      spread: 50,
      gravity: 0.5,
      origin: { y: 0.75 },
      scalar: 0.8,
      //colors: ["#780CF6", "#300BD4", "#1728EB", "#0B50D4", "#0C9BF6"],
    });
  }, 500);
});

window.addEventListener("resize", adjustScreen);

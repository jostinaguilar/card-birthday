import confetti from "canvas-confetti";
import anime from "animejs";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const btnPollito = document.querySelector(".pollito");
const btnBartolito = document.querySelector(".bartolito");
const btnZenon = document.querySelector(".zenon");

const tooltipPollito = document.querySelector(".tooltip-pollito");
const tooltipBartolito = document.querySelector(".tooltip-bartolito");
const tooltipZenon = document.querySelector(".tooltip-zenon");

function adjustScreen() {
  const card = document.querySelector(".card");
  const viewHeight = window.innerHeight;

  card.style.height = `${viewHeight}px`;
}

function toast(text) {
  Toastify({
    text: text,
    duration: 3000,
    gravity: "bottom",
    position: "right",
    stopOnFocus: true,
    selector: "card",
    style: {
      position: "absolute",
      width: "fit-content",
      background: "#A05B0F",
      fontSize: "14px",
      fontWeight: "600",
      borderRadius: "10px",
    },
  }).showToast();
}

window.addEventListener("DOMContentLoaded", () => {
  adjustScreen();
});

window.addEventListener("load", () => {
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
      scalar: 0.9,
      //colors: ["#780CF6", "#300BD4", "#1728EB", "#0B50D4", "#0C9BF6"],
    });
  }, 500);
});

btnPollito.addEventListener("click", () => {
  toast("🗓️ 29 de Octubre");
});

tooltipPollito.addEventListener("click", () => {
  toast("🗓️ 29 de Octubre");
});

btnBartolito.addEventListener("click", () => {
  toast("🕒 3:00 PM ");
});

tooltipBartolito.addEventListener("click", () => {
  toast("🕒 3:00 PM ");
});

btnZenon.addEventListener("click", () => {
  toast("🏠 Su Casa");
});

tooltipZenon.addEventListener("click", () => {
  toast("🏠 Su Casa");
});

window.addEventListener("resize", adjustScreen);

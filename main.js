import confetti from "canvas-confetti";
import anime from "animejs";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const btnAcceppt = document.getElementById("accept");
const invitation = document.getElementById("card");
const modal = document.getElementById("modal");

const url = window.location.href;
const name = document.getElementById("name");
const found = document.getElementById("found");
const notFound = document.getElementById("not-found");

const btnPollito = document.querySelector(".pollito");
const btnBartolito = document.querySelector(".bartolito");
const btnZenon = document.querySelector(".zenon");

const tooltipPollito = document.querySelector(".tooltip-pollito");
const tooltipBartolito = document.querySelector(".tooltip-bartolito");
const tooltipZenon = document.querySelector(".tooltip-zenon");

function adjustScreen() {
  const viewHeight = window.innerHeight;

  card.style.height = `${viewHeight}px`;
}

function toast(text) {
  Toastify({
    text: text,
    duration: 5000,
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
  const urlObject = new URL(url);
  const guestUrl = urlObject.searchParams.get("guest");

  if (guestUrl !== null) {
    fetch("guests.json")
      .then((res) => res.json())
      .then((data) => {
        const newGuest = data.filter((guest) => guest.id === guestUrl);
        if (newGuest[0] !== undefined) {
          name.innerText = newGuest[0].guest;
        } else {
          found.classList.remove("block");
          found.classList.add("hidden");
          notFound.classList.remove("hidden");
          notFound.classList.add("block");
        }
      });
  } else {
    found.classList.remove("block");
    found.classList.add("hidden");
    notFound.classList.remove("hidden");
    notFound.classList.add("block");
  }
});

btnAcceppt.addEventListener("click", () => {
  modal.classList.remove("block");
  modal.classList.add("hidden");

  invitation.classList.remove("hidden");
  invitation.classList.add("block");

  anime({
    targets: ".card-content",
    scale: 0,
    direction: "reverse",
    easing: "easeInElastic(1, 0.5)",
  });

  anime({
    targets: ".name",
    scale: 0,
    delay: 200,
    endDelay: 200,
    direction: "reverse",
    easing: "easeInElastic(1, .6)",
  });

  anime({
    targets: ".birth",
    scale: 0,
    direction: "reverse",
    delay: 400,
    endDelay: 400,
    easing: "easeInElastic(1, .6)",
  });

  anime({
    targets: ".one",
    scale: 0,
    direction: "reverse",
    delay: 600,
    endDelay: 600,
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

window.addEventListener("resize", adjustScreen);

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
  Toastify({
    text: "🏠 Ver ubicación",
    duration: 5000,
    gravity: "bottom",
    position: "right",
    stopOnFocus: true,
    selector: "card",
    destination: "https://maps.app.goo.gl/5zSwWdCufRevmndT8",
    newWindow: true,
    style: {
      position: "absolute",
      width: "fit-content",
      background: "#A05B0F",
      fontSize: "14px",
      fontWeight: "600",
      borderRadius: "10px",
    },
  }).showToast();
});

tooltipZenon.addEventListener("click", () => {
  Toastify({
    text: "🏠 Ver ubicación",
    duration: 5000,
    gravity: "bottom",
    position: "right",
    stopOnFocus: true,
    selector: "card",
    destination: "https://maps.app.goo.gl/5zSwWdCufRevmndT8",
    newWindow: true,
    style: {
      position: "absolute",
      width: "fit-content",
      background: "#A05B0F",
      fontSize: "14px",
      fontWeight: "600",
      borderRadius: "10px",
    },
  }).showToast();
});

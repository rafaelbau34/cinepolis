document.getElementById("ageForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenir el envío del formulario

  const age = parseInt(document.getElementById("ageInput").value);

  if (isNaN(age)) {
    alert("Por favor, ingrese una edad válida.");
  } else if (age < 15) {
    alert("¡Felicidades! Tienes un descuento.");
  } else {
    alert("Lo siento, no tienes descuento.");
  }
});

const nightModeToggle = document.querySelector(".night-mode-toggle");
const body = document.querySelector("body");

nightModeToggle.addEventListener("click", function () {
  body.classList.toggle("night-mode");
});

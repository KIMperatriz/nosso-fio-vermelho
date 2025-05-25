
// Define a data do início da espera
const startDate = new Date("2024-12-30");
const counter = document.getElementById("counter");

function updateCounter() {
  const now = new Date();
  const diffTime = Math.abs(now - startDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  counter.innerText = diffDays + " dias";
}

updateCounter();

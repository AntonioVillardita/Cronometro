const display = document.getElementById("display");
const btnAvvia = document.getElementById("btnAvvia");

let tmpIniz = 0;
let intervallo = null;

btnAvvia.addEventListener("click", () => {
  intervallo = setInterval(() => {
    tmpIniz++;
    const ore = Math.floor(tmpIniz / 3600);
    const minuti = Math.floor((tmpIniz % 3600) / 60);
    const secondi = tmpIniz % 60;
    display.textContent = `${String(ore).padStart(2, "0")}:${String(minuti).padStart(2, "0")}:${String(secondi).padStart(2, "0")}`;
  }, 1000);
});

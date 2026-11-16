const boton = document.getElementById("btn-modo");
const temaOscuroGuardado = localStorage.getItem("temaDoofania") === "oscuro";

document.body.classList.toggle("oscuro", temaOscuroGuardado);

if (boton) {
  const actualizarTextoBoton = () => {
    const modoOscuroActivo = document.body.classList.contains("oscuro");
    boton.textContent = modoOscuroActivo ? "☀️" : "🌙";
    boton.setAttribute("aria-pressed", String(modoOscuroActivo));
  };

  actualizarTextoBoton();

  boton.addEventListener("click", () => {
    const modoOscuroActivo = document.body.classList.toggle("oscuro");
    localStorage.setItem("temaDoofania", modoOscuroActivo ? "oscuro" : "claro");
    actualizarTextoBoton();
  });
}

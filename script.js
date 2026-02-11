function converter() {
  const valor = parseFloat(document.getElementById("valor").value);
  const origem = document.getElementById("origem").value;
  const destino = document.getElementById("destino").value;
  const resultado = document.getElementById("resultado");

  if (isNaN(valor)) {
    resultado.textContent = "Digite um valor válido.";
    return;
  }

  let celsius;

  if (origem === "c") celsius = valor;
  if (origem === "f") celsius = (valor - 32) * 5/9;
  if (origem === "k") celsius = valor - 273.15;

  let final;

  if (destino === "c") final = celsius;
  if (destino === "f") final = (celsius * 9/5) + 32;
  if (destino === "k") final = celsius + 273.15;

  resultado.textContent = `Resultado: ${final.toFixed(2)}`;
}

function toggleDark() {
  document.body.classList.toggle("dark");
}

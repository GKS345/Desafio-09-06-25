function runUnitTests() {
  testar("UNIT - calcularPotencia deve calcular corretamente", () => {
    document.getElementById("torque").value = 200;
    document.getElementById("rpm").value = 3000;
    calcularPotencia();

    const resultado = document.getElementById("resultadoPotencia").innerText;
    if (!resultado.includes("Potência estimada:")) throw new Error("Resultado não exibido");
  });

  testar("UNIT - calcularPotencia com campos vazios", () => {
    document.getElementById("torque").value = "";
    document.getElementById("rpm").value = "";
    calcularPotencia();

    const resultado = document.getElementById("resultadoPotencia").innerText;
    if (resultado !== "Preencha todos os campos.") throw new Error("Mensagem de erro não exibida");
  });

  testar("UNIT - calcularCilindrada deve calcular corretamente", () => {
    document.getElementById("diametro").value = 80;
    document.getElementById("curso").value = 86;
    document.getElementById("cilindros").value = 4;
    calcularCilindrada();

    const resultado = document.getElementById("resultadoCilindrada").innerText;
    if (!resultado.includes("Cilindrada total:")) throw new Error("Resultado não exibido");
  });

  testar("UNIT - calcularCilindrada com campos vazios", () => {
    document.getElementById("diametro").value = "";
    document.getElementById("curso").value = "";
    document.getElementById("cilindros").value = "";
    calcularCilindrada();

    const resultado = document.getElementById("resultadoCilindrada").innerText;
    if (resultado !== "Preencha todos os campos.") throw new Error("Mensagem de erro não exibida");
  });
}

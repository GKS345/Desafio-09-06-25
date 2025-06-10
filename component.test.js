function runComponentTests() {
  testar("COMPONENT - Inputs de potência devem estar presentes", () => {
    const torque = document.getElementById("torque");
    const rpm = document.getElementById("rpm");
    if (!torque || !rpm) throw new Error("Inputs de torque ou RPM não encontrados");
  });

  testar("COMPONENT - Inputs de cilindrada devem estar presentes", () => {
    const diametro = document.getElementById("diametro");
    const curso = document.getElementById("curso");
    const cilindros = document.getElementById("cilindros");
    if (!diametro || !curso || !cilindros) throw new Error("Inputs de cilindrada não encontrados");
  });

  testar("COMPONENT - Botões de cálculo devem existir", () => {
    const botoes = document.getElementsByTagName("button");
    if (botoes.length < 2) throw new Error("Botões de cálculo não encontrados");
  });
}

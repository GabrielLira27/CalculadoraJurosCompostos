function calcular() {
    const periodo = parseFloat(document.getElementById('periodo').value);
    const taxa = parseFloat(document.getElementById('taxa').value) / 100 / 12; // Taxa mensal
    const investimentoMensal = parseFloat(document.getElementById('investimentoMensal').value);
    const investimentoTotalInicial = parseFloat(document.getElementById('investimentoTotal').value);
  
    let valorFinal = investimentoTotalInicial;
    for (let i = 0; i < periodo; i++) {
      valorFinal = valorFinal * (1 + taxa) + investimentoMensal;
    }
  
    document.getElementById('resultado').textContent = `O valor final será de R$ ${valorFinal.toFixed(2)}`;
  }

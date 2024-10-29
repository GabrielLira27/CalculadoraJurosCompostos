async function getSelicRate() {
  const hoje = new Date()
  const dia = hoje.getDate().toString().padStart(2,'0')
  const mes = String(hoje.getMonth() + 1).padStart(2,'0')
  const ano = hoje.getFullYear()
  const data_final = `${dia}/${mes}/${ano}`
  const data_inicial = `${dia-1}/${mes}/${ano}` 
  const response = await fetch(`https://api.bcb.gov.br/dados/serie/bcdata.sgs.1178/dados?formato=json&dataInicial=${data_inicial}&dataFinal=${data_final}`);
  const data = await response.json();
  const selicRate = data[0].valor;
  // Exibe a taxa Selic no campo correspondente
  const selicElement = document.getElementById('selic');
  selicElement.value = selicRate;
}

async function getIpcaRate() {
  const hoje = new Date()
  const dia = hoje.getDate().toString().padStart(2,'0')
  const mes = String(hoje.getMonth() + 1).padStart(2,'0')
  const ano = hoje.getFullYear()
  const data_final = `${dia}/${mes}/${ano}`
  const data_inicial = `01/01/${ano}`  
  const response = await fetch(``) 
}

// Chama a função ao carregar a página
window.onload = getSelicRate;

function isNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

function calcular() {
  var periodo = parseFloat(document.getElementById('periodo').value);
  var taxa = parseFloat(document.getElementById('taxa').value);
  var investimentoMensal = parseFloat(document.getElementById('investimentoMensal').value);
  var investimentoTotalInicial = parseFloat(document.getElementById('investimentoTotal').value);

  if (!isNumber(periodo) || !isNumber(taxa) || !isNumber(investimentoMensal) || !isNumber(investimentoTotalInicial)) {
    window.alert("Digite apenas números válidos.");
    return;
  }

  if (periodo <= 0 || taxa <= 0 || investimentoMensal < 0 || investimentoTotalInicial < 0) {
    window.alert("Digite números positivos.");
    return;
  }
    var taxa = parseFloat(document.getElementById('taxa').value) / 100 / 12; // Taxa mensal  
    let valorFinal = investimentoTotalInicial;
    for (let i = 0; i < periodo; i++) {
    valorFinal = valorFinal * (1 + taxa) + investimentoMensal;
    }
  
    document.getElementById('resultado').textContent = `O valor final será de R$ ${valorFinal.toFixed(2)}`;
  }


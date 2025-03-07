// Define a data de início (19/10/2009)
const startDate = new Date("2009-10-19T00:00:00");

// Função para calcular o tempo passado
function calculateTimePassed() {
  // Obtém a data atual
  const now = new Date();
  
  // Calcula a diferença entre as duas datas
  const timeDiff = now - startDate;
  
  // Converte a diferença em milissegundos para anos, meses, dias, horas, minutos e segundos
  const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // Exibe o resultado na página
  document.getElementById("time-passed").innerHTML = `
    Se passaram ${years} anos, ${months} meses, ${days} dias, ${hours} horas, 
    ${minutes} minutos e ${seconds} segundos desde que a mulher mais incrivel nasceu.
  `;
}

// Chama a função ao carregar a página e a atualiza a cada 1000 milissegundos (1 segundo)
setInterval(calculateTimePassed, 1000);

// Chama a função para inicializar imediatamente
calculateTimePassed();

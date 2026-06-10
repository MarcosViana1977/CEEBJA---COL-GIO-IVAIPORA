// Selecionando os elementos da página
const btnGosto = document.getElementById('btn-gosto');
const btnNaoGosto = document.getElementById('btn-nao-gosto');
const mensagemFeedback = document.getElementById('mensagem-feedback');

// Evento para o botão "Gosto"
btnGosto.addEventListener('click', () => {
    mensagemFeedback.textContent = "Ficamos muito felizes que você gosta do CEEBJA! 💙";
    mensagemFeedback.style.color = "#10b981"; // Cor verde para positivo
});

// Evento para o botão "Não gosto"
btnNaoGosto.addEventListener('click', () => {
    mensagemFeedback.textContent = "Poxa, agradecemos o feedback. Estamos sempre buscando melhorar! Let's improve. 🛠️";
    mensagemFeedback.style.color = "#ef4444"; // Cor vermelha para negativo
});

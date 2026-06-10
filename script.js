// Elementos da seção de Curtidas
const btnGosto = document.getElementById('btn-gosto');
const btnNaoGosto = document.getElementById('btn-nao-gosto');
const mensagemFeedback = document.getElementById('mensagem-feedback');

// Elementos da seção de Sugestões
const formSugestao = document.getElementById('form-sugestao');
const nomeEstudante = document.getElementById('nome-estudante');
const textoSugestao = document.getElementById('texto-sugestao');
const mensagemSugestao = document.getElementById('mensagem-sugestao');

// Lógica dos botões curtir/não curtir
btnGosto.addEventListener('click', () => {
    mensagemFeedback.textContent = "Ficamos orgulhosos! Obrigado pelo carinho com o CEEBJA! 💙";
    mensagemFeedback.style.color = "#10b981";
});

btnNaoGosto.addEventListener('click', () => {
    mensagemFeedback.textContent = "Sua opinião importa. Use o campo abaixo para nos dizer como melhorar!";
    mensagemFeedback.style.color = "#ef4444";
});

// Lógica de envio do formulário de sugestão
formSugestao.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede a página de recarregar
    
    const nome = nomeEstudante.value.trim() || "Estudante Anônimo";
    const sugestao = textoSugestao.value.trim();

    // Aqui simula o envio (em um sistema real iria para um banco de dados)
    mensagemSugestao.textContent = `Obrigado, ${nome}! Sua sugestão foi registrada com sucesso. 🚀`;
    mensagemSugestao.style.color = "#0284c7";

    // Limpa os campos do formulário após o envio
    formSugestao.reset();
});

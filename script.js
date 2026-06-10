// Elementos da avaliação de curtidas
const btnGosto = document.getElementById('btn-gosto');
const btnNaoGosto = document.getElementById('btn-nao-gosto');
const msgFeedback = document.getElementById('mensagem-feedback');

// Elementos do formulário de sugestões
const formSugestao = document.getElementById('form-sugestao');
const nomeEstudante = document.getElementById('nome-estudante');
const textoSugestao = document.getElementById('texto-sugestao');
const msgSugestao = document.getElementById('mensagem-sugestao');

// Função auxiliar para exibir os alertas estilizados
function mostrarAlerta(elemento, texto, corSucesso) {
    elemento.textContent = texto;
    elemento.style.display = 'block';
    if (corSucesso) {
        elemento.style.backgroundColor = '#e6f4ea';
        elemento.style.color = '#10b981';
        elemento.style.border = '1px solid #10b981';
    } else {
        elemento.style.backgroundColor = '#fce8e6';
        elemento.style.color = '#ef4444';
        elemento.style.border = '1px solid #ef4444';
    }
}

// Ações dos botões de Curtir / Não Curtir com troca dinâmica de ícones
btnGosto.addEventListener('click', () => {
    mostrarAlerta(msgFeedback, "Obrigado! É um orgulho ter você conosco no CEEBJA Ivaiporã! 💙", true);
    btnGosto.innerHTML = '<i class="fa-solid fa-thumbs-up"></i> Votado!';
    btnNaoGosto.innerHTML = '<i class="fa-regular fa-thumbs-down"></i> Poderia melhorar';
});

btnNaoGosto.addEventListener('click', () => {
    mostrarAlerta(msgFeedback, "Entendemos. Por favor, deixe sua crítica ou sugestão no formulário abaixo.", false);
    btnNaoGosto.innerHTML = '<i class="fa-solid fa-thumbs-down"></i> Votado!';
    btnGosto.innerHTML = '<i class="fa-regular fa-thumbs-up"></i> Eu gosto do colégio';
});

// Ação do envio de formulário
formSugestao.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nome = nomeEstudante.value.trim() || "Estudante Anônimo";
    
    // Simulação visual de envio
    mostrarAlerta(msgSugestao, `Obrigado, ${nome}! Sua sugestão foi encaminhada para a equipe da Diretora Erica.`, true);
    
    // Reseta os campos
    formSugestao.reset();
});

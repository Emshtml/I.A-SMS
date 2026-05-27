/*

const listaMensagens = document.getElementById('listaMensagens');

function enviarMensagem() {

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;

    if(nome === '' || mensagem === '') {
        alert('Preencha todos os campos!');
        return;
    }

    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <h3>${nome}</h3>
        <p>${mensagem}</p>
    `;

    listaMensagens.prepend(card);

    salvarMensagem(nome, mensagem);

    document.getElementById('nome').value = '';
    document.getElementById('mensagem').value = '';
}

function salvarMensagem(nome, mensagem) {

    const mensagens = JSON.parse(localStorage.getItem('aismsMensagens')) || [];

    mensagens.push({
        nome,
        mensagem
    });

    localStorage.setItem('aismsMensagens', JSON.stringify(mensagens));
}

function carregarMensagens() {

    const mensagens = JSON.parse(localStorage.getItem('aismsMensagens')) || [];

    mensagens.reverse().forEach(item => {

        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <h3>${item.nome}</h3>
            <p>${item.mensagem}</p>
        `;

        listaMensagens.appendChild(card);
    });
}

carregarMensagens();

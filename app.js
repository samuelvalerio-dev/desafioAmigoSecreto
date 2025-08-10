let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let novoAmigo = input.value.trim();

    if (novoAmigo === '') {
        alert('Digite um nome válido');
        return;
    }

    amigos.push(novoAmigo);
    input.value = '';
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione amigos antes de sortear!');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoEscolhido = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo secreto sorteado é: ${amigoEscolhido}</li>`;
}

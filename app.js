let amigos = [];

function adicionarAmigo() {
    const nomeInput = document.getElementById("nome");
    const nome = nomeInput.value.trim();

    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        nomeInput.value = "";
        atualizarLista();
    } else {
        alert("Nome inválido ou já adicionado.");
    }
}

function atualizarLista() {
    const lista = document.getElementById("lista-amigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigoSecreto() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos.");
        return;
    }

    let sorteio = [...amigos];
    let resultado = {};

    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let possiveis = sorteio.filter(a => a !== amigo);

        if (possiveis.length === 0) {
            alert("Não foi possível sortear. Tente novamente.");
            return;
        }

        let sorteado = possiveis[Math.floor(Math.random() * possiveis.length)];
        resultado[amigo] = sorteado;
        sorteio.splice(sorteio.indexOf(sorteado), 1);
    }

    console.log("Resultado do sorteio:", resultado);
    alert("Sorteio realizado! Veja o console para os pares.");
}

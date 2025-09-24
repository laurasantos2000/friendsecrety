function adicionarAmigo(nome) {
    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
    }
}

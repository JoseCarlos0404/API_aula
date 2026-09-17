function criar(dados) {
    console.log("2 - service recebeu", dados);
    const chamado = {
        id:1,
        titulo:dados.titulo,
        status:"aberto"
    }
    console.log("3 - SERVICE criou", chamado);
    return chamado
}
module.exports = {criar};

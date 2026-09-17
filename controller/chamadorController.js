const chamadosService = require('../services/chamadosServices')

function criar(req, res) {
    console.log("1- controller recebeu", req.body);

    const chamado = chamadosService.criar(req.body);

    res.status(201).json(chamado);
}
module.exports = {criar}
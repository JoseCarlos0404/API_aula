const chamadosService = require('../services/chamadosServices')

function criar(req, res) {
    try{
        console.log("1- controller recebeu", req.body);
        const chamado = chamadosService.criar(req.body);
        res.status(201).json(chamado);
    }catch(erro){
        res.status(400).json(error.message)
    }
}
module.exports = {criar}
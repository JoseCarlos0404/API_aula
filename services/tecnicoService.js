const tecnicos= [
    {
        nome:"joão da silva",
        especialidade:"redes"
    },
    {
        nome:"Maria santos",
        especialidade:"softwaew"
    },
    {
        nome:"Carlos do Santos",
        especialidade:"hardware"
    }
]

function buscarPorEspecialidade(especialidade) {
    return tecnicos.find(
        tecnico=>tecnico.especialidade===especialidade
    )
}

module.exports = {
    buscarPorEspecialidade
}
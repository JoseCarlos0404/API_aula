const { error } = require("node:console");

function suportN1(chamado){
    console.log("N1 recebeu o chamado");
    if(chamado.prioridade === "normal"){
        console.log("N1 assumiu o chamado");
        return "suporte n1 atendeu o chamado"
    }
    console.log("N1 não conseguiu resoulver");
    console.log("Encaminhado para N2");
    return suportN2(chamado);
    
}
function suportN2(chamado){
    console.log("N2 recebeu o chamado");
    if(chamado.prioridade === "media"){
        console.log("N1 assumiu o chamado");
        return "suporte n2 atendeu o chamado"
    }
    console.log("N2 não conseguiu resoulver");
    console.log("Encaminhado para ESPECILISTA");
    return ESPECIALISTA(chamado);
    
}

function ESPECIALISTA(chamado){
    console.log("ESPECILISTAS recebeu o chamado");
    if(chamado.prioridade === "auta"){
        console.log("ESPECILISTAS assumiu o chamado");
        return "suporte ESPECILISTAS"
    }
    throw new error("Nenhum resopnsável encontrado")
    return ESPECIALISTA(chamado);
    
}

module.exports = {suportN1};
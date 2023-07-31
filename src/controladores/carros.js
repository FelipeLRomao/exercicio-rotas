const listaCarros = require('../../listadecarros');

// Filtra o carro pela marca
const filtrarCarros = (req, res) => {
    const {marca, cor} = req.query;
    let resultado = listaCarros;

    if(marca){
        resultado = listaCarros.filter((carro) => {
           return carro.marca === marca
        });
    }

    if (cor) {
        resultado = resultado.filter((carro) => {
            return carro.cor === cor;
        });
    }
    
    res.send(resultado);
} 


const carroEspecifico = (req, res) => {
    const carroEscolhido = listaCarros.find((carro) => {
        return carro.id  === Number(req.params.id)
    });

    res.send(carroEscolhido);
}

module.exports = {
    filtrarCarros,
    carroEspecifico   
}
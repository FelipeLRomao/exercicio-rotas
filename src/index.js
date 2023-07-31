const express = require('express');

const {carros} = require('./controladores/carros');
const {filtrarCarros, carroEspecifico} = require('./controladores/carros');
const { validarSenha } = require('./intermediarios');

const app = express();

app.use(validarSenha);

app.get('/', (req, res) => {
    console.log('Passei aqui carros')
    res.send('Olá estou funcionando exercicio rotas 01')
});

// traz todo array de carros
app.get('/carros', filtrarCarros);

app.get('/carros/:id', carroEspecifico)

app.listen(3003);
const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.status(200).send({message: 'Olá mmundo esse é o meu novo repositório clonado.'})
})

app.get('Ola/', (req, res)=>{
    res.status(200).send({message: 'Olá'})
})

app.listen(4001, ()=>{
    console.log('Api inicializda na porta 4001');
})
const express = require('express');
const server = express();

server.get('/', (req,res) => {
    return res.json({ mensagem: 'Api está dando certo. Eddie Confie!'})
});

server.listen(3000, () => {
console.log('Servidor está funcionando')
});

const express = require('express');
const app = express();

app.listen(3000, function() {
    console.log('Servidor executando com express!! ...');
});

app.get('/', (req, resp) => resp.send('<h1>Página Principal</h1>')  );

app.get('/produtos', (req, resp) => resp.send('Listagem de Produto') );


app.get('/usuario', (req, resp) => resp.send('<h1>Usuários</h1>') );





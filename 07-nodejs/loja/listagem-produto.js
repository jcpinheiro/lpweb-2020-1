const http = require('http');

const server = http.createServer(function(req, resp) {

    if (req.url == '/produtos') {
       resp.end('<html><h1>Listagem de Produtos</h1></html>');

    }  else if (req.url == '/usuarios') {
        resp.end('<html><h1>Módulo de Usuários</h1></html>');
    
    } else {
        resp.end('<html><h1>Pagina Principal</h1></html>');
    }  
});

server.listen(3000);

console.log('Servidor executando');
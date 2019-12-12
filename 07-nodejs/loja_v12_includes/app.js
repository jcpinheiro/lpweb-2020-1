
const app = require('./config/express')();

// const rotasProdutos = require('./app/rotas/produtos')(app);
// const rotaHome = require('./app/rotas/home')(app);

const porta = 3000;

app.listen(porta, function() {
    console.log(`Servidor executando com express na porta ${porta}`);
});
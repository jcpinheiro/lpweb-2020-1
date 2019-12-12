
const app = require('./config/express')();

const rotasProdutos = require('./app/rotas/produtos')(app);
const rotaHome = require('./app/rotas/home')(app);

// deve ser removido
/* app.get('/', (req, resp) => resp.render('index') ); */
/* app.get('/produtos', (req, resp) => resp.render('produtos/listagem') ); */

app.listen(3000, function() {
    console.log('Servidor executando com express ...');
});






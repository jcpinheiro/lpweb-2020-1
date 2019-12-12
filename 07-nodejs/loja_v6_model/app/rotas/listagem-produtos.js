
//const connectionFactory = require('../infra/connectionFactory');
// agora será carregado com consign

// o problema é que vamos carregar uma conexão previamente, 
// quando a aplicação for iniciada.

module.exports = function(app) {

    app.get('/produtos', function(req, resp) {
      
        let conexao = app.infra.connectionFactory();
        let produtos = app.repositorio.produtos;

        produtos.todos(conexao, function(errs, resultado) {
            resp.render('produtos/listagem', {lista:resultado} );
        }); 

        conexao.end();
    }); 
} 


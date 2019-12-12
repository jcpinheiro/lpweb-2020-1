
//const connectionFactory = require('../infra/connectionFactory');
// agora será carregado com consign

// o problema é que vamos carregar uma conexão previamente, 
// quando a aplicação for iniciada.

module.exports = function(app) {

    app.get('/produtos', function(req, resp) {
      
        let conexao = app.infra.connectionFactory();
        let produtos = app.repositorio.produtos;

        produtos.todos(conexao, function(erros, resultado) {
            resp.render('produtos/listagem', {lista:resultado} );
        }); 

        conexao.end();
    }); 

    app.get('/produtos/form',function(req, resp) {
        resp.render('produtos/form-cadastro');
    });

    app.post('/produtos/salva', function(req, resp) {

        let produto = req.body;
        console.log(produto);

        let conexao = app.infra.connectionFactory();
        let produtos = app.repositorio.produtos;

        produtos.salva(conexao, produto, function(erros, resultados) {
            // resp.render('produtos/listagem' );   
            resp.redirect('/produtos');
        }); 



    });
} 


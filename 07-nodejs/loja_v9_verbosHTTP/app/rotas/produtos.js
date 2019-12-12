
//const connectionFactory = require('../infra/connectionFactory');
// agora será carregado com consign

// o problema é que vamos carregar uma conexão previamente, 
// quando a aplicação for iniciada.

module.exports = function(app) {

    app.get('/produtos', function(req, resp) {

        let conexao =  new app.infra.ConnectionFactory().getConexao();
        let produtos = new app.repositorio.ProdutoRepository(conexao );
           
        produtos.todos( function(erros, resultado) {
            resp.render('produtos/listagem', {lista:resultado} );
            console.log(resultado);

        }); 
        conexao.end();
    }); 

    app.get('/produtos/form',function(req, resp) {
        resp.render('produtos/form-cadastro');
    });


    app.post('/produtos', function(req, resp) {

        let produto = req.body;
        console.log(produto);

        let conexao =  new app.infra.ConnectionFactory().getConexao();
        let produtos = new app.repositorio.ProdutoRepository(conexao);

        produtos.salva(produto, function(erros, resultados) {
            // resp.render('produtos/listagem' );   
            resp.redirect('/produtos');
        }); 

        conexao.end();

    });
} 


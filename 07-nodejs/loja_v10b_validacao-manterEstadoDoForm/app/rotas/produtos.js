
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
        resp.render('produtos/form-cadastro', { errosValidacao:{}, produto:{} });
    });


    app.post('/produtos', function(req, resp) {

        let produto = req.body;

        let validacaoNome = req.assert('nome', 'Nome do produto é obrigatório.').notEmpty();
        let validacaoPreco = req.assert('preco', 'Preço no Formato inválido').isFloat();

        let erros = req.validationErrors();

        if (erros) {
            resp.render('produtos/form-cadastro', { errosValidacao:erros, produto: produto});
            return;
        }


        let conexao =  new app.infra.ConnectionFactory().getConexao();
        let produtos = new app.repositorio.ProdutoRepository(conexao);

        produtos.salva(produto, function(erros, resultados) {
            // resp.render('produtos/listagem' );   
            resp.redirect('/produtos');
        }); 

        conexao.end();

    });
} 


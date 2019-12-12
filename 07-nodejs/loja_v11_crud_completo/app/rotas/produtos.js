module.exports = function (app) {

    app.get('/produtos', function (req, resp) {

        let conexao = new app.infra.ConnectionFactory().getConexao();
        let produtos = new app.repositorio.ProdutoRepository(conexao);

        produtos.todos(function (erros, resultado) {

            if (erros) {
                console.log(erros);
            }
            resp.render('produtos/listagem', {lista: resultado });
        });
        conexao.end();
    });

    /* ---------------------------------------------------------------- */
    app.get('/produtos/form', function (req, resp) {
        resp.render('produtos/form-cadastro', {errosValidacao: {},  produto: {} });
    });


    app.post('/produtos', function (req, resp) {

        let produto = req.body;
        console.log(produto);

        req.assert('nome', 'Nome do produto é obrigatório.').notEmpty();
        req.assert('preco', 'Preço no Formato inválido').isFloat();
        //req.assert('dataCadastro', 'Data inválida').isDate();

        let erros = req.validationErrors();

        if (erros) {
            resp.render('produtos/form-cadastro', { errosValidacao: erros, produto: produto });
            return;
        }


        let conexao = new app.infra.ConnectionFactory().getConexao();
        let produtos = new app.repositorio.ProdutoRepository(conexao);

        produtos.salva(produto, function (erros, resultados) {
           //resp.render('produtos/listagem' );   
           resp.redirect('/produtos');
        });

        conexao.end();

    });

    app.post('/produtos/remove/(:id)', function (req, resp) {
        let produto = {
            id: req.params.id
        }

        let conexao = new app.infra.ConnectionFactory().getConexao();
        let produtos = new app.repositorio.ProdutoRepository(conexao);

        produtos.remove(produto, function (erros, resultados) {
            resp.redirect('/produtos');
        });
    });


    app.get('/produto/edita/(:id)', function (req, resp) {
        

        let conexao = new app.infra.ConnectionFactory().getConexao();
        let produtos = new app.repositorio.ProdutoRepository(conexao);

        produtos.porId(req.params.id, function (erros, resultado) {
            if (erros ) {
                console.log(erros);
            }
            resp.render('produtos/form-cadastro', {errosValidacao: erros,  
                                                    produto: {
                                                        id: resultado[0].id,
                                                        nome: resultado[0].nome,
                                                        descricao: resultado[0].descricao,
                                                        preco: resultado[0].preco,
                                                        dataCadastro: resultado[0].dataCadastro } 
            });
            console.log(resultado);
        });
        conexao.end();
    });


}
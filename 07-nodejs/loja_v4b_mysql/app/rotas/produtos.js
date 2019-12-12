
const connectionFactory = require('../infra/connectionFactory');

module.exports = function(app) {

    app.get('/produtos', (req, resp) => {
        
        let conexao = connectionFactory();
    
        conexao.query('select * from produto', function(erros, resultado) {
            resp.render('produtos/listagem', {lista:resultado} );
        }); 

        conexao.end();
    }); 
} 


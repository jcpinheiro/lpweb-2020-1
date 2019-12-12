module.exports = function(app) {

    app.get('/produtos', (req, resp) => {

        let mysql = require('mysql');
        
        let conexao = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'lojajs'
        });
    
        //var resultado = conexao.query('select * from produto');
        
        conexao.query('select * from produto', function(erro, resultado) {
            resp.render('produtos/listagem', {lista:resultado} );
        }); 

        conexao.end();
    }); 
} 

 
/* module.exports = function(app) {

    app.get('/produtos', (req, resp) => {
        
        let mysql = require('mysql');
        
        let conexao = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'lojajs'
        });
    
        //var resultado = conexao.query('select * from produto');

        conexao.query('select * from produto', function(err, resultado) {
            resp.send(resultado);
            // ...
        }); 

        //resp.render('produtos/listagem') );
        conexao.end();
    }); 
}   */
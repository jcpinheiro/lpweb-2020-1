
let mysql = require('mysql');

// solução 03: Usando classes
class ConnectionFactory {

    constructor() {
        this._conexao = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'lojajs'
        });
    }


    getConexao() {
        return this._conexao;
    }

}

module.exports = () => { return ConnectionFactory };



// solução 02: Para evitar fazer a conexão com o consign
/* 

const criaConexao =  function() {
    console.log('conexão estabelecida com o banco de dados');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'lojajs'
    });
}

module.exports = function() {
    console.log('carregando o modulo de conexao');
    return criaConexao;
}

 */

/* solucao 01 */

/* 
const mysql = require('mysql');

module.exports = function() {
    console.log('conexão estabelecida com o banco de dados');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'lojajs'
    });
} */
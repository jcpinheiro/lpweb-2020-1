 
class ProdutoRepository {
    
    constructor(conexao) {
       this._conexao = conexao;
    }
    
    todos(callback) {
      this._conexao.query('select * from produto', callback);
    }
   
    salva(produto, callback) {
        this._conexao.query('insert into produto set ?', produto, callback);
    }

} 

module.exports = () => { return ProdutoRepository };



/* function Produtos(conexao ){
    this._conexao = conexao;
}

Produtos.prototype.todos = function(callback){
    this._conexao.query('select * from produtos', callback);
}

module.exports = function(){
    return Produtos;
}
 */

/* 
module.exports = function() {

    this.todos = function(conexao, callback) {
        conexao.query('select * from produto', callback)
    }

   this.salva = function(conexao, produto, callback) {
       conexao.query('insert into produto set ?', produto, callback);
   }

   return this;

} */
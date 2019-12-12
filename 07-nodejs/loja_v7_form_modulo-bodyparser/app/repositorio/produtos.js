
module.exports = function() {

    this.todos = function(conexao, callback) {
        conexao.query('select * from produto', callback)
    }

   this.salva = function(conexao, produto, callback) {
       conexao.query('insert into produto set ?', produto, callback);
   }

   return this;

}

module.exports = function() {

    this.todos = function(conexao, callback) {
        conexao.query('select * from produto', callback)
    }

    return this;

}
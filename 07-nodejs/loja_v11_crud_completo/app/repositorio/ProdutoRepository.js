 
class ProdutoRepository {
    
    constructor(conexao) {
       this._conexao = conexao;
    }

    porId(id, callback ) {
        this._conexao.query(`select * from produto where id = ${id}`, callback);
    }


    todos(callback ) {
      this._conexao.query('select * from produto', callback);
    }

   
    salva(produto, callback) {
        console.log('ID ' + produto.id);

        if ( (produto.hasOwnProperty('id')) && (produto.id > 0) ) {
               this._conexao.query('update produto set ? where id = ' + produto.id, produto, callback);
               console.log('executou update');

        } else {
            this._conexao.query('insert into produto set ?', produto, callback);
            console.log('executou insert');

        }    
    }

    remove(produto, callback) {
        this._conexao.query('delete from produto where id = ' + produto.id, callback);
    }

} 

module.exports = () => { return ProdutoRepository };
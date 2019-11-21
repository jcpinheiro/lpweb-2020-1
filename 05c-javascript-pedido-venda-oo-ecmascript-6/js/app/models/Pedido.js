class Pedido {
   
    constructor() {
        this._itens = [];
    }

    adiciona (item ) {
        this._itens.push(item );
    }

    get itens() {
       // return this._itens;
       return [].concat(this._itens );
    }

    



}
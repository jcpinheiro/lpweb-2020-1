
let nome = document.querySelector('#nome');
let quantidade = document.querySelector('#quantidade');
let valor = document.querySelector('#valor');


let form = document.querySelector('.form');
//form.addEventListener('submit', function(event) {

document
    .querySelector('#btnCadastro')
    .addEventListener('click', function(event) {

    event.preventDefault();

    let tr = document.createElement('tr');


    let inputs = [nome.value, quantidade.value, valor.value];

    inputs.forEach(function(campo) {
        let td = document.createElement('td');
        td.textContent = campo;

        tr.appendChild(td);
    });
    let td = document.createElement('td');
    td.textContent = inputs[1] * inputs[2];
    tr.appendChild(td );

    let tbody = document.querySelector('#tbodyItemPedido');

    tbody.appendChild(tr);

    limpaFormulario();
   
})
;


function limpaFormulario( ) {
    nome.value = '';
    quantidade.value = '';
    valor.value = '';

    nome.focus();
}




/*

function soma(x, y ) {
    console.log(x + y);
}

soma(5, 6);


let soma2 = function (x, y ) {
    console.log(x + y);
}

soma2(8, 9);


(function (x, y ) {
    console.log(x + y);
})(3, 6);

function multiplica(x, y) {
    return x * y; 
}


let resultado = multiplica(9,8);

console.log(resultado );

*/
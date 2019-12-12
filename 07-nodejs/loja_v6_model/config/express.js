let express = require('express');
let consign = require('consign');

let app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

consign({cwd:'app'})
   .include('rotas') // carrega as rotas automaticamente
   .then('repositorio')
   .then('infra')
   .into(app);

module.exports = function() {
    return app;
}

 
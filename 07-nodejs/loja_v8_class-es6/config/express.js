let express = require('express');
let consign = require('consign');
let bodyParser = require('body-parser');

let app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

//middleware (filtro)
app.use(bodyParser.urlencoded({extended: true} ));
// req -> bodyParser -> função

consign({cwd:'app'})
   .include('rotas') // carrega as rotas automaticamente
   .then('infra')
   .then('repositorio')
   .into(app);

module.exports = function() {
    return app;
}

 
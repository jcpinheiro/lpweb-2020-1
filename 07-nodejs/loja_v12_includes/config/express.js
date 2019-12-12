
let express = require('express');
let consign = require('consign');  // express-load
let bodyParser = require('body-parser');
let expressValidator = require('express-validator');

let app = express();

//app.use(express.static('./app/public'));

app.set('view engine', 'ejs');
app.set('views', './app/views');

//middleware (filtro)
app.use(bodyParser.urlencoded({extended: true} ));
app.use(expressValidator() );
// req -> bodyParser -> validator -> função

consign({cwd:'app'})
   .include('rotas') // carrega as rotas automaticamente
   .then('infra')
   .then('repositorio')
   .into(app);

module.exports = function() {
    return app;
}

 
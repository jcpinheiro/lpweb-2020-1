
let express = require('express');
let consign = require('consign');  // express-load
let bodyParser = require('body-parser');
let expressValidator = require('express-validator');

let app = express();

//app.use(express.static('./app/public'));

app.set('view engine', 'ejs');
app.set('views', './app/views');

//middleware ( chain of responsability <-> filtro <->Inteceptadores )

app.use(bodyParser.urlencoded({extended: true} ));
app.use(expressValidator() );
// req -> bodyParser -> validator -> rotas -> DAO -> view (ejs)

consign({cwd:'app'})
   .include('rotas') // carrega as rotas automaticamente
   .then('infra')
   .then('repositorio')
   .into(app);

module.exports = function() {
    return app;
}

 
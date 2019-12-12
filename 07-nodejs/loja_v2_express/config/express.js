console.log('modulo carregado ...');

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

module.exports = function() {
    return app;
}

 
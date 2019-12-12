
/* module.exports = function(app) {
    app.get('/', (req, resp) => resp.render('index') );
} */

module.exports = (app) =>  app.get('/', (req, resp) => resp.render('index') );

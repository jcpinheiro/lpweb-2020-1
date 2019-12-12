
module.exports = function(app) {
   
    app.get('/produtos', (req, resp) => resp.render('produtos/listagem') );

}
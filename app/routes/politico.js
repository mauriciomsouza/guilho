module.exports = function(app) {

    var api = app.api.politico;
    app.get('/v1/politicos', api.lista);
    
    app.get('/v1/politicos/:id', api.buscaPorId);
    
};
module.exports = function(app) {

    var api = app.api.partido;
    app.get('/v1/partidos', api.lista);
        
}
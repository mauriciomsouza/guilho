var api = {};

api.lista = function(req, res){
    console.log('Acessando lista de partidos!');
    
    var politicos = [
        {
            _id: 1,
            nome: 'DEM'
        },
        {
            _id: 2,
            nome: 'PSOL'
        }
    ];
    
    res.json(politicos);
};

module.exports = api;


var api = {};

var politicos = [
        {
            _id: 1,
            nome: 'Tarcisio Motta',
            foto: 'http://www.camara.rj.gov.br/images/foto_vereador/tarcisio_motta_gd326.jpg',
            partido: 'PSOL'
        },
        {
            _id: 2,
            nome: 'Cesar Maia',
            foto: 'http://www.camara.rj.gov.br/images/foto_vereador/cesar_maia257.jpg',
            partido: 'DEM'
        },
    ];

api.lista = function(req,res) {
    
    res.json(politicos);
    
};

api.buscaPorId = function(req,res) {
    
    var politico = politicos.find(function(politico){
        return politico._id == req.params.id;
    });
    req.params.id
};

module.exports = api;
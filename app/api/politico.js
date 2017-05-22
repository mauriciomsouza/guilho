var api = {};

/*--var politicos = [
        {
            _id: 1,
            nome: 'Tarcisio Motta',
            foto: 'http://www.camara.rj.gov.br/images/foto_vereador/tarcisio_motta_gd326.jpg',
            partido: 'PSOL'
        },
        {
            _id: 2,
            nome: 'Cesar Maia',
            foto: 'http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/foto/2/190000005654/60011?x=1480557600000',
            partido: 'DEM'
        },
    ];
    
    --*/


var politicos = [
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "VERÔNICA COSTA",
    "nome_urna": "VERÔNICA COSTA",
    "cargo": "Vereador",
    "id": 15002,
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "partido": "PMDB",
    "situacao": "Deferido",
    "coligacao": "PMDB"
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "DAVID MIRANDA",
    "nome_urna": "DAVID MIRANDA",
    "cargo": "Vereador",
    "id": 50500,
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "partido": "PSOL",
    "situacao": "Deferido",
    "coligacao": "PSOL"
  },
     {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "ALEXANDRE ISQUIERDO MOREIRA",
    "nome_urna": "ALEXANDRE ISQUIERDO",
    "cargo": "Vereador",
    "id": 25025,
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "partido": "DEM",
    "situacao": "Deferido",
    "coligacao": "DEM"
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "JOSÉ INALDO FERNANDES DA SILVA",
    "nome_urna": "INALDO SILVA",
    "cargo": "Vereador",
    "id": 10567,
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "partido": "PRB",
    "situacao": "Deferido",
    "coligacao": "PRB"
  }, {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "CARLO FERREIRA DE CAIADO CASTRO",
    "nome_urna": "CARLO CAIADO",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 25622,
    "partido": "DEM",
    "situacao": "Deferido",
    "coligacao": "DEM"
  }, {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "CARLOS NANTES BOLSONARO",
    "nome_urna": "CARLOS BOLSONARO",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "cargo": "Vereador",
    "id": 20120,
    "partido": "PSC",
    "situacao": "Deferido",
    "coligacao": "PSC"
  }, {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "CESAR EPITÁCIO MAIA",
    "nome_urna": "CESAR MAIA",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 25500,
    "partido": "DEM",
    "situacao": "Deferido",
    "coligacao": "DEM"
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "JOAO FRANCISCO INACIO BRAZAO",
    "nome_urna": "CHIQUINHO BRAZÃO",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 15101,
    "partido": "PMDB",
    "situacao": "Deferido",
    "coligacao": "PMDB"
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "CLAUDIO BONFIM DE CASTRO E SILVA",
    "nome_urna": "CLÁUDIO CASTRO",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 20010,
    "partido": "PSC",
    "situacao": "Deferido",
    "coligacao": "PSC"
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "CARLOS EDUARDO DE MATTOS",
    "nome_urna": "DR. CARLOS EDUARDO",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 77044,
    "partido": "SD",
    "situacao": "Deferido",
    "coligacao": "POR UM RIO SOLIDÁRIO"
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "GILBERTO DE OLIVEIRA LIMA",
    "nome_urna": "DR. GILBERTO",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 33123,
    "partido": "PMN",
    "situacao": "Deferido",
    "coligacao": "PMN"
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "FELIPE MICHEL",
    "nome_urna": "FELIPE MICHEL",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 45001,
    "partido": "PSDB",
    "situacao": "Deferido",
    "coligacao": "RIO DE OPORTUNIDADES E DIREITOS"
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "ITALO PEREIRA CAMPOS",
    "nome_urna": "ITALO CIBA",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 70669,
    "partido": "PT do B",
    "situacao": "Deferido",
    "coligacao": "União Trabalhista Cristã"
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "JAIRO SOUZA SANTOS JUNIOR",
    "nome_urna": "DR. JAIRINHO",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 15126,
    "partido": "PMDB",
    "situacao": "Deferido",
    "coligacao": "PMDB"
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "JOÃO MENDES DE JESUS",
    "nome_urna": "JOÃO M. DE JESUS",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 10123,
    "partido": "PRB",
    "situacao": "Deferido",
    "coligacao": "PRB"
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "JONES BARBOSA DE MOURA",
    "nome_urna": "JONES MOURA",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 55111,
    "partido": "PSD",
    "situacao": "Deferido",
    "coligacao": "PSD"
  }, {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "JORGE MIGUEL FELIPPE",
    "nome_urna": "JORGE FELIPPE",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 15800,
    "partido": "PMDB",
    "situacao": "Deferido",
    "coligacao": "PMDB"
  }, {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "TADEU AMORIM DE BARROS JUNIOR",
    "nome_urna": "JUNIOR DA LUCINHA",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 15620,
    "partido": "PMDB",
    "situacao": "Deferido",
    "coligacao": "PMDB"
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "LEANDRO LYRA BRAGA DOGNINI",
    "nome_urna": "LEANDRO LYRA",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 30300,
    "partido": "NOVO",
    "situacao": "Deferido",
    "coligacao": "NOVO"
  }, {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "LUCIANA GONÇALVES DE NOVAES",
    "nome_urna": "LUCIANA NOVAES",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 13535,
    "partido": "PT",
    "situacao": "Deferido",
    "coligacao": "RIO EM COMUM"
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "LUIS ANTONIO DA COSTA RAMOS",
    "nome_urna": "LUIZ CARLOS R. FILHO",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 19019,
    "partido": "PTN",
    "situacao": "Deferido",
    "coligacao": "PTN"
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "ALEXANDRE ARRAES",
    "nome_urna": "ALEXANDRE ARRAES",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 45000,
    "partido": "PSDB",
    "situacao": "Deferido",
    "coligacao": "PSDB"
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "MARCELINO ANTONIO D'ALMEIDA",
    "nome_urna": "MARCELINO D'ALMEIDA",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 11369,
    "partido": "PP",
    "situacao": "Deferido",
    "coligacao": "PP"
  }, {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "MARCELLO MORAES SICILIANO",
    "nome_urna": "MARCELLO SICILIANO",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 31888,
    "partido": "PHS",
    "situacao": "Deferido",
    "coligacao": "PHS"
  }, {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "MARCELO ARAR",
    "nome_urna": "MARCELO ARAR",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 14000,
    "partido": "PTB",
    "situacao": "Deferido",
    "coligacao": "PTB"
  }, {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "MARIELLE FRANCISCO DA SILVA",
    "nome_urna": "MARIELLE FRANCO",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 50777,
    "partido": "PSOL",
    "situacao": "Deferido",
    "coligacao": "Mudar é possível"
  }, {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "OTONI MOURA DE PAULO JUNIOR",
    "nome_urna": "OTONI DE PAULA JR",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 20200,
    "partido": "PSC",
    "situacao": "Deferido",
    "coligacao": "PSC"
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "PAULO PINHEIRO",
    "nome_urna": "PAULO PINHEIRO",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 50111,
    "partido": "PSOL",
    "situacao": "Deferido",
    "coligacao": "Mudar é possível"
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "RAFAEL ALOISIO FREITAS",
    "nome_urna": "RAFAEL A. FREITAS",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 15123,
    "partido": "PMDB",
    "situacao": "Deferido",
    "coligacao": "PMDB"
  }, {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "REIMONT LUIZ OTONI SANTA BARBARA",
    "nome_urna": "REIMONT",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 13333,
    "partido": "PT",
    "situacao": "Deferido",
    "coligacao": "RIO EM COMUM"
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "RENATO ATHAYDE SILVA",
    "nome_urna": "RENATO CINCO",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 50555,
    "partido": "PSOL",
    "situacao": "Deferido",
    "coligacao": "Mudar é possível"
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "JOSE RENATO CARDOZO MOURA",
    "nome_urna": "RENATO MOURA",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 12500,
    "partido": "PDT",
    "situacao": "Deferido",
    "coligacao": "PDT"
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "ROSA MARIA ORLANDO FERNANDES",
    "nome_urna": "ROSA FERNANDES",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 15150,
    "partido": "PMDB",
    "situacao": "Deferido",
    "coligacao": "PMDB"
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "LEONEL BRIZOLA NETO",
    "nome_urna": "LEONEL BRIZOLA NETO",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 50000,
    "partido": "PSOL",
    "situacao": "Deferido",
    "coligacao": "PSOL"
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "TÂNIA CRISTINA MAGALHÃES BASTOS E SILVA",
    "nome_urna": "TÂNIA BASTOS",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 10999,
    "partido": "PRB",
    "situacao": "Deferido",
    "coligacao": "PRB"
  }, {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "TARCÍSIO MOTTA DE CARVALHO",
    "nome_urna": "TARCÍSIO MOTTA",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 50123,
    "partido": "PSOL",
    "situacao": "Deferido",
    "coligacao": "Mudar é possível"
  }, {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "MARIA TERESA BERGHER",
    "nome_urna": "TERESA BERGHER",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 45245,
    "partido": "PSDB",
    "situacao": "Deferido",
    "coligacao": "RIO DE OPORTUNIDADES E DIREITOS"
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "THIAGO KWIATKOWSKI RIBEIRO",
    "nome_urna": "THIAGO K. RIBEIRO",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 15159,
    "partido": "PMDB",
    "situacao": "Deferido",
    "coligacao": "PMDB"
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "ROOSEVELT BARRETO BARCELOS",
    "nome_urna": "VAL",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 51888,
    "partido": "PEN",
    "situacao": "Deferido",
    "coligacao": "O RIO QUE EU QUERO"
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "VERA LUCIA FERREIRA LINS",
    "nome_urna": "VERA LINS",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 11111,
    "partido": "PP",
    "situacao": "Deferido",
    "coligacao": "PP"
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "WILLIAN CARVALHO DOS SANTOS",
    "nome_urna": "WILLIAN COELHO",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 15040,
    "partido": "PMDB",
    "situacao": "Deferido",
    "coligacao": "PMDB"
  }, {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "ANTONIO JOSE PAPERA DE AZEVEDO",
    "nome_urna": "ZICO",
    "cargo": "Vereador",
    "foto": "https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png",
    "id": 14012,
    "partido": "PTB",
    "situacao": "Deferido",
    "coligacao": "PTB"
  }
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
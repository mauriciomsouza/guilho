var api = {};

/*--var politicos = [
        {
            _id: 1,
            nome: 'Tarcisio Motta',
            foto: 'http://www.camara.rj.gov.br/images/foto_VEREADOR/tarcisio_motta_gd326.jpg',
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


var politicos =   [{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "VERÔNICA COSTA",
    "nome_urna": "VERÔNICA COSTA",
    "cargo": "VEREADOR",
    "id": 15002,
    "doacoes": [
        {"nome_doador": "MARIO ANTUNES",
        "valor_doado": 20000},
        {"nome_doador": "JACIARA VITAL NEGREIROS",
        "valor_doado": 16000},
        {"nome_doador": "DIEGO ELIAS VITAL FERREIRA",
        "valor_doado": 10000},
        {"nome_doador": "GABRIEL ALVES DE OLIVEIRA",
        "valor_doado": 10000},
        {"nome_doador": "PAULA BARROS MAIA",
        "valor_doado": 9000},
        {"nome_doador": "JONATAN SILVA DE LIMA",
        "valor_doado": 9000},
        {"nome_doador": "PAULO HENRIQUE RODRIGUES DE BARROS",
        "valor_doado": 1500},
        {"nome_doador": "CAROLINE BARBOSA DA SILVA",
        "valor_doado": 1500},
        {"nome_doador": "VANESSA DOS SANTOS",
        "valor_doado": 1500},
        {"nome_doador": "FILIPE ANTONIO RAMOS DA SILVA",
        "valor_doado": 1500},
        {"nome_doador": "ANDRESSA GUERINI GALDINO",
        "valor_doado": 1500},
        {"nome_doador": "BRUNO CHAVES RIBEIRO",
        "valor_doado": 1500},
       {"nome_doador": "VERONICA CHAVES DE CARVALHO COSTA",
        "valor_doado": 1000},
        {"nome_doador": "BRUNO CHAVES RIBEIRO",
        "valor_doado": 1000}
    ],
    "partido": "PMDB",
    "situacao": "Deferido",
    "coligacao": "PMDB",
    "nascimento": "21/04/1974",
    "escolaridade": "SUPERIOR INCOMPLETO",
    "ocupacao": "VEREADOR",
    "projetos_lei": [
        {"numero_lei": "6145/2017",
         "lei_ordinaria": "Institui o Festival de Rap - Rio Contra as Drogas - de prevenção à dependência química nas comunidades cariocas e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6034/2015",
         "lei_ordinaria": "Estabelece as características do Serviço Público de Emergência e o rol mínimo de serviços que serão classificados como de emergência no território do Município.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6001/2015",
         "lei_ordinaria": "Institui ciclos de palestras sobre a prevenção à gravidez precoce na rede pública de ensino do Município.",
         "status_lei": "EM VIGOR"
        },
        {"numero_lei": "5994/2015",
         "lei_ordinaria": "Estabelece diretrizes para Programa Pedagógico Hospitalar destinado às crianças e adolescentes hospitalizados, no âmbito do Município.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5916/2015",
         "lei_ordinaria": "Dispõe sobre a instituição do Programa de Braços Abertos relativo ao uso abusivo de drogas no âmbito do Município do Rio de Janeiro.",
         "status_lei": "EM VIGOR"
        },
    ]
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "DAVID MIRANDA",
    "nome_urna": "DAVID MIRANDA",
    "cargo": "VEREADOR",
    "id": 50500,
     "doacoes": [
       {"nome_doador": "David Michael dos Santos Miranda",
        "valor_doado": 223200},
        {"nome_doador": "Matheus Graciano Bittencourt Andrade",
        "valor_doado": 1800},
        {"nome_doador": "Wallace Patrick Salgado",
        "valor_doado": 1260},
       {"nome_doador": "Vanderlea da Silva de Aguiar",
        "valor_doado": 1260},
       {"nome_doador": "Theo Louzada Lobato",
        "valor_doado": 1260},
       {"nome_doador": "Nagela Rithyele Pereira Dantas",
        "valor_doado": 1260},
       {"nome_doador": "Julia Sprioli",
        "valor_doado": 1260},
       {"nome_doador": "Nathalia Miranda Diniz Neves",
        "valor_doado": 1260},
       {"nome_doador": "Juliana Toschi Selbach",
        "valor_doado": 10}
],
    "partido": "PSOL",
    "situacao": "Deferido",
    "coligacao": "PSOL",
    "nascimento": "10/05/1985",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "JORNALISTA E REDATOR",
  },
     {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "ALEXANDRE ISQUIERDO MOREIRA",
    "nome_urna": "ALEXANDRE ISQUIERDO",
    "cargo": "VEREADOR",
    "id": 25025,
    "doacoes": [
       {"nome_doador": "Democratas - Diretorio Nacional",
        "valor_doado": 300000},
       {"nome_doador": "Diretorio Municipal do Partido do Movimento Democratico Brasileiro - PMDB - RJ",
        "valor_doado": 1500}
],
    "partido": "DEM",
    "situacao": "Deferido",
    "coligacao": "DEM",
    "nascimento": "31/07/1972",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "VEREADOR",
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "JOSÉ INALDO FERNANDES DA SILVA",
    "nome_urna": "INALDO SILVA",
    "cargo": "VEREADOR",
    "id": 10567,
    "doacoes": [
       {"nome_doador": "Eleição 2016 Marcelo Bezerra Crivella Prefeito",
        "valor_doado": 74809.50},
       {"nome_doador": "Luis Paulo Gomes",
        "valor_doado": 500}
],
    "partido": "PRB",
    "situacao": "Deferido",
    "coligacao": "PRB",
    "nascimento": "08/12/1964",
    "escolaridade": "E. FUNDAMENTAL INC.",
    "ocupacao": "OUTROS",
    "projetos_lei": [
        {"numero_lei": "6175/2017",
         "lei_ordinaria": "Inclui o Dia dos Pais no Calendário Oficial da Cidade consolidado pela Lei n° 5.146/2010.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6157/2017",
         "lei_ordinaria": "Inclui o Dia das Mães no Calendário Oficial da Cidade consolidado pela Lei n° 5.146/2010.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6148/2017",
         "lei_ordinaria": "Institui a Política Municipal de Proteção à Saúde Bucal da Pessoa com Deficiência, no Município do Rio de Janeiro.",
         "status_lei": "EM VIGOR"
         },{"numero_lei": "6086/2017",
         "lei_ordinaria": "Proíbe o consumo de bebidas alcoólicas no interior das estações BRTs, terminais de ônibus e no interior dos ônibus e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6076/2016",
         "lei_ordinaria": "Inclui o Dia Municipal Sem Carro no Calendário Oficial da Cidade consolidado pela Lei nº 5.146/2010.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5991/2015",
         "lei_ordinaria": "Dispõe sobre a divulgação da lista dos inscritos nos programas habitacionais do Município do Rio de Janeiro.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5948/2015",
         "lei_ordinaria": "Estabelece cota de estágios na Administração Direta e Indireta municipal.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5915/2015",
         "lei_ordinaria": "Inclui o Dia do Jiu-Jitsu no Calendário Oficial da Cidade consolidado pela Lei nº 5.146/2010.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5881/2015",
         "lei_ordinaria": "Inclui o Dia do Louvorzão da 93 FM no Calendário Oficial da Cidade consolidado pela Lei n° 5.146/2010.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5856/2015",
         "lei_ordinaria": "Estabelece penalidades aos estabelecimentos que pratiquem discriminação social contra as babás, acompanhantes de menores e acompanhantes de idosos, em virtude de sua vestimenta.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5882/2014",
         "lei_ordinaria": "Estabelece cota de estágios nas empresas ou consórcios que recebam incentivos ou isenção fiscal do Município do Rio de Janeiro.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5783/2014",
         "lei_ordinaria": "Proíbe o abastecimento de Gás Natural Veicular – GNV, na forma que menciona, e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5776/2014",
         "lei_ordinaria": "Dispõe sobre a obrigatoriedade de informar com antecedência a familiar ou responsável nos eventos de exumação por decurso de tempo, e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5744/2014",
         "lei_ordinaria": "Inclui o viradão gospel no calendário oficial da cidade consolidado pela Lei nº 5.146/2010.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5730/2014",
         "lei_ordinaria": "Dispõe sobre a projeção, antes de qualquer sessão cinematográfica, de informações sobre o combate à pedofilia e ao abuso sexual de crianças e adolescentes, e as penalizações incluídas na Lei Federal nº 11.829/2008, e dá outras providências",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5722/2014",
         "lei_ordinaria": "Dispõe sobre a obrigatoriedade de ser destinado local exclusivo nas praças de alimentação para deficientes, idosos e gestantes em centros comerciais, shopping centers, hiper e supermercados e dá outras providências.",
         "status_lei": "EM VIGOR"
        }     
    ]
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "CARLO FERREIRA DE CAIADO CASTRO",
    "nome_urna": "CARLO CAIADO",
    "cargo": "VEREADOR",
    "doacoes": [
       {"nome_doador": "Democratas - Diretorio Nacional",
        "valor_doado": 50000},
       {"nome_doador": "Carlos Eduardo de Sa Baptista",
        "valor_doado": 35000},
       {"nome_doador": "Carlos Ferreira de Caiado Castro",
        "valor_doado": 30000},
       {"nome_doador": "Ruben Ferreira",
        "valor_doado": 15000},
       {"nome_doador": "Julcinea Ferreira de Caiado Castro",
        "valor_doado": 6000},
       {"nome_doador": "Diretorio Municipal do Partido do Movimento Democratico Brasileiro - PMDB - RJ",
        "valor_doado": 2242},
       {"nome_doador": "Avelino de Campos Ribeiro",
        "valor_doado": 200},
       {"nome_doador": "Paulo Roberto Zaib Antonio",
        "valor_doado": 200}
],
    "id": 25622,
    "partido": "DEM",
    "situacao": "Deferido",
    "coligacao": "DEM",
    "nascimento": "09/01/1981",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "VEREADOR",
    "projetos_lei": [
        {"numero_lei": "6170/2017",
         "lei_ordinaria": "Tomba, por interesse histórico e cultural, o imóvel do Quartel General da Polícia Militar do Estado do Rio de Janeiro - QG da Polícia Militar do Estado do Rio de Janeiro, localizado no Centro - Rua Evaristo da Veiga, n 78 - II Região Administrativa",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6163/2017",
         "lei_ordinaria": "Dá o nome de Carlos Alberto Torres (ex-jogador de futebol – 1944/2016) a um equipamento do município.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6158/2017",
         "lei_ordinaria": "Dá o nome de Oscar Cox (fundador e primeiro presidente do Fluminense Football Club – 1880/1931) ao logradouro que menciona.",
         "status_lei": "EM VIGOR"
         },{"numero_lei": "6153/2017",
         "lei_ordinaria": "Trata da divulgação dos preços pagos por medicamentos e serviços por parte das Organizações Sociais e da Secretaria Municipal de Saúde.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6143/2017",
         "lei_ordinaria": "Dispõe sobre a criação do Fundo de Proteção Animal no Município do Rio de Janeiro e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6130/2017",
         "lei_ordinaria": "Declara Patrimônio Cultural de Natureza Imaterial a pesca artesanal no Município do Rio de Janeiro e as comemorações do Dia de São Pedro promovidas pelas diversas colônias de pescadores locais.",
         "status_lei": "EM VIGOR"
        }     
    ]
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "CARLOS NANTES BOLSONARO",
    "nome_urna": "CARLOS BOLSONARO",
    "doacoes": [
       {"nome_doador": "Jair Messias Bolsonaro",
        "valor_doado": 23500},
       {"nome_doador": "Carlos Nantes Bolsonaro",
        "valor_doado": 15100},
       {"nome_doador": "Jorge Francisco",
        "valor_doado": 2500},
       {"nome_doador": "Alessandra Ramos Cunha",
        "valor_doado": 1500}
],
    "cargo": "VEREADOR",
    "id": 20120,
    "partido": "PSC",
    "situacao": "Deferido",
    "coligacao": "PSC",
    "nascimento": "07/12/1982",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "VEREADOR",
    "projetos_lei": [
        {"numero_lei": "6170/2017",
         "lei_ordinaria": "Tomba, por interesse histórico e cultural, o imóvel do Quartel General da Polícia Militar do Estado do Rio de Janeiro - QG da Polícia Militar do Estado do Rio de Janeiro, localizado no Centro - Rua Evaristo da Veiga, n 78 - II Região Administrativa",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5919/2015",
         "lei_ordinaria": "Dispõe sobre a Consolidação da Legislação Municipal referente às cidades-irmãs da Cidade do Rio de Janeiro e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5692/2014",
         "lei_ordinaria": "Veda a contratação ou atuação em função típica, no âmbito do Município do Rio de Janeiro, de profissional médico com diploma de graduação expedido por universidades estrangeiras que não tenha sido revalidado.",
         "status_lei": "EM VIGOR"
         },{"numero_lei": "5627/2013",
         "lei_ordinaria": "Trata da divulgação dos preços pagos por medicamentos e serviços por parte das Organizações Sociais e da Secretaria Municipal de Saúde.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6143/2017",
         "lei_ordinaria": "Determina a prestação de serviços de pronto atendimento pediátrico nas unidades hospitalares que menciona e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5553/2013",
         "lei_ordinaria": "Institui no âmbito do Município do Rio de Janeiro o incentivo fiscal de ISS em benefício da produção de projetos culturais e dá outras providências.",
         "status_lei": "EM VIGOR"
        }     
    ]
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "CESAR EPITÁCIO MAIA",
    "nome_urna": "CESAR MAIA",
    "cargo": "VEREADOR",
    "doacoes": [
       {"nome_doador": "Democratas - Diretorio Nacional",
        "valor_doado": 342000},
       {"nome_doador": "Miguel Barros Henrique",
        "valor_doado": 4000}
],
    "id": 25500,
    "partido": "DEM",
    "situacao": "Deferido",
    "coligacao": "DEM",
    "nascimento": "18/06/1945",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "ECONOMIA",
    "projetos_lei": [
        {"numero_lei": "6170/2017",
         "lei_ordinaria": "Tomba, por interesse histórico e cultural, o imóvel do Quartel General da Polícia Militar do Estado do Rio de Janeiro - QG da Polícia Militar do Estado do Rio de Janeiro, localizado no Centro - Rua Evaristo da Veiga, n 78 - II Região Administrativa",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6153/2015",
         "lei_ordinaria": "Trata da divulgação dos preços pagos por medicamentos e serviços por parte das Organizações Sociais e da Secretaria Municipal de Saúde.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6113/2016",
         "lei_ordinaria": "Dispõe sobre a criação de espaços para compartilhamento de livros em pontos de parada de ônibus, denominados Pontos do Conhecimento.",
         "status_lei": "EM VIGOR"
         },{"numero_lei": "6105/2016",
         "lei_ordinaria": "Inclui na Lei n° 5.919/2015 a Cidade de Lahore, no Paquistão, como cidade-irmã da Cidade do Rio de Janeiro",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6087/2016",
         "lei_ordinaria": "Tomba, por interesse ecológico e cultural, o trecho da Rua Major Ávila compreendido entre as Ruas Conde de Bonfim e Santo Afonso, conhecido como Rua das Flores, na Tijuca.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6085/2016",
         "lei_ordinaria": "Inclui na Lei n° 5.919/2015 a Cidade de Assunção, capital do Paraguai, como Cidade-irmã da Cidade do Rio de Janeiro.",
         "status_lei": "EM VIGOR"
        }     
    ]
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "JOAO FRANCISCO INACIO BRAZAO",
    "nome_urna": "CHIQUINHO BRAZÃO",
    "cargo": "VEREADOR",
     "doacoes": [
       {"nome_doador": "Joao Francisco Inacio Brazao",
        "valor_doado": 100000},
       {"nome_doador": "Maria Magdala Tolentino",
        "valor_doado": 20000}
],
    "id": 15101,
    "partido": "PMDB",
    "situacao": "Deferido",
    "coligacao": "PMDB",
    "nascimento": "22/02/1962",
    "escolaridade": "ENSINO MEDIO",
    "ocupacao": "VEREADOR",
    "projetos_lei": [
        {"numero_lei": "6119/2016",
         "lei_ordinaria": "Dá o nome de Professor Arthur Campos da Paz Filho, a uma unidade de saúde no Município do Rio de Janeiro.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6096/2016",
         "lei_ordinaria": "Define altura mínima de passarelas.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6073/2016",
         "lei_ordinaria": "Dispõe sobre o uso prioritário dos assentos de veículos de transporte público pelas pessoas que menciona.",
         "status_lei": "EM VIGOR"
         },{"numero_lei": "6919/2015",
         "lei_ordinaria": "Dispõe sobre a Consolidação da Legislação Municipal referente às cidades-irmãs da Cidade do Rio de Janeiro e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5866/2015",
         "lei_ordinaria": "Dispõe sobre a instalação de banheiros químicos em feiras-livres, feiras de artesanato, eventos e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5840/2015",
         "lei_ordinaria": "Dispõe sobre a obrigatoriedade das instituições recebedoras de títulos, faturas, boletos de cobrança e carnês de financiamento em geral, a autenticar eletronicamente no documento de cobrança a referida efetivação.",
         "status_lei": "EM VIGOR"
        }     
    ]
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "CLAUDIO BONFIM DE CASTRO E SILVA",
    "nome_urna": "CLÁUDIO CASTRO",
    "cargo": "VEREADOR",
     "doacoes": [
       {"nome_doador": "Eleição 2016 Arthur Henrique Gonçalves Ferreira Prefeito",
        "valor_doado": 261.78}
],
    "id": 20010,
    "partido": "PSC",
    "situacao": "Deferido",
    "coligacao": "PSC",
    "nascimento": "29/03/1979",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "ADVOGADO",
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "CARLOS EDUARDO DE MATTOS",
    "nome_urna": "DR. CARLOS EDUARDO",
    "cargo": "VEREADOR",
     "doacoes": [
       {"nome_doador": "Carlos Eduardo de Mattos",
        "valor_doado": 104000},
       {"nome_doador": "Jose Ricardo Catharino de Oliveira",
        "valor_doado": 45000},
       {"nome_doador": "Marco Antonio de Mattos",
        "valor_doado": 35000},
       {"nome_doador": "Fernando Henrique de Mattos",
        "valor_doado": 30000},
       {"nome_doador": "Ayrcea Catharino de Oliveira",
        "valor_doado": 15000},
       {"nome_doador": "Maria Abrahao Assef de Mattos",
        "valor_doado": 12500},
       {"nome_doador": "Fernando Henrique de Mattos Filho",
        "valor_doado": 10000},
       {"nome_doador": "Antonio Manoel de Souza",
        "valor_doado": 3000},
       {"nome_doador": "Tatiana Ferraz",
        "valor_doado": 2500},
       {"nome_doador": "Alexandre da Costa Peixoto",
        "valor_doado": 1500},
],
    "id": 77044,
    "partido": "SD",
    "situacao": "Deferido",
    "coligacao": "POR UM RIO SOLIDÁRIO",
    "nascimento": "18/01/1964",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "VEREADOR",
    "projetos_lei": [
        {"numero_lei": "6170/2017",
         "lei_ordinaria": "Tomba, por interesse histórico e cultural, o imóvel do Quartel General da Polícia Militar do Estado do Rio de Janeiro – QG da Polícia Militar do Estado do Rio de Janeiro, localizado no Centro - Rua Evaristo da Veiga, nº 78 - II Região Administrativa.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5974/2015",
         "lei_ordinaria": "Tomba, por seu interesse histórico e cultural, a sede onde funciona a Sociedade Mercado São Braz, localizada na Rua Augusto de Vasconcelos, nº 99 e Rua Coronel Agostinho, nº 64, no bairro de Campo Grande.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5947/2015",
         "lei_ordinaria": "Altera a Lei nº 5.477/2012, que criou o Cartão de Gratuidade de Estacionamento para idoso, e dispõe sobre o sistema para sua concessão.",
         "status_lei": "EM VIGOR"
         },{"numero_lei": "5919/2015",
         "lei_ordinaria": "Dispõe sobre a Consolidação da Legislação Municipal referente às cidades-irmãs da Cidade do Rio de Janeiro e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5768/2014",
         "lei_ordinaria": "Inclui a Semana de Conscientização da Doença Pulmonar Obstrutiva Crônica (DPOC) no Calendário Oficial da Cidade consolidado pela Lei nº 5.146/2010.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5757/2014",
         "lei_ordinaria": "Cria o Parque Municipal Sustentável da Gávea na Cidade do Rio de Janeiro.",
         "status_lei": "EM VIGOR"
        }     
    ]
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "GILBERTO DE OLIVEIRA LIMA",
    "nome_urna": "DR. GILBERTO",
    "cargo": "VEREADOR",
    
    "id": 33123,
    "partido": "PMN",
    "situacao": "Deferido",
    "coligacao": "PMN",
    "nascimento": "15/09/1959",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "MEDICO",
    "projetos_lei": [
        {"numero_lei": "6165/2017",
         "lei_ordinaria": "Dispõe sobre a realização de seminário antidrogas no início do ano letivo nas escolas da rede municipal de ensino e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6129/2017",
         "lei_ordinaria": "Dispõe sobre o tempo máximo de espera para atendimento nas lojas de operadoras de telefonia fixa e celular e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5918/2015",
         "lei_ordinaria": "Determina que os estabelecimentos comerciais que vendam frutas, verduras e legumes mantenham afixada em local visível tabela indicativa dos períodos de safra e entressafra de todos os produtos que comercializa.",
         "status_lei": "EM VIGOR"
         },{"numero_lei": "5714/2014",
         "lei_ordinaria": "Dispõe sobre a obrigatoriedade de instalação de câmeras de monitoramento em Unidades de Terapia Intensiva - UTI de hospitais públicos e privados instalados no Município do Rio de Janeiro.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5330/2011",
         "lei_ordinaria": "Inclui na Lei n° 5.242/2011 o Templo de Umbanda Mensageiros da Consolação-TUMC como de utilidade pública.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5257/2011",
         "lei_ordinaria": "Dispõe sobre a implantação do Serviço de Verificação de Óbito-SVO no âmbito do Município do Rio de Janeiro.",
         "status_lei": "EM VIGOR"
        }     
    ]
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "FELIPE MICHEL",
    "nome_urna": "FELIPE MICHEL",
    "cargo": "VEREADOR",
    "doacoes": [
       {"nome_doador": "Ricardo Siqueira Rodrigues",
        "valor_doado": 10000},
       {"nome_doador": "Pericles Vasconcellos Rangel",
        "valor_doado": 5000},
       {"nome_doador": "Marcelo Guimaraes Barbosa da Silva",
        "valor_doado": 6000},
       {"nome_doador": "Alvaro Aderaldo Chaves Filho",
        "valor_doado": 5000},
       {"nome_doador": "Carlos Eduardo Fernandez Soares",
        "valor_doado": 2231.79},
       {"nome_doador": "Paulo Cesar Michel",
        "valor_doado": 2000},
       {"nome_doador": "Antonio Paiva Salgado",
        "valor_doado": 1760},
       {"nome_doador": "Alexandre Viana do Nascimento",
        "valor_doado": 1000},
       {"nome_doador": "Eldir Barroso da Silva",
        "valor_doado": 1000},
       {"nome_doador": "Sergio Ricardo Siqueira",
        "valor_doado": 1000},
       {"nome_doador": "Milene Ponce de Leon",
        "valor_doado": 1000},
       {"nome_doador": "Lucia Helena de Oliveira Alves",
        "valor_doado": 1000},
       {"nome_doador": "Juliana Furtado Carvalho",
        "valor_doado": 1000},
       {"nome_doador": "Fabiane de Sousa Silva",
        "valor_doado": 1000},
],
    "id": 45001,
    "partido": "PSDB",
    "situacao": "Deferido",
    "coligacao": "RIO DE OPORTUNIDADES E DIREITOS",
    "nascimento": "05/04/1977",
    "escolaridade": "ENSINO MEDIO",
    "ocupacao": "COMERCIANTE",
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "ITALO PEREIRA CAMPOS",
    "nome_urna": "ITALO CIBA",
    "cargo": "VEREADOR",
    
    "id": 70669,
    "partido": "PT do B",
    "situacao": "Deferido",
    "coligacao": "União Trabalhista Cristã",
    "nascimento": "09/03/1959",
    "escolaridade": "ENSINO MEDIO",
    "ocupacao": "APOSENTADO",
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "JAIRO SOUZA SANTOS JUNIOR",
    "nome_urna": "DR. JAIRINHO",
    "cargo": "VEREADOR",
    "doacoes": [
       {"nome_doador": "Getulio Gomes de Oliveira",
        "valor_doado": 100000},
       {"nome_doador": "Jairo Souza Santos Junior",
        "valor_doado": 40000},
       {"nome_doador": "Jesse Moraes de Jesus",
        "valor_doado": 8000},
       {"nome_doador": "Jairo Souza Santos",
        "valor_doado": 5000},
       {"nome_doador": "Lucas Ferreira Burgelli",
        "valor_doado": 5000},
       {"nome_doador": "Tharsia Wanderson da Conceição",
        "valor_doado": 5000},
       {"nome_doador": "Tadeu Henrique Faria Santos",
        "valor_doado": 1000},
       {"nome_doador": "Rubens Ricardo de Castro Oliveira",
        "valor_doado": 970},
       {"nome_doador": "Roberto Ricardo de Castro Oliveira",
        "valor_doado": 970},
       {"nome_doador": "Heloisa Emilia Patricio de Andrade",
        "valor_doado": 970},
       {"nome_doador": "Jannice Maria de Rocha PItta",
        "valor_doado": 970},
       {"nome_doador": "Alexandro Alves ignacio",
        "valor_doado": 970},
       {"nome_doador": "Sheila Patricia dos Santos",
        "valor_doado": 970},
       {"nome_doador": "Luciane Beatriz Silva",
        "valor_doado": 970},
       {"nome_doador": "Marcos Antonio Barbosa de Souza",
        "valor_doado": 970},
       {"nome_doador": "Marcelo Brito Rodrigues",
        "valor_doado": 970},
       {"nome_doador": "Valtair dos Santos Ambrosio",
        "valor_doado": 970},
       {"nome_doador": "Thalita Fernandes Santos",
        "valor_doado": 970},
       {"nome_doador": "Monique Leitao da Silva",
        "valor_doado": 970},
       {"nome_doador": "Josimar Campos Azevedo",
        "valor_doado": 970},
       {"nome_doador": "Fausto Enrique Infran",
        "valor_doado": 970},
       {"nome_doador": "Deisimar mendes Capella",
        "valor_doado": 970},
       {"nome_doador": "Cristiane Izidoro de Souza",
        "valor_doado": 970},
       {"nome_doador": "Almir da Silva Filho",
        "valor_doado": 970},
       {"nome_doador": "Emilson de Oliveira Rocha",
        "valor_doado": 970},
],
    "id": 15126,
    "partido": "PMDB",
    "situacao": "Deferido",
    "coligacao": "PMDB",
    "nascimento": "31/12/1977",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "VEREADOR",
    "projetos_lei": [
        {"numero_lei": "6173/2017",
         "lei_ordinaria": "Inclui o Dia da Empregada Doméstica no Calendário Oficial da Cidade consolidado na Lei n° 5.146/2010.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5919/2015",
         "lei_ordinaria": "Dispõe sobre a Consolidação da Legislação Municipal referente às cidades-irmãs da Cidade do Rio de Janeiro e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5772/2014",
         "lei_ordinaria": "Inclui parágrafos no art. 3º da Lei nº 5.131, de 17 de dezembro de 2009.",
         "status_lei": "EM VIGOR"
         },{"numero_lei": "5650/2013",
         "lei_ordinaria": "Dispõe sobre a criação, transformação e extinção dos cargos de provimento efetivo do Quadro de Servidores da Câmara Municipal do Rio de Janeiro e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5492/2012",
         "lei_ordinaria": "Estabelece normas e condições à permissão de veículos de aluguel a taxímetro – táxi, no âmbito do Município, suplementando a Lei Federal nº 12.468, de 26 de agosto de 2011, e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5407/2012",
         "lei_ordinaria": "Dispõe sobre a implantação do Serviço de Verificação de Óbito-SVO no âmbito do Município do Rio de Janeiro.Cria o Bairro da Lapa, pela subdivisão do Bairro de Fátima e do Centro, área da AP 1, II Região Administrativa.",
         "status_lei": "EM VIGOR"
        }     
    ]
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "JOÃO MENDES DE JESUS",
    "nome_urna": "JOÃO M. DE JESUS",
    "cargo": "VEREADOR",
     "doacoes": [
       {"nome_doador": "ELEICAO 2016 MARCELO BEZERRA CRIVELLA PREFEITO",
        "valor_doado": 61309.50},
       {"nome_doador": "JOAO MENDES DE JESUS",
        "valor_doado": 5000},
       {"nome_doador": "JOSE CARLOS COSTA SIMONIN",
        "valor_doado": 2000},
       {"nome_doador": "RAIMUNDA DE FATIMA GONCALVES RIBEIRO",
        "valor_doado": 800},
       {"nome_doador": "BRUNA MELO DE OLIVEIRA",
        "valor_doado": 800},
       {"nome_doador": "CARLA MELO DE OLIVEIRA MATTOS JUVENCIO",
        "valor_doado": 800},
       {"nome_doador": "ROSEMERI BENTO COUTINHO OLIVEIRA",
        "valor_doado": 800},
       {"nome_doador": "ABIGAIL DOS ANJOS SILVA",
        "valor_doado": 800},
     ],
    "id": 10123,
    "partido": "PRB",
    "situacao": "Deferido",
    "coligacao": "PRB",
    "nascimento": "27/01/1953",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "VEREADOR",
    "projetos_lei": [
        {"numero_lei": "6171/2017",
         "lei_ordinaria": "Reconhece como de interesse cultural, social e turístico para o Município do Rio de Janeiro as lajes das casas das comunidades cariocas.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6168/2017",
         "lei_ordinaria": "Declara como patrimônio cultural imaterial, social e turístico do Município do Rio de Janeiro o Futebol de Praia e de Areia.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6152/2017",
         "lei_ordinaria": "Proíbe o repasse ao locatário da cobrança de tarifa bancária em boleto de pagamento de aluguel de imóvel localizado no Município do Rio de Janeiro.",
         "status_lei": "EM VIGOR"
         },{"numero_lei": "6134/2017",
         "lei_ordinaria": "Proíbe o repasse ao locatário da cobrança de tarifa bancária em boleto de pagamento de aluguel de imóvel localizado no Município do Rio de Janeiro.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6117/2016",
         "lei_ordinaria": "Inclui o Dia da Campanha Cerol Mata no Calendário Oficial da Cidade consolidado pela Lei nº 5.146/2010.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5973/2015",
         "lei_ordinaria": "Institui o Sistema Municipal de Desenvolvimento Sustentável da Pesca no Município do Rio de Janeiro.",
         "status_lei": "EM VIGOR"
        }     
    ]
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "JOÃO RICARDO RIBAS JÚNIOR",
    "nome_urna": "DR. JOÃO RICARDO",
    "cargo": "VEREADOR",
    "doacoes": [
       {"nome_doador": "Aron Klajnman",
        "valor_doado": 4300},
       {"nome_doador": "Joao Carlos Alves dos Santos",
        "valor_doado": 3000},
       {"nome_doador": "Diretorio Municipal do Partido do Movimento Democratico Brasileiro - PMDB - RJ",
        "valor_doado": 19141},
],
    "id": 15999,
    "partido": "PMDB",
    "situacao": "Deferido",
    "coligacao": "PMDB",
    "nascimento": "25/12/1964",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "MEDICO",
    "projetos_lei": [
        {"numero_lei": "6164/2017",
         "lei_ordinaria": "Inclui na Lei nº 5.919/2015 a Cidade de Medellín, na Colômbia, como cidade-irmã da Cidade do Rio de Janeiro.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6142/2017",
         "lei_ordinaria": "Dá o nome de Luiz Severiano Ribeiro (1885/1974) ao Passeio Público localizado na Avenida Rio Branco, no trecho que vai da Avenida Nilo Peçanha, passando pela Cinelândia, até a Avenida Presidente Wilson.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6097/2016",
         "lei_ordinaria": "Institui o Serviço Particular de Resgate e Salvamento de Animais.",
         "status_lei": "EM VIGOR"
         },{"numero_lei": "6084/2014",
         "lei_ordinaria": "Tomba, por seu valor histórico, arquitetônico e cultural, o Palácio Maçônico, localizado na Rua do Lavradio nº 97, no Centro.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6071/2016",
         "lei_ordinaria": "Proíbe a utilização de veículos de tração animal na Ilha de Paquetá.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6059/2016",
         "lei_ordinaria": "Dispõe sobre o sepultamento de animais domésticos em cemitérios do Município do Rio de Janeiro.",
         "status_lei": "EM VIGOR"
        }     
    ]
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "JONES BARBOSA DE MOURA",
    "nome_urna": "JONES MOURA",
    "cargo": "VEREADOR",
    "doacoes": [
       {"nome_doador": "ELEICAO 2016 ANTONIO PEDRO INDIO PREFEITO",
        "valor_doado": 780},
    ],
    "id": 55111,
    "partido": "PSD",
    "situacao": "Deferido",
    "coligacao": "PSD",
    "nascimento": "16/06/1974",
    "escolaridade": "ENSINO MEDIO",
    "ocupacao": "SERVIDOR MUNICIPAL",
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "JORGE MIGUEL FELIPPE",
    "nome_urna": "JORGE FELIPPE",
    "cargo": "VEREADOR",
    "doacoes": [
       {"nome_doador": "JORGE MIGUEL FELIPPE",
        "valor_doado": 65000},
       {"nome_doador": "ROGERIO MOREIRA VIEIRA",
        "valor_doado": 50000},
       {"nome_doador": "EDUARDO TUFFY FELIPPE FILHO",
        "valor_doado": 40000},
       {"nome_doador": "DELIO DA SILVA",
        "valor_doado": 2000},
       {"nome_doador": "EDUARDO LEMOS GONCALVES DE OLIVEIRA",
        "valor_doado": 20000},
       {"nome_doador": "LEANDRO AUGUSTO PRINCIPE DE QUEIROZ",
        "valor_doado": 16000},
       {"nome_doador": "JOAO HENRIQUE COSTA SOUZA TRISTAO",
        "valor_doado": 10000},
       {"nome_doador": "SAMIRA TUFFY FELIPPE",
        "valor_doado": 13000},
     {"nome_doador": "CARLOS SEBASTIAO GRACA COSTA",
        "valor_doado": 5000},
       {"nome_doador": "ROSANE DE SOUZA REIS DA SILVA",
        "valor_doado": 4500},
       {"nome_doador": "DIRETORIO MUNICIPAL DO PARTIDO DO MOVIMENTO DEMOCRATICO BRASILEIRO - PMDB - RJ",
        "valor_doado": 7238},
       {"nome_doador": "SANDRA REGINA RODRIGUES PINHEIRO",
        "valor_doado": 4000},
       {"nome_doador": "ROGER MARQUES ROCHA",
        "valor_doado": 4000},
       {"nome_doador": "FABIO CRISTINO",
        "valor_doado": 3200},
       {"nome_doador": "MAURA SABINO DA SILVA",
        "valor_doado": 3000},
       {"nome_doador": "BRUNO ASSIS DE LIMA",
        "valor_doado": 3000},
      {"nome_doador": "JOAO GALDINO DE MELO",
        "valor_doado": 3000},
     {"nome_doador": "JOSE DO NASCIMENTO PINHEIRO",
        "valor_doado": 3000},
       {"nome_doador": "JOAOBE SERAFIM NASCIMENTO",
        "valor_doado": 2000},
       {"nome_doador": "ALEXANDRE VIEIRA SOUZA",
        "valor_doado": 2000},
       {"nome_doador": "NOEMIA MIGUEL FELIPPE",
        "valor_doado": 1500},
       {"nome_doador": "ROSANE MARIA SANTANGELO SOUZA",
        "valor_doado": 1000},
       {"nome_doador": "SELMO RODRIGUES CARDOSO",
        "valor_doado": 1000},
       {"nome_doador": "LUIZ ALBERTO CORREA DA SILVA",
        "valor_doado": 1000},
     ],
    "id": 15800,
    "partido": "PMDB",
    "situacao": "Deferido",
    "coligacao": "PMDB",
    "nascimento": "02/06/1950",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "VEREADOR",
    "projetos_lei": [
        {"numero_lei": "6104/2016",
         "lei_ordinaria": "Dispõe sobre a remoção de veículos por estacionamento irregular pela Prefeitura da Cidade do Rio de Janeiro",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6073/2016",
         "lei_ordinaria": "Dispõe sobre o uso prioritário dos assentos de veículos de transporte público pelas pessoas que menciona.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5979/2015",
         "lei_ordinaria": "Dispõe sobre a Consolidação da Legislação Municipal referente às cidades-irmãs da Cidade do Rio de Janeiro e dá outras providências.",
         "status_lei": "EM VIGOR"
         },{"numero_lei": "5878/2015",
         "lei_ordinaria": "Dispõe sobre classes de carreira, posicionamento e remuneração dos servidores efetivos, aposentados e pensionistas da Câmara Municipal do Rio de Janeiro e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5877/2015",
         "lei_ordinaria": "Altera e acrescenta dispositivos à Lei n° 5.650, de 18 de dezembro de 2013, e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5772/2014",
         "lei_ordinaria": "DInclui parágrafos no art. 3º da Lei nº 5.131, de 17 de dezembro de 2009.",
         "status_lei": "EM VIGOR"
        }     
    ]
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "OTONI MOURA DE PAULO JUNIOR",
    "nome_urna": "OTONI DE PAULA",
    "cargo": "VEREADOR",
    "doacoes": [
       {"nome_doador": "Alex Casemiro",
        "valor_doado": 1000},
       {"nome_doador": "Jeremias Barcelos Belmiro",
        "valor_doado": 1000},
       {"nome_doador": "Fatima Fernandes de Paulo",
        "valor_doado": 1064},
       {"nome_doador": "Diretorio Municipal do Partido Social Cristao do Rio de Janeiro",
        "valor_doado": 681},
       {"nome_doador": "Eleicao 2016 Flavio Nantes Bolsonaro Prefeito",
        "valor_doado": 1440},
],
    "id": 20200,
    "partido": "PSC",
    "situacao": "Deferido",
    "coligacao": "PSC",
    "nascimento": "22/11/1976",
    "escolaridade": "ENSINO MEDIO",
    "ocupacao": "OUTROS",
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "JORGE HENRIQUE MARTINS MANAIA",
    "nome_urna": "DR. JORGE MANAIA",
    "cargo": "VEREADOR",
    "doacoes": [
       {"nome_doador": "Marcelo Rodrigues Soares",
        "valor_doado": 15000},
       {"nome_doador": "Jorge Henrique Martins manaia",
        "valor_doado": 34000},
       {"nome_doador": "Vagner de Souza",
        "valor_doado": 900},
       {"nome_doador": "Ronizi Antunes Silva Pereira",
        "valor_doado": 900},
       {"nome_doador": "Lucas Moritz Postigo",
        "valor_doado": 900},
       {"nome_doador": "Emerson Luiz Macedo de Menezes",
        "valor_doado": 900},
       {"nome_doador": "Carlos Jose dos Santos",
        "valor_doado": 900},
       {"nome_doador": "#NULO",
        "valor_doado": 0.60},
],
    "id": 77456,
    "partido": "SD",
    "situacao": "Deferido",
    "coligacao": "SD",
    "nascimento": "07/05/1963",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "VEREADOR",
    "projetos_lei": [
        {"numero_lei": "6182/2017",
         "lei_ordinaria": "Autoriza trânsito de veículos de passeio na pista seletiva da Avenida Brasil, nos horários mencionados.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6170/2017",
         "lei_ordinaria": "Tomba, por interesse histórico e cultural, o imóvel do Quartel General da Polícia Militar do Estado do Rio de Janeiro – QG da Polícia Militar do Estado do Rio de Janeiro, localizado no Centro - Rua Evaristo da Veiga, nº 78 - II Região Administrativa.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5958/2015",
         "lei_ordinaria": "Tomba, para fins de preservação histórica e cultural, o nome do hotel Copacabana Palace, situado na Avenida Atlântica, em Copacabana.",
         "status_lei": "EM VIGOR"
         },{"numero_lei": "5702/2015",
         "lei_ordinaria": "Dispõe sobre o reaproveitamento e reciclagem dos filtros de cigarro e demais componentes de qualquer produto fumígeno, derivado ou não do tabaco, e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5701/2014",
         "lei_ordinaria": "Determina forma de acondicionamento seguro para objetos cortantes que possam ser usados contra a vida de outros nos supermercados e comércio em geral no Município do Rio de Janeiro, na forma que menciona.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5700/2014",
         "lei_ordinaria": "Determina a proibição da utilização de banheiros químicos, no âmbito do Município do Rio de Janeiro, na forma que menciona e dá outras providências.",
         "status_lei": "EM VIGOR"
        }     
    ]
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "TADEU AMORIM DE BARROS JUNIOR",
    "nome_urna": "JUNIOR DA LUCINHA",
    "cargo": "VEREADOR",
    "doacoes": [
       {"nome_doador": "Diretorio Munucipal do Partido do Movimento Democratico Brasileiro - PMDB - RJ",
        "valor_doado": 3220},
       {"nome_doador": "Genario Simoes Junior",
        "valor_doado": 18000},
       {"nome_doador": "Ana Teresinha de Freitas Pereira",
        "valor_doado": 8500},
       {"nome_doador": "Jaqueline de Oliveira Rosa",
        "valor_doado": 720},
       {"nome_doador": "Daniela Lima de Sousa",
        "valor_doado": 720},
       {"nome_doador": "Cecilia Cristina dos Santos Reynaldo",
        "valor_doado": 720},
       {"nome_doador": "Cristiane de Freitas Pereira",
        "valor_doado": 10000},
       {"nome_doador": "Ana Lucia Silva de Sousa",
        "valor_doado": 720},
       {"nome_doador": "Ricardo Francisco Rodrigues Junior",
        "valor_doado": 3200},
       {"nome_doador": "Alberto Thiago de Barros",
        "valor_doado": 3000},
       {"nome_doador": "Tadeu Amorim de Barros Junior",
        "valor_doado": 54800},
       {"nome_doador": "Paulo renato de Almeida Monteiro",
        "valor_doado": 720},
       {"nome_doador": "Lucia Helena de Pinto Barros",
        "valor_doado": 30000},
       {"nome_doador": "Marli dos Santos Gomes",
        "valor_doado": 720},
       {"nome_doador": "Ana Carolina Barros Macario",
        "valor_doado": 720},
       {"nome_doador": "Liliane Alves Benjamin",
        "valor_doado": 720},
       {"nome_doador": "Priscila Viana de Oliveira da Silva",
        "valor_doado": 720},
       {"nome_doador": "Giancarlo Silva dos Santos",
        "valor_doado": 3000},
       {"nome_doador": "Fernanda da Silva Lopes",
        "valor_doado": 720},
       {"nome_doador": "Ana Paula Ferreira Marques",
        "valor_doado": 720},
       {"nome_doador": "Vanessa Bueno Furtado",
        "valor_doado": 720},
       {"nome_doador": "Marco Romualdo Marques",
        "valor_doado": 720},
],
    "id": 15620,
    "partido": "PMDB",
    "situacao": "Deferido",
    "coligacao": "PMDB",
    "nascimento": "16/10/1981",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "VEREADOR",
    "projetos_lei": [
        {"numero_lei": "6170/2017",
         "lei_ordinaria": "Tomba, por interesse histórico e cultural, o imóvel do Quartel General da Polícia Militar do Estado do Rio de Janeiro – QG da Polícia Militar do Estado do Rio de Janeiro, localizado no Centro - Rua Evaristo da Veiga, nº 78 - II Região Administrativa.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6135/2017",
         "lei_ordinaria": "Obriga os supermercados, lojas de conveniência e de varejo, na comercialização de gêneros alimentícios, a afixarem cartaz informativo, quando realizarem promoções que ofereçam vantagens de preço e quantidades aos consumidores, e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6123/2017",
         "lei_ordinaria": "Determina que os ônibus que realizam transporte coletivo em linhas regulares realizem desembarque de passageiros fora dos pontos determinados, e dá outras providências.",
         "status_lei": "EM VIGOR"
         },{"numero_lei": "6083/2016",
         "lei_ordinaria": "Declara o sub-bairro Bosque dos Moura, localizado na Estrada do Lameirão Pequeno, altura do nº 345, no bairro de Campo Grande, como Área de Especial Interesse Social, para fins de urbanização e regularização fundiária.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5971/2015",
         "lei_ordinaria": "Dispõe sobre a implantação de Programa de Atendimento a Pacientes Renais Crônicos na Zona Oeste do Município e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5962/2015",
         "lei_ordinaria": "Altera a Lei 3.273, de 6 de setembro de 2001, que dispõe sobre a Gestão do Sistema de Limpeza Urbana no Município do Rio de Janeiro",
         "status_lei": "EM VIGOR"
        }     
    ]
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "LEANDRO LYRA BRAGA DOGNINI",
    "nome_urna": "LEANDRO LYRA",
    "cargo": "VEREADOR",
    "doacoes": [
       {"nome_doador": "Arthur Fernandes Araujo",
        "valor_doado": 15000},
       {"nome_doador": "Joao Dionisio Filgueira Barreto Amoedo",
        "valor_doado": 10000},
       {"nome_doador": "Leandro Lyra Braga Dognini",
        "valor_doado": 2500},
       {"nome_doador": "Partido Novo Diretorio Munucipal - Rio de Janeiro - RJ",
        "valor_doado": 1000},
],
    "id": 30300,
    "partido": "NOVO",
    "situacao": "Deferido",
    "coligacao": "NOVO",
    "nascimento": "29/08/1992",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "ESTUDANTE",
  }, {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "LUCIANA GONÇALVES DE NOVAES",
    "nome_urna": "LUCIANA NOVAES",
    "cargo": "VEREADOR",
    "doacoes": [
       {"nome_doador": "Micaela da Costa Zeferino",
        "valor_doado": 800},
       {"nome_doador": "Shirley Neres de Souza",
        "valor_doado": 800},
       {"nome_doador": "Indira Stephanni Cardoso Santos da Silva",
        "valor_doado": 200},
       {"nome_doador": "Jadson Abraao da Silva",
        "valor_doado": 200},
       {"nome_doador": "Lucas Zaroni de Mendonca",
        "valor_doado": 800},
       {"nome_doador": "Henrique Santos do Nascimento",
        "valor_doado": 600},
       {"nome_doador": "Marcio Quintanilha",
        "valor_doado": 800},
       {"nome_doador": "Amanda Nogueira Soares Lima",
        "valor_doado": 800},
       {"nome_doador": "Leandro Thompson Alves dos Santos",
        "valor_doado": 150},
       {"nome_doador": "Eric da Silva Paiva",
        "valor_doado": 2000},
       {"nome_doador": "Luiz Antonio da Silva",
        "valor_doado": 1500},
       {"nome_doador": "Diretorio Estadual do Partido dos Trabalhadores do Rio de Janeiro",
        "valor_doado": 4550},
],
    "id": 13535,
    "partido": "PT",
    "situacao": "Deferido",
    "coligacao": "RIO EM COMUM",
    "nascimento": "05/06/1983",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "ASSISTENTE SOCIAL",
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "LUIS ANTONIO DA COSTA RAMOS",
    "nome_urna": "LUIZ CARLOS R. FILHO",
    "cargo": "VEREADOR",
    
    "id": 19019,
    "partido": "PTN",
    "situacao": "Deferido",
    "coligacao": "PTN",
    "nascimento": "01/12/1976",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "CORRETOR DE IMOVEIS",
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "ALEXANDRE JOSE BERARDINELLI ARRAES",
    "nome_urna": "ALEXANDRE ARRAES",
    "cargo": "VEREADOR",
    
    "id": 45000,
    "partido": "PSDB",
    "situacao": "Deferido",
    "coligacao": "PSDB",
    "nascimento": "20/08/1962",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "MEDICO",
    "projetos_lei": [
        {"numero_lei": "6179/2017",
         "lei_ordinaria": "Dispõe sobre medidas para o combate eficaz à poluição sonora no município do Rio de Janeiro.",
         "status_lei": "EM VIGOR"
        }     
    ]
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "MARCELINO ANTONIO D'ALMEIDA",
    "nome_urna": "MARCELINO D'ALMEIDA",
    "cargo": "VEREADOR",
    
    "id": 11369,
    "partido": "PP",
    "situacao": "Deferido",
    "coligacao": "PP",
    "nascimento": "05/08/1949",
    "escolaridade": "ENSINO MEDIO",
    "ocupacao": "VEREADOR",
    "projetos_lei": [
        {"numero_lei": "6185/2017",
         "lei_ordinaria": "Dispõe sobre a implantação de um Ginásio Poliesportivo Sustentável, no Jardim Sulacap, e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6172/2017",
         "lei_ordinaria": "Dispõe sobre a implantação de Polo Gastronômico do Município do Rio de Janeiro na região da cidade conhecida como Ponto Chic, no bairro de Padre Miguel e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6170/2017",
         "lei_ordinaria": "Tomba, por interesse histórico e cultural, o imóvel do Quartel General da Polícia Militar do Estado do Rio de Janeiro – QG da Polícia Militar do Estado do Rio de Janeiro, localizado no Centro - Rua Evaristo da Veiga, nº 78 - II Região Administrativa.",
         "status_lei": "EM VIGOR"
         },{"numero_lei": "6167/2017",
         "lei_ordinaria": "Torna obrigatória a colocação de brinquedos do tipo balanço adaptados para crianças com deficiência de locomoção - cadeirantes - na Cidade do Rio de Janeiro.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6138/2017",
         "lei_ordinaria": "Institui o Programa de Estímulo à Prestação de Serviço para Ministrar Palestras de Introdução ao Estudo da Constituição Federal.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6046/2016",
         "lei_ordinaria": "Tomba, por seu interesse histórico e cultural, o imóvel onde funciona a sede do Cassino Bangu e dá outras providências.",
         "status_lei": "EM VIGOR"
        }     
    ]
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "MARCELLO MORAES SICILIANO",
    "nome_urna": "MARCELLO SICILIANO",
    "cargo": "VEREADOR",
    
    "id": 31888,
    "partido": "PHS",
    "situacao": "Deferido",
    "coligacao": "PHS",
    "nascimento": "14/08/1972",
    "escolaridade": "ENSINO MEDIO",
    "ocupacao": "EMPRESARIO",
  }, {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "MARCELO ARAR",
    "nome_urna": "MARCELO ARAR",
    "cargo": "VEREADOR",
    
    "id": 14000,
    "partido": "PTB",
    "situacao": "Deferido",
    "coligacao": "PTB",
    "nascimento": "06/02/1975",
    "escolaridade": "ENSINO MEDIO",
    "ocupacao": "PRODUTOR DE ESPETACULOS",
    "projetos_lei": [
        {"numero_lei": "6180/2017",
         "lei_ordinaria": "Dá o nome de Shimon Peres (1923/2016) ao espaço inominado formado pelas Ruas Figueiredo Magalhães e Tonelero, no Bairro de Copacabana.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6116/2016",
         "lei_ordinaria": "Define ações de combate à dengue nos cemitérios no Município do Rio de Janeiro, disciplinando a colocação de vasos e recipientes para ornamentação de sepulturas.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6104/2016",
         "lei_ordinaria": "Dispõe sobre a remoção de veículos por estacionamento irregular pela Prefeitura da Cidade do Rio de Janeiro",
         "status_lei": "EM VIGOR"
         },{"numero_lei": "6040/2015",
         "lei_ordinaria": "Dispõe sobre a contratualização para realização de cirurgia bariátrica no Município do Rio de Janeiro.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5989/2015",
         "lei_ordinaria": "Reconhece como logradouro público, sob a denominação de Praça dos Pretos Velhos, a área que menciona, no bairro de Inhoaíba.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5925/2015",
         "lei_ordinaria": "Inclui o Dia do Charme no Calendário Oficial da Cidade consolidado pela Lei nº 5.146/2010.",
         "status_lei": "EM VIGOR"
        }     
    ]
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "MARIELLE FRANCISCO DA SILVA",
    "nome_urna": "MARIELLE FRANCO",
    "cargo": "VEREADOR",
    
    "id": 50777,
    "partido": "PSOL",
    "situacao": "Deferido",
    "coligacao": "Mudar é possível",
    "nascimento": "27/07/1979",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "SOCIOLOGO",
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "PAULO PINHEIRO",
    "nome_urna": "PAULO PINHEIRO",
    "cargo": "VEREADOR",
    
    "id": 50111,
    "partido": "PSOL",
    "situacao": "Deferido",
    "coligacao": "Mudar é possível",
    "nascimento": "22/01/1949",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "VEREADOR",
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "ADALMIR D'AGUILA DE SOUZA",
    "nome_urna": "PROF. ADALMIR",
    "cargo": "VEREADOR",
    
    "id": 45779,
    "partido": "PSDB",
    "situacao": "Deferido",
    "coligacao": "PSDB",
    "nascimento": "15/05/1978",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "PROFESSOR",
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "ROGÉRIO DE CASTRO LOPES",
    "nome_urna": "PROF. ROGÉRIO ROCAL",
    "cargo": "VEREADOR",
    
    "id": 14433,
    "partido": "PTB",
    "situacao": "Deferido",
    "coligacao": "Mudar é possível",
    "nascimento": "28/09/1975",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "VEREADOR",
    "projetos_lei": [
        {"numero_lei": "6144/2017",
         "lei_ordinaria": "Dispõe sobre a obrigatoriedade de instalação de placas de sinalização alertando a existência de tubulação de gás, da Companhia Estadual de Gás – CEG, localizadas no Município do Rio de Janeiro, e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6140/2017",
         "lei_ordinaria": "Declara o Loteamento Portal da Prata, localizado na Rua Adauto Câmara, nº 383, no Rio da Prata em Campo Grande, como Área de Especial Interesse Social, para fins regularização fundiária.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6133/2017",
         "lei_ordinaria": "Obriga a Companhia Municipal de Limpeza Urbana – COMLURB, a realizar o serviço de capina e manejo da arborização nas escolas municipais e dá outras providências.",
         "status_lei": "EM VIGOR"
         },{"numero_lei": "6047/2016",
         "lei_ordinaria": "Dá o nome de Réis, Cruzado e Cruzeiro Real às atuais ruas projetadas A, B e C, respectivamente, no bairro do Rio da Prata, em Campo Grande.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5970/2015",
         "lei_ordinaria": "Institui a campanha de conscientização para a aceitação definitiva das obras na Cidade do Rio de Janeiro e dá outras providências.",
         "status_lei": "EM VIGOR"
        }     
    ]
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "ELISEU GOMES KESSLER",
    "nome_urna": "ELISEU KESSLER",
    "cargo": "VEREADOR",
    
    "id": 55622,
    "partido": "PSD",
    "situacao": "Deferido",
    "coligacao": "PSD",
    "nascimento": "17/08/1968",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "VEREADOR",
    "projetos_lei": [
        {"numero_lei": "6071/2016",
         "lei_ordinaria": "Proíbe a utilização de veículos de tração animal na Ilha de Paquetá.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6013/2015",
         "lei_ordinaria": "Tomba, por interesse arquitetônico, educacional, social e cultural e desportivo o imóvel do Centro Esportivo Miécimo da Silva.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6008/2015",
         "lei_ordinaria": "Inclui a Feira de Estética, Beleza e Bem-estar (FESBEL) no Calendário Oficial da Cidade consolidado pela Lei nº 5.146/2010.",
         "status_lei": "EM VIGOR"
         },{"numero_lei": "5987/2015",
         "lei_ordinaria": "Inclui o Dia da Igreja Batista no Calendário Oficial da Cidade consolidado pela Lei n° 5.146/2010.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5952/2015",
         "lei_ordinaria": "Dá nome de Aldo Miccolis (Preparador Físico -1931/2009) à Vila Olímpica do Encantado.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5887/2015",
         "lei_ordinaria": "Considera Polo Gastronômico e Comercial a Estrada Iaraquã e dispõe sobre sua implantação.",
         "status_lei": "EM VIGOR"
        }     
    ]
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "FERNANDO WILLIAM FERREIRA",
    "nome_urna": "FERNANDO WILLIAM",
    "cargo": "VEREADOR",
    
    "id": 12603,
    "partido": "PDT",
    "situacao": "Deferido",
    "coligacao": "PDT",
    "nascimento": "15/05/1954",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "MEDICO",
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "PAULO SANTOS MESSINA",
    "nome_urna": "PAULO MESSINA",
    "cargo": "VEREADOR",
    
    "id": 90123,
    "partido": "PROS",
    "situacao": "Deferido",
    "coligacao": "PROS",
    "nascimento": "18/10/1975",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "VEREADOR",
    "projetos_lei": [
        {"numero_lei": "6170/2016",
         "lei_ordinaria": "Tomba, por interesse histórico e cultural, o imóvel do Quartel General da Polícia Militar do Estado do Rio de Janeiro – QG da Polícia Militar do Estado do Rio de Janeiro, localizado no Centro - Rua Evaristo da Veiga, nº 78 - II Região Administrativa.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6074/2016",
         "lei_ordinaria": "Dá o nome de Pátio São Jorge ao logradouro público compreendido entre a Rua do Riachuelo e a Ladeira Frei Orlando no bairro de Santa Teresa.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5969/2015",
         "lei_ordinaria": "Garante a matrícula dos filhos e netos e/ou dependentes legais dos servidores da educação na rede pública municipal.",
         "status_lei": "EM VIGOR"
         },{"numero_lei": "5985/2015",
         "lei_ordinaria": "Fica vedada a construção de expansão do teleférico do Pão de Açúcar ou equipamento similar com destinação turística na área das APA’s do Leme e da Babilônia e São João e em qualquer ponto do bairro do Leme.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5717/2014",
         "lei_ordinaria": "Proíbe a circulação de veículos acima de seis toneladas no bairro de Santa Teresa.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5667/2013",
         "lei_ordinaria": "Inclui o Dia da Literatura de Cordel no Calendário Oficial da Cidade consolidado pela Lei nº 5.146/2010.",
         "status_lei": "EM VIGOR"
        }     
    ]
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "RAFAEL ALOISIO FREITAS",
    "nome_urna": "RAFAEL A. FREITAS",
    "cargo": "VEREADOR",
    
    "id": 15123,
    "partido": "PMDB",
    "situacao": "Deferido",
    "coligacao": "PMDB",
    "nascimento": "12/02/1980",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "VEREADOR",
    "projetos_lei": [
        {"numero_lei": "6183/2017",
         "lei_ordinaria": "Torna obrigatória a veiculação da Lei nº 4.731/2008, que estabelece multa de maus-tratos a animais, antes da exibição de filmes que recebam subvenções da RioFilme.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6143/2017",
         "lei_ordinaria": "Dispõe sobre a criação do Fundo de Proteção Animal no Município do Rio de Janeiro e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6051/2016",
         "lei_ordinaria": "Inclui no currículo escolar do ensino fundamental das escolas públicas municipais do Rio de Janeiro o estudo de orientações básicas sobre educação financeira, economia doméstica e dá outras providências.",
         "status_lei": "EM VIGOR"
         },{"numero_lei": "5998/2015",
         "lei_ordinaria": "Regulamenta o comércio ambulante para a venda de churrasquinho em logradouro público no Município do Rio de Janeiro e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5912/2015",
         "lei_ordinaria": "Dispõe sobre a implantação do Polo Moveleiro do Cachambi e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5885/2015",
         "lei_ordinaria": "Dispõe sobre a implantação do Polo Gastronômico, Cultural e Comercial da Praça Saenz Peña e dá outras providências.",
         "status_lei": "EM VIGOR"
        }     
    ]
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "REIMONT LUIZ OTONI SANTA BARBARA",
    "nome_urna": "REIMONT",
    "cargo": "VEREADOR",
    
    "id": 13333,
    "partido": "PT",
    "situacao": "Deferido",
    "coligacao": "RIO EM COMUM",
    "nascimento": "02/09/1961",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "VEREADOR",
    "projetos_lei": [
        {"numero_lei": "6184/2017",
         "lei_ordinaria": "Dá o nome Praça da Família Boa Esperança à praça inominada, localizada pela confluência das Ruas Projetada, Harmonia e El Shadai, na Comunidade Parque Boa Esperança, no bairro do Caju.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6176/2017",
         "lei_ordinaria": "Inclui na Lei nº 5.919/2015 a Cidade de Santa Maria da Feira, em Portugal como cidade-irmã da Cidade do Rio de Janeiro.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6170/2017",
         "lei_ordinaria": "Tomba, por interesse histórico e cultural, o imóvel do Quartel General da Polícia Militar do Estado do Rio de Janeiro – QG da Polícia Militar do Estado do Rio de Janeiro, localizado no Centro - Rua Evaristo da Veiga, nº 78 - II Região Administrativa.",
         "status_lei": "EM VIGOR"
         },{"numero_lei": "6169/2017",
         "lei_ordinaria": "Tomba, como bem de natureza imaterial da Cidade do Rio de Janeiro, a Feirarte V, localizada na Praça do Lido, no Bairro de Copacabana.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6145/2017",
         "lei_ordinaria": "Dispõe sobre a proibição dos estabelecimentos bancários em recusarem o recebimento de boletos dentro do prazo de vencimento e de contas de consumo, tais como água, luz, telefone e taxas diversas de qualquer valor, diretamente nos caixas de atendimento presencial.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6139/2017",
         "lei_ordinaria": "Reconhece como de interesse cultural, social e turístico para o Município do Rio de Janeiro a Feira de Arte e Cultura da Amaga, no bairro da Gamboa, e dá outras providências.",
         "status_lei": "EM VIGOR"
        }     
    ]
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "RENATO ATHAYDE SILVA",
    "nome_urna": "RENATO CINCO",
    "cargo": "VEREADOR",
    
    "id": 50555,
    "partido": "PSOL",
    "situacao": "Deferido",
    "coligacao": "Mudar é possível",
    "nascimento": "25/05/1974",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "SOCIOLOGO",
    "projetos_lei": [
        {"numero_lei": "6108/2016",
         "lei_ordinaria": "Determina a divulgação do monitoramento da qualidade da água consumida pela população do Rio de Janeiro e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5999/2015",
         "lei_ordinaria": "Reconhece de interesse cultural e social para o Município a Feira Estadual da Reforma Agrária Cícero Guedes, realizada no Largo da Carioca, e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5955/2015",
         "lei_ordinaria": "Dispõe sobre a utilização de material didático-pedagógico na rede municipal de ensino.",
         "status_lei": "EM VIGOR"
         },{"numero_lei": "5929/2015",
         "lei_ordinaria": "Declara Patrimônio Cultural Imaterial do povo carioca os trabalhadores do comércio ambulante e os camelôs da Rua Joaquim Silva, pioneiros da revitalização da Lapa.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5858/2015",
         "lei_ordinaria": "Institui a Campanha Permanente de Combate ao Machismo e Valorização das Mulheres nas escolas públicas do Município do Rio do Janeiro.",
         "status_lei": "EM VIGOR"
        }     
    ]
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "JOSE RENATO CARDOZO MOURA",
    "nome_urna": "RENATO MOURA",
    "cargo": "VEREADOR",
    
    "id": 12500,
    "partido": "PDT",
    "situacao": "Deferido",
    "coligacao": "PDT",
    "nascimento": "06/03/1962",
    "escolaridade": "ENSINO MEDIO",
    "ocupacao": "EMPRESARIO",
    "projetos_lei": [
        {"numero_lei": "6094/2016",
         "lei_ordinaria": "Dá o nome de José Vicente de Sousa Pinto (1939/2010) à Rua Projetada B com início na Rua Capitão Sena e término na Rua Mucuripe, em Senador Camará.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6062/2016",
         "lei_ordinaria": "Dispõe sobre a obrigatoriedade do registro do grupo sanguíneo e fator RH nos uniformes de todos os alunos matriculados nas escolas da rede pública e privada no Município e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6038/2015",
         "lei_ordinaria": "Dispõe sobre o Quarteirão Cultural da Rua Álvaro Alvim na forma que menciona e dá outras providências.",
         "status_lei": "EM VIGOR"
         },{"numero_lei": "5949/2015",
         "lei_ordinaria": "Reconhece como logradouro público, sob a denominação de Rua José Carlos Gaze (Advogado - 1939/2001), a área que menciona, no bairro de Bangu.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5919/2015",
         "lei_ordinaria": "Dispõe sobre a Consolidação da Legislação Municipal referente às cidades-irmãs da Cidade do Rio de Janeiro e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5878/2015",
         "lei_ordinaria": "Dispõe sobre classes de carreira, posicionamento e remuneração dos servidores efetivos, aposentados e pensionistas da Câmara Municipal do Rio de Janeiro e dá outras providências.",
         "status_lei": "EM VIGOR"
        }     
    ]
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "ROSA MARIA ORLANDO FERNANDES",
    "nome_urna": "ROSA FERNANDES",
    "cargo": "VEREADOR",
    
    "id": 15150,
    "partido": "PMDB",
    "situacao": "Deferido",
    "coligacao": "PMDB",
    "nascimento": "21/05/1956",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "VEREADOR",
    "projetos_lei": [
        {"numero_lei": "6181/2017",
         "lei_ordinaria": "Dispõe sobre a instalação de baias para estacionamento de veículos na área de abrangência do Bus Rapid Transit - BRT Transcarioca e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6154/2017",
         "lei_ordinaria": "Dá o nome de Largo do Alexandre Caco (Alexandre de Oliveira Rodrigues – 1982/2013) ao largo inominado situado na Rua Mozart, em frente ao número 711, no Bairro do Jardim América.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6095/2016",
         "lei_ordinaria": "Cria o Selo de Qualidade de Alimentos e de Atendimento na comercialização da comida de rua e dá outras providências.",
         "status_lei": "EM VIGOR"
         },{"numero_lei": "6053/2016",
         "lei_ordinaria": "Declara como de Especial Interesse Social, para fins de regularização e titulação, a área da comunidade da Rua Estremadura no bairro de Irajá.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6038/2015",
         "lei_ordinaria": "Dispõe sobre o Quarteirão Cultural da Rua Álvaro Alvim na forma que menciona e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5986/2015",
         "lei_ordinaria": "Dispõe sobre a criação de Programa de Incentivo à Coleta de Pneus Inservíveis",
         "status_lei": "EM VIGOR"
        }     
    ]
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "LEONEL BRIZOLA NETO",
    "nome_urna": "LEONEL BRIZOLA NETO",
    "cargo": "VEREADOR",
    
    "id": 50000,
    "partido": "PSOL",
    "situacao": "Deferido",
    "coligacao": "PSOL",
    "nascimento": "03/08/1975",
    "escolaridade": "SUPERIOR INCOMPLETO",
    "ocupacao": "VEREADOR",
    "projetos_lei": [
        {"numero_lei": "6056/2016",
         "lei_ordinaria": "Institui a atividade de seminários e palestras preventivas de combate ao tráfico de pessoas e erradicação do trabalho escravo nas escolas da rede municipal de ensino do Rio de Janeiro, na forma que menciona.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5939/2015",
         "lei_ordinaria": "Institui, no âmbito do Município, o Selo da Diversidade Abdias do Nascimento.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5845/2015",
         "lei_ordinaria": "Dispõe sobre a obrigatoriedade da emissão de nota fiscal às concessionárias que operam em vias de tráfego municipal.",
         "status_lei": "EM VIGOR"
         },{"numero_lei": "5772/2014",
         "lei_ordinaria": "nclui parágrafos no art. 3º da Lei nº 5.131, de 17 de dezembro de 2009.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5654/2013",
         "lei_ordinaria": "Declara como de Especial Interesse Social, para fins de regularização, a área demarcada como Quadra da Canitar, na comunidade do Morro dos Mineiros, Complexo do Alemão, Inhaúma",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5650/2013",
         "lei_ordinaria": "Dispõe sobre a criação, transformação e extinção dos cargos de provimento efetivo do Quadro de Servidores da Câmara Municipal do Rio de Janeiro e dá outras providências.",
         "status_lei": "EM VIGOR"
        }     
    ]
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "TANIA CRISTINA MAGALHÃES BASTOS E SILVA",
    "nome_urna": "TANIA BASTOS",
    "cargo": "VEREADOR",
    
    "id": 10999,
    "partido": "PRB",
    "situacao": "Deferido",
    "coligacao": "PRB",
    "nascimento": "01/01/1967",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "VEREADOR",
    "projetos_lei": [
        {"numero_lei": "6101/2016",
         "lei_ordinaria": "Obriga os estabelecimentos públicos e privados no Município a inserir nas placas de atendimento prioritário o símbolo mundial do autismo e dá outras providências",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6030/2015",
         "lei_ordinaria": "Obriga a inclusão e a reserva de vagas na rede pública e privada de educação no Município do Rio de Janeiro para crianças e adolescentes com Transtorno do Espectro Autista e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5996/2015",
         "lei_ordinaria": "Dispõe sobre a regra de concursos para cargos ou empregos públicos no Município.",
         "status_lei": "EM VIGOR"
         },{"numero_lei": "5963/2015",
         "lei_ordinaria": "Dispõe sobre a ampliação da divulgação da Central de Atendimento a Mulher - Ligue 180 em todos os prédios públicos e/ ou que prestam serviços públicos.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5954/2015",
         "lei_ordinaria": "Declara, como Patrimônio Cultural de Natureza Imaterial da Cidade do Rio de Janeiro, a Feira de Cocotá, no bairro de Cocotá, XX Região Administrativa, Ilha do Governador.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5917/2015",
         "lei_ordinaria": "Institui, na Secretaria Municipal de Saúde, ações de capacitação dos profissionais, na rede pública de atenção primária, e dá outras providências",
         "status_lei": "EM VIGOR"
        }     
    ]
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "TARCÍSIO MOTTA DE CARVALHO",
    "nome_urna": "TARCÍSIO MOTTA",
    "cargo": "VEREADOR",
    "id": 50123,
    "partido": "PSOL",
    "situacao": "Deferido",
    "coligacao": "Mudar é possível",
    "nascimento": "28/01/1975",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "PROFESSOR",
  }, {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "MARIA TERESA BERGHER",
    "nome_urna": "TERESA BERGHER",
    "cargo": "VEREADOR",
    
    "id": 45245,
    "partido": "PSDB",
    "situacao": "Deferido",
    "coligacao": "RIO DE OPORTUNIDADES E DIREITOS",
    "nascimento": "16/08/1948",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "VEREADOR",
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "THIAGO KWIATKOWSKI RIBEIRO",
    "nome_urna": "THIAGO K. RIBEIRO",
    "cargo": "VEREADOR",
    
    "id": 15159,
    "partido": "PMDB",
    "situacao": "Deferido",
    "coligacao": "PMDB",
    "nascimento": "21/07/1982",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "VEREADOR",
    "projetos_lei": [
        {"numero_lei": "6174/2017",
         "lei_ordinaria": "Inclui o Dia do Futevôlei no Calendário Oficial da Cidade consolidado pela Lei nº 5.146/2010.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6166/2017",
         "lei_ordinaria": "Obriga a iluminação pública eficiente nas ciclovias e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6161/2017",
         "lei_ordinaria": "Inclui o Dia do Combate ao Preconceito à Pessoa com Nanismo no Calendário Oficial da Cidade consolidado pela Lei nº 5.146/2010.",
         "status_lei": "EM VIGOR"
         },{"numero_lei": "6159/2017",
         "lei_ordinaria": "Dispõe sobre a obrigatoriedade de informar quanto a presença de glúten e seus derivados nos alimentos preparados e servidos nos restaurantes, bares e afins, no Município do Rio de Janeiro..",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6070/2016",
         "lei_ordinaria": "Tomba, por seu valor histórico, arquitetônico e cultural, o Palácio Rio 450 anos localizado no bairro de Oswaldo Cruz.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6004/2015",
         "lei_ordinaria": "Tomba, por seu valor histórico, arquitetônico e cultural, o imóvel localizado na Rua Aristides Espínola, nº 19, no bairro do Leblon, onde funciona o restaurante Antiquarius.",
         "status_lei": "EM VIGOR"
        }     
    ]
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "ROOSEVELT BARRETO BARCELOS",
    "nome_urna": "VAL DO CEASA",
    "cargo": "VEREADOR",
    
    "id": 51888,
    "partido": "PEN",
    "situacao": "Deferido",
    "coligacao": "O RIO QUE EU QUERO",
    "nascimento": "04/05/1969",
    "escolaridade": "ENSINO FUNDAMENTAL",
    "ocupacao": "OUTROS",
  },{
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "VERA LUCIA FERREIRA LINS",
    "nome_urna": "VERA LINS",
    "cargo": "VEREADOR",
    
    "id": 11111,
    "partido": "PP",
    "situacao": "Deferido",
    "coligacao": "PP",
    "nascimento": "29/10/1947",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "VEREADOR",
    "projetos_lei": [
        {"numero_lei": "6141/2017",
         "lei_ordinaria": "Dispõe no âmbito do Município do Rio de Janeiro sobre a informação através da internet e linha telefônica aos proprietários de veículos sobre a remoção para os pátios da Prefeitura e/ou da Secretaria Municipal responsável e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6106/2016",
         "lei_ordinaria": "Dispõe sobre a proibição do uso de carros particulares para o transporte remunerado de pessoas no Município do Rio de Janeiro e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5997/2015",
         "lei_ordinaria": "Inclui o Dia do Combate ao Preconceito à Pessoa com Nanismo no Calendário Oficial da Cidade consolidado pela Lei nº 5.146/2010.Dispõe sobre a proibição do uso de carros particulares para o transporte remunerado de pessoas no Município do Rio de Janeiro e dá outras providências.",
         "status_lei": "EM VIGOR"
         },{"numero_lei": "5838/2015",
         "lei_ordinaria": "Dispõe sobre a oferta e a forma de apresentação e divulgação de preços informados aos consumidores por restaurantes, churrascarias, pizzarias, lanchonetes, bares e estabelecimentos congêneres.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5779/2014",
         "lei_ordinaria": "Declara a Central de Abastecimento – CEASA -RJ, Patrimônio Cultural do Povo Carioca.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5764/2014",
         "lei_ordinaria": "Inclui o Dia do Papa no Calendário Oficial da Cidade consolidado pela Lei nº 5.146/2010",
         "status_lei": "EM VIGOR"
        }     
    ]
  },
    {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "WILLIAN CARVALHO DOS SANTOS",
    "nome_urna": "WILLIAN COELHO",
    "cargo": "VEREADOR",
    
    "id": 15040,
    "partido": "PMDB",
    "situacao": "Deferido",
    "coligacao": "PMDB",
    "nascimento": "10/11/1982",
    "escolaridade": "SUPERIOR COMPLETO",
    "ocupacao": "VEREADOR",
  }, {
    "situacao_pos_pleito": "Eleito por QP",
    "nome_completo": "ANTONIO JOSE PAPERA DE AZEVEDO",
    "nome_urna": "ZICO",
    "cargo": "VEREADOR",
    
    "id": 14012,
    "partido": "PTB",
    "situacao": "Deferido",
    "coligacao": "PTB",
    "nascimento": "28/04/1966",
    "escolaridade": "ENSINO MEDIO",
    "ocupacao": "VEREADOR",
    "projetos_lei": [
        {"numero_lei": "6160/2017",
         "lei_ordinaria": "Dispõe sobre a implantação do polo gastronômico no sub-bairro Adriana, no bairro de Campo Grande, e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "6149/2017",
         "lei_ordinaria": "Dispõe sobre a implantação do Polo Gastronômico no sub-bairro Isadora, no Bairro de Campo Grande, e dá outras providências.",
         "status_lei": "EM VIGOR"
        },{"numero_lei": "5715/2014",
         "lei_ordinaria": "Determina a fixação de placa informativa nos postos revendedores de combustíveis, do Município do Rio de Janeiro, na forma que menciona.",
         "status_lei": "EM VIGOR"
         },{"numero_lei": "5665/2013",
         "lei_ordinaria": "Dispõe sobre medida preventiva para redução da letalidade e agravos à saúde que decorrem de acidentes com animais peçonhentos.",
         "status_lei": "EM VIGOR"
        }     
    ]
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
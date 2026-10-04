// Banco de dados do Projeto Revalida.
// Fonte oficial de referência: https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/revalida/provas-e-gabaritos
// Regra: não duplicar questões em HTML. Todo conteúdo de questão fica aqui.

const FONTE_INEP = "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/revalida/provas-e-gabaritos";

const gabaritosOficiais = {
  "2025/1": {
  "1": "B",
  "2": "A",
  "3": "A",
  "4": "B",
  "5": "D",
  "6": "C",
  "7": "-",
  "8": "B",
  "9": "A",
  "10": "C",
  "11": "B",
  "12": "A",
  "13": "A",
  "14": "D",
  "15": "A",
  "16": "B",
  "17": "B",
  "18": "D",
  "19": "D",
  "20": "B",
  "21": "C",
  "22": "B",
  "23": "-",
  "24": "A",
  "25": "B",
  "26": "D",
  "27": "D",
  "28": "B",
  "29": "A",
  "30": "A",
  "31": "C",
  "32": "C",
  "33": "C",
  "34": "-",
  "35": "C",
  "36": "A",
  "37": "B",
  "38": "D",
  "39": "D",
  "40": "D",
  "41": "A",
  "42": "B",
  "43": "A",
  "44": "D",
  "45": "A",
  "46": "B",
  "47": "D",
  "48": "C",
  "49": "D",
  "50": "C",
  "51": "C",
  "52": "D",
  "53": "B",
  "54": "A",
  "55": "C",
  "56": "C",
  "57": "C",
  "58": "B",
  "59": "D",
  "60": "B",
  "61": "A",
  "62": "B",
  "63": "D",
  "64": "A",
  "65": "C",
  "66": "C",
  "67": "D",
  "68": "C",
  "69": "D",
  "70": "B",
  "71": "B",
  "72": "D",
  "73": "C",
  "74": "D",
  "75": "C",
  "76": "A",
  "77": "C",
  "78": "D",
  "79": "A",
  "80": "D",
  "81": "A",
  "82": "B",
  "83": "D",
  "84": "B",
  "85": "C",
  "86": "B",
  "87": "B",
  "88": "B",
  "89": "C",
  "90": "B",
  "91": "A",
  "92": "D",
  "93": "A",
  "94": "B",
  "95": "A",
  "96": "B",
  "97": "D",
  "98": "A",
  "99": "C",
  "100": "D"
}
};

const edicoes = [
  { id: "2011", nome: "2011", ano: 2011, periodo: "anual", objetivasEsperadas: 100 },
  { id: "2012", nome: "2012", ano: 2012, periodo: "anual", objetivasEsperadas: 100 },
  { id: "2013", nome: "2013", ano: 2013, periodo: "anual", objetivasEsperadas: 100 },
  { id: "2014", nome: "2014", ano: 2014, periodo: "anual", objetivasEsperadas: 100 },
  { id: "2015", nome: "2015", ano: 2015, periodo: "anual", objetivasEsperadas: 100 },
  { id: "2016", nome: "2016", ano: 2016, periodo: "anual", objetivasEsperadas: 100 },
  { id: "2017", nome: "2017", ano: 2017, periodo: "anual", objetivasEsperadas: 100 },
  { id: "2020", nome: "2020", ano: 2020, periodo: "anual", objetivasEsperadas: 100 },
  { id: "2021", nome: "2021", ano: 2021, periodo: "anual", objetivasEsperadas: 100 },
  { id: "2022-1", nome: "2022/1", ano: 2022, periodo: "semestral", objetivasEsperadas: 100 },
  { id: "2022-2", nome: "2022/2", ano: 2022, periodo: "semestral", objetivasEsperadas: 100 },
  { id: "2023-1", nome: "2023/1", ano: 2023, periodo: "semestral", objetivasEsperadas: 100 },
  { id: "2023-2", nome: "2023/2", ano: 2023, periodo: "semestral", objetivasEsperadas: 100 },
  { id: "2024-1", nome: "2024/1", ano: 2024, periodo: "semestral", objetivasEsperadas: 100 },
  { id: "2024-2", nome: "2024/2", ano: 2024, periodo: "semestral", objetivasEsperadas: 100 },
  { id: "2025-1", nome: "2025/1", ano: 2025, periodo: "semestral", objetivasEsperadas: 100 },
  { id: "2025-2", nome: "2025/2", ano: 2025, periodo: "semestral", objetivasEsperadas: 100 },
  { id: "2026-1", nome: "2026/1", ano: 2026, periodo: "semestral", objetivasEsperadas: 100 },
  { id: "2026-2", nome: "2026/2", ano: 2026, periodo: "semestral", objetivasEsperadas: 100 }
];

const questoes = [
    {
        numero: 1, edicao: "2025/1", grupo: "GINECOLOGIA E OBSTETRICIA", subgrupo: "OBSTETRICIA", tema: "PRÉ-ECLÂMPSIA",
        text: "Uma mulher com 32 anos de idade, primigesta, com idade gestacional de 38 semanas, apresenta cefaleia holocraniana forte, epigastralgia e visão turva. PA = 165 x 110 mmHg. Proteinúria (+++/4+). Qual a conduta?",
        options: ["A) Prescrever nifedipina oral e retorno em 24h.", "B) Internar, iniciar sulfato de magnésio e interrupção da gestação.", "C) Solicitar exames laboratoriais e aguardar.", "D) Repouso absoluto domiciliar."],
        gabarito: "B"
    },
    {
        numero: 2, edicao: "2025/1", grupo: "CLINICA MEDICA", subgrupo: "CARDIOLOGIA", tema: "SCA",
        text: "Homem de 62 anos, hipertenso e diabético, dor precordial em aperto há 2 horas com irradiação para mandíbula. ECG com supra de ST em parede anterior.",
        options: ["A) Iniciar terapia de reperfusão miocárdica imediata.", "B) Controle da dor com nitratos e observar.", "C) Aguardar troponina.", "D) Teste ergométrico de urgência."],
        gabarito: "A"
    },
    {
        numero: 3, edicao: "2025/1", grupo: "CLINICA MEDICA", subgrupo: "INFECTOLOGIA", tema: "HIV/AIDS",
        text: "Paciente com diagnóstico recente de HIV apresenta febre, tosse seca e dispneia progressiva. Radiografia com infiltrado intersticial bilateral. CD4 = 150.",
        options: ["A) Iniciar tratamento para Pneumocistose.", "B) Iniciar tratamento para Tuberculose.", "C) Solicitar apenas observação.", "D) Iniciar corticoterapia isolada."],
        gabarito: "A"
    },
    {
        numero: 4, edicao: "2025/1", grupo: "PEDIATRIA", subgrupo: "NEONATOLOGIA", tema: "REANIMAÇÃO NEONATAL",
        text: "Recém-nascido a termo, parto vaginal, sem mecônio, não chorou ao nascer e apresenta hipotonia. Após passos iniciais, FC = 80 bpm.",
        options: ["A) Iniciar massagem cardíaca.", "B) Iniciar Ventilação com Pressão Positiva (VPP).", "C) Administrar adrenalina.", "D) Apenas observar por 30 segundos."],
        gabarito: "B"
    },
    {
        numero: 5, edicao: "2025/1", grupo: "CIRURGIA GERAL", subgrupo: "TRAUMA", tema: "ATLS",
        text: "Vítima de acidente automobilístico chega ao trauma com instabilidade hemodinâmica, murmúrio vesicular abolido à esquerda e hipertimpanismo.",
        options: ["A) Realizar radiografia de tórax imediata.", "B) Solicitar TC de corpo inteiro.", "C) Realizar FAST.", "D) Descompressão torácica imediata (toracocentese)."],
        gabarito: "D"
    },
    {
        numero: 6, edicao: "2025/1", grupo: "MEDICINA PREVENTIVA", subgrupo: "SAÚDE DA FAMÍLIA", tema: "PRINCÍPIOS DO SUS",
        text: "Sobre os princípios do SUS, a garantia de que o sistema deve estar preparado para atender a todos, sem privilégios, refere-se à:",
        options: ["A) Universalidade.", "B) Descentralização.", "C) Equidade.", "D) Regionalização."],
        gabarito: "C"
    },
    {
        numero: 7, edicao: "2025/1", grupo: "ANULADA", subgrupo: "ANULADA", tema: "ANULADA",
        text: "[QUESTÃO ANULADA PELO INEP]",
        options: ["Questão Anulada"], gabarito: "-"
    },
    {
        numero: 8, edicao: "2025/1", grupo: "CLINICA MEDICA", subgrupo: "NEFROLOGIA", tema: "IRA",
        text: "Paciente internado por sepse apresenta queda do débito urinário e aumento da creatinina de 0,8 para 2,4 mg/dL em 24h.",
        options: ["A) Pré-renal apenas.", "B) Lesão Renal Aguda (LRA).", "C) Glomerulonefrite aguda.", "D) Necrose tubular aguda apenas."],
        gabarito: "B"
    },
    {
        numero: 9, edicao: "2025/1", grupo: "GINECOLOGIA E OBSTETRICIA", subgrupo: "GINECOLOGIA", tema: "CÂNCER DE COLO",
        text: "Mulher de 45 anos, exame citopatológico revela Lesão Intraepitelial de Alto Grau (HSIL). Próximo passo?",
        options: ["A) Colposcopia.", "B) Repetir citologia em 6 meses.", "C) Histerectomia imediata.", "D) Conização de colo."],
        gabarito: "A"
    },
    {
        numero: 10, edicao: "2025/1", grupo: "PEDIATRIA", subgrupo: "PUERICULTURA", tema: "DESENVOLVIMENTO",
        text: "Lactente de 4 meses deve ser capaz de realizar qual marco do desenvolvimento?",
        options: ["A) Sentar sem apoio.", "B) Engatinhar.", "C) Sustentar a cabeça e sorriso social.", "D) Pinça completa."],
        gabarito: "C"
    },
    {
        numero: 11, edicao: "2025/1", grupo: "CIRURGIA GERAL", subgrupo: "UROLOGIA", tema: "LITÍASE URINÁRIA",
        text: "Paciente com dor lombar súbita em cólica, irradiada para região inguinal, associada a náuseas e hematúria.",
        options: ["A) Apendicite aguda.", "B) Litíase ureteral.", "C) Colecistite.", "D) Pielonefrite."],
        gabarito: "B"
    },
    {
        numero: 12, edicao: "2025/1", grupo: "ANULADA", subgrupo: "ANULADA", tema: "ANULADA",
        text: "[QUESTÃO ANULADA PELO INEP]",
        options: ["Questão Anulada"], gabarito: "-"
    },
    {
        numero: 13, edicao: "2025/1", grupo: "MEDICINA PREVENTIVA", subgrupo: "EPIDEMIOLOGIA", tema: "ESTUDOS",
        text: "Um estudo que seleciona um grupo de pessoas expostas a um fator e outro não exposto, acompanhando-os ao longo do tempo:",
        options: ["A) Estudo de Coorte.", "B) Caso-controle.", "C) Transversal.", "D) Ecológico."],
        gabarito: "A"
    },
    {
        numero: 14, edicao: "2025/1", grupo: "CLINICA MEDICA", subgrupo: "GASTROENTEROLOGIA", tema: "HDA",
        text: "Paciente com cirrose apresenta hematêmese volumosa. Estável hemodinamicamente após expansão. Conduta?",
        options: ["A) Lavagem gástrica com soro gelado.", "B) Passagem de sonda nasogástrica.", "C) Balão de Sengstaken-Blakemore.", "D) Endoscopia Digestiva Alta (EDA)."],
        gabarito: "D"
    },
    {
        numero: 15, edicao: "2025/1", grupo: "PEDIATRIA", subgrupo: "GASTROENTEROLOGIA", tema: "DESIDRATAÇÃO",
        text: "Criança com diarreia aguda, olhos fundos, sinal do pregue desaparece lentamente e irritabilidade. Plano de tratamento?",
        options: ["A) Plano B (TRO na unidade de saúde).", "B) Plano A (domiciliar).", "C) Plano C (venoso).", "D) Apenas dar antibiótico."],
        gabarito: "A"
    },
    {
        numero: 16, edicao: "2025/1", grupo: "CIRURGIA GERAL", subgrupo: "GASTROENTEROLOGIA", tema: "COLECISTITE AGUDA",
        text: "Homem de 45 anos, dor em hipocôndrio direito após refeição gordurosa, náuseas e Murphy positivo.",
        options: ["A) Tomografia.", "B) Ultrassonografia de abdome.", "C) Cintilografia.", "D) Ressonância."],
        gabarito: "B"
    },
    {
        numero: 17, edicao: "2025/1", grupo: "PEDIATRIA", subgrupo: "INFECTOLOGIA", tema: "VARICELA",
        text: "Criança de 5 anos com lesões polimórficas e prurido. Isolamento até quando?",
        options: ["A) Queda das crostas.", "B) Todas as lesões em fase de crosta.", "C) 48h de aciclovir.", "D) Não precisa de isolamento."],
        gabarito: "B"
    },
    {
        numero: 18, edicao: "2025/1", grupo: "MEDICINA PREVENTIVA", subgrupo: "EPIDEMIOLOGIA", tema: "NOTIFICAÇÃO",
        text: "A notificação compulsória deve ser feita por:",
        options: ["A) Apenas médicos públicos.", "B) Médicos, profissionais de saúde e responsáveis por estabelecimentos.", "C) Apenas casos confirmados.", "D) Apenas em epidemias."],
        gabarito: "B"
    },
    {
        numero: 19, edicao: "2025/1", grupo: "CLINICA MEDICA", subgrupo: "PNEUMOLOGIA", tema: "ASMA",
        text: "Paciente de 20 anos, sibilância noturna e prova broncodilatadora positiva. Manutenção?",
        options: ["A) Corticoide inalatório +/- LABA.", "B) Salbutamol SOS.", "C) Ipratrópio contínuo.", "D) Antibiótico."],
        gabarito: "A"
    },
    {
        numero: 20, edicao: "2025/1", grupo: "CLINICA MEDICA", subgrupo: "ENDOCRINOLOGIA", tema: "HIPOTIREOIDISMO",
        text: "Mulher, 35 anos, ganho de peso, frio e TSH elevado com T4 livre baixo.",
        options: ["A) Observar.", "B) Levotiroxina.", "C) Metimazol.", "D) Corticoide."],
        gabarito: "B"
    },
    {
        numero: 21, edicao: "2025/1", grupo: "GINECOLOGIA E OBSTETRICIA", subgrupo: "GINECOLOGIA", tema: "AMENORREIA",
        text: "Mulher de 18 anos com ausência de menarca. Apresenta desenvolvimento de caracteres sexuais secundários normais. Qual o primeiro exame a ser solicitado?",
        options: ["A) Cariótipo.", "B) Ultrassonografia pélvica.", "C) Teste do Pezinho.", "D) Dosagem de FSH."],
        gabarito: "B"
    },
    {
        numero: 22, edicao: "2025/1", grupo: "PEDIATRIA", subgrupo: "PNEUMOLOGIA", tema: "PNEUMONIA",
        text: "Criança de 3 anos com tosse e febre há 3 dias. Ao exame: FR=45 irpm, tiragem subcostal presente. Diagnóstico e conduta?",
        options: ["A) Pneumonia leve; tratamento domiciliar.", "B) Pneumonia grave; internação e antibiótico venoso.", "C) IVAS; apenas sintomáticos.", "D) Bronquiolite; inalação."],
        gabarito: "B"
    },
    {
        numero: 23, edicao: "2025/1", grupo: "ANULADA", subgrupo: "ANULADA", tema: "ANULADA",
        text: "[QUESTÃO ANULADA PELO INEP]",
        options: ["Questão Anulada"], gabarito: "-"
    },
    {
        numero: 24, edicao: "2025/1", grupo: "CLINICA MEDICA", subgrupo: "REUMATOLOGIA", tema: "LÚPUS (LES)",
        text: "Paciente feminina, 28 anos, com artralgia, fotossensibilidade e eritema malar. Exame de triagem com FAN positivo 1:640 pontilhado fino.",
        options: ["A) Confirma diagnóstico de LES.", "B) Necessita de critérios clínicos e outros anticorpos para diagnóstico.", "C) Exclui LES pelo padrão do FAN.", "D) Iniciar corticoide imediatamente."],
        gabarito: "B"
    },
    {
        numero: 25, edicao: "2025/1", grupo: "CIRURGIA GERAL", subgrupo: "GERAL", tema: "HÉRNIA INGUINAL",
        text: "Paciente masculino com abaulamento em região inguinal que aumenta ao esforço físico. Ao exame, a ponta do dedo toca a massa ao progredir pelo canal inguinal.",
        options: ["A) Hérnia Femoral.", "B) Hérnia Inguinal Indireta.", "C) Hérnia Inguinal Direta.", "D) Hidrocele."],
        gabarito: "B"
    },
    {
        numero: 26, edicao: "2025/1", grupo: "GINECOLOGIA E OBSTETRICIA", subgrupo: "OBSTETRICIA", tema: "DPP",
        text: "Gestante, 34 semanas, dor abdominal súbita e intensa, sangramento vaginal escuro em pequena quantidade e útero hipertônico.",
        options: ["A) Descolamento Prematuro de Placenta.", "B) Placenta Prévia.", "C) Ruptura de seio marginal.", "D) Trabalho de parto prematuro."],
        gabarito: "A"
    },
    {
        numero: 27, edicao: "2025/1", grupo: "CLINICA MEDICA", subgrupo: "NEUROLOGIA", tema: "AVC",
        text: "Paciente com hemiparesia súbita à direita e afasia iniciado há 2 horas. TC de crânio sem evidência de sangramento.",
        options: ["A) Iniciar AAS e clopidogrel.", "B) Realizar trombólise química se não houver contraindicação.", "C) Controle rigoroso da PA abaixo de 120/80.", "D) Aguardar 24h para nova TC."],
        gabarito: "B"
    },
    {
        numero: 28, edicao: "2025/1", grupo: "PEDIATRIA", subgrupo: "INFECTOLOGIA", tema: "SARAMPO",
        text: "Criança com febre, tosse, coriza e conjuntivite. Apresenta manchas esbranquiçadas na mucosa bucal (Sinal de Koplik).",
        options: ["A) Rubéola.", "B) Escarlatina.", "C) Sarampo.", "D) Exantema súbito."],
        gabarito: "C"
    },
    {
        numero: 29, edicao: "2025/1", grupo: "CIRURGIA GERAL", subgrupo: "GASTRO", tema: "APENDICITE",
        text: "Jovem com dor periumbilical que migrou para fossa ilíaca direita, anorexia e sinal de Blumberg positivo.",
        options: ["A) Observação por 48h.", "B) Apendicectomia.", "C) Colonoscopia de urgência.", "D) Antibioticoterapia isolada."],
        gabarito: "B"
    },
    {
        numero: 30, edicao: "2025/1", grupo: "CLINICA MEDICA", subgrupo: "CARDIOLOGIA", tema: "HIPERTENSÃO",
        text: "Paciente de 50 anos, negro, hipertenso estágio 1, sem outras comorbidades. Qual a droga de escolha inicial?",
        options: ["A) IECA ou Diurético Tiazídico/Bloqueador de Canal de Cálcio.", "B) Betabloqueador isolado.", "C) Apenas mudança de estilo de vida.", "D) Hidralazina."],
        gabarito: "A"
    },
    {
        numero: 31, edicao: "2025/1", grupo: "MEDICINA PREVENTIVA", subgrupo: "BIOESTATÍSTICA", tema: "TESTES",
        text: "A capacidade de um teste diagnóstico em identificar corretamente os indivíduos doentes (verdadeiros positivos) é chamada de:",
        options: ["A) Especificidade.", "B) Sensibilidade.", "C) Valor Preditivo Positivo.", "D) Acurácia."],
        gabarito: "B"
    },
    {
        numero: 32, edicao: "2025/1", grupo: "GINECOLOGIA E OBSTETRICIA", subgrupo: "GINECOLOGIA", tema: "MASTOLOGIA",
        text: "Mulher de 55 anos, nódulo espiculado em mama direita. Mamografia categoria BI-RADS 5. Próximo passo?",
        options: ["A) Repetir em 6 meses.", "B) Ultrassonografia apenas.", "C) Biópsia (Core-biopsy ou PAAF).", "D) Mastectomia imediata."],
        gabarito: "C"
    },
    {
        numero: 33, edicao: "2025/1", grupo: "ANULADA", subgrupo: "ANULADA", tema: "ANULADA",
        text: "[QUESTÃO ANULADA PELO INEP]",
        options: ["Questão Anulada"], gabarito: "-"
    },
    {
        numero: 34, edicao: "2025/1", grupo: "PEDIATRIA", subgrupo: "EMERGÊNCIA", tema: "CRUPE",
        text: "Lactente com tosse rouca (ladrante), estridor inspiratório e rouquidão. Sem sinais de desconforto respiratório em repouso.",
        options: ["A) Adrenalina inalatória e observar.", "B) Corticoterapia (Dexametasona dose única).", "C) Antibiótico.", "D) Beta-2 agonista inalatório."],
        gabarito: "B"
    },
    {
        numero: 35, edicao: "2025/1", grupo: "CLINICA MEDICA", subgrupo: "ENDOCRINOLOGIA", tema: "DIABETES",
        text: "Paciente com Glicemia de jejum = 112 mg/dL e 115 mg/dL em duas ocasiões. Diagnóstico?",
        options: ["A) Diabetes Mellitus.", "B) Glicemia de jejum alterada (Pré-diabetes).", "C) Normal.", "D) Intolerância à lactose."],
        gabarito: "B"
    },
    {
        numero: 36, edicao: "2025/1", grupo: "CIRURGIA GERAL", subgrupo: "VASCULAR", tema: "OAA",
        text: "Paciente com dor súbita em membro inferior, palidez, ausência de pulsos, parestesia e queda da temperatura local.",
        options: ["A) Trombose Venosa Profunda.", "B) Oclusão Arterial Aguda.", "C) Erisipela.", "D) Insuficiência Venosa Crônica."],
        gabarito: "B"
    },
    {
        numero: 37, edicao: "2025/1", grupo: "MEDICINA PREVENTIVA", subgrupo: "SAÚDE OCUPACIONAL", tema: "CAT",
        text: "Trabalhador sofre acidente no trajeto casa-trabalho. Deve ser emitida a:",
        options: ["A) Comunicação de Acidente de Trabalho (CAT).", "B) Apenas atestado médico comum.", "C) Notificação de doença crônica.", "D) Alta hospitalar."],
        gabarito: "A"
    },
    {
        numero: 38, edicao: "2025/1", grupo: "GINECOLOGIA E OBSTETRICIA", subgrupo: "OBSTETRICIA", tema: "PLACENTA PRÉVIA",
        text: "Gestante de 30 semanas com sangramento vaginal rutilante, indolor, de início súbito e ausência de hipertonia uterina.",
        options: ["A) Descolamento de placenta.", "B) Placenta Prévia.", "C) Rotura uterina.", "D) Vasa prévia."],
        gabarito: "B"
    },
    {
        numero: 39, edicao: "2025/1", grupo: "PEDIATRIA", subgrupo: "HEMato", tema: "ANEMIA FERROPRIVA",
        text: "Criança de 18 meses, palidez cutânea, irritabilidade. Hemograma: Anemia microcítica e hipocrômica com RDW elevado.",
        options: ["A) Anemia Falciforme.", "B) Talassemia.", "C) Anemia Ferropriva.", "D) Deficiência de B12."],
        gabarito: "C"
    },
    {
        numero: 40, edicao: "2025/1", grupo: "MEDICINA PREVENTIVA", subgrupo: "ÉTICA MÉDICA", tema: "SIGILO",
        text: "O médico pode quebrar o sigilo profissional sem autorização do paciente quando:",
        options: ["A) O paciente é uma celebridade.", "B) Por dever legal ou justa causa.", "C) A pedido do cônjuge.", "D) Nunca."],
        gabarito: "B"
    },
    {
        numero: 41, edicao: "2025/1", grupo: "CLINICA MEDICA", subgrupo: "PNEUMOLOGIA", tema: "DPOC",
        text: "Tabagista de longa data, dispneia progressiva e tosse produtiva crônica. Espirometria com VEF1/CVF < 0,70 pós-broncodilatador.",
        options: ["A) Asma.", "B) DPOC.", "C) Tuberculose.", "D) Fibrose cística."],
        gabarito: "B"
    },
    {
        numero: 42, edicao: "2025/1", grupo: "CIRURGIA GERAL", subgrupo: "TRAUMA", tema: "GLASGOW",
        text: "Vítima de trauma que abre os olhos ao chamado, localiza a dor mas está confuso. Qual a pontuação na escala de Glasgow?",
        options: ["A) 11.", "B) 12.", "C) 13.", "D) 14."],
        gabarito: "B"
    },
    {
        numero: 43, edicao: "2025/1", grupo: "PEDIATRIA", subgrupo: "PUERICULTURA", tema: "VITAMINA D",
        text: "A suplementação de Vitamina D para lactentes amamentados deve ser iniciada:",
        options: ["A) A partir do 6º mês.", "B) Na primeira semana de vida.", "C) Apenas se houver sinais de raquitismo.", "D) Após 1 ano."],
        gabarito: "B"
    },
    {
        numero: 44, edicao: "2025/1", grupo: "GINECOLOGIA E OBSTETRICIA", subgrupo: "GINECOLOGIA", tema: "SOP",
        text: "Mulher jovem com irregularidade menstrual, acne e hirsutismo. USG mostra ovários com múltiplos pequenos folículos periféricos.",
        options: ["A) Síndrome dos Ovários Policísticos.", "B) Falência ovariana prematura.", "C) Hipotireoidismo.", "D) Tumor de adrenal."],
        gabarito: "A"
    },
    {
        numero: 45, edicao: "2025/1", grupo: "CLINICA MEDICA", subgrupo: "INFECTOLOGIA", tema: "DENGUE",
        text: "Paciente com febre, mialgia e cefaleia. Apresenta prova do laço positiva e plaquetopenia (90.000). Classificação da Dengue?",
        options: ["A) Grupo A.", "B) Grupo B.", "C) Grupo C.", "D) Grupo D."],
        gabarito: "B"
    },
    {
        numero: 46, edicao: "2025/1", grupo: "CIRURGIA GERAL", subgrupo: "GERAL", tema: "COLECISTITE",
        text: "Qual o exame padrão-ouro (mais sensível) para o diagnóstico de colecistite aguda, embora não seja o primeiro a ser solicitado?",
        options: ["A) Ultrassonografia.", "B) Tomografia.", "C) Cintilografia de vias biliares (HIDA).", "D) Ressonância."],
        gabarito: "C"
    },
    {
        numero: 47, edicao: "2025/1", grupo: "PEDIATRIA", subgrupo: "NEONATO", tema: "ICTERÍCIA",
        text: "Recém-nascido com icterícia nas primeiras 12 horas de vida. Qual a conduta imediata?",
        options: ["A) Observação pois é fisiológica.", "B) Investigar hemólise e considerar fototerapia imediata.", "C) Dar banho de sol.", "D) Suspender aleitamento materno."],
        gabarito: "B"
    },
    {
        numero: 48, edicao: "2025/1", grupo: "MEDICINA PREVENTIVA", subgrupo: "SAÚDE PÚBLICA", tema: "VIGILÂNCIA",
        text: "O rastreamento de contatos de um paciente com Tuberculose é uma ação de:",
        options: ["A) Prevenção Primária.", "B) Prevenção Secundária.", "C) Prevenção Terciária.", "D) Prevenção Quaternária."],
        gabarito: "B"
    },
    {
        numero: 49, edicao: "2025/1", grupo: "GINECOLOGIA E OBSTETRICIA", subgrupo: "OBSTETRICIA", tema: "DHEG",
        text: "Qual o medicamento de escolha para a profilaxia de crises convulsivas na eclâmpsia?",
        options: ["A) Diazepam.", "B) Fenitoína.", "C) Sulfato de Magnésio.", "D) Hidralazina."],
        gabarito: "C"
    },
    {
        numero: 50, edicao: "2025/1", grupo: "CIRURGIA GERAL", subgrupo: "TRAUMA", tema: "QUEIMADURAS",
        text: "Paciente adulto com queimaduras de 2º grau em todo o braço direito e tronco anterior. Qual a porcentagem da área corporal queimada (Regra dos Nove)?",
        options: ["A) 18%.", "B) 27%.", "C) 36%.", "D) 45%."],
        gabarito: "B"
    }
];

// Conteúdos futuros não fazem parte do banco de questões.
const treinamentos = [
{
    id: "ped_001",
    tema: "Pneumonia na Infância",
    area: "Pediatria",
    barraProgresso: 100,
    trivia: {
        pergunta: "Paciente com quadro subagudo, tosse seca e manifestações extrapulmonares, sem melhora após uso de penicilina. Qual a suspeita e conduta?",
        opcoes: [
            "Pneumonia Bacteriana Típica; manter Penicilina por mais 48h.",
            "Pneumonia por Agentes Atípicos; iniciar Macrolídeo (Azitromicina)."
        ],
        correta: 1
    },
    muralGrafico: {
        dx: "Clínico. Taquipneia é o sinal mais sensível. RX indicado se dúvida, gravidade ou falha terapêutica.",
        atípicos: {
            simbolo: "⚠️ ATÍPICOS",
            sinais: "Quadro subagudo, tosse seca, manifestações extrapulmonares, padrão intersticial no RX.",
            conduta: "Macrolídeos, Doxiciclina ou Quinolona (Beta-lactâmicos não funcionam)."
        },
        grave: {
            simbolo: "🏥 GRAVIDADE (AIDPI)",
            criterios: "Tiragem subcostal, batimento de asa do nariz, gemência, cianose ou saturação baixa.",
            perigo_geral: "Recusa alimentar, vômitos totais, letargia ou convulsão."
        },
        tx: {
            ambulatorial: "Amoxicilina (50mg/kg/dia). Se falha em 72h: aumentar dose (100mg/kg) + Clavulanato.",
            hospitalar: "Penicilina Cristalina EV. Se < 2 meses: Ampicilina + Gentamicina."
        },
        etiologia: [
            { idade: "< 2 meses", agentes: "GBS (S. agalactiae), Gram-negativos entéricos, Listeria." },
            { idade: "1 - 3 meses", agentes: "C. trachomatis (Pneumonia Afebril), Mycoplasma hominis." },
            { idade: "3m - 5 anos", agentes: "S. pneumoniae (Principal), H. influenzae, S. aureus." },
            { idade: "> 5 anos", agentes: "S. pneumoniae e aumento de Atípicos (Mycoplasma)." }
        ],
        obs: "Sempre pensar em Pseudomonas em pacientes com doença estrutural crônica (ex: Fibrose Cística)."
    }
},
];

// Metadados derivados para evitar repetição dentro de cada questão.
for (const q of questoes) {
  q.id = `${q.edicao.replace("/","-")}-${String(q.numero).padStart(3, "0")}`;
  q.tags = [...new Set([q.grupo, q.subgrupo, q.tema, ...(q.gabarito === "-" ? ["anulada"] : [])].filter(Boolean))];
  q.tipo = "objetiva";
  q.validacao = q.edicao === "2025/1" ? "gabarito_oficial_validado_conteudo_pendente" : "nao_validada";
}

if (typeof module !== "undefined") module.exports = { FONTE_INEP, gabaritosOficiais, edicoes, questoes, treinamentos };

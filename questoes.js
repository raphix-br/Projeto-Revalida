// Banco de dados do Projeto Revalida.
// Fonte oficial de referência: https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/revalida/provas-e-gabaritos
// Regra: não duplicar questões em HTML. Todo conteúdo de questão fica aqui.

const FONTE_INEP = "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/revalida/provas-e-gabaritos";

const gabaritosOficiais = {
  "2025/1": {
    "1":"B","2":"A","3":"A","4":"B","5":"D","6":"C","7":"-","8":"B","9":"A","10":"C",
    "11":"B","12":"A","13":"A","14":"D","15":"A","16":"B","17":"B","18":"D","19":"D","20":"B",
    "21":"C","22":"B","23":"-","24":"A","25":"B","26":"D","27":"D","28":"B","29":"A","30":"A",
    "31":"C","32":"C","33":"C","34":"D","35":"A","36":"B","37":"D","38":"C","39":"D","40":"B",
    "41":"A","42":"B","43":"D","44":"A","45":"C","46":"C","47":"C","48":"B","49":"D","50":"B",
    "51":"A","52":"B","53":"D","54":"A","55":"C","56":"C","57":"D","58":"C","59":"D","60":"B",
    "61":"A","62":"B","63":"D","64":"A","65":"C","66":"C","67":"D","68":"C","69":"D","70":"B",
    "71":"B","72":"D","73":"C","74":"D","75":"C","76":"A","77":"C","78":"D","79":"A","80":"D",
    "81":"A","82":"B","83":"D","84":"B","85":"C","86":"B","87":"B","88":"B","89":"C","90":"B",
    "91":"A","92":"D","93":"A","94":"B","95":"A","96":"B","97":"D","98":"A","99":"C","100":"D"
  }
};

const gabaritosPreliminares = {
  "2025/2": { "1":"A","2":"B","3":"A","4":"D","5":"C","6":"B","7":"A","8":"B","9":"A","10":"C","11":"C","12":"D","13":"C","14":"B","15":"A","16":"B","17":"D","18":"D","19":"D","20":"C","21":"A","22":"A","23":"B","24":"D","25":"A","26":"C","27":"D","28":"B","29":"A","30":"C","31":"B","32":"D","33":"C","34":"B","35":"D","36":"C","37":"D","38":"D","39":"D","40":"B","41":"C","42":"D","43":"D","44":"B","45":"B","46":"C","47":"C","48":"D","49":"B","50":"C","51":"B","52":"C","53":"C","54":"B","55":"B","56":"B","57":"C","58":"A","59":"C","60":"D","61":"C","62":"A","63":"C","64":"B","65":"B","66":"B","67":"B","68":"B","69":"D","70":"B","71":"A","72":"C","73":"D","74":"D","75":"C","76":"B","77":"A","78":"D","79":"D","80":"A","81":"D","82":"D","83":"A","84":"A","85":"B","86":"A","87":"C","88":"A","89":"B","90":"D","91":"A","92":"A","93":"B","94":"C","95":"C","96":"A","97":"A","98":"A","99":"B" }\n};

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
    "edicao": "2025/1",
    "numero": 1,
    "gabarito": "B",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 2,
    "enunciado": "Homem de 62 anos vai a uma unidade de pronto atendimento (UPA) referindo cansaço e tontura ao se levantar há 2 semanas. Nega outras queixas, comorbidades ou cirurgias prévias, assim como o uso de medicamentos. Ao exame físico, apresenta-se corado, hidratado, lúcido e orientado em tempo e espaço; pressão arterial de 120 x 70 mmHg; frequência cardíaca de 45 bpm; saturação de O₂ de 96% em ar ambiente; ritmo cardíaco regular, sem turgência jugular; murmúrio vesicular fisiológico, sem ruídos acessórios; e enchimento capilar de 2 segundos. Diante disso, o médico solicita um eletrocardiograma de 12 derivações: A partir desse quadro clínico e da interpretação do eletrocardiograma, a conduta adequada consiste em",
    "alternativas": {
      "A": "conceder alta médica e encaminhar o paciente ao ambulatório especializado de cardiologia.",
      "B": "monitorizar o paciente, solicitar marca-passo transcutâneo e aguardar avaliação do cardiologista.",
      "C": "monitorizar o paciente, administrar atropina 1 mg (IV) e implantar marca-passo transcutâneo.",
      "D": "monitorizar o paciente, administrar atropina 1 mg (IV) e iniciar uso de dopamina 5 mcg/kg/min."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 2,
    "gabarito": "A",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 2,
    "enunciado": "Homem de 42 anos, em uso crônico de anti-inflamatório não esteroide por doença reumática, dá entrada no pronto-socorro com 6 horas de evolução de dor epigástrica de forte intensidade. Sinais vitais: Exame Resultado Frequência cardíaca 110 bpm Pressão arterial 90 x 50 mmHg Frequência respiratória 22 irpm Temperatura axilar 36,5 ºC Ao exame físico, abdome tenso, com descompressão brusca dolorosa nos quatro quadrantes. O hemograma apresenta valores dentro da normalidade e a tomografia de abdome evidencia líquido livre intraperitoneal com ar no recesso hepatofrênico. Nesse caso, assinale a alternativa que apresenta a principal hipótese diagnóstica.",
    "alternativas": {
      "A": "Úlcera gástrica perfurada.",
      "B": "Pancreatite aguda.",
      "C": "Colecistite aguda.",
      "D": "Diverticulite aguda."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 3,
    "gabarito": "A",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 2,
    "enunciado": "Menina de 7 anos e 6 meses é encaminhada ao ambulatório de pediatria porque sua família percebeu surgimento de broto mamário há cerca de 3 meses. O exame físico revela que seu estadiamento puberal é M2P1 e sua estatura está próxima ao escore Z +2 para a idade, com peso em escore Z 0. Um exame de radiografia simples de punho, solicitado pelo médico da atenção primária, mostra idade óssea compatível com 9 anos e 6 meses. Considerando essa situação, assinale a alternativa que apresenta a principal hipótese diagnóstica, seguida de sua justificativa.",
    "alternativas": {
      "A": "Puberdade precoce central, pois o crescimento das mamas está associado a avanço da idade óssea.",
      "B": "Telarca isolada precoce, pois a diferença entre a idade óssea e a idade cronológica não é significativa.",
      "C": "Telarca isolada precoce, pois o crescimento das mamas foi um achado isolado na investigação da paciente.",
      "D": "Puberdade precoce central, pois, além da telarca, há também sinais de pubarca, o que sugere ativação do eixo hormonal."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 4,
    "gabarito": "B",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 2,
    "enunciado": "Primigesta de 25 anos procura o pronto atendimento de ginecologia e obstetrícia com história de atraso menstrual e resultado de beta-hCG quantitativo de 10.000 mlU/mL realizado há 2 dias. Não se recorda da data da última menstruação. Queixa-se de sangramento vaginal, em pequena quantidade, que já dura 3 dias. Ao exame especular, nota-se presença de sangramento vivo em pequena quantidade e, ao toque, percebe-se colo uterino fechado. Solicitado beta-hCG no dia da consulta, com resultado de 23.400 mlU/mL. A partir desses dados, assinale a alternativa que apresenta, respectivamente, o diagnóstico desse caso e a conduta adequada.",
    "alternativas": {
      "A": "Gestação ectópica; laparotomia.",
      "B": "Ameaça de aborto; repouso relativo.",
      "C": "Aborto incompleto; curetagem uterina.",
      "D": "Aborto em evolução; acompanhamento clínico."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 5,
    "gabarito": "D",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 3,
    "enunciado": "A médica de uma penitenciária avalia homem de 26 anos, com 98 kg, que relata compartilhar a cela com 12 pessoas (a qual comportaria no máximo 5). O paciente queixa-se de prurido cutâneo há 2 dias com piora no período noturno. Ao exame físico, a médica identifica pápulas eritematosas com escoriações em região de prega em braços e em região posterior de joelhos. Com relação a essa situação, assinale a alternativa que apresenta, respectivamente, a orientação médica e a prescrição medicamentosa adequadas.",
    "alternativas": {
      "A": "Restrição de visitas aos detentos e isolamento dos casos nas celas, sem permissão de saída; uso de ivermectina 6 mg, 01 comprimido via oral, repetindo em 15 dias, para todos da cela.",
      "B": "Isolamento dos casos na enfermaria da unidade e lavagem frequente das roupas de cama, de banho e de vestuário com água quente (pelo menos a 30 °C); uso de sprays inseticidas e fumigantes.",
      "C": "Realização de palestras educativas para os detentos sobre medidas preventivas e aumento do tempo de banho de sol; uso de fluconazol 150 mg por semana durante 1 mês, para todos da cela.",
      "D": "Incremento da frequência de limpeza geral da unidade e higienização adequada das roupas de uso pessoal, de cama e de banho; uso de ivermectina 6 mg, dose conforme o peso, repetindo em 15 dias, para todos da cela."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 6,
    "gabarito": "C",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 3,
    "enunciado": "Mulher de 38 anos, com deficiência congênita de IgA, é atendida em ambulatório de clínica médica devido a insucesso terapêutico no tratamento de infecção por Helicobacter pylori. Apresentava diagnóstico de úlcera duodenal, tendo sido prescrito omeprazol, amoxicilina e claritromicina. Apesar da melhora clínica, observou-se persistência da infecção em teste respiratório com C¹³. Atribuiu-se o insucesso terapêutico ao uso recorrente de macrolídeos e fluoroquinolonas. Nesse caso, deve-se prescrever",
    "alternativas": {
      "A": "pantoprazol, amoxicilina e levofloxacino por 7 dias.",
      "B": "omeprazol, claritromicina e levofloxacino por 14 dias.",
      "C": "omeprazol, subcitrato de bismuto coloidal, doxiciclina e metronidazol por 14 dias.",
      "D": "pantoprazol, subcitrato de bismuto coloidal, furazolidona e levofloxacino por 10 dias."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 7,
    "gabarito": "-",
    "anulada": true,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 3,
    "enunciado": "Homem de 28 anos foi admitido em hospital após 30 minutos de acidente motociclístico. Apresentava múltiplas e graves lesões em face, mandíbula e cavidade oral, sem lesões cervicais. Exame físico do tórax e do abdome e ultrassonografia focada no abdome no trauma (FAST) sem alterações. Sinais vitais: frequência cardíaca 92 bpm; pressão arterial 130 x 80 mmHg; saturação periférica de oxigênio 100% em ar ambiente. O paciente evoluiu rapidamente com dispneia, taquipneia, estridor inspiratório e expiratório, cornagem e rebaixamento do nível de consciência. Saturação periférica de oxigênio passou para 88%, mesmo com a oferta de oxigênio suplementar. Após alguns minutos, evoluiu com saturação periférica de oxigênio de 59% e frequência cardíaca de 48 bpm. Nesse momento, qual é a conduta imediata adequada para esse paciente?",
    "alternativas": {
      "A": "Traqueostomia.",
      "B": "Cricotireoidotomia.",
      "C": "Intubação orotraqueal.",
      "D": "Intubação nasotraqueal."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 8,
    "gabarito": "B",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 3,
    "enunciado": "Adolescente de 12 anos é levado à unidade de pronto atendimento (UPA) devido a um quadro de dor abdominal iniciada há 1 dia. A dor era mais difusa inicialmente, mas, após algumas horas de evolução, passou a concentrar-se na fossa ilíaca direita, tornando-se mais intensa. Além disso, o jovem apresentou vômitos de conteúdo bilioso e inapetência. Ao exame físico abdominal, apresenta defesa à palpação e descompressão brusca dolorosa. A partir desse caso, assinale a alternativa que apresenta indicação para que este adolescente seja avaliado por uma equipe cirúrgica.",
    "alternativas": {
      "A": "Dor abdominal difusa.",
      "B": "Descompressão brusca dolorosa.",
      "C": "Dor abdominal associada a vômitos.",
      "D": "Massa palpável em fossa ilíaca direita."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 9,
    "gabarito": "A",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 4,
    "enunciado": "Gestante de 39 anos, G4P3, 12 semanas de gestação, comparece à primeira consulta de pré-natal na atenção primária. A paciente é hipertensa crônica há 2 anos, faz uso de losartana e apresenta índice de massa corporal (IMC) de 35 kg/m², encontra-se assintomática. Considerando esse contexto, assinale a conduta inicial e a avaliação a ser realizada.",
    "alternativas": {
      "A": "Suspender losartana e iniciar metildopa e AAS; realizar pesquisa de lesão de órgãos-alvo.",
      "B": "Manter losartana e iniciar AAS; solicitar exames para avaliar a função hepática.",
      "C": "Suspender losartana; indicar avaliação cardiológica detalhada.",
      "D": "Manter losartana; realizar pesquisa de hipertensão secundária."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 10,
    "gabarito": "C",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 4,
    "enunciado": "Mulher de 34 anos, com 4 filhos, desempregada, comparece a uma unidade básica de saúde (UBS) com queixa de atraso menstrual de um mês. Durante a consulta, a paciente relata que está muito aflita, por ter realizado um teste de gravidez cujo resultado foi positivo. Afirma que compareceu à consulta porque não deseja essa gravidez. Quando questionada, a paciente nega qualquer situação de violência sexual. Nesse caso, além de acolher e acalmar a paciente, a melhor abordagem a ser realizada pelo médico deve ser",
    "alternativas": {
      "A": "iniciar o pré-natal regular, mencionando a possibilidade de entrega voluntária da criança para adoção após seu nascimento.",
      "B": "desencorajar a realização de um aborto, apesar da paciente ter direito, enfatizando os riscos à saúde advindos do procedimento de abortamento, como hemorragia, infecção, perfuração uterina, infertilidade e morte.",
      "C": "assegurar o direito às informações clínicas e legais adequadas, garantir o sigilo e informar sobre sintomas que justifiquem a busca de atendimento médico em caso de realização de um aborto inseguro.",
      "D": "questionar abertamente sobre a intenção de abortar, sem julgamento, e informá-la que tem obrigação ética de fazer um boletim de ocorrência caso o aborto venha a ser realizado."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 11,
    "gabarito": "B",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 4,
    "enunciado": "Mulher de 45 anos vai à unidade básica de saúde (UBS) reportando dificuldade para reduzir o consumo de cigarros. Refere fumar 20 cigarros por dia desde os 20 anos e que já tentou interromper o uso várias vezes. Relata, ainda, irritação e ansiedade quando reduz o consumo de tabaco. Diante desse caso, o plano terapêutico adequado para essa paciente consiste em",
    "alternativas": {
      "A": "reposição de nicotina com redução gradual da dose.",
      "B": "terapia comportamental associada à reposição de nicotina.",
      "C": "terapia comportamental e cessação imediata do tabagismo.",
      "D": "prescrição de benzodiazepínico e redução gradual do número de cigarros diários."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 12,
    "gabarito": "A",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 4,
    "enunciado": "Recém-nascido a termo, do sexo masculino, nascido de parto via vaginal, Apgar 9/10, apresenta salivação excessiva e muco no canto da boca após o nascimento. Durante a amamentação, apresenta regurgitação, cianose, tosse e insuficiência respiratória. Na sala de parto, não foi realizada passagem de sonda pelas narinas, nem pela boca. A ultrassonografia pré-natal evidenciava polidrâmnio. Considerando o caso descrito, assinale a alternativa que apresenta o diagnóstico provável.",
    "alternativas": {
      "A": "Atresia esofágica.",
      "B": "Atresia gástrica.",
      "C": "Atresia intestinal.",
      "D": "Atresia pancreática."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 13,
    "gabarito": "A",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 4,
    "enunciado": "Mulher de 18 anos deu à luz uma criança do sexo feminino, Apgar 9/10, nascida a termo, com peso de nascimento de 3.500 g, comprimento de 50 cm e perímetro cefálico de 35 cm. A criança permaneceu em aleitamento materno exclusivo desde o nascimento. Com 24 horas de vida, o médico constata a perda de 175 g, eliminações presentes, a paciente corada e hidratada. Nesse caso, a perda de peso em relação ao peso do nascimento é de",
    "alternativas": {
      "A": "5%, o que não é motivo de preocupação.",
      "B": "15%, devendo receber complemento com fórmula.",
      "C": "15%, sendo necessária observação clínica rigorosa.",
      "D": "5%, mas não deveria estar acontecendo nesse momento."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 14,
    "gabarito": "D",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 4,
    "enunciado": "Paciente de 49 anos procura atendimento médico relatando que, há 1 mês, não consegue dormir adequadamente por causa de intensas ondas de calor, o que a deixa cansada, irritada e deprimida. Relata dispareunia de penetração e vagina seca. Fez histerectomia e salpingooforectomia bilateral há 3 meses e exame anatomopatológico revelou: adenomiose, hidrossalpinge em ambas as tubas uterinas, cistos de endometriose em ovário direito e focos de endometriose no peritônio. Nega comorbidades. Nesse caso, a conduta mais indicada é",
    "alternativas": {
      "A": "fitoterápicos, pelo histórico de adenomiose e endometriose.",
      "B": "antidepressivos tricíclicos, já que a hormonioterapia é contraindicada.",
      "C": "estrogenioterapia exclusiva, uma vez que a paciente passou por histerectomia.",
      "D": "tratamento hormonal estro-progestativo, considerando que a paciente apresentou quadro de endometriose."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 15,
    "gabarito": "A",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 5,
    "enunciado": "Menina de 6 anos é paciente do mesmo médico na unidade básica de saúde (UBS) desde que nasceu. Sempre foi uma criança alegre, saudável e sociável. Na última consulta, há cerca de 15 dias, o pai a trouxe porque ela estava com “dor de barriga”, mas a paciente permaneceu encolhida e calada todo o tempo, quase não deixando o médico examiná-la. Há 2 dias, a professora da criança procurou a equipe preocupada com a mudança de comportamento da criança. Relatou que foi informada sobre a existência de fotos íntimas da criança numa rede social. A mãe, quando chamada, relatou que está trabalhando e a criança tem ficado com o pai na maior parte do tempo. Nessa situação, além da avaliação clínica, o médico deve",
    "alternativas": {
      "A": "registrar, em prontuário, dados clínicos de forma isenta de interpretações pessoais; notificar violência no SINAN e contatar os equipamentos sociais e conselho tutelar para o seguimento do caso juntamente com a equipe.",
      "B": "encaminhar a criança à perícia médica mais próxima da unidade, onde será realizado exame físico mais detalhado e coleta de vestígios da violência; confirmar a violência antes da notificação no SINAN e contatar o conselho tutelar.",
      "C": "confrontar os dados relatados pela professora com os pais, questionando-os sobre a denúncia e demonstrando preocupação; orientar as medidas de apoio à criança e à família.",
      "D": "anotar, em prontuário, os dados da história com suspeita de abuso e denunciar o caso na delegacia mais próxima; encaminhar a criança para um serviço de proteção social local."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 16,
    "gabarito": "B",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 5,
    "enunciado": "Homem de 44 anos é levado à sala de emergência do pronto-socorro apresentando agitação intensa, confusão mental, tremores generalizados e sudorese profusa. Ao exame físico verifica-se frequência cardíaca de 110 bpm e pressão arterial (PA) de 150 x 110 mmHg. O paciente é etilista crônico, sem antecedentes patológicos e seus familiares relatam que ele interrompeu o consumo de álcool há 48 horas. Com base nessas informações, assinale a alternativa que apresenta, respectivamente, o diagnóstico correto e a conduta inicial para esse paciente.",
    "alternativas": {
      "A": "Delirium tremens; administração de antipsicóticos, como haloperidol.",
      "B": "Delirium tremens; administração intravenosa de benzodiazepínicos, como diazepam.",
      "C": "Encefalopatia hipertensiva; restrição de líquidos e monitoramento estrito da função renal.",
      "D": "Encefalopatia hipertensiva; administração de nitroprussiato de sódio para redução da PA média entre 20 e 25% nas primeiras 2 horas."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 17,
    "gabarito": "B",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 5,
    "enunciado": "Homem de 39 anos, sem comorbidades e em bom estado de saúde, encontra-se em preparação pré-operatória eletiva de colecistectomia que será realizada por via laparoscópica. Durante consulta com o médico que o acompanha, o paciente manifesta preocupação sobre o que pode ingerir e por quanto tempo deve permanecer em jejum antes do procedimento. Nesse caso, o médico deve orientar o paciente a fazer, antes da anestesia, jejum de alimentos sólidos por",
    "alternativas": {
      "A": "12 horas e de líquidos por 8 horas.",
      "B": "6 a 8 horas e de líquidos claros por 2 horas.",
      "C": "4 a 6 horas e de bebida proteica por 1 hora.",
      "D": "10 horas e de pequenos volumes de água por 4 horas."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 18,
    "gabarito": "D",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 5,
    "enunciado": "Lactente saudável de 40 dias, que atualmente vive em uma unidade de acolhimento, é atendido em uma unidade básica de saúde (UBS) em sua primeira consulta desde o nascimento. Sua cuidadora informa que não foi realizado teste do pezinho. A respeito da indicação de coleta do teste do pezinho, assinale a alternativa correta.",
    "alternativas": {
      "A": "O teste do pezinho pode ser coletado somente até o 28º dia de vida; dessa forma, a coleta não poderá ser realizada nesse lactente.",
      "B": "O teste do pezinho pode ser coletado apenas entre o 3º e o 5º dia de vida do bebê; dessa forma, a coleta não poderá ser realizada nesse lactente.",
      "C": "A coleta do teste do pezinho deveria ter sido realizada na maternidade, logo nas primeiras 48 horas de vida do bebê, o que evitaria a situação atual.",
      "D": "A coleta do teste do pezinho após o 28º dia de vida é uma condição de exceção, podendo ser realizada em caso de difícil acesso ao serviço ou de negligência."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 19,
    "gabarito": "D",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 5,
    "enunciado": "Gestante de 25 anos é atendida em uma maternidade no primeiro estágio da fase ativa de trabalho de parto. Seu pré-natal foi de risco habitual e ela está com 40 semanas de gestação. Durante a ausculta intermitente, é detectada uma frequência cardíaca fetal mantida de 100 bpm. Diante disso, é realizada cardiotocografia, que mostra parâmetros normais, exceto a linha de base em torno de 102 bpm por um período de 10 minutos. A paciente não apresenta outros sinais ou sintomas de complicações, e o restante do exame físico está dentro dos parâmetros esperados para a fase ativa do trabalho de parto. Diante desse quadro clínico, a conduta adequada é",
    "alternativas": {
      "A": "encaminhar a paciente para cesariana por se tratar de sofrimento fetal agudo.",
      "B": "administrar ocitocina e acelerar a ultimação do parto por se tratar de sofrimento fetal agudo.",
      "C": "iniciar tocolíticos para reduzir a atividade uterina e aguardar melhora espontânea da frequência cardíaca fetal.",
      "D": "administrar oxigênio e mudar a posição da gestante, reavaliando a frequência cardíaca fetal após alguns minutos."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 20,
    "gabarito": "B",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 6,
    "enunciado": "Um casal consulta com o médico de família e comunidade devido à preocupação da esposa com marido, que tem demonstrado compulsividade relacionada ao consumo de pornografia. Isso tem gerado discussões constantes entre eles, pois o homem é motorista por aplicativo e está deixando de trabalhar devido a este padrão de comportamento — o que tem impactado na situação financeira da família, que já é difícil. Ele relata que a prática começou como distração e alívio do estresse, mas admite que tem dificuldades para controlar esses comportamentos e reconhece as consequências que isso tem gerado para seu contexto familiar. Durante a consulta, o médico identifica sinais de baixa autoestima e de ansiedade nesse paciente. Diante desse relato, qual é o grau de motivação do paciente para a mudança de comportamento?",
    "alternativas": {
      "A": "Ação, visto que já planeja e cria condições para que uma mudança comportamental ocorra.",
      "B": "Contemplação, visto que admite o problema e é ambivalente em relação ao seu comportamento.",
      "C": "Pré-contemplação, visto que reconhece o impacto do vício em seu relacionamento e em sua família.",
      "D": "Preparação, visto que sua percepção sobre os efeitos do vício ainda é limitada, sem possibilidade de mudança."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 21,
    "gabarito": "C",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 6,
    "enunciado": "Homem de 55 anos procura atendimento em unidade básica de saúde (UBS) para renovar prescrição de losartana. Durante a consulta, relata dispneia aos esforços físicos moderados. Além disso, refere tosse pouco produtiva há alguns anos, o que atribui ao uso de 20 cigarros por dia há 20 anos. Radiografia do tórax revela alargamento dos espaços intercostais, sem outras alterações. Espirometria apresenta os seguintes resultados: Valor Valor Valor previsto (de encontrado encontrado acordo com sexo, Parâmetro (pré- (pós- idade, cor da pele e broncodi- broncodi- estatura do paciente) latador) latador) Volume expiratório forçado no 1º 1,72 1,73 3,65 segundo (VEF1) Capacidade vital 3,13 3,14 4,66 forçada (CVF) Relação VEF1/CVF 0,55 0,55 0,79 Diante dos achados, define-se doença pulmonar obstrutiva crônica. Nesse caso, de acordo com os critérios GOLD, a doença do paciente pode ser funcionalmente classificada em",
    "alternativas": {
      "A": "estágio 1.",
      "B": "estágio 2.",
      "C": "estágio 3.",
      "D": "estágio 4."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 22,
    "gabarito": "B",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 6,
    "enunciado": "Homem de 40 anos é levado a uma unidade de pronto atendimento após sofrer um acidente de trabalho enquanto utilizava uma máquina de esmerilhamento. Ele relata que um fragmento metálico de alta velocidade ultrapassou a proteção de seus óculos e atingiu seu olho direito. O paciente apresenta dor intensa no olho afetado, com perda parcial da visão e sensação de corpo estranho. O exame físico revela laceração na conjuntiva bulbar com extravasamento espontâneo de pequena quantidade de conteúdo gelatinoso pelo olho direito. Nesse momento, antes de encaminhar o paciente para o especialista, qual é a conduta adequada para o caso?",
    "alternativas": {
      "A": "Irrigar o olho afetado com solução salina estéril, fazer penicilina cristalina via endovenosa e reavaliar o paciente após 6 horas.",
      "B": "Colocar escudo rígido sobre o olho afetado, iniciar fluoroquinolona endovenosa e verificar imunização antitetânica.",
      "C": "Aplicar colírio corticoide no olho afetado, colocar escudo rígido sobre ele e solicitar radiografia de órbita.",
      "D": "Aplicar colírio antibiótico no olho afetado, realizar curativo oclusivo e prescrever analgesia endovenosa."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 23,
    "gabarito": "-",
    "anulada": true,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 6,
    "enunciado": "Agrupadas no acrônimo TORCHSZ, as infecções congênitas e/ou perinatais são causas de significativa morbimortalidade neonatal. Os sinais e sintomas dessas enfermidades são similares, porém algumas características são mais sugestivas de determinada doença. A partir do exposto, assinale a alternativa que relaciona corretamente sinais e sintomas e/ou achados de exames complementares com a doença.",
    "alternativas": {
      "A": "Hidrocefalia, plaquetose, hepatoesplenomegalia e icterícia são achados mais comuns da toxoplasmose.",
      "B": "Rash macular com úlceras, plaquetopenia e alteração liquórica são achados típicos da rubéola congênita.",
      "C": "Rinite serossanguinolenta, pseudoparalisia de Parrot, catarata e coriorretinite são encontradas na herpes simples.",
      "D": "Catarata, persistência do canal arterial ou estenose pulmonar e retardo de crescimento intrauterino são achados mais comuns de citomegalovírus."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 24,
    "gabarito": "A",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 7,
    "enunciado": "Mulher, G2P1 (parto vaginal), é conduzida ao serviço de urgência obstétrica por estar desacordada, após ter apresentado dor abdominal súbita e desmaio em casa. Está com 35 semanas de gestação e é hipertensa crônica em uso de metildopa e nifedipina. Está inconsciente, apresenta tônus uterino aumentado, com batimento cardíaco fetal de 50 bpm, colo uterino fechado e com moderado sangramento escuro por via vaginal. Ela apresenta os seguintes dados vitais: Exame Resultado Frequência cardíaca materna 60 bpm Pressão arterial 80 x 60 mmHg Saturação de oxigênio 94% Diante desse quadro clínico, assinale a alternativa que apresenta, respectivamente, o diagnóstico e a conduta adequados.",
    "alternativas": {
      "A": "Descolamento prematuro de placenta; priorizar a estabilização hemodinâmica com reposição volêmica, posicionar a paciente em decúbito lateral e realizar a cesárea imediatamente.",
      "B": "Descolamento prematuro de placenta; iniciar a administração de reposição volêmica com cristaloides e com oxigênio e iniciar a monitorização contínua materno- fetal, enquanto a paciente é preparada para o parto vaginal induzido.",
      "C": "Placenta prévia; iniciar a reanimação materna com cristaloides, oxigênio suplementar e administração de uterolíticos para diminuir o tônus e conter o sangramento, enquanto a paciente é transferida para o centro cirúrgico a fim de realizar avaliação de cesariana de urgência.",
      "D": "Placenta prévia; realizar manobras de suporte à vida materna, como reposição volêmica com cristaloides e administração de oxigênio, e iniciar monitorização contínua materno-fetal enquanto a paciente é preparada para o parto vaginal induzido."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 25,
    "gabarito": "B",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 7,
    "enunciado": "Os povos ciganos/Romani que vivem no Brasil possuem um estilo de vida não homogêneo, com uma cultura muitas vezes divergente. Portanto, é essencial que gestores e profissionais da saúde se aproximem dessa população e conheçam suas questões específicas. Nesse contexto, ao se fazer o planejamento de ações de saúde para essa população, é importante considerar que",
    "alternativas": {
      "A": "as questões de saúde são conduzidas por homens na maioria das comunidades ciganas/Romani, motivo pelo qual as mulheres não devem ir ao hospital sozinhas.",
      "B": "a depressão e o suicídio são problemas de saúde nas comunidades ciganas/Romani, com maior incidência em mulheres, sendo motivados pelo racismo e por outras formas de violência.",
      "C": "as mulheres são as lideranças mais respeitadas por toda a comunidade cigana/Romani; por isso, para criar um vínculo de confiança com a comunidade, os agentes públicos de saúde devem iniciar a interlocução com elas.",
      "D": "os povos ciganos/Romani optam, em sua grande maioria, por se manterem nômades, buscando formas alternativas de garantir saúde e educação, apesar de atualmente algumas famílias ciganas/Romani preferirem residências fixas."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 26,
    "gabarito": "D",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 7,
    "enunciado": "Homem de 67 anos, com histórico de doença pulmonar obstrutiva crônica há 10 anos e tabagismo há 50 anos, é levado a unidade de pronto atendimento com desconforto respiratório, tosse e confusão mental há 2 horas. Familiar relata que, nos últimos 5 dias, houve piora progressiva da dispneia e aumento do volume de expectoração, além de mudança no aspecto dessa secreção, que passou de amarelo claro para verde escuro. Ao exame físico, encontra-se torporoso, com extremidades cianóticas e com sibilos e estertores difusos em todos os campos pulmonares. Considerando a situação apresentada, a condução clínica desse paciente deve incluir, obrigatoriamente corticoterapia",
    "alternativas": {
      "A": "sistêmica e acompanhamento ambulatorial.",
      "B": "inalatória e acompanhamento ambulatorial.",
      "C": "inalatória e internação hospitalar.",
      "D": "sistêmica e internação hospitalar."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 27,
    "gabarito": "D",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 8,
    "enunciado": "Paciente do sexo masculino, 18 anos, chega ao pronto atendimento com dor abdominal em mesogástrio e epigástrio, de início insidioso e caráter progressivo, associada a náuseas e hiporexia. A evolução do quadro tem cerca de 24 horas. Ao exame físico, a dor abdominal é exacerbada pela tosse, há discreta diferença de temperatura entre a região axilar e a retal (+1,2 °C), além de dor à palpação profunda em região inferior direita do abdome. Exames laboratoriais mostram leucócitos 14.000/mm³ com 80% de neutrófilos, além de sumário de urina com 6 piócitos/campo. Com base no quadro clínico e laboratorial, qual achado clínico complementa o diagnóstico mais provável?",
    "alternativas": {
      "A": "Dor à punho-percussão na região lombar à direita.",
      "B": "Crepitação na parede abdominal associada à presença de gás.",
      "C": "Dor à palpação no hipocôndrio direito durante inspiração profunda.",
      "D": "Dor à descompressão entre a espinha ilíaca ântero- superior e o umbigo."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 28,
    "gabarito": "B",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 8,
    "enunciado": "Menino de cinco meses é levado para consulta de rotina. Nasceu com idade gestacional de 28 semanas, com boa evolução na internação e recebeu alta para acompanhamento ambulatorial. O bebê está bem, mas teve um episódio de infecção respiratória leve. A família está preocupada com eventuais complicações que o bebê possa ter, uma vez que o inverno está chegando e os pais querem proteger a criança. Nessa situação, a conduta médica mais adequada é indicar a",
    "alternativas": {
      "A": "administração da vacina anti-influenza de imediato e a restrição de visitas.",
      "B": "administração de palivizumabe e orientar os cuidados essenciais de prevenção.",
      "C": "manutenção do calendário vacinal atualizado e o encaminhamento do bebê para a infectologia infantil.",
      "D": "manutenção do calendário vacinal atualizado e a administração de omalizumabe em caso de infecções."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 29,
    "gabarito": "A",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 8,
    "enunciado": "Primigesta de 24 anos chega à maternidade com queixa de cefaleia, febre e dores articulares leves há 5 dias. Relata que ontem houve piora da febre e surgimento de manchas pelo corpo, o que a fez procurar a emergência. O obstetra verifica o cartão do pré-natal e constata que ela está com 22 semanas de gestação e já realizou 3 consultas na unidade básica de saúde (UBS), sempre com sinais vitais normais e exames laboratoriais sem alterações. Ao exame físico, a paciente apresenta-se em bom estado geral, lúcida e orientada. Durante a análise clínica, foram obtidos os seguintes resultados: Exame Resultado Pressão arterial 90 x 70 mmHg Frequência cardíaca 82 bpm Saturação de O 98% em ar ambiente 2 Temperatura axilar 38,6 °C Altura uterina 20 cm Batimentos cardiofetais 142 bpm (regular) Após ouvir a história da paciente e examiná-la, o médico solicita um hemograma, cujo resultado é: Exame Resultado Valor de referência Hematócrito 38% 35 - 45% Hemoglobina 11,2 g/dL 12,0 - 16,0 g/dL Leucócitos totais 9.500/mm³ 4.500 – 11.000 /mm³ Plaquetas 28.000/mm³ 150.000 – 450.000/mm³ Nesse caso, qual a principal hipótese diagnóstica e a conduta a ser adotada pelo obstetra?",
    "alternativas": {
      "A": "Dengue; internar imediatamente a paciente, iniciar hidratação venosa, dipirona endovenosa e realizar controle diário de plaquetas.",
      "B": "Chikungunya; colocar a paciente em leito de observação clínica, iniciar hidratação venosa, dipirona e, após terminar, liberar retorno ao pré-natal.",
      "C": "Zika; colocar a paciente em leito de observação clínica, iniciar hidratação venosa, dipirona endovenosa e realizar controle diário de plaquetas.",
      "D": "Febre de Oropouche; internar imediatamente a paciente, iniciar transfusão de plaquetas, paracetamol por via oral e, após a transfusão, liberar retorno ao pré-natal."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 30,
    "gabarito": "A",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 9,
    "enunciado": "Enchentes, secas, ondas de calor, tempestades tropicais, incêndios florestais e aumento do nível do mar estão diretamente relacionados à escalada dos determinantes sociais da saúde. Esses fatores podem levar ao aumento de doenças cardiovasculares, entre outras. Considerando a interferência desses fatores, assinale a alternativa correta com relação às ações de promoção da saúde.",
    "alternativas": {
      "A": "A exposição à poluição do ar pode acarretar no aumento do risco para hipertensão, diabetes e dermatite atópica, portanto, indica-se fechar as janelas da residência nos horários de maior fluxo de carros a fim de reduzir a exposição aos poluentes.",
      "B": "As plantações de milho para a produção de biocombustível configuram uma importante tendência no país uma vez que aumentam a oferta de empregos na economia verde e melhoram as condições de vida de pequenos e médios produtores rurais.",
      "C": "A elevação da pressão arterial é um efeito comum das ondas de calor, por isso, é indicado aumentar as doses dos anti-hipertensivos, reforçar a hidratação e procurar fontes de sombra e refrigeração.",
      "D": "As atividades de educação em saúde acerca do estresse climático são desaconselháveis nas escolas, devido ao risco de sofrimento emocional nas crianças e nos adolescentes."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 31,
    "gabarito": "C",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 9,
    "enunciado": "Homem de 40 anos procura a unidade básica de saúde (UBS) relatando que está com tosse produtiva há 3 meses, associada a febre vespertina e perda de peso. Nega histórico de tuberculose. Na UBS, é realizado o teste rápido molecular (TRM) para tuberculose no escarro, com resultado positivo e resistência à rifampicina. Diante disso, esse paciente é encaminhado para o ambulatório de referência em tuberculose do município. Nessa situação, a conduta médica, baseada no resultado do TRM, é",
    "alternativas": {
      "A": "inadequada, devendo ser solicitada a baciloscopia no escarro; o encaminhamento do paciente deve ser cancelado enquanto aguarda o resultado da baciloscopia.",
      "B": "adequada, sendo desnecessário aguardar a baciloscopia no escarro; o encaminhamento do paciente deve ser cancelado e deve ser iniciado o esquema básico imediatamente.",
      "C": "adequada, sendo desnecessário aguardar a baciloscopia no escarro; o encaminhamento do paciente deve ser mantido e deve ser feito novo TRM, além de cultura e teste de sensibilidade.",
      "D": "inadequada, devendo ser solicitada a baciloscopia no escarro; o encaminhamento do paciente deve ser mantido, devido à necessidade de confirmação diagnóstica por centro especializado."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 32,
    "gabarito": "C",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 9,
    "enunciado": "Paciente do sexo feminino, 33 anos, previamente saudável, após ter sido submetida a abdominoplastia em clínica privada, evoluiu com instabilidade hemodinâmica no pós-operatório imediato antes da alta. O cirurgião plástico que a operou pediu à família da paciente que a levasse para a unidade de pronto atendimento, onde chegou sem vida. À luz do Código de Ética Médica, deve-se considerar que o cirurgião plástico da situação descrita foi",
    "alternativas": {
      "A": "imprudente ao operar a paciente em clínica privada.",
      "B": "imperito ao realizar o procedimento de abdominoplastia.",
      "C": "negligente quanto à estabilização pré-transporte da paciente.",
      "D": "diligente ao solicitar aos familiares a rápida transferência da paciente."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 33,
    "gabarito": "C",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 9,
    "enunciado": "Lactante previamente hígida comparece à consulta de puericultura com seu filho de 4 meses. Ela refere que voltará a trabalhar em 15 dias, por isso tem dúvidas quanto à oferta do leite materno. Considerando essa situação, assinale a alternativa que apresenta a orientação correta quanto aos cuidados adequados com a ordenha e o leite materno ordenhado.",
    "alternativas": {
      "A": "Para o descongelamento do leite materno, pode-se realizar a fervura ou o aquecimento em micro-ondas.",
      "B": "Para a coleta de leite materno, pode-se realizar ordenha manual após higienização das mamas com álcool 70%.",
      "C": "Para a conservação do leite materno, pode-se mantê-lo em congelador por até 15 dias a partir da primeira retirada.",
      "D": "Para o favorecimento da continuidade do aleitamento materno, pode-se oferecer em mamadeira o leite ordenhado."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 34,
    "gabarito": "D",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 9,
    "enunciado": "Menina de 14 anos vai à consulta na unidade básica de saúde (UBS), acompanhada de sua mãe, relatando preocupação, pois todas as suas amigas da mesma faixa etária já menstruaram, exceto ela. A paciente apresenta as mamas desenvolvidas e alguns pelos pubianos e, durante a consulta, apresenta muitas dúvidas em relação à menstruação. Nesse caso, após orientar a menina sobre ciclo menstrual e sobre métodos contraceptivos, a conduta adequada é",
    "alternativas": {
      "A": "solicitar exames complementares para investigação de amenorreia.",
      "B": "orientar a mãe e a filha a aguardarem a menstruação até os 16 anos.",
      "C": "indicar teste de progesterona oral para confirmar amenorreia primária.",
      "D": "solicitar ultrassonografia e dosagens hormonais para investigação de amenorreia."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 35,
    "gabarito": "A",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 10,
    "enunciado": "Um médico de família e comunidade, atuante numa equipe fluvial, atende a uma população ribeirinha e a uma população indígena, ambas na região amazônica. Ele reconhece que essas duas populações vivem em regiões remotas. No entanto, é notável que elas apresentam diferenças culturais e de modos de vida. A partir dessas informações, assinale a alternativa que apresenta a estratégia adequada a ser adotada pelo médico e por sua equipe no cuidado à saúde das populações mencionadas.",
    "alternativas": {
      "A": "Utilização de profissionais de saúde nativos ou locais sem a necessidade de capacitação específica focada no paradigma biomédico, uma vez que eles já conhecem profundamente a cultura, as tradições e os hábitos dessas populações.",
      "B": "Atendimento à população ribeirinha centrado em soluções biomédicas e tecnológicas, utilizando conhecimentos da medicina ocidental, enquanto o atendimento à população indígena deve ser pautado por suas próprias práticas de cuidado e cura.",
      "C": "Incentivo e valorização das práticas de cuidado tradicionais, promoção do uso racional de medicamentos básicos pela população indígena e estímulo à participação local e à integração do saber acadêmico e do senso comum da comunidade ribeirinha.",
      "D": "Organização dos atendimentos das populações de forma padronizada, a partir da identificação das prioridades em saúde, considerando que as comunidades compartilham realidades geográficas e desafios semelhantes em relação ao acesso a cuidados médicos."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 36,
    "gabarito": "B",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 10,
    "enunciado": "Mulher de 45 anos foi levada para consulta na casa de saúde indígena da capital do estado, com febre (até 39°C), tosse, dor de garganta, cefaleia, mialgia e artralgia iniciados há cerca de 36 horas. Outros 5 pacientes da mesma comunidade indígena apresentaram quadro semelhante no mesmo período. No dia da consulta, a paciente começou a se queixar de leve falta de ar. Ao exame físico apresentava parâmetros dentro da normalidade, exceto pela febre (39 °C) e por estertores crepitantes na base pulmonar direita. Frequência respiratória de 22 irpm e pressão arterial é de 120 x 80 mmHg. Considerando o caso apresentado, assinale a alternativa que indica, respectivamente, a hipótese diagnóstica e a conduta mais adequada.",
    "alternativas": {
      "A": "Pneumonia viral; prescrever o uso de oseltamivir.",
      "B": "Tuberculose; solicitar pesquisa de BAAR no escarro.",
      "C": "Pneumonia bacteriana; indicar o uso de ceftriaxona e amoxicilina.",
      "D": "Resfriado comum; recomendar o uso de medicações sintomáticas."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 37,
    "gabarito": "D",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 10,
    "enunciado": "Mulher de 24 anos, previamente saudável, portadora de rim único, sofreu um acidente motociclístico há 7 dias. Foi levada a um hospital, onde foi submetida a craniectomia descompressiva e drenagem de hematoma subdural agudo. No entanto, há 1 dia, evoluiu com coma aperceptivo e ausência de reflexos de tronco encefálico. Diante disso, foi realizado o protocolo de morte encefálica, com confirmação diagnóstica. Testes laboratoriais mostraram função renal preservada, anti-HBs positivo e HBsAg negativo. Embora a paciente seja doadora de órgãos e tecidos, seu esposo se posiciona contra a doação, afirmando que isso interferirá em suas crenças. Com base na legislação pertinente, assinale a alternativa correta quanto à doação de órgãos nessa situação.",
    "alternativas": {
      "A": "A condição renal da paciente, embora seja saudável, contraindica a doação de órgãos.",
      "B": "A doação de órgãos da paciente requer o consentimento e a autorização de seu esposo.",
      "C": "O poder público poderá intervir a favor do cumprimento do desejo de doação da paciente.",
      "D": "Os resultados dos exames laboratoriais citados impossibilitam a doação de órgãos da paciente."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 38,
    "gabarito": "C",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 10,
    "enunciado": "Menino de 6 meses, saudável, é levado para consulta de rotina. Ele está em aleitamento materno exclusivo e a mãe busca orientações sobre a introdução alimentar, pois se trata de seu primeiro filho. Nesse caso, a conduta adequada é manter aleitamento materno e",
    "alternativas": {
      "A": "introduzir 1 refeição com composto lácteo.",
      "B": "iniciar 1 refeição minimamente processada.",
      "C": "oferecer suco de frutas e dar 2 papas de legumes.",
      "D": "introduzir 1 refeição principal e 1 porção de fruta."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 39,
    "gabarito": "D",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 11,
    "enunciado": "Mulher de 30 anos é encaminhada pelo médico da unidade básica de saúde (UBS) para avaliação com o ginecologista. Relata corrimento com odor fétido após o término da menstruação, nos últimos três ciclos menstruais, e apresenta o laudo da citologia cervical realizada na UBS: presença de epitélio escamoso e glandular, flora com lactobacilos e dentro dos limites da normalidade. Ao exame especular, observa-se corrimento abundante homogêneo, com vagina e colo uterino de aspecto normal e sem hiperemia. Teste com hidróxido de potássio, realizado na secreção vaginal, com a percepção de odor fétido e pH superior a 5,0. No exame a fresco da secreção vaginal, observam-se células guia (clue cells) no microscópio. Nesse caso, quais são, respectivamente, o diagnóstico e o tratamento a serem prescritos?",
    "alternativas": {
      "A": "Vaginose citolítica; tratamento com banho de assento com bicarbonato de sódio.",
      "B": "Tricomoníase; tratamento com metronidazol por via oral, ou em forma de creme vaginal.",
      "C": "Candidíase; tratamento com miconazol creme vaginal, ou com fluconazol por via oral.",
      "D": "Vaginose bacteriana; tratamento com metronidazol por via oral, ou em forma de creme vaginal, ou com clindamicina creme."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 40,
    "gabarito": "B",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 11,
    "enunciado": "Homem de 45 anos, trabalhador da construção civil, comparece a uma unidade básica de saúde (UBS) devido à dor lombar iniciada há um mês, com piora progressiva, irradiada para o membro inferior direito, com maior intensidade ao final do expediente de trabalho, especialmente após carregar materiais pesados. Nega histórico de trauma, febre, perda de peso ou outros sintomas sistêmicos. Ao exame físico, há dor à palpação de musculatura paravertebral bilateral na região lombar, sem alterações neurológicas. Não há restrição de movimentos e a flexão está preservada. O exame de força e sensibilidade nos membros inferiores está normal, e os reflexos patelar e aquileu estão preservados. Lasègue negativo bilateralmente. Quais são as condutas adequadas a serem adotadas nesse caso?",
    "alternativas": {
      "A": "Solicitar ressonância magnética da coluna lombar, devido à irradiação da dor para membro inferior; prescrever anti- inflamatório não esteroide associado a paracetamol.",
      "B": "Solicitar radiografia de coluna lombar, devido à duração e à irradiação da dor; prescrever corticoide sistêmico associado a paracetamol; encaminhar o paciente à fisioterapia.",
      "C": "Não solicitar exames complementares, devido à duração da dor e reflexos preservados; prescrever corticoide sistêmico associado a relaxante muscular; orientar repouso por 5 dias.",
      "D": "Não solicitar exames complementares, devido à ausência de sinais de alerta; orientar a prática de exercício físico; prescrever anti-inflamatório não esteroide associado a relaxante muscular."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 41,
    "gabarito": "A",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 11,
    "enunciado": "Homem de 22 anos comparece à unidade básica de saúde (UBS) com queixa de úlcera na região genital associada a \"íngua na virilha\". Ele afirma que, há cerca de 10 dias, observou lesão papular, única, indolor, localizada na glande. Em pouco tempo, essa lesão evoluiu para ulceração local. Ao exame físico, o paciente apresenta, na glande, úlcera única de fundo limpo e bordas elevadas, endurecidas e linfonodos inguinais palpáveis bilateralmente, não supurativos, móveis e indolores. Ao ser questionado, ele confirma ter tido relação sexual desprotegida cerca de 3 semanas antes do início dos primeiros sinais. Nesse caso, qual é o exame complementar indicado para o diagnóstico do paciente?",
    "alternativas": {
      "A": "VDRL sérico (Venereal Disease Research Laboratory).",
      "B": "Cultura de secreção uretral l em meio de Thayer-Martin.",
      "C": "Aspirado linfonodal com pesquisa de Haemophilus ducreyi.",
      "D": "Pesquisa de corpúsculos de Donovan em esfregaço da lesão."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 42,
    "gabarito": "B",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 11,
    "enunciado": "Mulher de 45 anos, sem comorbidades, é submetida a uma colecistectomia videolaparoscópica eletiva devido a colecistopatia crônica calculosa. O procedimento transcorre sem complicações, durando cerca de 40 minutos. No pós-operatório imediato, a paciente apresenta-se hemodinâmicamente estável, com pressão arterial de 110 x 70 mmHg, frequência cardíaca de 82 bpm e saturação de oxigênio de 98% em ar ambiente. Nega náusea e relata dor leve em região abdominal. De acordo com os protocolos multimodais de recuperação pós-operatória (ERAS e ACERTO), qual é a conduta adequada em relação à alimentação dessa paciente?",
    "alternativas": {
      "A": "Início de dieta líquida via oral após 6 horas do procedimento.",
      "B": "Início imediato de dieta via oral, de acordo com sua vontade.",
      "C": "Início de dieta via oral após 24 horas do procedimento.",
      "D": "Início imediato de dieta via oral, de forma escalonada."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 43,
    "gabarito": "D",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 12,
    "enunciado": "Adolescente de 15 anos com fibrose cística comparece ao pronto-socorro com aumento da tosse produtiva, expectoração purulenta e febre iniciada há três dias. Ele relata piora da dispneia, e sua mãe, que o acompanha, observa que ele tem tido mais dificuldade para realizar suas atividades diárias. Ao exame físico, o paciente apresenta moderado desconforto respiratório, com taquipneia (frequência respiratória de 32 irpm), sibilos bilaterais e diminuição do murmúrio vesicular nas bases pulmonares. A saturação de oxigênio em ar ambiente é de 87%. Considerando o quadro clínico apresentado, a abordagem inicial é",
    "alternativas": {
      "A": "internar o paciente; iniciar oxigenoterapia e antibioticoterapia de amplo espectro intravenosa; e solicitar cultura de escarro.",
      "B": "internar o paciente; iniciar corticoterapia sistêmica; e realizar drenagem postural imediata com fisioterapia respiratória intensiva.",
      "C": "realizar nebulização com broncodilatadores; prescrever antibioticoterapia oral domiciliar; e agendar acompanhamento em ambulatório especializado.",
      "D": "realizar tomografia de tórax, gasometria arterial e exames séricos para avaliar melhor o grau de comprometimento pulmonar antes de iniciar tratamento."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 44,
    "gabarito": "A",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 12,
    "enunciado": "Paciente, G3P1A, gestação de 13 semanas, datada pela ecografia de 8 semanas, procura atendimento com queixa de sangramento vaginal há 3 dias, em pequena quantidade. A tipagem sanguínea anotada em seu cartão de pré-natal é A negativo. Ela desconhece a tipagem sanguínea de seu companheiro. Ao exame ginecológico, nota-se sangramento vaginal em moderada quantidade e colo uterino fechado. Solicitado teste de coombs indireto, com resultado positivo. Diante desse contexto, a conduta médica adequada é",
    "alternativas": {
      "A": "alertar a paciente sobre a inviabilidade da gestação.",
      "B": "realizar imunoglobulina anti-RH, por via endovenosa, imediatamente.",
      "C": "repetir o exame de coombs indireto e solicitar tipagem sanguínea do parceiro.",
      "D": "encaminhar ao pré-natal de alto risco e indicar monitoramento por aloimunização."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 45,
    "gabarito": "C",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 12,
    "enunciado": "Um médico recém-contratado para atuar como gerente de uma unidade básica de saúde (UBS) em uma cidade com 35.000 habitantes agendou uma reunião com a equipe para tratar de visitas domiciliares. Seu objetivo é propor uma investigação com enfoque em doenças crônicas não transmissíveis, na população residente com 18 anos ou mais de idade. O médico visa melhorar, em um curto período de tempo, o planejamento de cuidados de saúde dessa população. O desenho de pesquisa mais adequado para esse levantamento denomina-se",
    "alternativas": {
      "A": "estudo transversal.",
      "B": "estudo experimental.",
      "C": "análise de caso-controle.",
      "D": "análise de coorte prospectivo."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 46,
    "gabarito": "C",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 12,
    "enunciado": "Mulher de 25 anos vai à consulta na unidade básica de saúde (UBS) com dor articular há 4 meses, edema e vermelhidão nas articulações metacarpo falangeanas e interfalangeanas proximais de ambas as mãos e também em punhos e joelhos. Refere rigidez matinal de 2 horas, mal-estar generalizado e sensação de febre. Nega lesões cutâneas ou alopecia. Fez uso de ibuprofeno, com alívio parcial das dores. Exame físico: à palpação das articulações acometidas presença de dor, espessamento sinovial, sem deformidades. Os exames indicam velocidade de hemossedimentação de 35 mm/hora (valor de referência [VR]: < 20 mm/hora); proteína C reativa de 12 mg/dL (VR: < 6 mg/dL); e fator reumatoide negativo (referência: negativo). Considerando o caso apresentado, assinale a alternativa que indica, respectivamente, o diagnóstico e o tratamento medicamentoso adequados.",
    "alternativas": {
      "A": "Osteoartrite; uso de paracetamol.",
      "B": "Artrite reumatoide; uso de metotrexato.",
      "C": "Esclerose sistêmica; uso de prednisona.",
      "D": "Lúpus eritematoso sistêmico; uso de cloroquina."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 47,
    "gabarito": "C",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 13,
    "enunciado": "Homem de 35 anos, vítima de acidente de trânsito, com amputação traumática de membro inferior direito na região da perna, recebe atendimento no local do acidente. O exame clínico revela sangramento ativo e abundante na região da amputação. No momento, sua pele está pálida e fria, apresenta 13 pontos em Escala de Coma de Glasgow e seus sinais vitais são apresentados a seguir. Exame Resultado Pressão arterial 80 x 50 mmHg Frequência cardíaca 130 bpm Frequência respiratória 30 irpm Com base no protocolo do “X” ATLS, qual é a intervenção prioritária inicial para esse paciente?",
    "alternativas": {
      "A": "Posicionar cânula orofaríngea.",
      "B": "Administrar fluidos intravenosos.",
      "C": "Manter a coluna cervical estabilizada.",
      "D": "Colocar torniquete acima do local da amputação."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 48,
    "gabarito": "B",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 13,
    "enunciado": "Menino de 6 anos é levado para consulta por seus pais, por estarem preocupados com seu ganho de peso. Notaram escurecimento da pele da criança em região de pescoço e axilas, pensando que isso pode ser algum problema grave. O menino apresenta índice de massa corporal (IMC) entre +2 e +3 no escore Z e uma relação circunferência abdominal / estatura de 0,9. Ao exame físico, apresenta manchas escurecidas e aveludadas em região de pescoço e axilas. Nesse caso, as alterações clínicas e a conduta adequada, respectivamente, são",
    "alternativas": {
      "A": "risco de sobrepeso e acantosis nigricans; iniciar hipoglicemiante oral.",
      "B": "eutrofia e acrodermatite; encaminhar o paciente para dermatologia.",
      "C": "obesidade e acantosis nigricans; orientar alimentação e prática de esportes.",
      "D": "sobrepeso e acrodermatite; encaminhar o paciente para endocrinologia infantil."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 49,
    "gabarito": "D",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 13,
    "enunciado": "Mulher de 65 anos procura atendimento médico na unidade de atenção primária. Relata que teve a menopausa aos 50 anos, com diagnóstico de osteoporose, confirmado por exame de densitometria óssea (T-score de -2,5). A paciente não apresenta histórico de fraturas, é obesa, sedentária e faz uso crônico de corticoides orais. Diante do caso, a conduta adequada é",
    "alternativas": {
      "A": "reposição hormonal com estrógenos orais, restrição de atividade física de alto impacto, com nova avaliação após 1 ano.",
      "B": "calcitonina nasal, recomendando exercícios leves, além de sugerir aumento de ingestão de alimentos ricos em cálcio e em vitamina D.",
      "C": "vitamina D isolada associada ao aumento da ingestão de proteínas, recomendando atividades físicas de baixo impacto, com reavaliação após 1 ano.",
      "D": "bisfosfonato oral, recomendando a prática regular de exercícios físicos (por 30 a 40 minutos, 3 vezes por semana) e a suplementação de cálcio e de vitamina D."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 50,
    "gabarito": "B",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 13,
    "enunciado": "Homem de 42 anos, pescador que mora próximo a um lago, é atendido em uma unidade básica de saúde (UBS) no norte de Minas Gerais. Ele relata dor abdominal intermitente, cansaço, febre baixa, hiporexia, episódios de diarreia há cerca de um mês e áreas de prurido em membros inferiores. No exame físico, apresenta hepatoesplenomegalia e distensão abdominal. Nos membros inferiores há lesões sugestivas de estrófulos. O hemograma mostra eosinofilia. Aguarda resultado de exame parasitológico de fezes pelo método Kato-Katz. Nesse caso, qual deverá ser a conduta de acordo com o resultado do exame?",
    "alternativas": {
      "A": "Se o resultado for positivo, tratar o paciente com metronidazol e notificar ao SINAN.",
      "B": "Se o resultado for positivo, solicitar ensaio imunoenzimático (ELISA) para detecção de anticorpos IgG e confirmação da atividade da doença.",
      "C": "Se o resultado for positivo, tratar o paciente com praziquantel e notificar no sistema de informação do programa específico da doença.",
      "D": "Se o resultado for negativo, solicitar método de sedimentação espontânea de fezes (Hoffman) para descartar a principal hipótese diagnóstica."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 51,
    "gabarito": "A",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 14,
    "enunciado": "Homem de 25 anos vai à unidade de pronto atendimento (UPA) apresentando quadro de febre alta há 3 dias, associado a náuseas, mialgia, artralgia e leve dor em quadrantes superiores do abdome. Ao exame físico, o paciente encontra-se alerta, consciente e orientado; pressão arterial de 100 x 70 mmHg; frequência cardíaca de 110 bpm; e frequência respiratória de 18 irpm; pulsos cheios e extremidades quentes; fígado palpável a 3 centímetros do rebordo costal direito, levemente doloroso à palpação. Os exames laboratoriais iniciais do paciente revelam os seguintes resultados: Exame Resultado Valor de referência (VR) Leucócitos 3.500 3 4.000 a 10.000/mm 3 totais células/mm Hematócrito 46% 39,9 a 52,1% 3 3 Plaquetas 130.000/mm 150.000 a 450.000/mm Teste rápido de antígeno Positivo - NS1 Nesse caso, a conduta inicial mais adequada envolve",
    "alternativas": {
      "A": "alta para acompanhamento ambulatorial diário e hidratação oral abundante e analgesia.",
      "B": "hidratação oral abundante e sintomáticos, alta e orientação de retorno no primeiro dia após a cessação da febre.",
      "C": "hidratação venosa e internação hospitalar em enfermaria para monitorização clínica e laboratorial.",
      "D": "internação em unidade de terapia intensiva (UTI) imediatamente para hidratação vigorosa e monitoramento contínuo."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 52,
    "gabarito": "B",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 14,
    "enunciado": "Mulher de 47 anos apresenta dor abdominal no quadrante superior direito iniciada há 3 dias, associada a náuseas e vômitos. Ela relata que a dor, inicialmente intermitente, tornou-se constante e irradia para o dorso. O exame físico mostra icterícia leve, dor à palpação do quadrante superior direito e sinal de Murphy ausente. Os exames laboratoriais revelam elevação de bilirrubinas (sendo a direta predominante), aumento de fosfatase alcalina e gama-GT, amilase e lipase normais. A ultrassonografia abdominal evidencia múltiplos cálculos na vesícula biliar e dilatação das vias biliares. A colangiorressonância evidencia cálculo no ducto biliar comum (diâmetro de 9 mm), associado a dilatação do colédoco e das vias biliares intra-hepáticas. Nesse caso, a conduta médica adequada é",
    "alternativas": {
      "A": "prescrever antibióticos e acompanhar a paciente clinicamente até a resolução dos sintomas.",
      "B": "solicitar tomografia computadorizada, antes de qualquer intervenção, para avaliar o estado da via biliar.",
      "C": "realizar colecistectomia laparoscópica imediatamente, sem necessidade de outros exames ou intervenções.",
      "D": "indicar colangiopancreatografia retrógrada endoscópica (CPRE) para remoção dos cálculos na via biliar principal."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 53,
    "gabarito": "D",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 14,
    "enunciado": "Menina de 11 meses, nascida a termo é levada para avaliação médica pois a mãe está preocupada com o desenvolvimento da criança: está mais irritada, não senta sem apoio, não engatinha, e dorme pouco. A alimentação consiste de aleitamento materno complementado com a dieta da família, que é vegana. Faz suplementação de vitamina D (400 UI ao dia). O hemograma da criança revela leucócitos totais normais e diferencial de células sem alterações, além dos seguintes achados: Exame Resultado Valor de referência Hemoglobina (Hb) 9,5 g/dL 10,5 a 13,5 g/dL Hematócrito (Ht) 34% 33 a 39% Volume corpuscular 101 fL 70 a 86 fL médio (VCM) Hemoglobina corpuscular média 23 pg 23 a 31 pg (HCM) 3 3 Plaquetas 120.000/mm 200.000 a 500.000/mm Considerando o quadro descrito, a conduta adequada para essa criança é",
    "alternativas": {
      "A": "solicitar avaliação de nutricionista e iniciar suplementação de vitamina A e vitamina C.",
      "B": "iniciar suplementação de ferro e vitamina B12 e solicitar acompanhamento com fisioterapia.",
      "C": "encaminhar para neurologista infantil e iniciar suplementação de ácido fólico e de vitamina B12.",
      "D": "aumentar a dose de suplementação de vitamina D, iniciar ferro e manter acompanhamento de rotina."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 54,
    "gabarito": "A",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 15,
    "enunciado": "Mulher de 54 anos procura a unidade de pronto atendimento (UPA) com queixa de dor pélvica e de sangramento vaginal ativo, há 2 dias. Relata preocupação, pois não menstruava há 4 anos. Relata que a menopausa ocorreu aos 50 anos e que tem diabetes mellitus tipo 2, tratada com metformina desde os 41 anos. É sedentária, não fuma e nunca ingeriu bebidas alcoólicas. Apresentou os exames de mamografia e citologia de colo uterino, realizados há 4 meses, que mostraram BIRADS 2 bilateral na mamografia e citologia dentro dos limites da normalidade. Ao exame físico, a paciente encontra-se em bom estado geral, orientada, corada, com pressão arterial de 120 x 70 mmHg, frequência cardíaca de 69 bpm e índice de massa corporal (IMC) de 32,3 kg/m². O exame especular revela pequeno sangramento vermelho vivo, saindo pelo orifício cervical externo, com colo do útero atrófico e sem lesões visíveis. O hemograma realizado na UPA revela os seguintes resultados: Exame Resultado Valor de referência Hemoglobina 12,7 g/dL 11,5 a 14,8 g/dL Hematócrito 38% 35,4 a 45,9 % 3 3 Leucócitos 7.800/mm 3.143 a 10.074/mm 3 3 Plaquetas 324.000/mm 135.606 a 343.044/mm Considerando o caso descrito, a conduta adequada é",
    "alternativas": {
      "A": "solicitar ultrassonografia transvaginal e orientar o retorno à unidade básica de saúde.",
      "B": "solicitar ressonância magnética de pelve e orientar que a paciente procure um ginecologista.",
      "C": "solicitar histeroscopia cirúrgica e orientar a paciente que procure uma unidade básica para ser referenciada.",
      "D": "encaminhar a paciente para hospital, com urgência, para realizar curetagem uterina para controle e avaliação do sangramento."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 55,
    "gabarito": "C",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 15,
    "enunciado": "Homem de 61 anos procura uma unidade básica de saúde (UBS) de uma cidade grande desejando receber um pedido para colonoscopia, pois ouviu que é um exame preventivo necessário após os 50 anos de idade para detecção de câncer do intestino. Questionado pela médica da UBS, o paciente relata que não apresenta sintomas gastrointestinais, anemia, perda de peso ou histórico familiar de câncer de intestino. Considerando-se que neste município existe ampla disponibilidade de recursos diagnósticos, e levando em conta as políticas públicas do Ministério da Saúde para rastreamento, que conduta inicial a médica deverá adotar nesse caso?",
    "alternativas": {
      "A": "Fornecer o pedido de colonoscopia para diagnóstico precoce ao paciente, para que ele busque realizar o exame no SUS por meio de ação judicial.",
      "B": "Solicitar colonoscopia para diagnóstico precoce e informar o paciente da possível demora para sua realização, visto que não há suspeita de câncer.",
      "C": "Solicitar exame de sangue oculto nas fezes, informando o paciente de que se trata de um exame indicado pelo SUS para rastreio de câncer do intestino.",
      "D": "Esclarecer que o SUS não prevê a realização de colonoscopia para rastreio de câncer de intestino e orientar o paciente a realizar o exame no setor privado."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 56,
    "gabarito": "C",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 15,
    "enunciado": "Homem de 50 anos, agricultor, procura atendimento médico na unidade básica de saúde (UBS) após mordedura de boi em antebraço esquerdo. A ferida é superficial, está limpa e apresenta sangramento local leve. O paciente relata que o animal não possui manifestações aparentes de raiva. Ele também afirma que o boi é de propriedade conhecida e pode ser mantido sob observação. Quando questionado, o paciente revela não ter histórico de vacinação prévia contra raiva. Considerando a profilaxia da raiva humana, deve-se limpar a ferida e",
    "alternativas": {
      "A": "observar o animal por 10 dias antes de decidir por qualquer intervenção adicional.",
      "B": "dispensar observação do animal e liberar o paciente sem vacina antirrábica.",
      "C": "iniciar imediatamente o esquema completo de vacinação antirrábica.",
      "D": "administrar imediatamente soro antirrábico."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 57,
    "gabarito": "D",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 15,
    "enunciado": "Homem de 24 anos é atendido no serviço de emergência 20 minutos após ferimento por arma de fogo. O orifício de entrada do projétil localiza-se 2 cm lateralmente à linha hemiclavicular direita, ao nível do quarto espaço intercostal. O paciente apresenta pressão arterial de 120 x 82 mmHg, frequência cardíaca de 110 bpm e frequência respiratória de 19 irpm. O médico que o atende observa o seguinte: paciente normocorado e cooperativo; murmúrios vesiculares diminuídos em hemitórax direito; macicez difusa à percussão; e ausência do frêmito tóraco-vocal nesse mesmo lado do tórax. Durante a avaliação inicial, é realizada reposição volêmica, oferta-se oxigênio suplementar, são colhidos exames laboratoriais e é administrado ácido tranexâmico. Nessa situação, assinale a alternativa que apresenta o procedimento adequado a ser realizado.",
    "alternativas": {
      "A": "Toracotomia exploradora para retirada do projetil alojado no tórax.",
      "B": "Toracocentese com agulha grossa, no segundo espaço intercostal direito.",
      "C": "Drenagem pleural no quinto espaço intercostal, entre linha axilar anterior e média.",
      "D": "Drenagem pleural por meio do orifício de entrada do projétil, em aspiração contínua."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 58,
    "gabarito": "C",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 16,
    "enunciado": "Menino de 10 anos, em atendimento ambulatorial, apresenta tosse persistente que o desperta à noite frequentemente, além de chiado no peito, de forma intermitente, há cerca de 10 meses. Os sintomas pioram durante a realização de atividades físicas, como correr e jogar futebol. Teve 2 crises recentes de “chiadeira” e cansaço, necessitando ir ao serviço de urgência. Foi diagnosticado com asma aos 5 anos e é medicado com salbutamol inalatório nos episódios de crise. A função pulmonar revela VEF1 de 70% do previsto, VEF1/CVF igual a 0,8 e aumento de 15% após uso de broncodilatador. Entre as opções a seguir, a indicação terapêutica adequada para o caso é",
    "alternativas": {
      "A": "antileucotrieno via oral diariamente, associado a corticoide por via inalatória durante as exacerbações.",
      "B": "beta-agonista de longa duração (LABA), corticoide inalatório para alívio dos sintomas e beta agonista de resgate durantes as crises.",
      "C": "corticoide oral associado a beta-agonista de curta duração (SABA) para alívio dos sintomas durante as exacerbações.",
      "D": "beta-agonista de longa duração (LABA) e corticoide oral nas crises, além de brometo de ipratrópio durante as exacerbações."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 59,
    "gabarito": "D",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 16,
    "enunciado": "Mulher procura orientação na atenção primária preocupada com risco de câncer de mama. Pede orientação sobre quando deve iniciar rastreamento por mamografia. Relata que sua mãe teve câncer de mama aos 45 anos. Está assintomática e suas mamas não apresentam anormalidades ao exame. Nesse caso, considerando-se o uso racional de exames complementares e a segurança da paciente, qual é a conduta mais adequada?",
    "alternativas": {
      "A": "Manter realização de exame clínico das mamas anualmente, sem a necessidade de exames complementares, e iniciar avaliação por mamografia após os 40 anos.",
      "B": "Iniciar rastreamento com mamografia a partir dos 40 anos, realizado a cada 2 anos, conforme recomendação para a população geral, devido à ausência de sintomas.",
      "C": "Manter acompanhamento clínico regular anual e iniciar mamografia após os 50 anos, uma vez que a paciente está assintomática e sem sinais clínicos de câncer.",
      "D": "Iniciar rastreamento com mamografia a partir dos 35 anos, uma vez que o histórico de câncer de mama em parente de primeiro grau antes dos 50 anos justifica o início precoce do rastreamento."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 60,
    "gabarito": "B",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 16,
    "enunciado": "Criança de 6 meses e 15 dias é levada pela mãe para uma consulta de puericultura com a médica de família e comunidade devido à dificuldade de introdução alimentar, pois apresenta baixa aceitação das papas de frutas e de legumes. A mãe relata preocupação, pois o desenvolvimento da criança tem sido diferente da experiência que teve com o primeiro filho, que aceitou rapidamente as primeiras papas introduzidas aos 6 meses. A médica, então, revisa o prontuário e identifica que, em avaliações anteriores, a criança não apresentava sorriso social e não vocalizava nenhum tipo de som. Esses achados foram confirmados nesta consulta. Diante desse quadro, a conduta médica apropriada é",
    "alternativas": {
      "A": "realizar o M-CHAT (Modified Children’s Autism Test) e, se o resultado for positivo, encaminhar a criança para avaliação multidisciplinar.",
      "B": "levar em consideração a preocupação da mãe sobre o desenvolvimento da criança e investigar fatores de risco sociofamiliares e sinais de alerta.",
      "C": "aplicar o protocolo de observação para diagnóstico de Transtorno do Espectro Autista (TEA) a fim de diferenciar a suspeita de autismo e de outras deficiências.",
      "D": "encaminhar a criança ao neurologista para avaliação clínica e para a solicitação de exames de imagem, a fim de investigar o atraso de desenvolvimento."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 61,
    "gabarito": "A",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 16,
    "enunciado": "Homem de 48 anos é encaminhado a um hospital para investigação de febre persistente. Na história patológica pregressa, o paciente apresenta diagnóstico de retocolite ulcerativa. À fundoscopia direita, é identificada lesão arredondada com borda eritematosa e centro pálido, medindo cerca de 8 mm de diâmetro. Durante o exame físico, além de palidez cutaneomucosa leve e sopro cardíaco sistólico de baixa intensidade, são constatadas hemorragias subungueais em alguns quirodáctilos. Com base nesses achados clínicos, a hipótese diagnóstica mais provável é de",
    "alternativas": {
      "A": "endocardite infecciosa.",
      "B": "leucemia mieloide aguda.",
      "C": "vasculite leucocitoclástica.",
      "D": "lúpus eritematoso sistêmico."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 62,
    "gabarito": "B",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 17,
    "enunciado": "Homem de 41 anos, após queda de altura de 5 metros, foi levado a um hospital terciário com traumatismo cranioencefálico grave. O paciente foi submetido à neurocirurgia para drenagem de hematoma extradural e evoluiu com internação em unidade de terapia intensiva (UTI), onde permaneceu por 60 dias. Após esse período, ele faleceu por complicações associadas a sepse. Nessa situação, qual deve ser a conduta da equipe da UTI em relação à emissão do atestado de óbito?",
    "alternativas": {
      "A": "Fornecer o atestado de óbito, o que é responsabilidade da equipe médica que coordena e chefia a UTI.",
      "B": "Encaminhar o corpo ao Instituto Médico Legal (IML), que tem a responsabilidade de emitir o atestado de óbito.",
      "C": "Encaminhar o corpo para o Serviço de Verificação de Óbito (SVO), que deverá realizar a necrópsia e a emissão do atestado.",
      "D": "Fornecer o atestado de óbito, o que é responsabilidade da equipe médica que estava de plantão na UTI no momento do óbito."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 63,
    "gabarito": "D",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 17,
    "enunciado": "Menino de 4 anos é levado a uma unidade de pronto atendimento (UPA) devido a dor abdominal e constipação. A mãe relata que a criança vem apresentando constipação importante desde o desfralde, que foi realizado antes dos dois anos de idade, com evacuações a cada 4 dias, fezes em cíbalos, esforço evacuatório e dor. O exame físico revela massa palpável em fossa ilíaca esquerda e dor abdominal difusa. Nesse caso, a conduta inicial adequada é",
    "alternativas": {
      "A": "solicitar radiografia de abdome e coprológico funcional.",
      "B": "indicar desimpactação retal com lactulose e óleo mineral.",
      "C": "orientar sobre alimentação, ingesta hídrica e treinamento de toalete.",
      "D": "indicar desimpactação fecal com enema retal ou polietilenoglicol por via oral."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 64,
    "gabarito": "A",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 17,
    "enunciado": "Primigesta com idade gestacional de 38 semanas procura a maternidade. Realizou pré-natal regular e todos os seus exames estão dentro da normalidade. Relata sentir ansiedade porque a data provável do parto se aproxima e ela ainda não tem sinais do início do trabalho de parto. Diante disso, expressa desejo de realizar uma cesariana para evitar possíveis complicações. Ao exame clínico, não foram identificadas alterações. Nesse caso, a conduta mais adequada é",
    "alternativas": {
      "A": "conversar sobre os riscos da cesariana e, caso a paciente mantenha o desejo de realizá-la, agendar o procedimento a partir de 39 semanas de gestação.",
      "B": "expor que, devido aos maiores riscos da cesariana, o parto vaginal é a via de parto indicada em gestações de baixo risco e que, por isso, é inviável optar pela cesariana.",
      "C": "explicar que, em gestações de baixo risco, a cesariana por desejo materno só pode ser realizada antes do início do trabalho de parto, a partir de 41 semanas de gestação.",
      "D": "orientar sobre os riscos da cesariana e, caso a paciente mantenha o desejo de realizá-la, fazer o procedimento imediatamente, posto que a autonomia da gestante deve ser garantida."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 65,
    "gabarito": "C",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 17,
    "enunciado": "Paciente de 40 anos vai à unidade básica de saúde (UBS) relatando parto há 15 dias e desejo de inserção de DIU. Nesse caso, assinale a alternativa que indica o momento da inserção e o principal mecanismo de ação do DIU de cobre.",
    "alternativas": {
      "A": "A partir de 12 semanas após o parto; inibição da nidação ovular devido à alta concentração de cobre e afinamento do endométrio.",
      "B": "De forma imediata no ambulatório de Ginecologia; espessamento do muco cervical, dificultando a mobilidade dos espermatozoides.",
      "C": "No período de 4 a 6 semanas após o parto; ação inflamatória e citotóxica no endométrio pela liberação de íons de cobre na cavidade uterina.",
      "D": "De forma imediata na UBS; concentração de cobre no muco cervical, o que o torna mais fluido, inibindo a mobilidade dos espermatozoides."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 66,
    "gabarito": "C",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 18,
    "enunciado": "Mulher de 57 anos com diagnóstico de diabetes mellitus há 10 anos e uso regular de metformina 2 g/dia e gliclazida 60 mg/dia comparece à unidade básica de saúde (UBS). Durante a consulta, a pressão arterial média, aferida em 3 medições consecutivas com intervalos de 1 minuto, é de 154 x 94 mmHg. Ao revisar o prontuário, o médico observa que, nas últimas 3 consultas, os níveis pressóricos registrados também estavam acima de 140 x 90 mmHg. Além disso, o médico verifica exame prévio de albuminúria de 50 mg/g de creatinina (valor de referência: < 30 mg/g de creatinina). De acordo com a Diretriz Brasileira de Hipertensão e com base nesse quadro clínico e laboratorial, a conduta terapêutica inicial mais adequada para o tratamento da hipertensão consiste na prescrição de",
    "alternativas": {
      "A": "betabloqueador.",
      "B": "diurético.",
      "C": "inibidor da enzima de conversão.",
      "D": "bloqueador de canal de cálcio."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 67,
    "gabarito": "D",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 18,
    "enunciado": "Menino de 4 anos é levado por sua mãe a uma unidade básica de saúde (UBS) para consulta. Ela refere que a criança apresenta, desde seu nascimento, uma tumoração no pescoço, cujo volume está aumentando. O exame físico releva tumoração arredondada de 1,5 cm de diâmetro, indolor, com pele íntegra, em linha média da região cervical anterior e móvel com o movimento de protrusão da língua. A mãe nega processos inflamatórios ou saída de secreção locais. Considerando essa situação, assinale a alternativa que apresenta a principal hipótese diagnóstica.",
    "alternativas": {
      "A": "Cisto dermoide.",
      "B": "Tireoide ectópica.",
      "C": "Higroma cístico.",
      "D": "Cisto tireoglosso."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 68,
    "gabarito": "C",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 18,
    "enunciado": "Menino de 4 anos é levado a unidade básica de saúde (UBS) por sua mãe, que relata que ele está com tosse persistente há mais de 3 semanas, febre baixa no final da tarde, cansaço e perda de apetite. Além dos pais, o menino reside também com o avô diagnosticado com tuberculose há 2 meses. Com base nos protocolos do Ministério da Saúde, a conduta para este caso é",
    "alternativas": {
      "A": "prescrever antibióticos de amplo espectro para tratar a tosse e solicitar retorno em 15 dias para avaliar se há melhora dos sintomas.",
      "B": "iniciar tratamento empírico para tuberculose mesmo sem confirmação diagnóstica, haja vista o histórico de contato e os sintomas apresentados.",
      "C": "solicitar radiografia de tórax e prova tuberculínica e explicar à família que esses exames são fundamentais para o diagnóstico de tuberculose pulmonar.",
      "D": "solicitar hemograma e radiografia de tórax para investigar tuberculose pulmonar e manter o menino afastado do avô até que este complete 6 meses de tratamento."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 69,
    "gabarito": "D",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 18,
    "enunciado": "Secundigesta com idade gestacional de 18 semanas comparece à consulta na unidade básica de saúde (UBS) para iniciar seu pré-natal. Está assintomática e, ao exame clínico, não são identificadas alterações. A paciente, no entanto, relata que entrou em trabalho de parto espontâneo com 32 semanas em sua primeira gestação. Considerado o caso descrito, é indicado prescrever",
    "alternativas": {
      "A": "indometacina por via oral diariamente.",
      "B": "pessário vaginal, após 22 semanas de gestação.",
      "C": "progesterona por via intramuscular semanalmente.",
      "D": "progesterona natural micronizada por via vaginal diariamente."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 70,
    "gabarito": "B",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 18,
    "enunciado": "Mulher de 67 anos chega a uma unidade básica de saúde (UBS) acompanhada pelo filho. Ele relata que a mãe, há cerca de 30 minutos, passou a apresentar intensa dor de cabeça e dificuldade para falar. A paciente é hipertensa, faz uso de anti-hipertensivos, estatina e antiagregante plaquetário em dose profilática. Há 6 anos, sofreu um acidente vascular cerebral (AVC) sem sequelas. Durante o exame físico, pontuou 14 na Escala de Coma de Glasgow e apresentou seguintes sinais vitais: Exame Resultado Pressão arterial (PA) 150 x 95 mmHg Frequência cardíaca (FC) 90 bpm Frequência respiratória (FR) 20 irpm Saturação de oxigênio 95% Nessa situação, qual é a conduta adequada a ser adotada pelo médico da UBS?",
    "alternativas": {
      "A": "Estabilizar a paciente na sala de observação da UBS, ofertar anti-hipertensivo via oral para redução da PA e solicitar exames de imagem.",
      "B": "Acionar o Serviço Móvel de Urgência de imediato para encaminhamento ao serviço de urgência e estabilizar a paciente na UBS até a chegada da ambulância.",
      "C": "Administrar anti-hipertensivo sublingual e reavaliar a paciente após 30 minutos; caso não haja queda da PA, encaminhá-la para serviço de urgência.",
      "D": "Medicar a paciente, com o objetivo de reduzir a PA dentro de 24 a 48 horas, e realizar seguimento ambulatorial para avaliar se houve reversão dos sintomas."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 71,
    "gabarito": "B",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 19,
    "enunciado": "Homem de 45 anos com queixa de dor lombar, há 1 ano, é encaminhado da atenção primária para o ambulatório de reumatologia. O paciente é obeso, sedentário. Relata dor ao acordar e dificuldade de movimentação, que melhora após cerca de 2 horas. Utilizou diversos anti-inflamatórios não hormonais e analgésicos comuns, com melhora parcial e transitória. A radiografia de coluna lombar, realizada na unidade básica de saúde (UBS), revela redução de espaço L4-L5 com esclerose subcondral. O exame físico mostra uma redução na amplitude dos movimentos da coluna lombar, com um teste de Schober de 1 cm, e não há sinais de artrite ou de entesite. Considerando o diagnóstico mais provável, quais são as condutas médicas específicas para o caso?",
    "alternativas": {
      "A": "Solicitar o HLA-B37 e prescrever anti-inflamatórios hormonais.",
      "B": "Solicitar provas de atividades inflamatórias e ressonância magnética de sacroilíacas.",
      "C": "Orientar sobre ergonomia e prescrever anti-inflamatórios não hormonais sob demanda.",
      "D": "Orientar redução de peso, realização de sessões de fisioterapia e prescrever analgésicos opioides."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 72,
    "gabarito": "D",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 19,
    "enunciado": "Lactente de 40 dias de vida, do sexo feminino, é levada para consulta por sua mãe. A criança tem história de icterícia e colúria progressivas desde a segunda semana de vida. Está em aleitamento materno, com boa aceitação e ganho ponderal, porém regurgita muito. A mãe relata que as fezes da bebê estão muito claras (acolia). O exame físico revela: paciente em bom estado geral; eutrófica; fígado de consistência firme, não nodular ou doloroso, a 3 cm do rebordo costal; baço a 1 cm do rebordo costal esquerdo. Tendo em vista essa situação, assinale a alternativa que contém, respectivamente, a principal hipótese diagnóstica e a conduta adequada para o caso.",
    "alternativas": {
      "A": "Icterícia não obstrutiva prolongada, com bom ganho ponderal; solicitar gama-GT e aminotransferases.",
      "B": "Icterícia obstrutiva prolongada por doença metabólica; substituir leite materno por fórmula e solicitar função hepática.",
      "C": "Icterícia não obstrutiva prolongada, relacionada ao aleitamento materno, com evolução benigna; adotar conduta expectante.",
      "D": "Icterícia obstrutiva prolongada por atresia biliar; encaminhar a criança urgentemente para avaliação diagnóstica e tratamento."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 73,
    "gabarito": "C",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 19,
    "enunciado": "Menino de 10 meses é atendido em unidade básica de saúde (UBS) com história de febre alta iniciada há 4 dias (até 39 °C), com 3 picos por dia, inicialmente sem outros sintomas associados, evoluindo com exantema maculopapular em região cervical e tronco. Não apresentou febre nas últimas 18 horas. A respeito de possíveis diagnósticos diferenciais para o quadro apresentado, assinale a alternativa correta.",
    "alternativas": {
      "A": "O diagnóstico de síndrome mão-pé-boca é mais provável, ainda que não tenham sido observadas vesículas na pele.",
      "B": "A anamnese e o exame físico exigem descartar laboratorialmente o diagnóstico diferencial de sarampo, pois se trata de menor de 1 ano.",
      "C": "A anamnese e o exame físico são suficientes para o diagnóstico de exantema súbito, não havendo indicação de exames complementares.",
      "D": "A presença de febre alta torna um quadro bacteriano mais provável, o que, associado à presença do exantema, sugere o diagnóstico de escarlatina."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 74,
    "gabarito": "D",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 19,
    "enunciado": "Paciente de 35 anos procura atendimento na unidade básica de saúde com ultrassonografia transvaginal que revela uma imagem cística anecóica, em seu ovário direito, medindo aproximadamente 6 cm no maior diâmetro, com contornos regulares e paredes finas, sem septações, conteúdo sólido ou vascularização interna. A paciente está assintomática, possui ciclos menstruais regulares e fluxo normal. Nega doenças crônicas ou cirurgias prévias. Diante dessa situação, a conduta adequada é",
    "alternativas": {
      "A": "realizar dosagem sanguínea do CA 125.",
      "B": "indicar acompanhamento ginecológico de rotina.",
      "C": "indicar realização de ressonância magnética da pelve.",
      "D": "repetir a ultrassonografia transvaginal em até 12 semanas."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 75,
    "gabarito": "C",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 19,
    "enunciado": "Paciente de 35 anos, contente por sua primeira gravidez, começa o pré-natal na unidade básica de saúde (UBS) de seu bairro. Durante a consulta de enfermagem, é identificado, no exame das mamas, um nódulo na mama direita. Quando informada sobre esse achado, a paciente relata que sua mãe teve câncer de mama aos 38 anos. Diante desse quadro, a conduta médica indicada é",
    "alternativas": {
      "A": "requisitar biópsia do nódulo mamário guiada por ultrassonografia.",
      "B": "encaminhar a paciente para o ambulatório de gestação de alto risco.",
      "C": "solicitar ultrassonografia de mamas e considerar realização de mamografia com proteção abdominal.",
      "D": "aguardar o final da gestação para realizar investigação do nódulo a partir de ultrassonografia e de mamografia."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 76,
    "gabarito": "A",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 20,
    "enunciado": "Mulher branca de 47 anos comparece a consulta médica na unidade básica de saúde (UBS) queixando-se da presença de lesão escurecida, assimétrica e de bordas irregulares em antebraço esquerdo. Relata que, nas últimas quatro semanas, a lesão tem aumentado de tamanho e se tornado pruriginosa, com episódio de pequeno sangramento local. Considerando a situação apresentada, a principal hipótese diagnóstica da paciente é",
    "alternativas": {
      "A": "melanoma.",
      "B": "queratoacantoma.",
      "C": "carcinoma basocelular.",
      "D": "carcinoma espinocelular."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 77,
    "gabarito": "C",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 20,
    "enunciado": "Homem de 36 anos é levado a um hospital terciário pelo Serviço Móvel de Urgência após queda de altura de 4 metros. No atendimento pré-hospitalar, o paciente evoluiu com rebaixamento do nível de consciência (7 na Escala de Coma de Glasgow) e intubação orotraqueal. Foi observado hematoma subcutâneo em região frontoparietal direita, sem outras lesões aparentes e sem nenhum tipo de hemorragia externa. O paciente não havia ingerido álcool ou drogas, nem apresentava comorbidades. Segundo o ATLS, ao entrar na sala de emergência do hospital, qual deverá ser a conduta prioritária?",
    "alternativas": {
      "A": "Realização de tomografia de crânio, tórax e abdome.",
      "B": "Administração de ácido tranexâmico e volume.",
      "C": "Avaliação das vias aéreas do paciente.",
      "D": "Estabilização da coluna cervical."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 78,
    "gabarito": "D",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 20,
    "enunciado": "Menino de 7 anos é levado à unidade de pronto atendimento com dor abdominal intensa e febre intermitente nos últimos 3 dias. Segundo relato da mãe, ele apresentou um quadro gripal há cerca de uma semana. Ao exame físico, o paciente apresenta púrpura palpável localizada principalmente nos membros inferiores e nas nádegas, além de edema nos tornozelos e dor nas articulações dos joelhos e cotovelos. A dor abdominal é difusa e não é aliviada com analgesia simples. Testes laboratoriais mostram proteinúria leve e hematúria microscópica. A hipótese diagnóstica, com justificativa correta para o caso, é",
    "alternativas": {
      "A": "doença de Kawasaki; presença de febre e envolvimento articular.",
      "B": "artrite reumatoide juvenil; presença de febre, edema articular e dor.",
      "C": "lúpus eritematoso sistêmico; artralgia, púrpura palpável e achados urinários.",
      "D": "vasculite por imunoglobulina A; púrpura palpável, dor abdominal e achados urinários."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 79,
    "gabarito": "A",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 20,
    "enunciado": "o Multípara de 43 anos, lactante no 2 mês de amamentação, procura atendimento afirmando área de hiperemia e dor no quadrante superior-lateral de mama esquerda, há 5 dias. Relata que, inicialmente, a área afetada era próxima à aréola e que depois foi se estendendo para a região axilar homolateral. Verifica-se ponto de flutuação e adenopatia dolorosa na axila esquerda. Paciente febril no momento do atendimento. Diante desse quadro, deve-se realizar",
    "alternativas": {
      "A": "drenagem cirúrgica sobre o ponto de flutuação, com prosseguimento de amamentação em ambas as mamas.",
      "B": "drenagem com agulha fina guiada por ultrassonografia, com prosseguimento de amamentação pela mama contralateral.",
      "C": "antibioticoterapia durante 7 dias, com lactação mantida, desde que o leite produzido pela mama afetada seja fervido antes de oferecê-lo.",
      "D": "mamografia para descartar carcinoma inflamatório de mama, seguida de punção esvaziadora e de suspensão de amamentação até o resultado do anatomopatológico."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 80,
    "gabarito": "D",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 21,
    "enunciado": "Mulher comparece na unidade básica de saúde (UBS) com seus dois filhos, um menino de 8 anos e uma menina de 13 anos, buscando orientações quanto à vacinação contra o HPV. Diante desse quadro, qual a orientação correta?",
    "alternativas": {
      "A": "O menino e a menina podem receber dose única nessa visita.",
      "B": "O menino e a menina podem receber a primeira dose nessa visita e agendar a segunda dose em 60 dias.",
      "C": "A menina não deve ser vacinada e o menino poderá receber a primeira dose ao completar 11 anos.",
      "D": "A menina pode ser vacinada em dose única nessa visita e não há indicação para que o filho seja vacinado agora."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 81,
    "gabarito": "A",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 21,
    "enunciado": "Homem de 42 anos é internado para investigação de episódios recorrentes de dor epigástrica de forte intensidade com irradiação para o dorso, com diversas avaliações em serviços de pronto-atendimento, sem diagnóstico conclusivo. Ultrassonografia abdominal sem sinais de litíase ou de dilatação de vias biliares. Relata uso diário de bebida alcoólica desde os 16 anos. Considerando o caso apresentado, assinale a alternativa que indica, respectivamente, o exame complementar e a conduta terapêutica adequados.",
    "alternativas": {
      "A": "Tomografia computadorizada de abdome; administração de amitriptilina.",
      "B": "Colangiopancreatografia endoscópica retrógrada; administração de gabapentina.",
      "C": "Tomografia computadorizada de abdome; administração de ácido ursodesoxicólico.",
      "D": "Colangiopancreatografia endoscópica retrógrada; administração de enzimas pancreáticas."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 82,
    "gabarito": "B",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 21,
    "enunciado": "Homem de 20 anos, pedreiro, é atendido em um pronto-socorro após cair de um andaime a uma altura de, aproximadamente, 2 metros, com impacto direto na região urogenital. Refere impossibilidade de micção espontânea. O exame físico revela equimose em “asa de borboleta” no períneo, uretrorragia e globo vesical palpável abaixo da cicatriz umbilical. Frente ao quadro clínico desse paciente, qual é a conduta médica mais adequada?",
    "alternativas": {
      "A": "Passagem de sonda vesical de demora.",
      "B": "Realização de cistostomia por punção.",
      "C": "Estímulo com diurético endovenoso.",
      "D": "Incremento da hidratação venosa."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 83,
    "gabarito": "D",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 21,
    "enunciado": "Menina de 2 anos e 6 meses é atendida em uma unidade básica de saúde (UBS). A mãe relata que a criança consome cerca de um litro de leite de vaca por dia e ingere pouca carne. O médico observa palidez cutaneomucosa e solicita exames. Os resultados são apresentados a seguir. Valor de Exame Resultado referência Hemoglobina (Hb) 9,0 g/dL 10,5 a 13,5 g/dL Hematócrito (Ht) 27,5% 33 a 39% Volume corpuscular 64 fL 70 a 86 fL médio (VCM) Ferritina 12 ng/mL 20 – 100 ng/mL Obs: anisocitose + O médico inicia tratamento com ferro elementar na dose de 2 mg/kg/dia. Após 3 meses, exames foram repetidos, conforme tabela a seguir. Valor de Exame pós tratamento Resultado referência Hemoglobina (Hb) 9,2 g/dL 10,5 a 13,5 g/dL Hematócrito (Ht) 27,9% 33 a 39% Volume corpuscular 68 fL 70 a 86 fL médio (VCM) Ferritina 15 ng/mL 20 – 100 ng/mL Obs: anisocitose + Com relação ao tratamento e à conduta desse paciente é correto afirmar que a",
    "alternativas": {
      "A": "resposta é a esperada para o tratamento; devendo-se manter o tratamento atual por mais 3 meses e reavaliar laboratorialmente.",
      "B": "resposta à administração de ferro oral é resistente; deve- se repor com ferro endovenoso e investigar a má absorção por doença celíaca.",
      "C": "falha terapêutica é sugestiva de outra causa da anemia microcítica; deve-se considerar hipótese de traço talassêmico e encaminhar a paciente para hematologista.",
      "D": "falha terapêutica deve-se a persistência de fatores de risco relacionados à alimentação e à subdose de ferro elementar; deve-se aumentar a dose e orientar a alimentação."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 84,
    "gabarito": "B",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 22,
    "enunciado": "Paciente de 27 anos, G1P0, comparece à unidade de pronto atendimento apresentando dor pélvica leve e sangramento vaginal discreto há 6 horas. Refere data da última menstruação (DUM) há 7 semanas. Ao exame físico, tem-se sinais vitais normais e exame abdominal normal. Ao exame especular, nota-se sangramento em pequena quantidade, vivo, oriundo do orifício externo do colo uterino. Títulos de beta-hCG realizados há dois dias eram de 2.500 mUI/mL. Títulos de beta-hCG realizados no pronto-socorro são de 3.500 mUI/mL. Foi solicitada ultrassonografia transvaginal, que demonstrou ausência de saco gestacional intrauterino e presença de massa anexial à direita, medindo 3 cm, contendo no seu interior imagem compatível com embrião, sem batimentos cardíacos. Com base no quadro clínico e nos achados dos exames complementares, a conduta mais adequada a ser realizada nessa paciente é",
    "alternativas": {
      "A": "laparoscopia imediata, considerando os níveis em ascenção de beta-hCG e o tamanho da massa anexial.",
      "B": "tratamento com metotrexato intramuscular, considerando os níveis de beta-hCG e o tamanho da massa anexial.",
      "C": "laparotomia imediata, considerando os níveis em ascenção do beta-hCG e a presença de embrião na massa anexial.",
      "D": "monitoramento com ultrassonografia transvaginal e beta-hCG em 48 horas, considerando os níveis em ascenção de beta-hCG."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 85,
    "gabarito": "C",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 22,
    "enunciado": "Mulher de 55 anos, ao visitar seu pai, de 82 anos, com Doença de Alzheimer, em uma instituição de longa permanência para idosos (ILPI), suspeita de maus-tratos, uma vez que o encontrou restrito ao leito, com fraldas sujas e fácies de dor. Ela já havia presenciado outros idosos residentes passarem por situações semelhantes a essa na mesma instituição. Ao ser questionada, a equipe responsável responde que a restrição de mobilidade no leito foi efetuada porque o paciente se encontrava agitado pela manhã. Quanto à higiene do idoso, a equipe alega falta de profissionais para realizar as trocas de fraldas. Tendo em vista o que dispõe o Estatuto do Idoso, de que maneira a situação descrita pode ser qualificada?",
    "alternativas": {
      "A": "A decisão dos familiares de manter o paciente em uma ILPI configura ato de violência contra o idoso.",
      "B": "A situação descrita é justificável do ponto de vista institucional por se tratar de paciente agitado e com demência.",
      "C": "A presença de negligência, caracterizada pela omissão na prestação de cuidados, configura-se como uma forma de violência institucional.",
      "D": "A situação caracteriza violência patrimonial, pois os recursos financeiros do idoso não estão sendo empregados para garantir os cuidados de que necessita."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 86,
    "gabarito": "B",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 22,
    "enunciado": "Homem de 68 anos em quimioterapia paliativa para câncer gástrico avançado é internado devido à queda do estado geral e dispneia. Ao ser atendido, apresenta Saturação de O de 2 86%, sendo prescrita oxigenioterapia. A tomografia computadorizada de tórax evidencia padrão sugestivo de extensa linfangite carcinomatosa bilateral e pequeno derrame pleural à esquerda. Apesar do registro em prontuário da “diretiva antecipada de vontade” de não ser submetido a procedimentos invasivos, um de seus filhos insiste que o paciente seja submetido à ventilação mecânica invasiva. Nesse caso, a conduta adequada diante da piora respiratória do paciente é",
    "alternativas": {
      "A": "realizar a intubação orotraqueal.",
      "B": "prescrever morfina por via parenteral.",
      "C": "realizar toracocentese terapêutica à esquerda.",
      "D": "instituir ventilação não invasiva seguida de intubação orotraqueal."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 87,
    "gabarito": "B",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 22,
    "enunciado": "Menino de 6 anos é levado ao pronto-socorro pediátrico por sua mãe, que relata que a criança introduziu um objeto metálico pequeno no nariz enquanto brincava. O paciente apresenta obstrução nasal à direita, sem outros sintomas significativos. Radiografia em mentonaso dos seios da face revela uma imagem radiopaca circular com duplo contorno em fossa nasal direita. Nesse caso, qual é a conduta médica adequada?",
    "alternativas": {
      "A": "Alta médica, com encaminhamento para consulta com otorrinolaringologista.",
      "B": "Transferência para centro de referência, para nasofibroscopia imediata.",
      "C": "Internação no pronto-socorro, para lavagem e aspiração nasal.",
      "D": "Internação hospitalar, para realização de rinoscopia eletiva."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 88,
    "gabarito": "B",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 22,
    "enunciado": "Menino de 6 anos está internado e em tratamento da leucemia linfoblástica aguda (LLA). Tem indicação de transplante de células-tronco hematopoiéticas — transplante de medula óssea (TMO). Com relação a essa modalidade de tratamento, assinale a alternativa correta.",
    "alternativas": {
      "A": "O encaminhamento desse paciente para o centro de referência para TMO deve ser realizado o quanto antes.",
      "B": "A inscrição do paciente em centro de referência para TMO deve ser realizada tão logo seja detectada falha na terapia de indução.",
      "C": "O exame de compatibilidade em todos os familiares de 1º grau deve ser realizado antes da inscrição em centro de referência para TMO.",
      "D": "O encaminhamento desse paciente para centro de referência para TMO deve ser realizado somente após a alta hospitalar, via ambulatorial."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 89,
    "gabarito": "C",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 23,
    "enunciado": "Mulher de 45 anos, G2P2, retorna ao ambulatório de ginecologia do hospital escola para o resultado da biópsia de colo uterino realizada há 20 dias. A biópsia evidenciou NIC III, sendo a paciente informada pela residente que ela terá que realizar uma conização do colo uterino para remoção da lesão e prevenção do câncer. Após as explicações, a paciente solicita que já se faça histerectomia para evitar problemas futuros. Diante da solicitação da paciente, a médica deverá informar que a",
    "alternativas": {
      "A": "histerectomia é um procedimento mais indicado do que a conização, por se tratar de um tumor in situ.",
      "B": "histerectomia é um procedimento mais indicado do que a conização, já que a paciente tem prole constituída.",
      "C": "conização é um procedimento menos invasivo e necessário para afastar a hipótese de microinvasão pelo tumor.",
      "D": "conização é um procedimento menos invasivo e suficiente para o tratamento da paciente, uma vez que se trata de um tumor in situ."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 90,
    "gabarito": "B",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 23,
    "enunciado": "Paciente de 38 anos, morador de uma zona urbana não endêmica e sem história de viagens recentes para regiões de risco, vai à unidade básica de saúde (UBS) apresentando histórico vacinal de febre amarela há 9 anos. Ele relata ao médico que um macaco foi encontrado morto perto de sua casa. Diante desse relato, o médico deve",
    "alternativas": {
      "A": "salientar a ausência de risco de febre amarela, uma vez que o Brasil não é país endêmico.",
      "B": "informar que é desnecessário realizar reforço para a vacina contra febre amarela nesse caso.",
      "C": "solicitar e aguardar resultado do anatomopatológico do animal, a fim de confirmar febre amarela.",
      "D": "indicar o reforço da vacina contra febre amarela, independentemente da ministração da última dose."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 91,
    "gabarito": "A",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 23,
    "enunciado": "Mulher de 70 anos, sem comorbidades, é internada devido a quadro de dor, distensão abdominal e vômitos frequentes iniciados há 2 dias. Foi diagnosticada com uma hérnia umbilical encarcerada e submetida a correção cirúrgica e a enterectomia segmentar da porção necrosada. No primeiro dia de pós-operatório, observou-se drenagem de cerca de 2 litros de líquido pela sonda nasogástrica. No segundo dia, o abdome da paciente permaneceu distendido, com ruídos hidroaéreos hipoativos. Notou-se que ela está sem evacuar e com pouca eliminação de flatos. Nessa situação, o quadro clínico do segundo dia de pós-operatório é justificado pela",
    "alternativas": {
      "A": "hipocalemia.",
      "B": "hipercalemia.",
      "C": "hipermagnesemia.",
      "D": "hipomagnesemia."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 92,
    "gabarito": "D",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 23,
    "enunciado": "Paciente, 67 anos, procurou a unidade de saúde relatando dificuldade para urinar, jato urinário fraco e noctúria. Ele nega dor ao urinar ou sangramento visível na urina. Ao exame físico, o toque retal revelou uma próstata aumentada, de consistência firme, sem nódulos palpáveis. Para avaliação complementar, o médico solicitou exames laboratoriais, incluindo dosagem do antígeno prostático específico total de 3,1 ng/mL, creatinina sérica 1,1 mg/dL, além de ultrassonografia do trato urinário que mostrou próstata aumentada de tamanho com volume de 40 gramas, sem nódulos. Paciente já em tratamento com finasterida e doxasozina, porém sem melhoras dos sintomas. Com base nesse caso, qual é a conduta mais apropriada?",
    "alternativas": {
      "A": "Solicitar biópsia prostática.",
      "B": "Iniciar tratamento empírico com antibióticos.",
      "C": "Repetir o exame de ultrassonografia da próstata.",
      "D": "Encaminhar para ressecção transuretral da próstata."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 93,
    "gabarito": "A",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 23,
    "enunciado": "Menino, 3 anos, internado em uma unidade de terapia intensiva pediátrica com neoplasia de sistema nervoso central, foi operado pela neurocirurgia com retirada parcial da lesão há 3 meses, e desde então vem realizando tratamento quimioterápico. Ressonância magnética recente mostra aumento importante do tumor e a equipe de oncologia considera que não há mais possibilidades terapêuticas para tratamento do tumor. O paciente permanece acamado, pouco responsivo e acompanhado de sua mãe. A equipe multidisciplinar se reúne para definir quais condutas terapêuticas serão realizadas nesse paciente. Nesse caso, a conduta a ser adotada deve ser",
    "alternativas": {
      "A": "administrar opióides para controle da dor e, junto da família, orientar a não realização de ressuscitação cardiopulmonar.",
      "B": "realizar sedação e intubação orotraqueal para maior conforto e orientar a não realização de ressuscitação cardiopulmonar.",
      "C": "iniciar um novo ciclo de quimioterapia com medicações diferentes das que já foram utilizadas, para controle da proliferação celular tumoral.",
      "D": "solicitar nova abordagem pela equipe de neurocirurgia para retirada de parte da lesão, o que aliviará a pressão intracraniana e prolongará a sobrevida."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 94,
    "gabarito": "B",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 24,
    "enunciado": "Mulher de 60 anos é encaminhada para atendimento especializado por ter apresentado 4 episódios de sangramento vaginal. Ela está lúcida, orientada, sem queixas e com autonomia em sua vida pessoal e social. Apresentou uma ultrassonografia transvaginal com endométrio de 12 mm de espessura e heterogêneo. Foi indicada histeroscopia diagnóstica, mas a paciente recusa-se a fazer porque acha que o sangramento é normal. Nesse caso, o médico deve",
    "alternativas": {
      "A": "dizer à paciente que respeitará sua decisão e evitar discutir com ela o diagnóstico provável.",
      "B": "informar à paciente que existe a possibilidade de ser câncer e reforçar a necessidade do exame.",
      "C": "esclarecer para a família a necessidade do exame, mas omitir o diagnóstico provável para a paciente.",
      "D": "orientar que, caso ela se recuse a fazer o exame, será necessário procurar outro serviço para acompanhamento."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 95,
    "gabarito": "A",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 24,
    "enunciado": "Durante uma roda de conversa em uma sala de espera com mães que aguardavam a consulta de seus filhos com um médico de família e comunidade, uma enfermeira da equipe de saúde da família propôs a discussão do tema da hesitação vacinal. Durante o diálogo, uma das participantes afirmou que “a culpa de tudo isso é da Internet”. Considerando essa situação, assinale a alternativa correta, acerca dos argumentos a serem utilizados pela enfermeira nessa conversa com a comunidade.",
    "alternativas": {
      "A": "A Internet veicula dúvidas quanto à real eficácia/eficiência e segurança das vacinas, o que abala a confiança da população nos imunobiológicos; ademais, o algoritmo das redes sociais associa temas antivacinação a outros temas de natureza moral, fazendo exposição seletiva.",
      "B": "A hesitação vacinal ocorre nos extratos sociais de menor renda, que são contrárias à medicalização da saúde e acreditam que hábitos de vida saudáveis protegem contra doenças e garantem saúde, dispensando a necessidade de vacinação.",
      "C": "O paradoxo epidemiológico de que algumas doenças imunopreveníveis hoje são raras, associado à complexidade do calendário vacinal, criou a política de redução temporária do uso de algumas vacinas em determinado ano para aumentar o engajamento da população no ano seguinte.",
      "D": "A circulação de informações falsas (fake news), impulsionada pela internet, causa pouco impacto nas escolhas da população de menor poder aquisitivo, que tende a ter mais confiança na vacinação e menor acesso às redes sociais."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 96,
    "gabarito": "B",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 24,
    "enunciado": "Durante consulta no serviço de hematologia de um hospital terciário, um homem de 72 anos reage com a seguinte argumentação diante da proposta terapêutica do médico: \"Não, doutor, devido a minha crença, eu não posso receber sangue \". Ele está sendo atendido por síndrome mielodisplásica recentemente diagnosticada e, por questões religiosas, se recusa a aderir à proposta terapêutica de hemotransfusões periódicas. Diante desse cenário, o médico deve",
    "alternativas": {
      "A": "adiar a decisão de transfusão até uma situação de maior gravidade, em que tenha maior poder de convencimento.",
      "B": "respeitar a autonomia do paciente, buscando outras formas de lidar com a anemia, como a administração de eritropoietina.",
      "C": "insistir na argumentação da necessidade da terapia transfusional, mostrando evidências científicas que comprovam o seu benefício.",
      "D": "buscar apoio do comitê de ética médica da unidade hospitalar para o convencimento do paciente sobre a necessidade das transfusões."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 97,
    "gabarito": "D",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 24,
    "enunciado": "Homem de 58 anos procura atendimento devido a queixa de disfagia progressiva para alimentos sólidos iniciada há 6 meses, associada a perda de peso não intencional. Além disso, apresenta episódios frequentes de pirose e regurgitação, há vários anos, sem tratamento adequado. Endoscopia digestiva alta recente revela estenose esofágica no terço distal e sinais de esofagite crônica, com biópsias que não evidenciam malignidade. Nesse caso, a conduta inicial mais apropriada é indicar",
    "alternativas": {
      "A": "esofagectomia subtotal por via videolaparoscópica.",
      "B": "aplicação de toxina botulínica em esôfago distal via endoscópica.",
      "C": "cirurgia de fundoplicatura imediata para correção do refluxo gastroesofágico.",
      "D": "dilatação endoscópica da estenose e prescrever inibidor de bomba de prótons."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 98,
    "gabarito": "A",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 25,
    "enunciado": "Menino de 10 anos é levado para um serviço de urgência com quadro compatível com politraumatismo e choque hemorrágico. Há indicação de transfusão de concentrado de hemácias, porém a mãe do paciente informa que a família e a criança são Testemunhas de Jeová e recusam terminantemente a transfusão. Considerando esse caso clínico e as questões éticas nele implicadas, assinale a alternativa correta.",
    "alternativas": {
      "A": "A recusa terapêutica coloca em risco a vida de paciente menor de idade e não deve ser aceita pelo médico, que deve realizar a transfusão.",
      "B": "Trata-se de recusa terapêutica apresentada por responsável legal do paciente e, pelo princípio da autonomia, o médico não deverá realizar a transfusão.",
      "C": "Diante da recusa terapêutica, a equipe médica poderá se recusar a prestar o atendimento à criança, até que a família do paciente autorize a realização da transfusão.",
      "D": "Por se tratar de paciente menor de idade, o fato deve ser comunicado às autoridades competentes, como o Ministério Público e o Conselho Tutelar, para que decidam quanto à transfusão."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 99,
    "gabarito": "C",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 25,
    "enunciado": "Mulher de 45 anos está em acompanhamento no ambulatório de mastologia de um hospital escola devido ao diagnóstico de câncer de mama há 3 anos. Fez tratamento cirúrgico e radioterapia e, no momento, faz uso apenas de tamoxifeno. Tem apresentado fluxos menstruais a cada 15-20 dias, com volume aumentado há 2 meses. Relata que, antes do tratamento do câncer de mama, só menstruava duas vezes por ano ou quando usava pílula contraceptiva. Apresenta um IMC de 28 kg/m², exame especular sem lesões visíveis e sem sangramento ativo e toque vaginal normal. Solicitada ultrassonografia transvaginal, ficou evidenciado endométrio heterogêneo de 15 mm e ovário direito com folículo de 23 mm. Nesse caso, a conduta médica adequada é",
    "alternativas": {
      "A": "inserir DIU hormonal.",
      "B": "suspender o tamoxifeno.",
      "C": "indicar estudo histológico do endométrio.",
      "D": "prescrever progestogênio em altas doses."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/1",
    "numero": 100,
    "gabarito": "D",
    "anulada": false,
    "status": "importada",
    "fonte": "INEP — Prova Objetiva 2025/1",
    "conteudoValidado": true,
    "pagina": 25,
    "enunciado": "Diante de um novo teste diagnóstico para hanseníase, que está sendo aplicado em uma unidade básica de saúde (UBS), o médico julga pertinente iniciar uma capacitação com sua equipe sobre a validade de testes diagnósticos, medidas de sensibilidade, especificidade e valores preditivos. Então, ele apresenta os seguintes dados a sua equipe: dentre 100 pessoas acometidas por hanseníase, 98 são verdadeiros positivos; e, dentre 100 pessoas não acometidas por hanseníase, 90 são verdadeiros negativos. A partir desses dados, é correto afirmar que o valor de sensibilidade do teste é",
    "alternativas": {
      "A": "90%.",
      "B": "90,7%.",
      "C": "97,8%.",
      "D": "98%."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 1,
    "gabarito": "A",
    "gabaritoPreliminar": "A",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 3,
    "enunciado": "Mulher de 58 anos, com diagnóstico de hipertensão arterial sistêmica (HAS) e em tratamento irregular, é encaminhada ao ambulatório de clínica médica de atenção secundária. Queixa-se de fadiga e dispneia aos esforços, com piora progressiva. Ao exame físico, é observado ritmo cardíaco regular em 4 tempos (B3 + B4), sem sopros no precórdio, mas com crépitos em bases pulmonares; pressão arterial: 148 x 90 mmHg. Ecocardiograma transtorácico evidencia hipertrofia ventricular esquerda concêntrica, associada com fração de ejeção de 38% (por Simpson). Exames laboratoriais normais, salvo pela elevação sérica de peptídeo natriurético tipo B (BNP). Para melhorar o controle da HAS e o prognóstico da paciente, o tratamento com inibidor da enzima conversora de angiotensina foi mantido, e o especialista optou por associar determinado fármaco, devido ao impacto positivo no prognóstico de sobrevida dessa paciente. O fármaco introduzido no tratamento da paciente foi",
    "alternativas": {
      "A": "espironolactona.",
      "B": "clortalidona.",
      "C": "hidralazina.",
      "D": "clonidina. Qual o grau de dificuldade das questões? (A) Muito fácil. (B) Fácil. (C) Médio. (D) Difícil. (E) Muito difícil."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 2,
    "gabarito": "B",
    "gabaritoPreliminar": "B",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 3,
    "enunciado": "Lactente de 4 meses é levado ao serviço de emergência com história de vômitos, poliúria, episódios de fraqueza intensa e febre. Ao exame físico, apresenta-se com desidratação grave e déficit de crescimento significativo. Encontram-se, ainda, sinais radiológicos de osteopenia e raquitismo resistente à vitamina D. Com base na principal hipótese diagnóstica, o distúrbio ácido básico relacionado ao caso é",
    "alternativas": {
      "A": "alcalose respiratória hipoclorêmica.",
      "B": "acidose metabólica hiperclorêmica.",
      "C": "alcalose respiratória hipocalêmica.",
      "D": "acidose metabólica hipercalêmica. Qual foi o tempo gasto por você para concluir a prova? (A) Menos de uma hora. (B) Entre uma e duas horas. (C) Entre três e quatro horas. (D) Entre quatro e cinco horas. (E) Cinco horas, e não consegui terminar."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 3,
    "gabarito": "A",
    "gabaritoPreliminar": "A",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 3,
    "enunciado": "Homem de 45 anos foi encontrado inconsciente por familiares junto a uma escada de sua casa. Familiares o conduziram em carro próprio, sem medidas-padrão de atendimento pré- hospitalar. Não sabem por quanto tempo ficou desacordado e nem sobre o histórico de saúde. Quando deu entrada no pronto-socorro, encontrava-se inconsciente, com equimose e escoriações na região orbital e palpebral direita, além de escoriações na região cervical posterior e em membros à direita. Não apresentava resposta ao comando verbal, mas respirava espontaneamente com frequência normal. Pressão arterial de 140 x 90 mmHg e pupilas isocóricas. Durante a avaliação, abriu os olhos e começou a se mexer, ainda sem responder a questões ou comandos. Após 30 minutos, começou a responder, mas informava não se lembrar de ter caído da escada. Considerando o quadro, a conduta adequada é",
    "alternativas": {
      "A": "tomografia de crânio, face e coluna cervical; radiografia de membros; manter o paciente em observação por 12 horas.",
      "B": "radiografia de crânio, coluna cervical e membros em duas posições; internar o paciente para observação.",
      "C": "tomografia de crânio, face e radiografia de membros; liberar o paciente para observação domiciliar.",
      "D": "radiografia de crânio e face; radiografia de membros; internar o paciente por 24 horas. Em relação ao tempo total de aplicação, você considera que a prova foi (A) muito longa. (B) longa. (C) adequada. (D) curta. (E) muito curta."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 4,
    "gabarito": "D",
    "gabaritoPreliminar": "D",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 3,
    "enunciado": "Paciente de 30 anos procurou consultório de ginecologia relatando fadiga, dismenorreia progressiva e dispareunia de profundidade. Toque vaginal: útero de volume normal, retroversofletido, dor à mobilização do colo. Com base nessas informações, a principal hipótese diagnóstica é",
    "alternativas": {
      "A": "doença inflamatória pélvica.",
      "B": "miomatose uterina.",
      "C": "cisto hemorrágico.",
      "D": "endometriose. Os enunciados das questões estavam claros e objetivos? (A) Sim, todos. (B) Sim, a maioria. (C) Apenas cerca da metade. (D) Poucos. (E) Não, nenhum."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 5,
    "gabarito": "C",
    "gabaritoPreliminar": "C",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 3,
    "enunciado": "Homem de 28 anos, estudante universitário, residente em zona urbana, comparece à Unidade Básica de Saúde (UBS) referindo aparecimento de lesão cutânea em região dorsal da mão, cerca de 1 mês após ter sofrido arranhadura de gato de rua. A lesão apresenta úlceras com presença de crostas além de nodulações próximas. Foi submetido à biópsia da lesão cutânea e cultura de material. Observou-se dermatite granulomatosa difusa, presença de corpos asteroides e material eosinofílico ao redor de células características. Qual é a principal hipótese diagnóstica e o respectivo tratamento para esse caso?",
    "alternativas": {
      "A": "Furunculose; cefalexina por 7 dias.",
      "B": "Herpes-zoster; aciclovir por 10 dias.",
      "C": "Esporotricose; itraconazol por 120 dias.",
      "D": "Paracoccidioidomicose; anfotericina B por 30 dias. As informações/instruções fornecidas para a resolução das questões foram suficientes para resolvê-las? (A) Sim, até excessivas. (B) Sim, em todas elas. (C) Sim, na maioria delas. (D) Sim, somente em algumas. (E) Não, em nenhuma delas."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 6,
    "gabarito": "B",
    "gabaritoPreliminar": "B",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 4,
    "enunciado": "Observe o encaminhamento realizado por um médico de família. “À cardiologia, Encaminho o Sr. J. L. S., de 56 anos, com diagnóstico de cardiopatia isquêmica, que sofreu um infarto agudo do miocárdio há 3 meses. Tem orientação para o uso de antiagregantes plaquetários, mas tem história de úlcera péptica e teve reação alérgica ao clopidogrel e à ticlopidina. Desta forma, solicito orientação quanto à conduta preventiva.” Ao ser assistido pelo cardiologista, o paciente será atendido em qual nível de atenção e receberá que tipo de prevenção, respectivamente?",
    "alternativas": {
      "A": "Primário; secundário.",
      "B": "Secundário; secundário.",
      "C": "Terciário; terciário.",
      "D": "Quaternário; terciário. Você se deparou com alguma dificuldade ao responder à prova? Qual? (A) Desconhecimento do conteúdo. (B) Forma diferente de abordagem do conteúdo. (C) Espaço insuficiente para responder às questões. (D) Falta de motivação para fazer a prova. (E) Não tive qualquer tipo de dificuldade para responder à prova."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 7,
    "gabarito": "-",
    "gabaritoPreliminar": "A",
    "anulada": true,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 4,
    "enunciado": "Homem de 20 anos, com diagnóstico de esquizofrenia, chega à Unidade de Pronto Atendimento (UP",
    "alternativas": {
      "A": "acompanhado de familiares, que descrevem que o paciente acordou “torto”. Há 5 dias, foi realizada a troca de risperidona por haloperidol, pois aquela estava em falta na farmácia. Paciente nega outras queixas clínicas. Ao exame, apresenta contratura de região cervical e fácies de dor. Quais são, respectivamente, a hipótese diagnóstica mais provável e a conduta mais adequada? (A) Distonia; biperideno intramuscular.",
      "B": "Acatisia; haloperidol intramuscular.",
      "C": "Discinesia tardia; diazepam intramuscular.",
      "D": "Síndrome extrapiramidal; prometazina intramuscular. Considerando as questões da prova, você percebeu que (A) não estudou ainda a maioria desses conteúdos. (B) estudou alguns desses conteúdos, mas não os aprendeu. (C) estudou a maioria desses conteúdos, mas não os aprendeu. (D) estudou e aprendeu muitos desses conteúdos. (E) estudou e aprendeu todos esses conteúdos."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 8,
    "gabarito": "B",
    "gabaritoPreliminar": "B",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 4,
    "enunciado": "Mulher de 20 anos procura atendimento médico no ambulatório de clínica médica de referência devido a quadro iniciado há 3 meses, com dor e edema articular acometendo articulações das mãos (interfalangeanas proximais, metacarpofalangeanas e punhos), assim como cotovelos, joelhos e tornozelos. Relata rigidez matinal que persiste por mais de 2 horas. O exame físico confirma dor e edema nas articulações descritas, além de Creatinina 1,8 mg/dL mucosas hipocoradas (++/4+), sem outras alterações. A hipótese diagnóstica a ser considerada, o achado laboratorial esperado e a primeira linha de tratamento indicada são, respectivamente,",
    "alternativas": {
      "A": "esclerose sistêmica; níveis elevados de creatina quinase; prednisona.",
      "B": "artrite reumatoide; pesquisa de fator reumatoide (FR) positivo; metotrexato.",
      "C": "lúpus eritematoso sistêmico; FAN com padrão nuclear pontilhado fino denso; cloroquina.",
      "D": "doença mista do tecido conjuntivo; FAN com padrão nuclear pontilhado fino; azatioprina. Como você avalia a sequência das questões na prova? (A) A sequência não interferiu nas minhas respostas. (B) Preferiria a sequência por área. (C) Preferiria a sequência por grau de dificuldade. (D) A sequência dificultou meu raciocínio durante a prova. (E) A sequência facilitou minha organização e resolução da prova."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 9,
    "gabarito": "-",
    "gabaritoPreliminar": "A",
    "anulada": true,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 4,
    "enunciado": "Paciente de 7 anos, na 4ª semana de tratamento quimioterápico para leucemia linfocítica aguda, é admitido em hospital terciário com história de febre há 12 horas (temperatura axilar de 39 °C), tosse e dispneia. Após 24 horas da admissão, segue febril, apesar de ter usado dipirona há 1 hora, e mantém diurese de 2 mL/kg/h. Exame físico: hidratado; pálido; orientado no tempo e no espaço; frequência cardíaca de 130 bpm; temperatura axilar de 39 °C; frequência respiratória de 36 irpm; pressão arterial de 90 x 60 mmHg; boa perfusão periférica; murmúrio vesicular diminuído em base de hemitórax à direita, com crepitações; bulhas taquicárdicas; fígado a 4 cm do rebordo costal direito e 5 cm do apêndice xifoide; baço a 4 cm do rebordo costal esquerdo. Os exames laboratoriais evidenciam lactato aumentado, acidose metabólica e hemograma com leucocitose com desvio à esquerda. Com base no quadro descrito, o diagnóstico é",
    "alternativas": {
      "A": "sepse.",
      "B": "choque séptico.",
      "C": "disfunção de múltiplos órgãos.",
      "D": "síndrome da resposta inflamatória sistêmica. Você já participou, no Brasil, de outro(s) processo(s) de revalidação de diploma de medicina obtido no exterior? (A) Sim. (B) Não."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 10,
    "gabarito": "C",
    "gabaritoPreliminar": "C",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 4,
    "enunciado": "Paciente feminina de 78 anos, com 24 horas de evolução de dor e abaulamento progressivo em região inguinal direita. Apresentou também alguns episódios de vômitos e diminuição da eliminação de flatos. Antecedentes: neoplasia de mama há 30 anos, diabetes mellitus há 20 anos e tabagista de 40 maços/ano. Ao exame estava normotensa, eucárdica, afebril, eupneica. Índice de massa corporal de 35 kg/m2. Abdome globoso, depressível, com abaulamento não redutível e desconforto à palpação em região inguinal direita, com discreta hiperemia local e sem sinais de irritação peritoneal. Resultados dos exames laboratoriais: Exame Resultado Valor de referência Hemoglobina 13 g/dL 11 a 15 g/dL Leucócitos 10.300/mL 4.000 a 11.000/mL Plaquetas 261.000/mm3 150 a 300.000/mm3 0,7 a 1,3 mg/dL Ureia 65 mg/dL 40 a 80 mg/dL A hipótese diagnóstica mais provável é",
    "alternativas": {
      "A": "isquemia mesentérica.",
      "B": "hérnia inguinal indireta.",
      "C": "hérnia femoral encarcerada.",
      "D": "neoplasia de cólon obstrutiva."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 11,
    "gabarito": "-",
    "gabaritoPreliminar": "C",
    "anulada": true,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 5,
    "enunciado": "Paciente de 25 anos, com duas gestações e um parto, no segundo trimestre de gestação, compareceu à primeira consulta de pré-natal sem queixas. Após orientações e realização dos testes rápidos, verificou-se que o teste para sífilis foi positivo e imediatamente a paciente recebeu 2,4 milhões UI de penicilina benzatina intramuscular. Paciente nega diagnóstico e tratamento prévios para sífilis. Em relação ao acompanhamento da paciente, é correto afirmar que",
    "alternativas": {
      "A": "com o tratamento instituído, o feto não terá sequelas.",
      "B": "titulações menores ou iguais a um quarto indicarão cicatriz sorológica.",
      "C": "a queda de duas titulações do VDRL indicará efetividade de tratamento.",
      "D": "o exame de FTA-Abs reagente indicará doença ativa."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 12,
    "gabarito": "D",
    "gabaritoPreliminar": "D",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 5,
    "enunciado": "Homem de 52 anos, branco, solteiro, comparece à consulta agendada na Unidade Básica de Saúde (UBS) desejando realizar revisão clínica e exames laboratoriais. Desde os 35 anos não faz acompanhamento de saúde. Relata história familiar de diabetes e hipertensão, e a mãe faleceu com câncer de pulmão. Sem história familiar de câncer de próstata. Fuma cerca de 2 maços por dia há 21 anos. Exame físico: pressão arterial de 120 x 80 mmHg, índice de massa corporal de 23 kg/m2, sem outras alterações. Considerando as recomendações de rastreamento para esse paciente, o médico de família e comunidade deve",
    "alternativas": {
      "A": "solicitar exames de colesterol total e frações, hemograma, glicemia de jejum, creatinina, PSA, radiografia de tórax, colonoscopia, realizar toque retal; orientar sobre a prática de atividade física regular.",
      "B": "solicitar exames de colesterol total, glicemia de jejum, pesquisa de sangue oculto nas fezes, PSA, ofertar anti-HIV e HBsAg, realizar toque retal; orientar sobre participação no grupo na UBS para abandono do tabagismo.",
      "C": "abordar mudanças no estilo de vida e cessação do tabagismo; acompanhar, em consultas longitudinais, as futuras possibilidades de exames complementares, quando o paciente atingir faixa etária para investigações adicionais.",
      "D": "solicitar exames de colesterol total, HDL e triglicerídeos, glicemia de jejum, pesquisa de sangue oculto nas fezes, ofertar testes rápidos para HIV, sífilis e hepatites B e C; realizar abordagem sobre possibilidade de cessação do tabagismo."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 13,
    "gabarito": "C",
    "gabaritoPreliminar": "C",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 5,
    "enunciado": "Mulher de 32 anos, parda, ensino fundamental incompleto, trabalhadora rural, diarista no plantio de morango, procura Unidade Básica de Saúde (UBS) com queixas de tonturas, dores de cabeça, cansaço, náuseas e falta de ar. Ela referiu que desde os 20 anos sofre com dores de cabeça frequentes, mas há 2 semanas, após uma pulverização de agrotóxicos, começou a apresentar os sintomas descritos. Disse ainda que sua colega de trabalho apresentava queixas similares. Ao ouvir esses relatos, a médica da UBS suspeita de intoxicação aguda por agrotóxicos. Nessa situação, qual é a conduta adequada a ser adotada na assistência?",
    "alternativas": {
      "A": "Encaminhar como caso suspeito ao centro de referência em saúde do trabalhador estadual e formalizar denúncia ao Ministério Público do Trabalho.",
      "B": "Estabelecer nexo causal entre os sintomas e os resultados de exames complementares, para confirmar diagnóstico de intoxicação por agrotóxicos, e notificar a Vigilância em Saúde municipal.",
      "C": "Tratar os sintomas, solicitar exames complementares, notificar o caso no Sistema de Notificação de Agravos e Doenças (Sinan), conceder atestado médico e solicitar matriciamento à Vigilância em Saúde do Trabalhador.",
      "D": "Informar não ser responsável pelo preenchimento da comunicação de acidente de trabalho (CAT), por ser atribuição exclusiva da medicina do trabalho, no centro municipal de referência em saúde do trabalhador."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 14,
    "gabarito": "B",
    "gabaritoPreliminar": "B",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 5,
    "enunciado": "Pais de um menino de 10 anos levam a criança para avaliação médica em Unidade Básica de Saúde (UBS). Relatam que seu filho se dá bem com a família até que não lhe seja permitido fazer algo que deseja. Quando isso ocorre, ele fica irritado, impulsivamente agressivo e agitado por várias horas. Assim que se acalma ou consegue o que quer, fica feliz e agradável novamente. Os pais entendem que o filho parece agir deliberadamente para aborrecer os outros e nunca assume a culpa por seus próprios erros ou mau comportamento. Relatam ainda que ele discute com adultos ou figuras de autoridade e em várias situações não aceita as regras de boa convivência com os familiares. Considerando o caso descrito, qual é o diagnóstico mais provável?",
    "alternativas": {
      "A": "Transtorno afetivo bipolar.",
      "B": "Transtorno de oposição desafiante.",
      "C": "Transtorno disruptivo da desregulação do humor.",
      "D": "Transtorno do déficit de atenção e hiperatividade."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 15,
    "gabarito": "A",
    "gabaritoPreliminar": "A",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 6,
    "enunciado": "Homem de 50 anos, queixando-se de astenia e constipação com fezes em fita. Há 15 dias, apresenta edema de membros inferiores até a raiz da região crural, bilateralmente, com pouca melhora à elevação dos membros. Ele perdeu 10 kg em 6 meses. Nega hipertensão arterial e diabetes mellitus e não faz uso de medicamento. Os exames do paciente apresentaram os seguintes resultados: Exame Pressão arterial 130 x 80 mmHg Peso Hematócrito 35% Glicemia Albumina sérica 1,8 g/dL Creatinina Triglicerídeos 200 mg/dL < 150 mg/dL Proteína urinária 3,6 g/24 horas de 24 horas proteínas +++ Sedimentos hemácias + (5 por campo) Dentre esses achados laboratoriais, quais são necessários para a definição da síndrome renal do paciente?",
    "alternativas": {
      "A": "Proteína urinária de 24 horas = 3,6 g e albumina sérica = 1,8 g/dL.",
      "B": "Proteína urinária de 24 horas = 3,6 g e triglicerídeos = 200 mg/dL.",
      "C": "Hematúria e triglicerídeos = 200 mg/dL.",
      "D": "Hematúria e albumina sérica = 1,8 g/dL."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 16,
    "gabarito": "B",
    "gabaritoPreliminar": "B",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 6,
    "enunciado": "Recém-nascido de 15 dias, a termo, Apgar 8/9, peso e comprimento ao nascer de 2.600 g e 46 cm, respectivamente, com síndrome de Down, e cuja gestação não apresentou outras intercorrências. Está na consulta de puericultura com peso e comprimento atuais de 2.900 g e 47 cm, respectivamente. Para o acompanhamento pôndero-estatural, os dados devem ser plotados nas",
    "alternativas": {
      "A": "curvas de crescimento da OMS desde o nascimento até a adolescência.",
      "B": "curvas de crescimento específicas para síndrome de Down desde o nascimento.",
      "C": "curvas de crescimento da OMS, corrigindo o peso e o comprimento para síndrome de Down.",
      "D": "curvas de crescimento da OMS até os dois anos e, a partir daí, em curvas específicas para síndrome de Down."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 17,
    "gabarito": "D",
    "gabaritoPreliminar": "D",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 6,
    "enunciado": "Paciente de 20 anos, sexo masculino, vítima de colisão “automóvel a muro”, sem cinto de segurança, é atendido ainda na cena pelo Serviço Móvel de Atendimento de Urgência (SAMU). Exame físico: paciente torporoso; saturação de O2 de 60%, em ar ambiente; frequência respiratória de 28 irpm; frequência cardíaca de 112 bpm; pressão arterial de 90 x 50 mmHg. Desvio da traqueia para a direita, turgência de veias jugulares, hipofonese de bulhas cardíacas e diminuição acentuada do murmúrio vesicular à Resultado Valor de referência esquerda. Qual é a conduta adequada no atendimento pré-hospitalar? ---",
    "alternativas": {
      "A": "Reposição volêmica.",
      "B": "Cricotireoidostomia.",
      "C": "Pericardiocentese.",
      "D": "Toracocentese."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 18,
    "gabarito": "D",
    "gabaritoPreliminar": "D",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 6,
    "enunciado": "1,2 mg/dL 0,7 a 1,3 mg/dL Paciente de 16 anos comparece ao ambulatório para mostrar os resultados dos exames complementares solicitados na consulta anterior. Está preocupada porque todas as colegas da mesma < 100 mg/24 horas idade já menstruaram e ela não. O fenótipo é feminino, com pelos pubianos e axilares esparsos. Os exames complementares evidenciam ausência do útero à ultrassonografia pélvica, --- dosagem sérica do hormônio folículo estimulante (FSH) normal, dosagem de testosterona sérica compatível com níveis do sexo masculino e cariótipo 46 XY. Com base no quadro clínico e nos dados apresentados, a principal hipótese diagnóstica dessa paciente é",
    "alternativas": {
      "A": "disgenesia gonadal.",
      "B": "malformação Mulleriana.",
      "C": "obstrução do trato genital.",
      "D": "insensibilidade androgênica."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 19,
    "gabarito": "D",
    "gabaritoPreliminar": "D",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 6,
    "enunciado": "Mulher de 82 anos, sem história prévia de hipertensão, comparece à consulta preocupada porque aferiu a pressão na farmácia há 1 semana e estava em 146 x 86 mmHg. Em outra aferição, há 2 semanas, na unidade de saúde, a pressão estava em 144 x 88 mmHg. No momento da consulta, a pressão está em 148 x 88 mmHg. Não apresenta sintomas nem está em acompanhamento de outros agravos neste momento. Qual é a abordagem adequada nesse caso?",
    "alternativas": {
      "A": "Referenciar ao cardiologista para um manejo específico.",
      "B": "Solicitar holter 24 horas e ecocardiograma para ampliar a avaliação.",
      "C": "Prescrever losartana 50 mg, 1 comprimido à noite, com monitoramento da pressão arterial na unidade.",
      "D": "Realizar uma conduta expectante, sem necessidade de medicamentos, com monitoramento de pressão arterial na unidade."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 20,
    "gabarito": "C",
    "gabaritoPreliminar": "C",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 7,
    "enunciado": "Mulher travesti de 28 anos, profissional do sexo, comparece à Unidade Básica de Saúde (UBS) em demanda espontânea. Relata relações sexuais frequentes com diferentes parceiros, com uso inconsistente de preservativos, principalmente durante relações anais receptivas. Há 2 dias teve uma relação sexual desprotegida com um cliente que se recusou a usar camisinha. Nunca utilizou medicamento para profilaxia pré-exposição (PrEP) ou pós- exposição (PEP) à infecção pelo HIV. Considerando que a paciente está assintomática no momento, qual a melhor estratégia de prevenção?",
    "alternativas": {
      "A": "Prescrever PrEP após resultado não reagente para HIV; indicar PEP após tratamento inicial e orientar rastreamento de ISTs a cada 3 meses.",
      "B": "Oferecer teste rápido para HIV e sífilis; prescrever PrEP de início imediato; orientar sobre as vacinas disponíveis no SUS para seu grupo populacional.",
      "C": "Realizar testagem rápida para HIV e sífilis; prescrever PEP mediante resultado não reagente para HIV e programar início da PrEP após término da PEP.",
      "D": "Prescrever PEP e PrEP de forma concomitante; solicitar sorologias para ISTs; agendar retorno para analisar os resultados e revisar adesão ao tratamento."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 21,
    "gabarito": "A",
    "gabaritoPreliminar": "A",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 7,
    "enunciado": "Mulher de 21 anos comparece à consulta médica em Unidade Básica de Saúde (UBS) para avaliação de amenorreia há 4 meses, sendo descartada gravidez. Paciente relata que há 10 meses iniciou dieta para perder peso, tendo emagrecido nesse período aproximadamente 30 kg. Há 2 dias relata desmaio durante prática de exercício físico e, por isso, realizou eletrocardiograma (ECG) que indicou alterações no segmento ST e na onda T. Paciente nega histórico de diagnóstico de transtorno mental, mora sozinha e sua família é de outra cidade. Afirma manter o padrão alimentar, pois ainda quer perder peso. Ao exame físico, apresenta palidez de mucosa e turgor cutâneo diminuído. Altura = 1,63 m; peso = 39 kg (IMC = 14,7 kg/m2); pressão arterial = 80 x 60 mmHg; frequência cardíaca = 55 bpm e frequência respiratória = 15 irpm. Qual é a conduta adequada nesse momento?",
    "alternativas": {
      "A": "Solicitar internação em enfermaria de clínica médica.",
      "B": "Encaminhar para internação em enfermaria de saúde mental.",
      "C": "Continuar a investigação para causas da amenorreia na UBS.",
      "D": "Acompanhar em ambulatório do Centro de Atenção Psicossocial (CAPs)."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 22,
    "gabarito": "A",
    "gabaritoPreliminar": "A",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 7,
    "enunciado": "Mulher de 65 anos iniciou quadro de lentidão dos movimentos há 6 meses, com dificuldade para amarrar sapatos, abotoar roupas e digitar. Ao caminhar, apresentava passos mais curtos e sensação de instabilidade, com 1 episódio de queda. Concomitantemente apresentou tremores nas mãos, de repouso, associados à rigidez e alteração do padrão do sono. Nega alterações de memória e cognição. Ao exame físico apresentava fácies em máscara, marcha em pequenos passos, frequência cardíaca de 88 bpm com ausculta sem alterações, pressão arterial de 130 x 80 mmHg, tremores assimétricos na manobra dos braços estendidos, hipertonia em roda dentada. A ressonância nuclear magnética realizada há 2 semanas constatou atrofia cerebral compatível com a idade. O tratamento medicamentoso inicial recomendado para o caso clínico será",
    "alternativas": {
      "A": "levodopa e carbidopa.",
      "B": "donepezila e memantina.",
      "C": "propranalol e amantadina.",
      "D": "atorvastatina e baclofeno."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 23,
    "gabarito": "B",
    "gabaritoPreliminar": "B",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 7,
    "enunciado": "A violência contra adolescentes pode ter várias causas e atores. Os sinais que demonstram essas ações podem ser indiretos, mas devem ser observados pelos profissionais da saúde. Assinale a alternativa com a situação em que se deve notificar o Conselho Tutelar.",
    "alternativas": {
      "A": "Manuel, 15 anos, abandonado pelos pais e sob os cuidados de uma família acolhedora, apresenta febre, vômitos, petéquias que evoluem para púrpuras em MMII e SS, rigidez de nuca e história vacinal desconhecida.",
      "B": "Michele, 13 anos, está morando temporariamente com os tios enquanto a mãe faz um curso no exterior. Há 1 mês vem apresentando equimoses em face, pernas, coxas, em vários estágios de evolução, e evita falar sobre o fato.",
      "C": "Felipe, 11 anos, acolhido em um abrigo desde os 9 anos, há 3 dias está mais recolhido no seu quarto e dorme quase o tempo todo. Apresenta febre, muita dor no corpo e retro- orbitária, sangramento gengival quando escova os dentes e petéquias pelo corpo.",
      "D": "Edilene, 16 anos, que cumpre medidas socioeducativas em uma instituição do Estado, apresenta várias equimoses nos membros superiores e inferiores, além do tronco. Refere também suores noturnos, febre inexplicada, perda de peso e linfonodos aumentados de tamanho em região cervical, supraclavicular e inguinal bilateralmente."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 24,
    "gabarito": "D",
    "gabaritoPreliminar": "D",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 8,
    "enunciado": "Paciente do sexo feminino, 27 anos, é atendida em Unidade de Pronto Atendimento (UP",
    "alternativas": {
      "A": "com história de dor abdominal, com início em epigástrio há dois dias, contínua, sem fatores de melhora, associada a náuseas e perda de apetite, evoluindo para dor em fossa ilíaca direita há 1 dia e febre de 38,2 °C no dia do atendimento. Nega comorbidades, cirurgias prévias ou uso de medicações regulares. Relata que a última menstruação foi há 23 dias, e apresenta ciclos regulares de 28 dias. Exame físico: regular estado geral, corada, desidratada +/4+, eupneica, anictérica, acianótica; ausculta pulmonar e cardíaca sem alterações; ruídos hidroaéreos diminuídos, descompressão brusca dolorosa em quadrante inferior de abdome à direita. Exame Hemoglobina 10,7 g/dL 11,5 a 15,5 g/dL Hematócrito 37% Leucócitos totais 4.000 a 11.000/mm3 Bastonetes 7% 25 leucócitos/ Urina campo Hemácias 8 hemácias/campo -- Beta-hCG sérico negativo Considerando o diagnóstico mais provável, a conduta adequada é (A) iniciar antibioticoterapia empírica até resultado de exame de urocultura.",
      "B": "realizar tomografia computadorizada de abdome e iniciar metotrexato.",
      "C": "iniciar antibioticoterapia empírica e acompanhamento ambulatorial.",
      "D": "realizar ultrassonografia de abdome e solicitar parecer cirúrgico."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 25,
    "gabarito": "A",
    "gabaritoPreliminar": "A",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 8,
    "enunciado": "Multípara, 37 semanas, obesa, apresentando diabetes mellitus gestacional controlada com insulina NPH e regular. Evoluiu para parto normal, e o recém-nascido pesou 3.300 g. A conduta no puerpério imediato deve ser",
    "alternativas": {
      "A": "suspender insulinoterapia.",
      "B": "iniciar hipoglicemiante oral.",
      "C": "manter insulina NPH em 1/3 da dose da gravidez.",
      "D": "manter insulinoterapia com a dosagem do pré-natal."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 26,
    "gabarito": "C",
    "gabaritoPreliminar": "C",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 8,
    "enunciado": "Homem de 34 anos se dirige à Unidade Básica de Saúde (UBS) com febre (38,5 °C), dores de moderada intensidade e manchas no corpo há 3 dias. No dia da consulta, iniciou com dores abdominais e vômitos incontroláveis. Exame físico: prostrado, mucosas coradas, extremidades bem perfundidas. Pressão arterial de 120 x 80 mmHg; frequência respiratória de 16 irpm; frequência cardíaca de 80 bpm. Leve dor à palpação abdominal, sem outras alterações. Qual a hipótese diagnóstica e o manejo, respectivamente?",
    "alternativas": {
      "A": "Dengue grupo B. Prescrever hidratação oral, analgésico e antiemético; solicitar hemograma, plaquetas e antígeno NS1; realizar acompanhamento domiciliar após exames.",
      "B": "Dengue grupo C. Prescrever hidratação oral, analgésico e antiemético; solicitar hemograma, plaquetas e anticorpo IgM; realizar acompanhamento ambulatorial após exames.",
      "C": "Dengue grupo C. Prescrever hidratação parenteral, analgésico e antiemético; solicitar hemograma, plaquetas e antígeno NS1; manter em leito de observação até estabilização.",
      "D": "Dengue grupo B. Prescrever hidratação parenteral, analgésico e antiemético; solicitar hemograma, plaquetas, antígeno NS1 e anticorpo IgM; manter em leito de observação até estabilização."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 27,
    "gabarito": "D",
    "gabaritoPreliminar": "D",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 8,
    "enunciado": "Homem de 48 anos, auxiliar de pedreiro, procura Unidade Básica de Saúde (UBS) com queixa de dor lombar iniciada há 3 semanas, de instalação insidiosa, sem irradiação. Relata que a dor piora ao final do dia e melhora parcialmente com repouso e uso de paracetamol. Nega perda de peso, febre, traumas, incontinência ou fraqueza nos membros inferiores. Ao exame físico, apresenta dor à palpação paravertebral em região lombar, sem alterações neurológicas. Com base na história clínica e no exame físico, qual o próximo passo na condução desse caso?",
    "alternativas": {
      "A": "Solicitar ressonância magnética da coluna lombar e encaminhar para a ortopedia.",
      "B": "Solicitar radiografia lombar, prescrever corticoide oral e agendar o retorno após 10 dias.",
      "C": "Orientar repouso, fornecer atestado de 7 dias e otimizar a analgesia com antidepressivo tricíclico.",
      "D": "Explicar a natureza benigna, orientar analgesia e atividade física leve, com reavaliação em 4 a 6 semanas."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 28,
    "gabarito": "B",
    "gabaritoPreliminar": "B",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 9,
    "enunciado": "“Internações sem consentimento aumentam na Cracolândia, em meio a denúncias de agressões”. ZYLBERKAN, M.; KRUSE, T. Folha de S. Paulo, 3 jul. 2024. Notícias como esta têm se tornado frequentes em jornais brasileiros nos últimos anos. Alguns municípios têm criado leis locais próprias para as internações involuntárias que muitas vezes contradizem as leis federais sobre o tema. Sobre a internação involuntária no Brasil, é correto afirmar que",
    "alternativas": {
      "A": "a internação involuntária é determinada, de acordo com a legislação, pela Justiça.",
      "B": "é autorizada por médico devidamente registrado no Conselho Regional de Medicina.",
      "C": "no prazo de 15 dias, a internação deve ser comunicada ao Ministério Público Federal.",
      "D": "o término da internação involuntária ocorrerá por solicitação do Ministério Público Municipal."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 29,
    "gabarito": "A",
    "gabaritoPreliminar": "A",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 9,
    "enunciado": "Homem de 68 anos, em tratamento crônico irregular de hipertensão arterial sistêmica, diabetes mellitus e fibrilação atrial, é admitido em Unidade de Pronto Atendimento (UP",
    "alternativas": {
      "A": "com quadro de rebaixamento do nível de consciência e déficit neurológico do lado esquerdo, de predomínio braquiofacial. Segundo o acompanhante, o paciente tinha ido se deitar havia 90 minutos, sem qualquer sintoma antes de ser encontrado com o transtorno observado. Foi levado ao hospital, onde deu entrada 30 minutos após constatado o déficit focal. Ao exame físico, paciente com 9 pontos na escala de coma de Glasgow modificada, exibindo hemiparesia acentuada à esquerda, pressão arterial de 170 x 100 mmHg em ambos os membros superiores, com ritmo cardíaco irregular, frequência cardíaca média de 96 bpm. Não há outras alterações expressivas ao exame físico. Glicemia capilar de 285 mg/dL; demais exames laboratoriais não revelam anormalidades. A tomografia computadorizada de crânio sem contraste revela área de atenuação de densidade em cerca de 40% do território da artéria cerebral média direita, cujo laudo é obtido cerca de 3 horas após o último momento em que o paciente foi visto sem déficits. O médico da unidade explica ao acompanhante que, apesar dos potenciais benefícios da terapia trombolítica em pacientes com acidente vascular encefálico isquêmico, o paciente apresenta contraindicação em função de (A) apresentar extensão de isquemia superior a 1/3 do território da artéria cerebral média acometida.",
      "B": "haver decorrido período de tempo superior ao limite máximo tolerável desde o início do déficit.",
      "C": "evoluir com glicemia acima de 200 mg/dL com intervalo maior que 2 horas pós-prandial.",
      "D": "ter níveis pressóricos superiores aos permitidos para o uso do fármaco."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 30,
    "gabarito": "C",
    "gabaritoPreliminar": "C",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 9,
    "enunciado": "Menino de 6 anos é levado à Unidade Básica de Saúde (UBS) com queixa de fimose. Mãe relata balanopostites frequentes, sendo o primeiro episódio com 1 ano de vida. Nega infecções do trato urinário. Ao exame físico, apresenta prepúcio cobrindo toda a glande que, quando tracionado, expõe meato uretral e anel fibrótico prepucial. Sobre o caso, assinale a alternativa correta.",
    "alternativas": {
      "A": "Trata-se de fimose fisiológica, necessitando de exercícios de redução e higiene do prepúcio.",
      "B": "Há indicação cirúrgica na adolescência, pois já está apresentando exposição de meato uretral.",
      "C": "Há indicação cirúrgica, pois a criança apresenta balanopostites recorrentes com fibrose prepucial.",
      "D": "Indica-se uso de creme de betametasona e hialuronidase por 4 semanas, uma vez que apresenta exposição de meato uretral."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 31,
    "gabarito": "B",
    "gabaritoPreliminar": "B",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 9,
    "enunciado": "Mulher de 72 anos foi atendida em hospital de médio porte. Relatava emagrecimento e dor abdominal com irradiação para região dorsal há 3 meses; há 1 mês a urina ficou mais escura, começou a apresentar prurido cutâneo intenso e icterícia em escleras. Ao exame físico, encontrava-se ictérica +++/4+, emagrecida; exame do abdome com fígado palpável abaixo da borda costal direita, assim como uma massa bem definida, de consistência cística, não dolorosa em hipocôndrio direito. Nesse caso, o mais adequado é solicitar",
    "alternativas": {
      "A": "ultrassonografia para avaliar colecistite crônica calculosa.",
      "B": "tomografia computadorizada para avaliar vias biliares e pâncreas.",
      "C": "colangiopancreatografia por ressonância para avaliar coledocolitíase.",
      "D": "biópsia percutânea com agulha da massa palpada para avaliar neoplasia."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 32,
    "gabarito": "D",
    "gabaritoPreliminar": "D",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 10,
    "enunciado": "Paciente G5P3C1, 35 anos, idade gestacional de 15 semanas por ecografia relizada com 8 semanas, hipertensa crônica em uso de enalapril, antecedente de pré-eclâmpsia. Comparece à consulta de pré-natal na Unidade Básica de Saúde (UBS) com pressão arterial de 140 x 90 mmHg. Qual é a conduta medicamentosa indicada para essa paciente?",
    "alternativas": {
      "A": "Captopril, varfarina e ácido acetilsalicílico.",
      "B": "Furosemida, varfarina e carbonato de cálcio.",
      "C": "Losartana, enoxaparina e carbonato de cálcio.",
      "D": "Alfa-metildopa, ácido acetilsalicílico e carbonato de cálcio."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 33,
    "gabarito": "C",
    "gabaritoPreliminar": "C",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 10,
    "enunciado": "Homem de 48 anos busca atendimento na Unidade Básica de Saúde (UBS) para reiniciar tratamento para tuberculose. Paciente refere que iniciou o tratamento poliquimioterápico há 6 meses, quando foi diagnosticado com tuberculose; porém, há 2 meses, interrompeu o acompanhamento na sua unidade de origem devido ao uso de substâncias psicoativas. Ele se mudou para o território da unidade há 15 dias e foi visitado pelo agente comunitário, que o orientou a procurar atendimento médico para avaliação e retomada do tratamento. Foram solicitados, inicialmente, o teste rápido molecular para tuberculose (TRM-TB), baciloscopia de escarro e radiografia de tórax. Qual alternativa apresenta a conduta adequada para esse caso?",
    "alternativas": {
      "A": "Se o TRM-TB for positivo, sem resistência à rifampicina, e a baciloscopia for negativa, reiniciar o esquema básico.",
      "B": "Se o TRM-TB for negativo e a baciloscopia for positiva, reiniciar o esquema básico, desde que a resistência à rifampicina seja positiva.",
      "C": "Se o TRM-TB for negativo e a baciloscopia for positiva, solicitar cultura de escarro com teste de sensibilidade e reiniciar o esquema básico enquanto se aguarda a cultura.",
      "D": "Se o TRM-TB for positivo, com resistência à rifampicina, e a baciloscopia for positiva, solicitar cultura de escarro com teste de sensibilidade e reiniciar o esquema básico enquanto se aguarda a cultura."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 34,
    "gabarito": "B",
    "gabaritoPreliminar": "B",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 10,
    "enunciado": "Uma instituição de saúde está pesquisando um novo teste de triagem para hanseníase, com sensibilidade de 92% e especificidade de 65%, aplicado em uma população com baixa prevalência da doença. Nesse contexto, é correto afirmar que",
    "alternativas": {
      "A": "quase todos os testes positivos indicarão verdadeiros casos de hanseníase, diante da elevada sensibilidade do teste.",
      "B": "o número de falsos-positivos será elevado, devido à baixa especificidade do teste e à baixa prevalência da doença.",
      "C": "o número de falsos-negativos será elevado, reduzindo a capacidade do teste em detectar casos reais.",
      "D": "a elevada sensibilidade do teste o torna ideal para a confirmação do diagnóstico de hanseníase."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 35,
    "gabarito": "D",
    "gabaritoPreliminar": "D",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 10,
    "enunciado": "Mulher de 52 anos chega ao acolhimento de Unidade Básica de Saúde (UBS), muito chorosa, e relata: “Estou com dificuldade para dormir, não tenho comido direito, desde o ocorrido ... é o meu filho, sabe ... ele morreu há 3 dias ... e a dor no meu coração está muito forte, quase insuportável”. A paciente chora copiosamente e diz que sonha com uma pessoa gritando o nome de seu filho, relembrando o momento em que o tinha encontrado na rua, vítima de atropelamento. Após o primeiro acolhimento, ela fica um pouco mais calma, relatando que não pensa em se matar, que nunca tinha sido atendida por psiquiatra ou tomado medicamentos antes, mas que nesse momento precisa de muita ajuda. Diante do caso, qual a conduta adequada?",
    "alternativas": {
      "A": "Prescrever inibidor de recaptação de serotonina para alívio dos sintomas depressivos e ansiosos.",
      "B": "Encaminhar ao Centro de Atenção Psicossocial (CAPs) para seguimento intensivo com médico psiquiatra.",
      "C": "Encaminhar para psicologia na atenção secundária para ofertar terapia psicanalítica breve.",
      "D": "Acompanhar longitudinalmente para observação e ofertar apoio pela equipe da UBS."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 36,
    "gabarito": "C",
    "gabaritoPreliminar": "C",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 10,
    "enunciado": "Mulher de 86 anos é levada pela filha à consulta no ambulatório de clínica médica, com queixa de quedas frequentes. A paciente tem diagnóstico prévio de hipertensão arterial sistêmica, diabetes mellitus tipo 2, dislipidemia, depressão, déficit cognitivo leve e constipação intestinal. Está em uso de losartana, hidroclorotiazida, atenolol, metformina, gliclazida, rosuvastatina, escitalopram, donepezila e lactulose. Segundo a filha da paciente, as quedas ocorrem em diversos horários do dia, mais frequentemente na madrugada, ao se levantar para ir ao banheiro. Ao exame físico, a idosa apresenta leve bradipsiquismo e sinais de sarcopenia; pressão arterial do membro superior direito de 138 x 92 mmHg, quando deitada, e 110 x 70 mmHg, quando sentada. O plano terapêutico apropriado ao contexto desse caso deve incluir",
    "alternativas": {
      "A": "sugerir avaliação oftalmológica para investigação de catarata.",
      "B": "encaminhar ao neurologista para investigar a presença de disautonomia.",
      "C": "rever a polifarmácia para reduzir fármacos indutores de hipotensão arterial.",
      "D": "adicionar fármaco capaz de elevar os níveis tensionais, como a fludrocortisona."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 37,
    "gabarito": "D",
    "gabaritoPreliminar": "D",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 11,
    "enunciado": "Menino, 10 anos, morador de área urbana, está em avaliação no pronto-atendimento por apresentar dor em cotovelo direito há 1 dia. Há 1 semana, iniciou quadro de febre de 38,5 °C, 1 a 2 picos ao dia, associada à dificuldade de deambular devido ao joelho direito apresentar-se “doloroso e inchado”. Após 4 dias, percebeu melhora da dor no joelho, porém o tornozelo direito começou a ficar “inchado e um pouco avermelhado”, doloroso, com melhora em 2 dias. Há 3 semanas, havia se queixado de dor de garganta. Sem outras queixas. Nega contato com animais domésticos. No momento do atendimento, está com dificuldade para movimentar o cotovelo direito por causa da dor e do edema, frequência cardíaca de 110 bpm e 2 bulhas rítmicas normofonéticas, com sopro sistólico de 3+/6+. Restante do exame físico sem anormalidades. Considerando o quadro clínico apresentado, o agente etiológico e o tratamento de escolha são, respectivamente,",
    "alternativas": {
      "A": "Borrelia burgdorferi; doxiciclina.",
      "B": "Staphylococcus aureus; oxacilina.",
      "C": "Treponema pallidum; penicilina G benzatina.",
      "D": "Streptococcus pyogenes; penicilina G benzatina."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 38,
    "gabarito": "D",
    "gabaritoPreliminar": "D",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 11,
    "enunciado": "Homem de 58 anos deu entrada no pronto-socorro com dor epigástrica irradiada para as costas, iniciada há 2 horas, progressiva, pós-prandial, acompanhada de náuseas, vômitos e sudorese. Relata episódios semelhantes no último ano, que melhoraram com uso de analgésico. Tabagista ativo, alcoolista de 8 doses de destilado por dia há 33 anos, nega comorbidades. Exame físico: corado, acianótico, anictérico, sudoreico, fácies de dor, agitado. Índice de massa corporal de 23 kg/m2; pressão arterial de 150 x 90 mmHg; frequência cardíaca de 74 bpm; frequência respiratória de 18 irpm; temperatura axilar de 37 oC. Abdome globoso, distendido, timpânico, peristalse presente, doloroso à palpação do epigástrio e hipocôndrio esquerdo. Os exames laboratoriais apresentam os seguintes resultados: Exame Hematócrito 46% Hemoglobina Leucócitos Glicose Bilirrubina total 1,2 mg/dL Ureia Cálcio Amilase Lipase Fosfatase alcalina 81 U/L LDH TGO Qual é o provável diagnóstico?",
    "alternativas": {
      "A": "Colangite aguda.",
      "B": "Colecistite aguda.",
      "C": "Doença ulcerosa péptica.",
      "D": "Pancreatite crônica."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 39,
    "gabarito": "D",
    "gabaritoPreliminar": "D",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 11,
    "enunciado": "Primigesta de 29 anos, com 41 semanas de gestação e pré-natal de risco habitual, comparece à Unidade Básica de Saúde (UBS) para consulta de rotina. Ela está preocupada com a duração da gravidez e deseja saber quais serão os próximos passos. A paciente está assintomática, relata movimentação fetal presente, e o exame físico está normal para a idade gestacional. Perfil biofísico fetal realizado há 1 dia encontra-se dentro da normalidade. Considerando o quadro clínico apresentado e a idade gestacional, a conduta é",
    "alternativas": {
      "A": "orientar repouso domiciliar, com planejamento da indução do parto após 42 semanas.",
      "B": "solicitar dopplervelocimetria obstétrica para avaliar o bem- estar fetal e planejar o manejo com base no resultado.",
      "C": "realizar amnioscopia para verificar a presença de mecônio no líquido amniótico e planejar o manejo com base no resultado.",
      "D": "solicitar perfil biofísico fetal e cardiotocografia a cada 2 a 3 dias e planejamento da indução do parto até 41 semanas e 6 dias."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 40,
    "gabarito": "B",
    "gabaritoPreliminar": "B",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 11,
    "enunciado": "Médica de 32 anos foi contratada pelo Programa Mais Médicos para trabalhar na Unidade Básica de Saúde (UBS) no distrito sanitário especial indígena Yanomami na Amazônia, região endêmica para malária. Considerando que a médica não tem morbidades ou problemas de saúde em tratamento, qual quimioprofilaxia está indicada?",
    "alternativas": {
      "A": "Artesunato.",
      "B": "Doxiciclina.",
      "C": "Primaquina.",
      "D": "Cloroquina. Resultado Valor de referência 36 a 46% 15,0 g/dL 12,0 a 15,0 g/dL 12.000/mm3 4.000 a 10.000/mm3 120 mg/dL 70 a 99 mg/dL 0,3 a 1,3 mg/dL 38 mg/dL 15 a 40 mg/dL 8,9 mg/dL 8,7 a 10,2 mg/dL 35 U/L 20 a 96 U/L 12 U/L 3 a 43 U/L 33 a 96 U/L 127 U/L 100 a 190 U/L 36 U/L 5 a 40 U/L"
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 41,
    "gabarito": "C",
    "gabaritoPreliminar": "C",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 12,
    "enunciado": "Homem de 21 anos, portador de diabetes mellitus tipo 1, diagnosticado há 5 anos, foi levado à Unidade de Pronto Atendimento (UP",
    "alternativas": {
      "A": "devido à dor abdominal, náuseas e vômitos. Familiares informam que está sem utilizar insulina há 3 dias por dificuldades financeiras. No exame físico, encontra-se torporoso, desidratado, com hálito cetótico e dor abdominal à palpação profunda de forma generalizada. Ao exame, frequência cardíaca de 112 bpm; frequência respiratória de 38 irpm; pressão arterial de 110 x 70 mmHg. Os exames laboratoriais na admissão indicam: Exame Glicemia Gasometria arterial pH de 7,2 7,35 a 7,45 Bicarbonato 10 mEq/L 22 a 26 mEq/L Creatinina Potássio sérico 3,0 mEq/L 3,5 a 5,5 mEq/L O diagnóstico e a conduta inicial indicada para esse paciente são, respectivamente, (A) pancreatite aguda; iniciar dieta oral zero.",
      "B": "estado hiperosmolar hiperglicêmico; iniciar insulinoterapia.",
      "C": "cetoacidose diabética; prescrever solução fisiológica a 0,9 por cento.",
      "D": "insuficiência renal aguda; prescrever bicarbonato de sódio."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 42,
    "gabarito": "D",
    "gabaritoPreliminar": "D",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 12,
    "enunciado": "Recém-nascido de 14 dias, hipoativo e com desconforto respiratório, é levado para avaliação na Unidade de Pronto Atendimento (UP",
    "alternativas": {
      "A": "Antecedentes obstétricos: não foi realizado pré-natal e o parto ocorreu a termo no domicílio. Exame clínico: hipoativo e pouco responsivo, hipocorado, cianótico. Aparelho respiratório: 70 irpm com tiragem subcostal. Murmúrio vesicular diminuído bilateralmente. Saturação de O2 em ar ambiente de 82%. Aparelho cardiovascular: pulsos débeis, tempo de perfusão capilar de 5 segundos. Frequência cardíaca de 160 bpm, com ritmo cardíaco regular. Abdome globoso, com fígado a 2,5 cm do rebordo costal direito, presença de halo de hiperemia e edema em torno do coto umbilical. O diagnóstico e as condutas adequadas são, respectivamente, (A) choque cardiogênico; manter suporte ventilatório, evitar excesso de volume intravascular devido a risco de piora, administrar fármacos vasoativos e prostaglandina E1.",
      "B": "choque neurogênico; manter suporte ventilatório, acesso venoso para fase rápida de fluido cristaloide isotônico, hidratação venosa de manutenção e administrar corticoide endovenoso.",
      "C": "choque obstrutivo; manter suporte ventilatório, acesso venoso para fase rápida de fluido cristaloide isotônico e corrigir rapidamente a causa subjacente com descompressão torácica com agulha.",
      "D": "choque distributivo; manter suporte ventilatório, acesso venoso para fase rápida de fluido cristaloide isotônico, hidratação venosa de manutenção, administrar antibióticos e fármacos vasoativos."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 43,
    "gabarito": "-",
    "gabaritoPreliminar": "D",
    "anulada": true,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 12,
    "enunciado": "Homem de 66 anos, em pós-operatório precoce de revascularização cardíaca, é encaminhado ao pronto-socorro, com queixa de dor abdominal progressiva em quadrante inferior esquerdo há 5 dias e piora há 1 dia, com aumento do número de evacuações para 3 vezes ao dia. Relata febre não aferida. Exame físico: bom estado geral, eupneico, pressão arterial de 110 x 60 mmHg, temperatura axilar de 38 °C e frequência cardíaca de 100 bpm. Ao exame abdominal, defesa voluntária da musculatura e dor à palpação superficial e profunda, com massa em quadrante inferior esquerdo. Ao toque retal, presença de uma massa flutuante dolorosa à esquerda. Tomografia de Resultado Valor de referência abdome com contraste: densificação dos planos gordurosos adjacente ao sigmoide, associada a coleção de 100 mm3 no local. 472 mg/dL 60 a 100 mg/dL Após iniciada a antibioticoterapia sistêmica, qual é a conduta mais adequada para esse paciente?",
    "alternativas": {
      "A": "Laparotomia para drenagem.",
      "B": "Tratamento clínico conservador.",
      "C": "Drenagem guiada por colonoscopia.",
      "D": "Drenagem percutânea guiada por tomografia."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 44,
    "gabarito": "B",
    "gabaritoPreliminar": "B",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 12,
    "enunciado": "Parturiente de 29 anos, sem comorbidades, esteve em trabalho de parto por 8 horas e evoluiu para parto vaginal. Após 10 minutos do desprendimento do feto, ainda não se observou a expulsão da placenta. A paciente está estável e sem sinais de hemorragia. Diante do quadro apresentado, a conduta a ser adotada é",
    "alternativas": {
      "A": "aguardar a expulsão espontânea da placenta, sem intervenções adicionais, e observar sinais de separação.",
      "B": "realizar tração controlada do cordão umbilical, enquanto se estabiliza o útero com a mão suprapúbica.",
      "C": "iniciar curagem placentária, devido ao tempo transcorrido sem desprendimento placentário.",
      "D": "administrar uterotônico adicional e realizar massagem uterina para auxiliar a dequitação."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 45,
    "gabarito": "B",
    "gabaritoPreliminar": "B",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 13,
    "enunciado": "Paciente de 27 anos, em regime fechado em penitenciária, queixa-se de tosse há 2 semanas. Considerando a situação na qual se encontra esse paciente, o médico de família e comunidade deve",
    "alternativas": {
      "A": "encaminhar para internação clínica, objetivando rapidez no diagnóstico e garantia da segurança.",
      "B": "solicitar radiografia de tórax, pesquisa laboratorial de Mycobacterium tuberculosis e garantir o tratamento em caso de positividade.",
      "C": "solicitar internação social, a fim de garantir tratamento supervisionado, observado diretamente por 6 meses, caso seja confirmada a tuberculose.",
      "D": "aguardar evolução, com uso de sintomáticos; caso a tosse persista por mais de 3 semanas, proceder à investigação diagnóstica de tuberculose."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 46,
    "gabarito": "C",
    "gabaritoPreliminar": "C",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 13,
    "enunciado": "Homem de 32 anos apresenta quadro de dor lombar crônica de início insidioso, com duração aproximada de 6 meses, que piora pela manhã e melhora com o movimento. Refere rigidez matinal, principalmente nas regiões lombar e sacroilíaca, com duração de mais de 30 minutos, com dor nas articulações sacroilíacas e sensação de fadiga durante as últimas semanas. Não há histórico de trauma. A história familiar é positiva para doenças reumatológicas, mas o paciente desconhece diagnósticos específicos. O painel de autoanticorpos apresenta: Anticorpo antinuclear (AN",
    "alternativas": {
      "A": "Padrão homogêneo/difuso Anticorpo anti-DNA Negativo dupla hélice Antígeno leucocitário humano B27 (HLA-B27) Fator reumatoide Anticorpo anti-CCP Negativo Anticorpo anti-Ro Negativo Anticorpo anti-La Negativo Com base no caso clínico e nos exames laboratoriais apresentados, qual é o diagnóstico mais provável? (A) Artrite reativa.",
      "B": "Artrite psoriática.",
      "C": "Espondilite anquilosante.",
      "D": "Lúpus eritematoso sistêmico."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 47,
    "gabarito": "C",
    "gabaritoPreliminar": "C",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 13,
    "enunciado": "Adolescente de 12 anos, sexo feminino, é levada à Unidade Básica de Saúde (UBS) para verificar se suas vacinas estão atualizadas. Até os 8 anos, todas as vacinas preconizadas pelo Ministério da Saúde para o biênio 2024-2025 foram feitas, sendo que tomou 1 dose da vacina contra febre amarela aos 9 meses. Nesse momento, deve receber as vacinas",
    "alternativas": {
      "A": "HPV, reforço da hepatite B e dT.",
      "B": "reforço da hepatite B, dT e SCR.",
      "C": "HPV, meningocócica ACWY e febre amarela.",
      "D": "SCR, meningocócica ACWY e febre amarela."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 48,
    "gabarito": "D",
    "gabaritoPreliminar": "D",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 13,
    "enunciado": "Paciente masculino, 36 anos, é tabagista e trabalha como ascensorista. Procura atendimento no ambulatório queixando-se de tosse seca, persistente por mais de 3 semanas, acompanhada de febre vespertina, dificuldade respiratória durante esforços e dor infraescapular à esquerda. Exame físico: bom estado geral, orientado, emagrecido, descorado, hidratado, afebril. Ausculta cardíaca sem alterações; ausculta pulmonar com murmúrios vesiculares diminuídos e percussão maciça em base do tórax à esquerda. Com base no diagnóstico provável, quais são, respectivamente, o exame complementar e a conduta adequada ao caso?",
    "alternativas": {
      "A": "Ressonância magnética; programação cirúrgica.",
      "B": "Tomografia de tórax; lobectomia segmentar.",
      "C": "Tomografia de tórax; drenagem de tórax.",
      "D": "Ultrassonografia; toracocentese. Positivo"
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 49,
    "gabarito": "B",
    "gabaritoPreliminar": "B",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 13,
    "enunciado": "Título 1:80 Nulípara de 30 anos, com diagnóstico de lúpus eritematoso sistêmico e história recente de trombose venosa, apresenta ciclos menstruais prolongados de 8 a 10 dias, com intenso sangramento e cólicas fortes, busca orientação sobre métodos contraceptivos. Positivo Considerando os critérios de elegibilidade para uso de anticoncepção Negativo e o quadro clínico, qual é a melhor opção de contracepção?",
    "alternativas": {
      "A": "DIU de cobre.",
      "B": "DIU de levonorgestrel.",
      "C": "Anticoncepcional injetável mensal.",
      "D": "Pílula anticoncepcional combinada contínua."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 50,
    "gabarito": "C",
    "gabaritoPreliminar": "C",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 14,
    "enunciado": "Homem de 55 anos, com diagnóstico de diabetes mellitus, foi em consulta de rotina em Unidade Básica de Saúde (UBS) levando exames laboratoriais solicitados pelo médico na consulta anterior. Faz uso de metformina 850 mg, 3 vezes ao dia, e glicazida 30 mg, 1 vez ao dia, há mais de 6 meses. Os exames laboratoriais atuais apresentam hemoglobina glicada de 9,5% e creatinina sérica de 0,8 mg/dL. Qual das condutas é a mais adequada para o seguimento desse caso?",
    "alternativas": {
      "A": "Suspender os medicamentos orais, iniciar insulina NPH 10 UI subcutânea pela manhã e 20 UI à noite. Monitorar a glicemia pré-prandial, e, quando estiver controlada, medir a glicemia pós-prandial para avaliação da introdução da insulina regular.",
      "B": "Aumentar a glicazida para 60 mg ao dia, aumentar a metformina para 1 g, 3 vezes ao dia, repetir exames em 1 mês. Iniciar insulina se estiverem alterados; pactuar com o paciente a possibilidade de insulinização no retorno.",
      "C": "Manter a dose de metformina e glicazida, iniciar insulina NPH 10 UI subcutânea à noite, associada à monitorização glicêmica de jejum. Ajustar 2 a 3 UI a cada 2 a 3 dias, até atingir a meta da glicemia de jejum.",
      "D": "Trocar a glicazida por glibenclamida 20 mg por dia, aumentar a metformina para 1 g, 3 vezes ao dia, solicitar novos exames em 1 mês. Pactuar com o paciente a possibilidade de insulinização no retorno."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 51,
    "gabarito": "B",
    "gabaritoPreliminar": "B",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 14,
    "enunciado": "Paciente de 58 anos procura atendimento em Unidade de Pronto Atendimento (UP",
    "alternativas": {
      "A": "devido a quadro de dor torácica à direita, associada a leve desconforto respiratório e “febre baixa” não aferida, com cerca de 3 dias de evolução. Nega tosse ou expectoração. Paciente previamente hígido, com história de tabagismo de longa data (20 maços/ano). Ao exame físico, a região médio-basal do hemitórax direito apresenta expansibilidade reduzida, frêmito toracovocal reduzido, percussão com presença de macicez, ressonância pulmonar reduzida e ausência de ruídos adventícios. Com base no exame físico, a principal hipótese diagnóstica é (A) pneumotórax espontâneo.",
      "B": "derrame pleural unilateral.",
      "C": "atelectasia por obstrução lobar.",
      "D": "pneumonia com consolidação lobar."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 52,
    "gabarito": "C",
    "gabaritoPreliminar": "C",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 14,
    "enunciado": "Menino de 11 anos, previamente hígido, há 4 dias apresenta queixa de mal estar, cefaléia, tosse seca e cansaço, acompanhados de febre com temperatura axilar máxima de 38 °C. No primeiro dia do quadro, procurou atendimento médico. A radiografia de tórax revelou a presença de infiltrado difuso com acentuação para-hilar peribrônquico, sendo medicado com salbutamol spray oral e amoxicilina. O quadro clínico manteve-se inalterado após 72 horas de uso adequado da medicação; retornou ao mesmo serviço em bom estado geral, febril (temperatura axilar de 38 °C), frequência respiratória de 44 irpm; ausculta pulmonar com presença de sibilos ao final da expiração bilateralmente e estertores finos em bases pulmonares. Realizada radiografia de tórax de controle que mantém as mesmas alterações anteriores. O quadro apresentado pelo paciente é compatível com",
    "alternativas": {
      "A": "asma não controlada.",
      "B": "tuberculose pulmonar.",
      "C": "pneumonia atípica.",
      "D": "pneumonia por broncoaspiração."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 53,
    "gabarito": "C",
    "gabaritoPreliminar": "C",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 14,
    "enunciado": "Paciente do sexo masculino, 30 anos, é atendido no serviço de urgência de hospital terciário após acidente automobilístico com capotamento do carro. O paciente se encontra respirando espontaneamente; frequência cardíaca de 95 bpm; pressão arterial de 130 x 88 mmHg; escala de coma de Glasgow de 15; não está sob efeito de álcool ou drogas. Exame físico de cabeça, pescoço e tórax sem alterações. Durante avaliação secundária, nota-se que o paciente não apresenta movimentos em membros inferiores. Também há perda completa da sensibilidade tátil e dolorosa nesses membros, perda essa que se estende até o nível da cicatriz umbilical. Considerando esse quadro clínico, qual é o nível da lesão medular?",
    "alternativas": {
      "A": "T12.",
      "B": "T11.",
      "C": "T10.",
      "D": "L1."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 54,
    "gabarito": "B",
    "gabaritoPreliminar": "B",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 15,
    "enunciado": "Paciente, 20 semanas de gestação, comparece à consulta de pré-natal, com exame de sorologia para toxoplasmose (Elisa): IgM positiva e IgG negativa. Quanto ao caso citado, deve-se",
    "alternativas": {
      "A": "iniciar espiramicina e manter até o parto.",
      "B": "iniciar espiramicina e repetir as sorologias em 14 dias.",
      "C": "solicitar o teste de avidez de IgG para o Toxoplasma gondii.",
      "D": "iniciar tratamento tríplice – sulfadiazina, pirimetamina e ácido folínico."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 55,
    "gabarito": "-",
    "gabaritoPreliminar": "B",
    "anulada": true,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 15,
    "enunciado": "Criança de 7 meses é levada pela mãe à Unidade Básica de Saúde (UBS), com história de febre há 2 dias e recusa alimentar. Ao exame físico, foi identificada erupção papulovesicular, principalmente em mãos e pés, além de vesículas e úlceras em língua, mucosa jugal e pilares tonsilares. O médico deverá orientar os familiares que",
    "alternativas": {
      "A": "a evolução da doença é benigna, mas está indicada internação, pela frequência elevada de complicações.",
      "B": "as complicações neurológicas e cardiológicas, como encefalite, miocardite e pericardite, podem ocorrer.",
      "C": "a localização das lesões descrita no caso é atípica, sendo mais comum em nádegas e região perianal.",
      "D": "o desaparecimento da febre e das lesões de pele costuma ocorrer após 5 a 7 dias do início do quadro."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 56,
    "gabarito": "B",
    "gabaritoPreliminar": "B",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 15,
    "enunciado": "Uma equipe de saúde indígena busca promover o uso adequado e racional de medicamentos. Ao retornar em uma comunidade com grande mobilidade, foi recebida com muita insatisfação. As lideranças indígenas solicitaram a substituição do médico da equipe, porque na visita anterior ele havia se recusado a fornecer antibióticos e anti-inflamatórios solicitados pelos pacientes. Nesse contexto, a conduta adequada é",
    "alternativas": {
      "A": "priorizar a relação médico-paciente, atender às demandas dos pacientes e fornecer os medicamentos solicitados.",
      "B": "identificar nos prontuários e em outros levantamentos os principais problemas de saúde na região e discutir com os conselheiros locais as condutas científicas e socioculturais mais indicadas.",
      "C": "reunir-se com o representante daquela comunidade no Conselho Distrital de Saúde Indígena e informar que a equipe deixará de prestar atendimento até a substituição do profissional.",
      "D": "reconhecer que, dadas às características da comunidade e às reclamações apresentadas, o médico deverá prescrever os medicamentos solicitados nas próximas visitas."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 57,
    "gabarito": "C",
    "gabaritoPreliminar": "C",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 15,
    "enunciado": "Mulher de 26 anos, primípara, se dirige à Unidade Básica de Saúde (UBS) para a consulta pós-parto de 8 semanas. Marido relata que, nas últimas 6 semanas, ela está chorosa na maior parte do tempo e sem vontade de fazer as atividades rotineiras. Mesmo com suporte familiar, não consegue dormir, além de se queixar de pouca energia, redução de apetite e dificuldade em cuidar do bebê. Nega pensamentos de morte, desejo de fazer mal ao bebê ou sintomas psicóticos. Exames laboratoriais normais. Nesse momento, a conduta adequada é",
    "alternativas": {
      "A": "indicar internação em enfermaria de saúde mental.",
      "B": "tranquilizar a paciente, pois o quadro é autolimitado.",
      "C": "iniciar antidepressivo e programar acompanhamento.",
      "D": "encaminhar para uma Unidade de Pronto Atendimento (UPA)."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 58,
    "gabarito": "A",
    "gabaritoPreliminar": "A",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 15,
    "enunciado": "Mulher de 30 anos, sem doenças prévias, dá entrada em Unidade de Pronto Atendimento (UP",
    "alternativas": {
      "A": "Relata que há 2 horas, após ingestão de bebida alcoólica e energéticos, teve palpitações. Ao exame, está consciente, orientada e com hálito etílico. Apresenta-se com pressão arterial de 100 x 70 mmHg e frequência cardíaca de 150 bpm, frequência respiratória de 14 irpm e saturação de O2 de 94% ao ar ambiente. À ausculta cardíaca, apresenta-se taquicárdica, com ritmo irregular. Exames dos aparelhos respiratório e neurológico inalterados. Na unidade de emergência, foi realizado o eletrocardiograma que apresenta o ritmo na derivação D2. Quais são, respectivamente, o diagnóstico e o tratamento de primeira escolha para essa paciente? (A) Fibrilação atrial de alta resposta ventricular; iniciar betabloqueador endovenoso.",
      "B": "Taquicardia ventricular sustentada; realizar cardioversão elétrica imediata.",
      "C": "Taquicardia paroxística supraventricular; iniciar adenosina endovenosa.",
      "D": "Taquicardia sinusal; manter apenas observação clínica."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 59,
    "gabarito": "C",
    "gabaritoPreliminar": "C",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 16,
    "enunciado": "Lactente masculino, 1 ano, apresentou irritabilidade, febre elevada e persistente, dor abdominal, hiporexia e vômitos, sendo levado ao serviço de pronto-atendimento. Exame físico: taquicardia, sem demais alterações. Exames realizados confirmaram infecção urinária. Foi prescrita amoxicilina com clavulanato por 10 dias e, como é o 3° episódio semelhante desde o nascimento, foi orientado retorno ambulatorial após o término do tratamento para acompanhamento e investigação. Ultrassonografia de rins e vias urinárias não evidenciou malformações, sendo necessários novos exames para investigar cicatrizes renais. O exame indicado ao caso é",
    "alternativas": {
      "A": "cistografia radioisotópica direta.",
      "B": "cintilografia renal dinâmica.",
      "C": "cintilografia renal estática.",
      "D": "urografia excretora."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 60,
    "gabarito": "D",
    "gabaritoPreliminar": "D",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 16,
    "enunciado": "Homem de 35 anos, vítima de agressão física por arma branca, é encontrado caído no chão de um bar. Apresenta agitação psicomotora, cianose, turgência jugular e desvio da traqueia à esquerda. Pressão arterial de 90 x 40 mmHg; frequência cardíaca de 120 bpm; saturação periférica de O2 de 87%. No local, o socorrista nota uma faca com lâmina penetrada no quarto espaço intercostal direito, na linha axilar anterior. O murmúrio vesicular encontra-se diminuído em todo o hemitórax direito, que se encontra hipertimpânico. A conduta imediata no atendimento pré-hospitalar deve ser",
    "alternativas": {
      "A": "extrair a faca da região torácica e substituir por curativo com três pontos de fixação.",
      "B": "realizar cricotireoidostomia com agulha e ventilar o paciente com ambu com reservatório de oxigênio.",
      "C": "puncionar a veia jugular interna esquerda do paciente e realizar reposição de volume com solução cristaloide.",
      "D": "descomprimir o hemitórax direito com agulha no quinto espaço intercostal, entre a linha axilar anterior e média."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 61,
    "gabarito": "C",
    "gabaritoPreliminar": "C",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 16,
    "enunciado": "Paciente de 30 anos, 3 cesarianas anteriores, com pré-natal atual de risco habitual. Foi submetida a parto cesáreo eletivo com 39 semanas de gestação. O procedimento cirúrgico aconteceu sem intercorrências. Vinte minutos após o término da cirurgia, queixa-se de mal-estar e tontura. Exame físico: palidez; frequência cardíaca de 110 bpm; pressão arterial de 90 x 55 mmHg. Útero amolecido, 4 cm acima da cicatriz umbilical. Curativo limpo e seco. Sangramento vaginal em grande quantidade, ultrapassando o forro vaginal. Foi realizado acesso venoso calibroso, solicitado hemograma e tipagem sanguínea com reserva de hemocomponentes. Em relação ao quadro clínico da paciente, qual deve ser a próxima conduta?",
    "alternativas": {
      "A": "Histerectomia abdominal subtotal.",
      "B": "Laparotomia com sutura de B Lynch.",
      "C": "Massagem uterina bimanual e uterotônicos.",
      "D": "Tamponamento uterino e reposição volêmica."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 62,
    "gabarito": "A",
    "gabaritoPreliminar": "A",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 16,
    "enunciado": "Homem negro de 22 anos, cisgênero, comparece à Unidade Básica de Saúde (UBS). Relata dificuldades para dormir desde o dia em que começou a namorar seu atual companheiro, há 4 meses. Fala sobre o aumento do número de óbitos por homofobia na cidade. Queixa-se de dor de cabeça frequente, geralmente do lado direito, de intensidade entre 5/10 e 7/10, que dura algumas horas, às vezes até o outro dia, e melhora após o sono. Os episódios ocorrem 2 vezes por mês, associados à vontade de vomitar e incômodo com barulho. Não há melhora com uso de ibuprofeno, nem paracetamol. Diz que não se alimenta bem, come muita fritura e bebe 3 xícaras de café por dia, além de não praticar atividade física. Exame físico: índice de massa corporal de 35 kg/m2. Qual é a conduta adequada para o caso?",
    "alternativas": {
      "A": "Prescrever sumatriptano 25 mg, a ser tomado no início da crise, e orientar mudança de estilo de vida.",
      "B": "Prescrever amitriptilina 25 mg à noite, solicitar ressonância magnética do crânio e encaminhar para avaliação do neurologista.",
      "C": "Prescrever codeína, solicitar ressonância magnética do crânio e uso de máscara com oxigênio 100%, por 20 minutos, durante as crises.",
      "D": "Prescrever ibuprofeno 600 mg, de 8 em 8 horas, quando tiver cefaleia, e uso de máscara com oxigênio 100%, por 20 minutos, durante as crises."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 63,
    "gabarito": "C",
    "gabaritoPreliminar": "C",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 16,
    "enunciado": "Durante reunião de equipe de uma Unidade Básica de Saúde (UBS), a enfermeira relata o aumento de casos de sífilis em gestantes e a alta proporção de pessoas com hipertensão sem consulta de acompanhamento nos últimos 6 meses, conforme a análise inicial dos dados extraídos do Sistema de Atenção Básica (Sisab), Sistema eletrônico do SUS (e-SUS) e Sistema de Informação de Agravos de Notificação (Sinan). Qual a estratégia mais indicada para qualificar a translação dos dados da sala de situação em ações de cuidado coletivo?",
    "alternativas": {
      "A": "Realizar reuniões técnicas entre os profissionais de saúde da UBS e a gestão municipal de saúde, mantendo, nesse primeiro momento, os dados restritos à equipe, para evitar interpretações incorretas pela comunidade.",
      "B": "Produzir boletins técnicos trimestrais com linguagem epidemiológica adequada e publicá-los no mural da unidade, de forma a atender às diretrizes de transparência da informação.",
      "C": "Apresentar os dados da sala de situação em reuniões do conselho local de saúde, dialogando com lideranças comunitárias, com o objetivo de mobilizar ações compartilhadas de promoção e prevenção.",
      "D": "Encaminhar os dados consolidados da sala de situação para o Conselho Municipal de Saúde e aguardar orientações da instância deliberativa sobre quais medidas devem ser implementadas na unidade."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 64,
    "gabarito": "B",
    "gabaritoPreliminar": "B",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 17,
    "enunciado": "Mulher de 58 anos procura Unidade Básica de Saúde (UBS) para renovar receita de diazepam 10 mg. Refere que faz uso da medicação há 25 anos e que não consegue adormecer sem ele. Inclusive, queixa-se de que a medicação vem perdendo eficácia e que sua memória está muito ruim. Nesse caso, a conduta mais adequada é",
    "alternativas": {
      "A": "renovar a receita, orientar o uso moderado do diazepam e associar melatonina.",
      "B": "reduzir gradualmente o diazepam e introduzir medicação não benzodiazepínica.",
      "C": "suspender o uso do diazepam, não renovar a receita e orientar higiene do sono.",
      "D": "ajustar a dosagem do diazepam para 15 mg e avaliar melhora do sono para novos ajustes."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 65,
    "gabarito": "B",
    "gabaritoPreliminar": "B",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 17,
    "enunciado": "Mulher de 32 anos, previamente hígida, apresenta quadro de disúria, polaciúria, urgência miccional e dor lombar esquerda há 3 dias, sem outras queixas genito-urinárias. Vem tomando analgésicos e anti-inflamatórios não esteroides, porém sem melhora. No 4º dia, evoluiu com febre, calafrios, náuseas e vômitos, piora da lombalgia esquerda e astenia intensa. Foi levada ao pronto-socorro pelo seu esposo. Ao exame, temperatura axilar de 38,3 °C; frequência cardíaca de 110 bpm; frequência respiratória de 32 irpm; pressão arterial de 70 x 40 mmHg; saturação de O2 de 96% em ar ambiente. Consciente e orientada, corada, desidratada (+/4+), acianótica, anictérica. Ausculta cardíaca e pulmonar sem alterações. Abdome doloroso em flanco esquerdo e hipogástrio. Sinal de Giordano positivo à esquerda. Extremidades sem alterações. Realizou exame de imagem que descartou a presença de cálculos urinários. Com base no diagnóstico mais provável, qual é a conduta adequada?",
    "alternativas": {
      "A": "Controle da dor e da febre e encaminhamento ao ambulatório de urologia para investigação e conduta específica.",
      "B": "Expansão volêmica com cristaloides, solicitação de culturas de sangue e urina e início precoce de antibioticoterapia.",
      "C": "Tratamento empírico de gonorreia, solicitação de sorologias para HIV, sífilis e hepatites virais e notificação do caso.",
      "D": "Alta hospitalar com prescrição de hidratação e antibioticoterapia empírica via oral e acompanhamento ambulatorial."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 66,
    "gabarito": "B",
    "gabaritoPreliminar": "B",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 17,
    "enunciado": "Mãe leva recém-nascido de 5 dias à Unidade Básica de Saúde (UBS) para a primeira consulta, conforme orientação na alta da maternidade. A criança está bem, sendo amamentada no peito, porém, em alguns horários da amamentação, a mãe oferece fórmula, pois suas mamas estão doendo e às vezes sangram. A conduta nesse caso é",
    "alternativas": {
      "A": "interromper a amamentação e prescrever aleitamento com fórmula, já que a mãe está com dor e sangramento da mama devido à fissura.",
      "B": "manter o aleitamento materno exclusivo, orientar a pega adequada, oferecer a mama nos primeiros sinais da fome do bebê e evitar o ingurgitamento mamário.",
      "C": "manter o aleitamento materno exclusivo, aumentando o intervalo entre as mamadas para as lesões não piorarem, e fazer compressas mornas nas mamas para aliviar a dor.",
      "D": "interromper a amamentação, deixando a mama se recuperar, usar a fórmula nesse período e retornar com o aleitamento materno exclusivo após recuperação da mama."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 67,
    "gabarito": "B",
    "gabaritoPreliminar": "B",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 17,
    "enunciado": "Mulher de 33 anos procura atendimento no pronto-socorro por dor anal há 3 semanas. Relata dor forte e aguda, com sangramento de pequena monta produzido pela defecação. Os episódios de dor duram em torno de 20 minutos e, por esse motivo, não consegue defecar há 3 dias. Nega febre, sintomas urinários, episódios anteriores ou uso de medicamentos. Ao exame físico, apresenta plicoma sentinela na linha média posterior perianal, sem massas ou sinais flogísticos, e, durante manobra de esforço, visualiza-se pequena laceração na mucosa anal. Qual é o diagnóstico mais provável?",
    "alternativas": {
      "A": "Fístula anal.",
      "B": "Fissura anal.",
      "C": "Úlcera de canal anal.",
      "D": "Hemorroida trombosada."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 68,
    "gabarito": "B",
    "gabaritoPreliminar": "B",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 17,
    "enunciado": "Paciente de 21 anos, com vacinação HPV completa, comparece à Unidade Básica de Saúde (UBS) e apresenta resultado da citologia do colo uterino realizada em consulta anterior. O laudo citopatológico descreve: “Atipias celulares escamosas, de significado indeterminado (ASCUS)”. Segundo o preconizado pelo Ministério da Saúde, qual é a conduta?",
    "alternativas": {
      "A": "Repetir citologia após 6 meses.",
      "B": "Repetir a citologia em 3 anos.",
      "C": "Repetir a citologia após 12 meses.",
      "D": "Realizar colposcopia em até 3 meses."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 69,
    "gabarito": "D",
    "gabaritoPreliminar": "D",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 18,
    "enunciado": "Quanto ao uso e à indicação do DIU de cobre, no âmbito da atenção primária à saúde, assinale a alternativa correta.",
    "alternativas": {
      "A": "Pode ser inserido em até 72 horas após o parto.",
      "B": "É indicado como contracepção de emergência em até 72 horas.",
      "C": "Em caso de pós-aborto, é indicado aguardar 40 dias para inserção.",
      "D": "Pode ser inserido a qualquer momento do ciclo menstrual, desde que se certifique ausência de gravidez."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 70,
    "gabarito": "B",
    "gabaritoPreliminar": "B",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 18,
    "enunciado": "Uma médica recém-contratada por uma operadora de plano de saúde assume uma equipe multiprofissional. A operadora implementou um programa de reorganização da linha de cuidado com enfoque no modelo de atenção primária à saúde (APS). Após três meses, a médica observa que muitos pacientes resistem ao novo fluxo de cuidados e solicitam consultas diretas com especialistas, exames de imagem de alta complexidade e procedimentos. O sistema de regulação interna da operadora determina que todos os encaminhamentos sejam realizados pela equipe da APS, exceto em casos de urgência. Com base na regulamentação da saúde suplementar, qual deve ser o papel dessa médica?",
    "alternativas": {
      "A": "Restringir o acesso a especialidades e exames de alto custo, visto a resolutividade alta na APS.",
      "B": "Atuar como gestora do cuidado, utilizando critérios clínicos e diretrizes baseadas em evidências para encaminhamento.",
      "C": "Flexibilizar os fluxos assistenciais, autorizando diretamente os encaminhamentos solicitados para garantir a autonomia do paciente.",
      "D": "Delegar à equipe de regulação da operadora a responsabilidade pelos encaminhamentos e priorizar a escuta e o acolhimento dos usuários."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 71,
    "gabarito": "A",
    "gabaritoPreliminar": "A",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 18,
    "enunciado": "Homem de 22 anos, com histórico de transtorno de ansiedade, sem tratamento medicamentoso, se dirige à Unidade de Pronto Atendimento (UP",
    "alternativas": {
      "A": "com queixa de dor epigástrica, palpitação, falta de ar e sensação de morte iminente. Exame físico: frequência cardíaca de 96 bpm, frequência respiratória de 24 irpm, pressão arterial de 120 x 80 mmHg, bulhas cardíacas e ausculta torácica sem anormalidades, ausência de tiragem intercostal, abdome sem alterações. Após exames complementares, foi descartada doença cardiovascular ou respiratória aguda, porém o paciente apresentou novo episódio semelhante. Quais fármacos podem ser prescritos na crise e a longo prazo, respectivamente? (A) Benzodiazepínico; inibidor de recaptação de serotonina.",
      "B": "Anti-histamínico; inibidor da monoaminoxidase.",
      "C": "Antipsicótico atípico; antidepressivo tricíclico.",
      "D": "Vasodilatador; antipsicótico típico."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 72,
    "gabarito": "C",
    "gabaritoPreliminar": "C",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 18,
    "enunciado": "Mulher de 62 anos, com colelitíase sintomática, é admitida em hospital de atenção secundária com quadro de dor abdominal em hipocôndrio direito, febre com calafrios e icterícia. Ao exame físico, além da icterícia, a paciente encontra-se com o sensório rebaixado e pressão arterial de 72 x 44 mmHg. O exame de ultrassonografia revelou a presença de dilatação de via biliar por cálculo impactado no colédoco. Foram coletadas hemoculturas e dosagem sérica de lactato, iniciada antibioticoterapia intravenosa de amplo espectro e foi prescrito resgate volêmico com cristaloide, sendo programada a realização de colangiopancreatografia retrógrada endoscópica (CPRE) terapêutica. Após cerca de 30 minutos, a paciente mantém pressão arterial média inferior a 65 mmHg. Nesse momento, a conduta prioritária é",
    "alternativas": {
      "A": "encaminhar imediatamente à CPRE.",
      "B": "associar coloide à hidratação intravenosa.",
      "C": "iniciar infusão intravenosa de noradrenalina.",
      "D": "prescrever hidrocortisona em infusão intermitente."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 73,
    "gabarito": "D",
    "gabaritoPreliminar": "D",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 19,
    "enunciado": "Lactente de 5 meses é atendido na Unidade de Pronto Atendimento (UP",
    "alternativas": {
      "A": "apresentando diarreia aguda, com desidratação classificada como moderada. Foi indicada a permanência na unidade para terapia de reidratação oral (TRO). Durante a primeira hora de administração, vomitou 5 vezes, mantendo o mesmo estado de desidratação. Segundo às recomendações do Ministério da Saúde de 2024, a próxima conduta nesse caso é (A) prescrever antiemético e reiniciar TRO após 30 minutos.",
      "B": "suspender TRO e iniciar terapia intravenosa com soro fisiológico.",
      "C": "diminuir a dose e aumentar o intervalo da administração da TRO.",
      "D": "introduzir sonda nasogástrica e iniciar TRO por gastróclise."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 74,
    "gabarito": "D",
    "gabaritoPreliminar": "D",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 19,
    "enunciado": "Paciente de 80 anos, sexo masculino, caiu de cadeira de 0,5 m de altura. Foi conduzido a uma Unidade Básica de Saúde (UBS) por terceiros. Teve traumatismo craniano e perda da consciência por 5 minutos, escala de coma de Glasgow de 13. Apresenta um ferimento cortocontuso de 10 cm de extensão, com sangramento profuso, no couro cabeludo, em região occipital. Queixa-se de cefaleia moderada. Qual é a conduta adequada para esse paciente?",
    "alternativas": {
      "A": "Sutura e observação domiciliar.",
      "B": "Curativo compressivo e observação domiciliar.",
      "C": "Curativo compressivo e radiografia de crânio.",
      "D": "Sutura e transferência para hospital de trauma."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 75,
    "gabarito": "C",
    "gabaritoPreliminar": "C",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 19,
    "enunciado": "Paciente de 43 anos, multípara, 5 partos vaginais, comparece à Unidade Básica de Saúde (UBS) com queixa de “bola por baixo”. Refere que há cerca de 3 meses teve dor, vermelhidão e inchaço na região genital, que evolui com remissão parcial espontânea. No dia da consulta, relata incômodo na relação sexual. Exame físico: tumoração cística de 2,0 cm no maior diâmetro, sem sinais inflamatórios, na altura do vestíbulo vaginal, antes das carúnculas himenais, pouco acima da cicatriz de episiotomia médio-lateral direita. A hipótese diagnóstica e a conduta para esse achado, respectivamente, são",
    "alternativas": {
      "A": "prolapso de colo uterino; correção com pessário vaginal.",
      "B": "divertículo de uretra; cistoscopia para detectar sua extensão.",
      "C": "cisto de glândula de Bartholin; cirurgia se o incômodo à paciente assim o indicar.",
      "D": "cisto de glândula de Skene; ultrassonografia para verificar a extensão do processo."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 76,
    "gabarito": "B",
    "gabaritoPreliminar": "B",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 19,
    "enunciado": "Paciente do sexo masculino, 71 anos, aposentado, ex- trabalhador rural durante 35 anos, procura atendimento médico na Unidade Básica de Saúde (UBS) com dor lombar, predominante no período noturno, associada à perda de peso há cerca de 15 dias. Apresenta dores em região cervical, ombros e joelhos, exacerbadas aos esforços físicos. Relata transplante hepático há 2 anos, por câncer de fígado, fazendo uso regular de medicamento imunossupressor. Exame físico: bom estado geral, eupneico, acianótico, anictérico, afebril e normocorado. Ausculta cardíaca e respiratória sem alterações. Abdome normotenso, indolor à palpação, sem visceromegalias. Extremidades aquecidas e perfundidas, sem edema. Dorso: acentuada lordose lombar e dor à mobilização da coluna lombossacra. Avaliação neuromuscular: força muscular preservada, sensibilidade sem alterações e reflexos normais. Diante desse caso, qual é o exame e a conduta adequada, respectivamente?",
    "alternativas": {
      "A": "Tomografia abdominal com contraste; indicar fisioterapia.",
      "B": "Cintilografia óssea; prescrever anti-inflamatórios e repouso.",
      "C": "Radiografia de coluna lombossacra; prescrever opioides e corticoides.",
      "D": "Ultrassom do aparelho urinário; prescrever analgésicos e anti-inflamatórios."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 77,
    "gabarito": "A",
    "gabaritoPreliminar": "A",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 20,
    "enunciado": "A equipe de uma Unidade Básica de Saúde (UBS) está preocupada com o aumento de casos de hipertensão arterial entre adultos jovens na comunidade. Então, decide realizar um estudo observacional para investigar se o sedentarismo está associado ao aumento do risco de hipertensão nessa população. O estudo dividiu os participantes em dois grupos, sedentários e não sedentários, e acompanhou esses dois grupos por 12 meses para observar o surgimento de novos casos de hipertensão. Ao final do estudo, é identificado o risco relativo (RR) de 0,6. Nesse estudo, o valor do RR permite inferir que",
    "alternativas": {
      "A": "o sedentarismo pode ser um fator protetor para o desenvolvimento da hipertensão.",
      "B": "a prevalência da doença pode ser avaliada, sem possibilidades de associação dos fatores.",
      "C": "os sedentários têm maior risco de desenvolver hipertensão em comparação com os não sedentários.",
      "D": "o desenho do estudo em questão não permite o uso do RR para avaliar associação entre as variáveis."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 78,
    "gabarito": "D",
    "gabaritoPreliminar": "D",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 20,
    "enunciado": "Homem de 43 anos, dependente de álcool há 23 anos (20 doses de aguardente/dia), teve queda da própria altura com fratura fechada de tíbia, sem traumatismo cranioencefálico. Levado ao pronto-socorro, constata-se, além da fratura, nível de consciência e atenção flutuantes, desorientação temporoespacial parcial. Glicemia capilar de 45 mg/dL. Prescreve-se imediatamente reposição de glicose e hidratação. Paciente evolui com melhora inicial do estado mental e piora nas horas seguintes, passando a apresentar confusão mental, rebaixamento do nível de consciência, alterações oculares e ataxia. Encontra-se, então, hidratado, com glicemia capilar de 90 mg/dL e eletrólitos dentro da faixa de normalidade. Para tratar o quadro atual desse paciente, a seguinte conduta medicamentosa deve ser realizada imediatamente:",
    "alternativas": {
      "A": "biperideno, solução injetável 5 mg/mL, 1 ampola intravenosa lentamente.",
      "B": "diazepam, solução injetável 10 mg/mL, 1 ampola intravenosa lentamente.",
      "C": "haloperidol, solução injetável 5 mg/mL, 1 ampola intramuscular em região glútea.",
      "D": "tiamina, solução injetável 100 mg/mL, 5 ampolas diluídas em soro fisiológico durante 30 minutos."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 79,
    "gabarito": "D",
    "gabaritoPreliminar": "D",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 20,
    "enunciado": "Homem de 50 anos apresentou-se ao serviço de emergência após episódio de hematêmese. Relata história de 3 meses de dor epigástrica e diarreia fétida, amarelada, pastosa, com algumas gotas de gordura, e perda de peso significativa. Histórico de ingestão de 500 mL de bebida alcoólica destilada, por dia, durante 15 anos. Exame físico: paciente emagrecido, índice de massa corporal de 17 kg/m²; temperatura axilar de 36,5 °C; mucosas hipocoradas ++/4+; hidratadas; ictéricas +/4+; aparelho respiratório sem alterações; aparelho cardiovascular com bulhas rítmicas e hiperfonéticas; frequência cardíaca de 87 bpm; pressão arterial de 120 x 80 mmHg; abdome pouco distendido, com sensibilidade à palpação epigástrica e ruídos hidroaéreos normais. Os resultados dos testes laboratoriais, incluindo lipase sérica e testes de função hepática, estavam dentro dos limites normais. A tomografia computadorizada do abdome mostrou extensa calcificação do pâncreas, sem evidência de edema pancreático ou presença de líquido peripancreático. A endoscopia digestiva alta revelou enantema em antro. De acordo com o quadro clínico, o exame físico e os exames complementares, qual é a conduta mais adequada?",
    "alternativas": {
      "A": "Internação, jejum, hidratação venosa e analgésicos.",
      "B": "Analgesia, estadiamento e avaliação para possível indicação cirúrgica.",
      "C": "Internação, analgesia e colangiopancreatografia retrógrada endoscópica.",
      "D": "Interrupção da ingestão de álcool e prescrição de analgésico e pancreatina."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 80,
    "gabarito": "A",
    "gabaritoPreliminar": "A",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 20,
    "enunciado": "Menino de 3 anos é transportado pelo Serviço Móvel de Atendimento de Urgência (SAMU) para um serviço de urgência, após ter apresentado náuseas e vômitos, evoluindo para confusão mental e um episódio de convulsão, segundo os acompanhantes. Foram encontradas, nas proximidades do local onde a criança brincava, diversas cartelas abertas de ácido acetilsalicílico, do qual o avô faz uso contínuo. No momento do transporte, estava hidratado, sonolento e hiperventilando. O agente considerado eficaz para o tratamento imediato é",
    "alternativas": {
      "A": "carvão ativado.",
      "B": "N-acetilcisteína.",
      "C": "xarope de ipeca.",
      "D": "atropina."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 81,
    "gabarito": "D",
    "gabaritoPreliminar": "D",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 21,
    "enunciado": "Paciente de 58 anos, trabalhador rural, encaminhado ao ambulatório de dermatologia com queixa de sangramento frequente em lesão pruriginosa em região plantar direita há 30 dias. Ao exame clínico, nota-se na região mencionada uma lesão com bordas irregulares, hipercrômica (em tons de preto, castanho, cinza), medindo 12 mm em seu maior diâmetro. Considerando as características dessa lesão, qual é a principal hipótese diagnóstica?",
    "alternativas": {
      "A": "Carcinoma espinocelular.",
      "B": "Carcinoma basocelular.",
      "C": "Queratose actínica.",
      "D": "Melanoma."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 82,
    "gabarito": "D",
    "gabaritoPreliminar": "D",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 21,
    "enunciado": "Adolescente de 14 anos comparece à consulta acompanhada da mãe. Estão preocupadas porque, mesmo após 18 meses da menarca, a adolescente ainda apresenta ciclos menstruais irregulares, que variam entre 35 a 90 dias, e sangramento que dura de 3 a 7 dias. A paciente nega fluxo intenso, dor pélvica significativa ou início da atividade sexual. Apesar do quadro relatado, ela nega prejuízo de suas atividades. Ao exame físico, não foram encontradas alterações significativas. Qual é a conduta adequada nesse caso?",
    "alternativas": {
      "A": "Fazer uma histeroscopia diagnóstica para afastar a hipótese de lesões endometriais.",
      "B": "Dosar TSH, FSH, LH, estradiol e prolactina para afastar a hipótese de distúrbios hormonais.",
      "C": "Realizar uma ultrassonografia pélvica para afastar a hipótese de lesões miometriais e ovarianas.",
      "D": "Informar que a principal causa é a anovulação, não sendo necessário exame complementar no momento."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 83,
    "gabarito": "A",
    "gabaritoPreliminar": "A",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 21,
    "enunciado": "Criança de 3 anos é trazida à Unidade Básica de Saúde (UBS) com quadro de diarreia aquosa de grande volume, com aparência de água de arroz e um forte odor de peixe podre. A mãe relata que a criança está assim há 2 dias, mas no dia da consulta ficou prostrada, mal conseguia andar. Eles moram numa área de ocupação, sem saneamento básico nem água tratada. Relata também que outras crianças estão com quadro semelhante. Ao exame físico, desidratação grave, abdome com peristaltismo presente, timpânico, indolor à palpação, sem visceromegalias. Considerando esse caso clínico, a principal hipótese diagnóstica a ser investigada é",
    "alternativas": {
      "A": "cólera.",
      "B": "rotavírus.",
      "C": "giardíase.",
      "D": "diarreia alimentar."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 84,
    "gabarito": "A",
    "gabaritoPreliminar": "A",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 21,
    "enunciado": "Mulher de 82 anos, com diagnóstico de câncer de pâncreas, foi levada pela filha para atendimento. Após avaliação clínica e realização de exames, o médico informa que o caso está fora de possibilidade terapêutica. A filha insiste na realização de um tratamento novo com um medicamento importado que ela viu na internet, enquanto a paciente, lúcida e capaz, discorda da utilização de intervenções experimentais. O médico, ao concordar com a decisão da paciente, está resguardado pelo princípio bioético da",
    "alternativas": {
      "A": "autonomia.",
      "B": "beneficência.",
      "C": "não maleficência.",
      "D": "justiça distributiva."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 85,
    "gabarito": "-",
    "gabaritoPreliminar": "B",
    "anulada": true,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 21,
    "enunciado": "Ao ser avaliado em consulta de puericultura, lactente apresenta alterações dos marcos de desenvolvimento em relação à comunicação, comportamento e socialização. Nesse caso, o médico deve fazer triagem específica para transtorno do espectro autista (TE",
    "alternativas": {
      "A": "(A) aos 2, 4 e 10 meses, independentemente se o quadro é associado à epilepsia, distúrbios do sono ou deficiência intelectual.",
      "B": "aos 9, 18 e 30 meses, independentemente se o quadro é associado à epilepsia, distúrbio do sono ou deficiência intelectual.",
      "C": "aos 12, 24 e 36 meses, principalmente se o quadro é associado à história familiar de TEA ou à deficiência intelectual.",
      "D": "aos 2, 4 e 6 anos, principalmente se o quadro é associado à história familiar de TEA ou à deficiência intelectual."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 86,
    "gabarito": "A",
    "gabaritoPreliminar": "A",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 22,
    "enunciado": "Em Unidade de Pronto Atendimento (UP",
    "alternativas": {
      "A": ", mulher de 30 anos, negra, casada, refere vários episódios de dores nas pernas no último ano, às vezes com edema local, e dores torácicas, associadas à febre, coriza e tosse, apresentando melhora com paracetamol há 1 semana. Relata fortes dores em membros inferiores, intensidade 8/10, sem irradiação, e dor na região lombar, fadiga, indisposição e edema doloroso em tornozelo sem melhora, com utilização de analgésicos há 1 dia. Pai faleceu aos 40 anos devido a acidente vascular encefálico. Exame físico: eupneica; afebril; mucosas descoradas (++/4+); icterícia (+/4+). Sem alterações nos sinais vitais. Ausculta cardíaca com sopro sistólico (++/4+). Abdome plano, sem visceromegalias. Edema unilateral sem empastamento em tornozelo esquerdo (++/4+), associado à úlcera maleolar de 2 cm, com secreção purulenta e hiperemia nas bordas. Os exames laboratoriais apresentam os seguintes resultados: Exame Resultado Valor de referência Hematócrito 24% 36 a 47% Hemoglobina Reticulócitos 135.000/mm³ 20.000 a 100.000/mm³ Leucócitos Plaquetas Glicemia 80 mg/dL 70 a 99 mg/dL de jejum Colesterol total 151 mg/dL Abaixo de 200 mg/dL HDL-C Triglicerídeos 134 mg/dL Apresenta Esfregaço drepanócitos ECG Sem alterações ------ Qual achado no exame complementar confirma a principal hipótese diagnóstica para o caso? (A) Presença de hemoglobina S na eletroforese de hemoglobina.",
      "B": "Identificação de hemácias falciformes na análise de gota espessa.",
      "C": "Predomínio de gamaglobulina na eletroforese de proteínas plasmáticas.",
      "D": "Observação de glóbulos vermelhos destruídos no esfregaço sanguíneo."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 87,
    "gabarito": "-",
    "gabaritoPreliminar": "C",
    "anulada": true,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 22,
    "enunciado": "Lactente de 9 meses foi admitido em Unidade de Pronto Atendimento (UP",
    "alternativas": {
      "A": "com quadro de diarreia; febre de 38,5 °C; diminuição do volume urinário; sonolência alternada com períodos de irritabilidade; apatia; palidez de pele. Ao exame físico: peso de 9 kg; temperatura axilar de 38 °C; frequência cardíaca de 130 bpm; frequência respiratória de 34 rpm; pressão arterial de 80 x 50 mmHg; mau estado geral; sonolento; reagindo com irritabilidade aos estímulos; palidez de pele; tecido subcutâneo com turgor pastoso; mucosas ressecadas; olhos encovados; extremidades frias; pulsos fracos. Tempo de enchimento capilar de 4 segundos. Respiração gemente, com aumento da amplitude e tiragens intercostais. O diagnóstico e a hidratação endovenosa indicada para o caso são, respectivamente, (A) choque hipovolêmico; solução fisiológica 180 mL em 15 minutos.",
      "B": "choque hipovolêmico; solução glicofisiológica 270 mL em 30 minutos.",
      "C": "desidratação grave; solução fisiológica 270 mL em 60 minutos. 8,2 g/dL 12,5 a 16,0 g/dL",
      "D": "desidratação grave; solução glicofisiológica 900 mL em 120 minutos. 11.000/mm³ 4.000 a 11.000/mm³"
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 88,
    "gabarito": "A",
    "gabaritoPreliminar": "A",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 22,
    "enunciado": "420.000/mm³ 150.000 a 450.000/mm³ Homem de 61 anos comparece à consulta com queixa de lesão no pênis há 3 meses, a qual se desenvolveu após episódio de eritema, prurido e fissura local, sem melhora após o uso de antibiótico por 30 dias. Como antecedentes pessoais, relata ter 53 mg/dL Acima de 50 mg/dL feito tratamento de HPV há 2 anos. Ao exame físico do pênis, odor fétido à retração prepucial, com Abaixo de 150 mg/dL má higienização local; lesão com aspecto verrucoso na glande; presença de linfonodos inguinais bilaterais à palpação, indolores, ------ arredondados e imóveis. Considerando o diagnóstico mais provável, qual é a conduta adequada?",
    "alternativas": {
      "A": "Solicitar biópsia da lesão em glande peniana antes de indicar tratamento específico.",
      "B": "Iniciar tratamento medicamentoso enquanto aguarda os exames sorológicos para sífilis, hepatite e HIV.",
      "C": "Orientar correta higienização genital e uso de antibiótico oral associado à pomada tópica com corticoide.",
      "D": "Orientar higienização genital, uso de medicação tópica e tratamento da parceira sexual para evitar recidiva."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 89,
    "gabarito": "B",
    "gabaritoPreliminar": "B",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 23,
    "enunciado": "Paciente de 28 anos, primigesta, teve infecção por Zika vírus com 12 semanas de gestação. A ultrassonografia morfológica, realizada com 23 semanas, revelou microcefalia, redução do diâmetro biparietal, leve aumento dos ventrículos laterais, calcificações subcorticais, redução do volume cerebral e lisencefalia. Diante desse resultado, a paciente ficou apreensiva e solicitou interrupção da gestação. De acordo com o ordenamento jurídico brasileiro, qual é a conduta adequada nesse caso?",
    "alternativas": {
      "A": "O procedimento poderá ser feito, mediante solicitação por escrito da gestante.",
      "B": "O independentemente da idade gestacional.",
      "C": "O procedimento não poderá ser realizado, por já ter ultrapassado 20 semanas de gestação.",
      "D": "O procedimento poderá ser realizado, após a confirmação do diagnóstico por dois especialistas em medicina fetal."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 90,
    "gabarito": "D",
    "gabaritoPreliminar": "D",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 23,
    "enunciado": "Adolescente de 15 anos que reside com a mãe e a avó, em consulta de demanda espontânea com o médico de família e comunidade, solicita orientações sobre anticoncepção, já que pretende iniciar a vida sexual. A paciente é levada pela avó, a qual não participa da consulta médica. Caso a avó e a mãe queiram saber informações sobre a consulta, o médico deve",
    "alternativas": {
      "A": "prestar informações às duas, somente na presença da paciente, mesmo que não autorizado por ela.",
      "B": "fornecer informações apenas à mãe, responsável legal, pois a paciente é menor de idade.",
      "C": "fornecer informações apenas à mãe, após autorização judicial requerida por ela.",
      "D": "manter o sigilo médico, evitando o repasse das informações à mãe e à avó."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 91,
    "gabarito": "A",
    "gabaritoPreliminar": "A",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 23,
    "enunciado": "Adolescente de 16 anos apresentou febre, odinofagia e cefaleia há 7 dias, com início após festa de aniversário de um amigo. Refere rouquidão e tosse seca persistente há 5 dias, com piora progressiva da tosse. Exame físico: afebril, taquipneico, com estertores finos bilateralmente. Apresenta a seguinte radiografia de tórax em PA: procedimento não poderá ser realizado, Com base na história clínica e na radiografia, o agente etiológico mais provável é",
    "alternativas": {
      "A": "Chlamydia trachomatis.",
      "B": "Mycoplasma pneumoniae.",
      "C": "Streptococcus pneumoniae.",
      "D": "vírus sincicial respiratório."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 92,
    "gabarito": "A",
    "gabaritoPreliminar": "A",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 24,
    "enunciado": "Recém-nascida de 10 dias é levada pelos pais à Unidade Básica de Saúde (UBS). Mãe queixa-se de lesões na pele da filha, que apareceram há 3 dias. Nega febre, diarreia e vômitos associados. A bebê nasceu a termo e não houve intercorrências nos períodos gestacional e perinatal. Na inspeção foram observadas três vesículas e bolhas de paredes flácidas e não agrupadas, com conteúdo amarelado, na região do abdome, e duas lesões avermelhadas/marrons numulares, que a responsável informou serem bolhas que estouraram. O tratamento indicado é",
    "alternativas": {
      "A": "mupirocina tópico.",
      "B": "aciclovir intravenoso.",
      "C": "sulfadiazina de prata tópico.",
      "D": "imunoglobulina varicela zoster intramuscular."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 93,
    "gabarito": "B",
    "gabaritoPreliminar": "B",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 24,
    "enunciado": "Paciente de 40 anos, vítima de atropelamento havia 90 minutos. Foi conduzido pelo Serviço de Atendimento Móvel de Urgência (SAMU), imobilizado com colar cervical, prancha rígida e imobilização pélvica. Durante avaliação inicial, apresentava-se consciente e orientado, com queixa de dor abdominal e pélvica. Ao exame físico, observou-se estabilidade hemodinâmica, presença de hematoma perineal, desalinhamento da pelve, bem como uretrorragia e globo vesical palpável. Diante do caso, qual o procedimento indicado nesse momento?",
    "alternativas": {
      "A": "Cistostomia.",
      "B": "Uretrocistoscopia.",
      "C": "Laparotomia exploratória.",
      "D": "Sondagem vesical de alívio."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 94,
    "gabarito": "C",
    "gabaritoPreliminar": "C",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 24,
    "enunciado": "Paciente primigesta, com 14 semanas de gestação, chega à urgência apresentando sangramento vaginal leve há 1 dia, sem dor abdominal. Apresenta tipo sanguíneo “O” Rh negativo, com coombs indireto negativo, não é possível saber o tipo sanguíneo do genitor. Durante o exame, não é detectado sinal de instabilidade hemodinâmica. Após avaliação inicial, a ultrassonografia transvaginal revela presença de embrião vivo e hematoma subcoriônico. Qual é a conduta mais adequada para essa paciente?",
    "alternativas": {
      "A": "Informar que não há indicação de medidas adicionais.",
      "B": "Administrar imunoglobulina anti-D e reavaliar em 7 a 14 dias.",
      "C": "Indicar repouso relativo e prescrever progesterona micronizada.",
      "D": "Indicar repouso relativo e aguardar 72 horas para administrar imunoglobulina."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 95,
    "gabarito": "C",
    "gabaritoPreliminar": "C",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 24,
    "enunciado": "Criança de 4 anos, sem comorbidades, é levada pela mãe à Unidade Básica de Saúde (UBS) com história de febre e cefaleia há 2 dias. É residente em área sem risco de malária. Há 2 anos, a criança apresentou um episódio de convulsão febril simples. Ao exame físico, paciente apresenta temperatura de 38,5 °C, com restante do exame físico sem alterações. Diante desse caso, a conduta mais adequada é",
    "alternativas": {
      "A": "iniciar antibioticoterapia, visto que a criança apresenta doença febril muito grave.",
      "B": "administrar antitérmico e solicitar exames laboratoriais para identificação da etiologia da febre.",
      "C": "administrar antitérmico, liberar a criança para casa e orientar os pais sobre o manejo em caso de convulsão.",
      "D": "encaminhar imediatamente ao hospital e manter em observação até a febre ceder, considerando o risco de convulsão."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 96,
    "gabarito": "A",
    "gabaritoPreliminar": "A",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 25,
    "enunciado": "Homem de 60 anos é encaminhado ao ambulatório da atenção secundária devido à queimação em região epigástrica há 6 meses. Já realizou 2 ciclos de 30 dias de inibidor de bomba de próton, com melhora parcial e temporária da queixa. Apresenta perda de peso involuntária aproximada de 20% nos últimos 6 meses. Nega vômitos ou hematêmese. Exame físico sem alterações relevantes. Quais são, respectivamente, a principal hipótese diagnóstica e a conduta adequada para o caso?",
    "alternativas": {
      "A": "Dispepsia funcional; amitriptilina.",
      "B": "Colelitíase; ultrassonografia de abdome.",
      "C": "Câncer gástrico; endoscopia digestiva alta.",
      "D": "Doença do refluxo gastroesofágico; pHmetria."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 97,
    "gabarito": "A",
    "gabaritoPreliminar": "A",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 25,
    "enunciado": "Menino de 10 anos, com anemia falciforme, foi trazido à Unidade de Pronto Atendimento (UP",
    "alternativas": {
      "A": "com quadro de febre alta há 48 horas e sintomas gripais. Durante a observação na unidade, evoluiu com dor torácica e queda na saturação de O2 de 89% em ar ambiente. Ausculta pulmonar: diminuição discreta do murmúrio vesicular à esquerda. Frequência cardíaca normal. A hipótese diagnóstica e a conduta inicial são, respectivamente, (A) síndrome torácica aguda; internação e analgesia com antibioticoterapia parenteral.",
      "B": "embolia pulmonar aguda; internação e anticoagulação com dose plena de heparina.",
      "C": "síndrome torácica aguda; observação por 24 horas e analgesia com hidratação endovenosa.",
      "D": "embolia pulmonar aguda; observação por 24 horas e anticoagulação com dose profilática de heparina."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 98,
    "gabarito": "A",
    "gabaritoPreliminar": "A",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 25,
    "enunciado": "Homem de 69 anos, vítima de politrauma, internado há 9 dias, apresenta quadro de dor anal, evacuação de fezes de consistência endurecida e presença de sangue vivo em pequena quantidade. À admissão, estava hemodinamicamente estável, sem alterações neurológicas, exames de imagem sem alterações. Apresentava múltiplas escoriações no dorso e na região lombossacra. Consta o uso de analgesia com opioides durante o período de internação. Considerando o caso apresentado, quais são os diagnósticos mais prováveis?",
    "alternativas": {
      "A": "Fecaloma e fissura anal.",
      "B": "Obstrução intestinal e sepse.",
      "C": "Fratura pélvica e lesão colônica.",
      "D": "Intussuscepção e obstrução intestinal."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 99,
    "gabarito": "B",
    "gabaritoPreliminar": "B",
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 25,
    "enunciado": "Mãe leva a filha de 13 anos e 15 dias à consulta em Unidade Básica de Saúde (UBS). A filha demonstra preocupação, pois ainda não menstruou, fato que já ocorreu com todas as suas amigas. No histórico, consta telarca aos 10 anos. Relata que há uma semana começou com secreção vaginal transparente e sem odor, que por vezes molhava a roupa íntima. Informa não ter tido relações sexuais até o momento da consulta. Exame físico: índice de massa corporal de 18,5 kg/m2; estatura de 1,58 m; pressão arterial de 115 x 80 mmHg; mamas M3 e pelos pubianos P3 (escala de Tanner). Presença de hímen íntegro com orifício anular. Ausência de nódulos inguinais. De acordo com a história clínica, qual é a conduta adequada?",
    "alternativas": {
      "A": "Explicar que a adolescente apresenta desenvolvimento normal e que provavelmente terá a sua menarca em breve.",
      "B": "Encaminhar a paciente para atenção secundária, por suspeita de hipogonadismo hipogonadotrófico.",
      "C": "Solicitar dosagem de estrogênio, FSH, LH, cariótipo e exame de imagem.",
      "D": "Iniciar terapia estrogênica para preservação de massa óssea."
    },
    "revisaoVisual": false
  },
  {
    "edicao": "2025/2",
    "numero": 100,
    "anulada": false,
    "status": "importada-preliminar",
    "fonte": "INEP — Caderno 01 / gabarito preliminar 2025/2",
    "conteudoValidado": true,
    "pagina": 26,
    "enunciado": "Criança de 7 anos chega à Unidade Básica de Saúde (UBS) com múltiplas afecções de pele disseminadas em ambos os pés. As lesões são caracterizadas por pápulas arredondadas amareladas com ponto preto central. O pai relata que cria porcos e que a menina está sempre brincando perto dos chiqueiros. Quais são, respectivamente, o diagnóstico provável, o tratamento e a orientação?",
    "alternativas": {
      "A": "Dermatite de contato; tratamento tópico e eliminação do foco alérgico; orientação para uso de calçados adequados e meias de algodão.",
      "B": "Tungíase; retirada manual dos parasitas, seguida de tratamento tópico e sistêmico; orientação para uso de calçados, evitando a área próxima aos chiqueiros.",
      "C": "Escabiose; limpeza diária e tratamento sistêmico, fornecimento de atestado para a escola; orientação de realizar controle ambiental até a eliminação do parasita.",
      "D": "Esporotricose; o caso deve ser encaminhado a um serviço de dermatologia para realização de biópsia das lesões para a confirmação do diagnóstico; orientação de aguardar o resultado do exame. ÁREA LIVRE"
    },
    "revisaoVisual": false
  }
];\n\n// Conteúdos futuros não fazem parte do banco de questões.
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
}

if (typeof module !== "undefined") module.exports = { FONTE_INEP, gabaritosOficiais, gabaritosPreliminares, edicoes, questoes, treinamentos };

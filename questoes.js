// Banco de dados do Projeto Revalida.
// Fonte oficial de referência: https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/revalida/provas-e-gabaritos
// Regra: não duplicar questões em HTML. Todo conteúdo de questão fica aqui.

const FONTE_INEP = "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/revalida/provas-e-gabaritos";

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

const questoes = [];

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
}

if (typeof module !== "undefined") module.exports = { FONTE_INEP, gabaritosOficiais, gabaritosPreliminares, edicoes, questoes, treinamentos };

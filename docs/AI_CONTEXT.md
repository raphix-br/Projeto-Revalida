# AI_CONTEXT — Projeto Revalida

## Regra principal

O GitHub é a fonte oficial do projeto. Antes de modificar qualquer coisa, ler este arquivo e o estado atual do repositório.

## Arquitetura mínima

- `index.html`: biblioteca das edições.
- `treino_revalida.html`: consulta e visualização das questões.
- `questoes.js`: única fonte de dados das questões e do catálogo de edições.
- `README.md`: documentação curta do projeto.
- `CHANGELOG.md`: histórico humano das mudanças.
- `.github/workflows/validate.yml`: proteção automática contra erros.

Não criar `estilo.css`, `questoes.js` duplicado, bancos paralelos ou cópias de questões em HTML sem uma decisão explícita.

## Modelo do banco

Cada questão objetiva usa os campos atuais:

- `numero`
- `edicao`
- `grupo`
- `subgrupo`
- `tema`
- `text`
- `options`
- `gabarito`

O arquivo adiciona automaticamente:

- `id`
- `tags`
- `tipo`

Questões anuladas usam `gabarito: "-"` e recebem automaticamente a tag `anulada`.

Campos futuros opcionais devem ser adicionados apenas quando necessários, por exemplo `midia`, `comentario`, `flashcards`. Não duplicar conteúdo que possa ser derivado.

## Edições

`edicoes` é o catálogo oficial de edições que o projeto acompanha. Cada edição informa apenas o necessário para o catálogo, especialmente `id`, `nome` e `objetivasEsperadas`.

A interface calcula automaticamente:

- questões importadas;
- percentual de cobertura;
- presença de gabaritos;
- status da edição.

Não gravar esses números manualmente em vários arquivos.

## Regra de confiabilidade

O conteúdo atualmente importado de 2025/1 é **parcial e ainda precisa ser validado contra os cadernos e gabaritos definitivos do Inep**. Não apresentar esse conteúdo como integralmente oficial/validado.

Quando uma edição for revisada:

1. conferir o caderno oficial;
2. conferir o gabarito definitivo oficial;
3. marcar o que foi anulado;
4. conferir numeração e alternativas;
5. conferir mídias/imagens;
6. só então considerar a edição validada.

## Regra para IAs

Uma IA não deve reescrever ou "melhorar" questões por inferência. Deve preservar o texto-fonte e corrigir somente com base em fonte verificável.

Não alterar uma questão já validada sem registrar a razão no CHANGELOG.

Depois de qualquer alteração no banco, o GitHub Actions deve passar.

## Próxima grande etapa

Completar o banco de questões objetivas, edição por edição, até cobertura integral das edições realizadas.

Depois disso, incorporar camadas por questão, sem duplicar a questão-base:

- gabarito comentado;
- fundamentação;
- flashcards;
- tags pedagógicas;
- estatísticas e desempenho.

Esses módulos devem referenciar a questão pelo `id` estável.

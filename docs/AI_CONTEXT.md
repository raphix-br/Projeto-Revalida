# AI_CONTEXT — Projeto Revalida

## Regra principal

O GitHub é a fonte oficial do projeto. Antes de modificar qualquer coisa, ler este arquivo e o estado atual do repositório.

## Arquitetura mínima

- `index.html`: página inicial com entrada para Fase 1 e Fase 2.
- `fase1.html`: menu de ferramentas da prova objetiva.
- `fase2.html`: página informativa da etapa prática, ainda em desenvolvimento.
- `treino_revalida.html`: catálogo de edições disponíveis.
- `edicao.html`: lista numerada de questões da edição selecionada.
- `questao.html`: enunciado, alternativas, gabarito e navegação anterior/próxima.
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


## Regra operacional atual — 2025/1 e 2025/2

- Os PDFs em provas/2025/2025-1/ e provas/2025/2025-2/ são as fontes documentais armazenadas no repositório.
- **Não considerar as questões como validadas sem comparação direta com o caderno oficial.**
- 2025/1: gabarito definitivo oficial registrado; conteúdo das questões ainda precisa ser conferido.
- 2025/2: caderno disponível e gabarito preliminar disponível; não tratar como gabarito definitivo.
- Não reconstruir enunciados por memória, resumo de terceiros ou inferência.
- Se o PDF binário não puder ser lido por uma ferramenta, registrar a limitação em vez de inventar conteúdo.


## Mapa de navegação atual

`index.html` → `fase1.html` → `treino_revalida.html` → `edicao.html?edicao=2025-1|2025-2` → `questao.html?edicao=...&numero=...`.

A Fase 2 parte de `index.html` para `fase2.html`. O nome `Projeto Revalida` no cabeçalho de todas as páginas deve voltar à página inicial. Links internos devem ser relativos (`./arquivo.html`) para não depender de um caminho-base fixo do GitHub Pages. Antes de alterar a navegação, conferir todos os destinos e os PDFs originais citados por `questao.html`.


## Requisitos de interface — v0.8.2
- Todas as páginas usam cabeçalho fixo no topo; `Projeto Revalida` fica à direita e sempre leva a `./index.html`.
- `index.html` é a página inicial com dois acessos principais: Fase 1 e Fase 2. `fase1.html` contém as ferramentas de treino; `fase2.html` informa que está em desenvolvimento.
- A lista de questões mostra apenas números destacados de `01` a `100` e reserva o texto central para tags futuras; não exibir trecho do enunciado na lista.
- Manter barra de rolagem visível e consistente.
- `questoes.js` publica `window.REVALIDA_DATA` para evitar dependência exclusiva de bindings lexicais entre scripts. A lista e a página da questão devem ler o banco dessa API, com fallback legado.


## Requisitos de interface — v0.9.0
- index.html é a apresentação do projeto e a prévia visual de autenticação. Login, criação de conta e Google não são funcionais até integrar um provedor seguro.
- dashboard.html é a tela de seleção entre Fase 1 e Fase 2.
- O cabeçalho deve manter a marca no lado esquerdo apontando para index.html e um botão de perfil inativo no lado direito.
- questao.html não exibe o gabarito antes de Confirmar e não tem link para abrir o caderno oficial. A barra inferior fixa contém Anterior, Confirmar e Avançar.
- Respostas corrigidas são guardadas no localStorage do navegador com a chave revalida-performance-v1. Não afirmar que existe conta ou sincronização.
- desempenho.html contém indicadores, gráfico de barras e radar para as cinco grandes áreas. A qualidade do radar depende de classificar corretamente cada questão.
- A tag Imagem é inferida por metadados e pistas no texto; revisar manualmente questões com recursos visuais para garantir que a marcação seja correta.

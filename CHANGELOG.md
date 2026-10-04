# CHANGELOG — Projeto Revalida

## v0.2.1 — Validação do gabarito oficial 2025/1

### Alterado
- Criado o registro central `gabaritosOficiais` para a edição 2025/1, contendo as 100 respostas do gabarito definitivo do Inep.
- Os gabaritos das questões já presentes no banco foram alinhados ao gabarito definitivo oficial.
- As questões existentes receberam o estado `gabarito_oficial_validado_conteudo_pendente`.
- A validação foi deliberadamente separada em duas etapas: **gabarito oficial** e **conteúdo da questão**.
- O conteúdo textual das questões existentes **não foi marcado como validado** nesta etapa.
- A edição 2025/1 continua parcial: 50 questões estão armazenadas no banco; as questões 51–100 ainda precisam ser incorporadas com conteúdo conferido.
- As questões 7, 23 e 34 constam como anuladas no gabarito definitivo oficial.

### Fonte
- Gabarito definitivo oficial do Inep para a prova objetiva 2025/1.

## v0.2.0 — Estrutura do Banco de Questões

### Alterado
- Projeto definido como independente do Raphix Lab.
- Criado backup da versão anterior na branch `backup/antes-banco-questoes-2026-10-02`.
- `questoes.js` passou a ser a fonte única das questões.
- Corrigido o erro de sintaxe que impedia o carregamento do banco.
- Separado o conteúdo futuro de treinamento do banco de questões.
- Criado catálogo central de edições do Revalida.
- Tags passaram a ser derivadas automaticamente dos metadados da questão.
- Questões anuladas recebem automaticamente a tag `anulada`.
- Removida a duplicação do banco que existia no `index.html`.
- `index.html` passou a funcionar como biblioteca das edições.
- `treino_revalida.html` passou a consultar exclusivamente `questoes.js`.
- A biblioteca passou a distinguir gabarito armazenado de gabarito oficialmente validado.
- Adicionada validação automática com GitHub Actions.
- Criada documentação de contexto para colaboração entre IAs.

### Importante
- O banco atual contém 50 questões importadas de 2025/1, portanto a edição permanece **parcial**.
- O conteúdo atual de 2025/1 ainda deve ser conferido integralmente contra os cadernos e gabaritos definitivos oficiais do Inep antes de ser marcado como validado.
- O objetivo desta versão é estabilizar a arquitetura do banco antes da expansão para todas as edições.

## v0.1.0 — Inicialização
- Criação do repositório.
- Estrutura inicial do projeto.
- Preparação para GitHub Pages.

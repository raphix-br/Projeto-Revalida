# CHANGELOG — Projeto Revalida

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

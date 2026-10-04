# Changelog

## v0.4.0 — Nova arquitetura visual e navegação
- Criada página inicial tipo hub com botões grandes para as áreas do Projeto Revalida.
- Apenas o Banco de Questões está ativo; demais módulos aparecem visualmente desabilitados.
- Banco de Questões passou a abrir uma tela própria com uma edição por linha.
- 2025/1 e 2025/2 são as únicas edições ativas neste momento.
- Demais edições permanecem listadas, porém apagadas/desabilitadas.
- Criada tela individual da edição com as 100 questões numeradas.
- Cada questão recebeu rota permanente no padrão `2025/2025.1/q001` e `2025/2025.2/q001`.
- Criado roteamento via `404.html` para manter essas URLs profundas funcionando no GitHub Pages.
- Questões ainda não transcritas não recebem texto inventado; a página informa que o conteúdo está em validação.
- Gabaritos já registrados continuam sendo exibidos, inclusive questões anuladas.

# CHANGELOG — Projeto Revalida

## v0.3.0 — Foco 2025/1 e 2025/2

### Alterado
- Escopo operacional reduzido para as edições **2025/1 e 2025/2**.
- Biblioteca passou a exibir cada edição em uma linha e somente as duas edições em foco.
- Removidas do banco as 50 questões provisórias que não haviam sido conferidas contra o caderno oficial.
- Registrado o gabarito definitivo oficial de 2025/1: 100 questões, com Q7 e Q23 anuladas.
- Registrado o gabarito preliminar disponível de 2025/2 para as questões 61–100; o restante permanece pendente de confirmação.
- Mantida a regra de que nenhuma questão é considerada validada apenas por ter um gabarito armazenado.
- Mantidos no repositório os PDFs oficiais fornecidos para 2025/1 e 2025/2 em provas/2025/.

### Regra de validação
- Primeiro conferir **enunciado + alternativas + mídia** diretamente no caderno oficial.
- Depois conferir o **gabarito definitivo** contra a fonte oficial.
- Só então marcar a questão como validada.

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

## v0.1.0 — Inicialização
- Criação do repositório.
- Estrutura inicial do projeto.
- Preparação para GitHub Pages.

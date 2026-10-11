## v0.8.0 — Fases e navegação revisada
- Criada nova página inicial com opções Fase 1 e Fase 2.
- Fase 1 encaminha à página de ferramentas de estudo existente; Fase 2 tem página própria em desenvolvimento.
- Cabeçalho fixo com o nome do projeto no canto superior direito, sempre ligado à página inicial.
- Corrigida a navegação das questões para usar a página explícita `questao.html` com parâmetros, evitando depender da resposta 404 para renderizar o banco.
- Lista da edição exibe apenas números destacados de dois dígitos, com espaço reservado para futuras tags.
- Questão individual com navegação anterior/próxima e link ao PDF original.
- Adicionado espaço de rolagem à direita e reforçada a consistência dos caminhos do GitHub Pages.
- Banco de dados de questões preservado; nenhuma questão foi reescrita nesta versão.

## v0.7.0 — Navegação e interface do banco 2025
- Corrigida a navegação entre biblioteca, edição e questão.
- Corrigida a referência ao PDF original da edição 2025/2.
- Lista de questões reduzida a uma linha compacta por questão.
- Reservado visualmente o futuro espaço de Área · Tema · Subtema, sem implementar o sistema de tags.
- 2025/2 passa a exibir claramente “gabarito a confirmar”.
- Melhorados responsividade, contraste, espaçamento e estados de navegação.
- Estrutura futura de classificação preparada em `questoes.js`.
- Versão atualizada para **v0.7.0**.

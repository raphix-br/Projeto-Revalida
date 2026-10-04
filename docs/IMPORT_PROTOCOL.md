# Protocolo de importação do banco Revalida

## Padrão único para novas edições

1. Colocar o **PDF oficial da prova objetiva** em `provas/AAAA/AAAA-S/`.
2. Colocar o **gabarito oficial definitivo** no mesmo diretório.
3. Executar `scripts/reconstruct_revalida.py` para reconstruir automaticamente as 100 questões e as páginas.
4. Separar automaticamente enunciado e alternativas A–D.
5. Validar:
   - exatamente 100 questões;
   - exatamente quatro alternativas por questão;
   - número e página;
   - anulações;
   - gabarito oficial.
6. Importar para `questoes.js` no formato único:
   `edicao, numero, gabarito, anulada, status, fonte, conteudoValidado, pagina, enunciado, alternativas, revisaoVisual`.
7. Se houver figura/tabela, preservar a referência à página original e marcar `revisaoVisual`.
8. Rodar a validação automática.
9. Atualizar a versão e o `CHANGELOG.md`.
10. Só tornar a edição ativa no site depois de a validação e o GitHub Pages terminarem com sucesso.
11. Remover arquivos intermediários gerados pelo importador; manter apenas o PDF oficial, gabarito oficial e scripts reutilizáveis.

## Status de conteúdo

- `identificada`: número e gabarito conhecidos, conteúdo ainda não validado.
- `importada-preliminar`: conteúdo importado, mas o gabarito usado ainda é preliminar.
- `importada`: conteúdo e gabarito definitivo importados e validados.

## Regra de segurança

Nunca completar texto por memória, cursinho ou aproximação. Quando a extração automática não conseguir reconstruir uma questão, a questão fica pendente para revisão visual; o pipeline não inventa conteúdo.

## Objetivo

A partir de 2024, o mesmo pipeline deve ser usado para todas as edições futuras, evitando workflows específicos e scripts descartáveis por edição.

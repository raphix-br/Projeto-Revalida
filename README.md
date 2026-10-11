# Projeto Revalida

Banco de questões e plataforma de estudo focada no **Revalida do Inep**.

## Foco atual

A prioridade desta fase é construir uma biblioteca confiável das **questões objetivas da 1ª etapa**, trabalhando uma edição por vez. **No momento, o escopo está limitado a 2025/1 e 2025/2.**

O banco deverá evoluir até conter todas as questões das edições realizadas, com:

- texto e alternativas;
- identificação da edição e número da questão;
- tags;
- questões anuladas;
- questões com imagens/mídias;
- gabarito oficial definitivo, quando validado;
- campos preparados para conteúdos futuros, como gabarito comentado e flashcards.

As questões discursivas e a segunda etapa serão tratadas separadamente para não misturar modelos de dados.

## Fonte oficial

A referência primária é a página de **Provas e Gabaritos do Inep**. Não considerar uma questão ou gabarito como oficial apenas porque foi copiado de outra fonte.

## Fonte única de dados

Toda questão fica em:

`questoes.js`

Os HTMLs apenas leem os dados. **Não duplicar questões dentro de `index.html`, `treino_revalida.html` ou outros arquivos.**

## Estrutura mínima

```
Projeto-Revalida/
├── index.html
├── treino_revalida.html
├── questoes.js
├── README.md
├── CHANGELOG.md
├── docs/
│   └── AI_CONTEXT.md
└── .github/
    └── workflows/
        └── validate.yml
```

## Segurança contra regressões

Toda alteração deve passar pela validação automática do GitHub Actions. O fluxo verifica a sintaxe JavaScript e a estrutura básica do banco.

Antes de editar o banco, consulte `docs/AI_CONTEXT.md`.

## Status

**Em desenvolvimento — foco atual: Revalida 2025/1 e 2025/2.**


## Interface, perfil e favicon
A página inicial (index.html) contém a apresentação e uma prévia visual de login/criação de perfil. A autenticação ainda não está conectada: não são criadas contas e nenhum dado de login é enviado. O botão “Explorar sem entrar” leva a dashboard.html, onde se escolhe Fase 1 ou Fase 2.

**Favicon** é o pequeno ícone do site na aba/favoritos. O elemento HTML <title> define o título da página mostrado na aba e usado como nome sugerido ao salvar nos favoritos.

## Desempenho
desempenho.html apresenta contadores, gráfico de barras e gráfico radar. As respostas confirmadas ficam em localStorage no navegador atual; não são vinculadas a uma conta nem sincronizadas entre dispositivos. A precisão por área depende da classificação pedagógica das questões, que ainda precisa ser revisada.

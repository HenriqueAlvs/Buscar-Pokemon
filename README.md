# 🔴 Pokémon Search — Buscador de Pokémon

Um buscador de Pokémon desenvolvido com **HTML, CSS e JavaScript**, utilizando a [PokéAPI](https://pokeapi.co/) para consultar e apresentar informações detalhadas sobre diferentes Pokémon.

O projeto possui uma interface inspirada no universo Pokémon, permitindo que o usuário pesquise criaturas pelo seu ID e visualize suas principais características de forma simples, rápida e intuitiva.

## 🚀 Funcionalidades

- 🔎 Busca de Pokémon pelo ID.
- 🖼️ Exibição da imagem oficial do Pokémon.
- 📊 Consulta de experiência base.
- ⚖️ Exibição do peso em quilogramas (kg).
- 📏 Exibição da altura em metros (m).
- 🧬 Identificação da espécie.
- 🌎 Identificação da geração do Pokémon.
- ⚠️ Tratamento de erros para IDs inexistentes.
- 📱 Interface adaptável para diferentes tamanhos de tela.
- ✨ Exibição dos resultados somente após uma pesquisa válida.

## 🛠️ Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

| Tecnologia | Utilização |
|---|---|
| HTML5 | Estruturação da página |
| CSS3 | Estilização e responsividade |
| JavaScript | Lógica de programação e manipulação do DOM |
| Fetch API | Requisições HTTP para a API |
| PokéAPI | Fonte dos dados dos Pokémon |

## 🌐 API utilizada

Os dados são obtidos através da **PokéAPI**, uma API pública que disponibiliza informações sobre Pokémon, espécies, habilidades, características e muito mais.

Documentação oficial: https://pokeapi.co/docs/v2

O projeto utiliza dois endpoints principais:

**1. Dados do Pokémon**

`https://pokeapi.co/api/v2/pokemon/{id}`

Retorna informações como nome, imagem, peso, altura e experiência base.

**2. Dados da espécie**

`https://pokeapi.co/api/v2/pokemon-species/{id}`

Retorna informações complementares, como a espécie e a geração de origem.

## 📋 Informações apresentadas

Ao realizar uma pesquisa, o sistema apresenta:

- **Nome:** nome do Pokémon.
- **Imagem:** ilustração oficial disponibilizada pela API.
- **Experiência base:** quantidade de experiência base.
- **Peso:** peso convertido para quilogramas.
- **Altura:** altura convertida para metros.
- **Espécie:** classificação da espécie.
- **Geração:** geração à qual o Pokémon pertence.

## 💻 Como executar o projeto

Você pode executar o projeto localmente seguindo os passos abaixo:

1. Clone este repositório:

   ```bash
   git clone URL_DO_SEU_REPOSITORIO
   ```

2. Entre na pasta do projeto:

   ```bash
   cd nome-do-projeto
   ```

3. Abra a pasta no Visual Studio Code.

4. Execute o arquivo `index.html` utilizando a extensão Live Server ou abra-o diretamente no navegador.

5. Digite o ID de um Pokémon no campo de pesquisa e clique em **Buscar**.

Não é necessário instalar dependências ou configurar um servidor backend.

## 📁 Estrutura do projeto

```text
pokemon-search/
│
├── index.html
├── styles.css
├── main.js
│
└── README.md
```

| Arquivo | Descrição |
|---|---|
| `index.html` | Estrutura da aplicação |
| `styles.css` | Estilização e identidade visual |
| `main.js` | Lógica de busca e integração com a PokéAPI |
| `README.md` | Documentação do projeto |

## 🎯 Objetivo do projeto

Este projeto foi desenvolvido com o objetivo de praticar e aprimorar conhecimentos em desenvolvimento web front-end, especialmente:

- Estruturação de páginas com HTML.
- Estilização de interfaces com CSS.
- Manipulação de elementos HTML através do JavaScript.
- Utilização de eventos e funções assíncronas.
- Consumo de APIs externas utilizando `fetch()`.
- Manipulação e interpretação de dados JSON.
- Tratamento de erros em requisições HTTP.

## 📌 Possíveis melhorias futuras

- Busca de Pokémon pelo nome.
- Exibição dos tipos e habilidades.
- Exibição dos atributos de batalha.
- Histórico de pesquisas.
- Filtros por geração e tipo.
- Comparação entre Pokémon.

## 👨‍💻 Desenvolvido por

**Henrique Alves Fernandes**

Estudante de Análise e Desenvolvimento de Sistemas | Desenvolvedor em formação.

Projeto desenvolvido para fins educacionais e de aprendizado em desenvolvimento web.

---

**Pokémon Search** — Explorando o universo Pokémon através da programação! ⚡

*Os dados utilizados neste projeto são fornecidos pela PokéAPI, um serviço independente e não afiliado à Nintendo, Game Freak ou The Pokémon Company.*

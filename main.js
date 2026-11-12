
const formulario = document.getElementById("formPoke");

formulario.addEventListener("submit", async function(evento) {

    evento.preventDefault();

    const id = document.getElementById("idPoke").value;

    const mensagem = document.getElementById("msg");

    const resultado = document.getElementById("resultado");

    // ESCONDER RESULTADO ANTERIOR
    resultado.classList.remove("ativo");

    mensagem.textContent = "";

    try {

        mensagem.textContent = "Buscando Pokémon...";

        // BUSCAR POKÉMON
        const resposta = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${id}`
        );

        if (!resposta.ok) {
            throw new Error("Pokémon não encontrado!");
        }

        const pokemon = await resposta.json();

        // BUSCAR ESPÉCIE
        const respostaEspecie = await fetch(
            pokemon.species.url
        );

        if (!respostaEspecie.ok) {
            throw new Error("Erro ao buscar espécie!");
        }

        const especie = await respostaEspecie.json();

        // NOME
        document.getElementById("nomePokemon").textContent =
            pokemon.name;

        // IMAGEM
        const imagem = pokemon.sprites.other?.["official-artwork"]?.front_default
            || pokemon.sprites.front_default;

        const imgPoke = document.getElementById("imgPoke");

        if (imagem) {
            imgPoke.src = imagem;
            imgPoke.alt = pokemon.name;
        } else {
            imgPoke.removeAttribute("src");
        }

        // EXPERIÊNCIA BASE
        document.getElementById("basePoke").textContent =
            `Experiência base: ${pokemon.base_experience ?? "Não disponível"}`;

        // PESO
        document.getElementById("pesoPoke").textContent =
            `Peso: ${pokemon.weight / 10} kg`;

        // ALTURA
        document.getElementById("alturaPoke").textContent =
            `Altura: ${pokemon.height / 10} m`;

        // ESPÉCIE
        const nomeEspecie = especie.genera.find(
            item => item.language.name === "pt-BR"
        ) || especie.genera.find(
            item => item.language.name === "en"
        );

        document.getElementById("especiePoke").textContent =
            `Espécie: ${
                nomeEspecie
                    ? nomeEspecie.genus
                    : pokemon.species.name
            }`;

        // GERAÇÃO
        const geracao = especie.generation.name;

        const numeroGeracao = {
            "generation-i": "1ª Geração",
            "generation-ii": "2ª Geração",
            "generation-iii": "3ª Geração",
            "generation-iv": "4ª Geração",
            "generation-v": "5ª Geração",
            "generation-vi": "6ª Geração",
            "generation-vii": "7ª Geração",
            "generation-viii": "8ª Geração",
            "generation-ix": "9ª Geração"
        };

        document.getElementById("geracaoPoke").textContent =
            `Geração: ${numeroGeracao[geracao] || geracao}`;

        // MOSTRAR RESULTADO SOMENTE DEPOIS DA PESQUISA
        resultado.classList.add("ativo");

        // LIMPAR MENSAGEM
        mensagem.textContent = "";

    } catch (erro) {

        mensagem.textContent =
            "Pokémon não encontrado! Verifique o ID.";

        console.error(erro);

        // LIMPAR INFORMAÇÕES
        document.getElementById("nomePokemon").textContent = "";

        document.getElementById("imgPoke").removeAttribute("src");

        document.getElementById("basePoke").textContent = "";

        document.getElementById("pesoPoke").textContent = "";

        document.getElementById("alturaPoke").textContent = "";

        document.getElementById("especiePoke").textContent = "";

        document.getElementById("geracaoPoke").textContent = "";

        // ESCONDER RESULTADO
        resultado.classList.remove("ativo");

    }

});

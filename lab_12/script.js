const pokemonContainer = document.getElementById('pokemon-container');

async function fetchPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
    const data = await response.json();
    const pokemonPromises = data.results.map(pokemon => fetchPokemonDetails(pokemon.url));
    const pokemons = await Promise.all(pokemonPromises);
    displayPokemon(pokemons);
}

async function fetchPokemonDetails(url) {
    const response = await fetch(url);
    return response.json();
}

function displayPokemon(pokemons) {
    pokemons.forEach(pokemon => {
        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon-card');
        pokemonCard.innerHTML = `
            <h3>${capitalizeFirstLetter(pokemon.name)}</h3>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <p><strong>Types:</strong> ${pokemon.types.map(type => type.type.name).join(', ')}</p>
            <p><strong>Abilities:</strong> ${pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
        `;
        pokemonContainer.appendChild(pokemonCard);
    });
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

fetchPokemon();
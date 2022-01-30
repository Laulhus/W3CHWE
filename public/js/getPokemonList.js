export default async function getPokemonList() {
  try {
    const fetchedData = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const allPokemon = await fetchedData.json();
    const pagePokemon = allPokemon.results;
    pagePokemon.forEach((pokemon) => {
      [pokemon.id] = /\d+(?!.*\d)/.exec(pokemon.url);
    });

    return pagePokemon;
  } catch (error) {
    error.message = "Unexpected error";
  }
}

export default async function getPokemonList(index) {
  try {
    const fetchedData = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${index}&limit=20`
    );
    const allPokemon = await fetchedData.json();
    const pagePokemon = allPokemon.results;
    const pokemonWithId = [];
    pagePokemon.forEach((pokemon) => {
      const newPokemon = { ...pokemon };
      [newPokemon.id] = /\d+(?!.*\d)/.exec(newPokemon.url);
      pokemonWithId.push(newPokemon);
    });
    return pokemonWithId;
  } catch (error) {
    error.message = "Unexpected error";
  }
  return 0;
}

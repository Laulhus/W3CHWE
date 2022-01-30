/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
export default async function getSprites(list) {
  try {
    for (const pokemon of list) {
      const pokemonPage = await fetch(
        `https://pokeapi.co/api/v2/pokemon-form/${pokemon.id}/`
      );
      const pokemonDetails = await pokemonPage.json();
      pokemon.sprite = pokemonDetails.sprites.front_default;
    }
    return list;
  } catch (error) {
    error.message = "Unexpected error";
  }
  return 0;
}

/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
import CardComponent from "./components/CardComponent.js";
import PageComponent from "./components/PageComponent.js";
import DetailsComponent from "./DetailsComponent.js";

import getPokemonList from "./getPokemonList.js";
import getSprites from "./getSprites.js";

const pokemonList = await getPokemonList();
const pokemonWithImages = await getSprites(pokemonList);
const documentBody = document.querySelector("body");
const page = new PageComponent(documentBody, "pageContainer", "div");
const cardList = page.element.querySelector(".pokemon-list");

function createCards(list) {
  const pokemonCards = [];
  list.forEach((pokemon) => {
    pokemonCards.push(new CardComponent(cardList, "card", "li", pokemon));
  });
  return pokemonCards;
}

const pokemons = createCards(pokemonWithImages);

async function createCardDetails(pokemon) {
  cardList.innerHTML = "";
  const fetchedDetails = await fetch(
    `https://pokeapi.co/api/v2/pokemon-form/${pokemon.id}/`
  );
  const pokemonTypes = await fetchedDetails.json();
  pokemon.type1 = pokemonTypes.types[0].type.name;

  const fetchedAbilities = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`
  );
  const pokemonAbilities = await fetchedAbilities.json();

  pokemon.ability1 = pokemonAbilities.abilities[0].ability.name;
  pokemon.ability2 = pokemonAbilities.abilities[1].ability.name;
  new DetailsComponent(cardList, "details-card", "li", pokemon);
}
for (const pokemon of pokemons) {
  pokemon.element.addEventListener("click", () => {
    createCardDetails(pokemon.pokemon);
  });
}

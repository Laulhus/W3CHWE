/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
import ButtonComponent from "./components/ButtonComponent.js";
import CardComponent from "./components/CardComponent.js";
import PageComponent from "./components/PageComponent.js";
import DetailsComponent from "./DetailsComponent.js";

import getPokemonList from "./getPokemonList.js";
import getSprites from "./getSprites.js";

let index = 0;
let pokemonList = await getPokemonList(index);
let pokemonWithImages = await getSprites(pokemonList);
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

let pokemons = createCards(pokemonWithImages);

async function createCardDetails(pokemon) {
  cardList.innerHTML = "";
  document.querySelector(".page-buttons").innerHTML = "";
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
function addListeners(list) {
  for (const pokemon of list) {
    pokemon.element.addEventListener("click", () => {
      createCardDetails(pokemon.pokemon);
    });
  }
}

async function nextPage() {
  index += 20;
  document.querySelector(".pokemon-list").innerHTML = "";
  document.querySelector(".page-buttons").innerHTML = "";
  pokemonList = await getPokemonList(index);
  pokemonWithImages = await getSprites(pokemonList);
  pokemons = createCards(pokemonWithImages);
  addListeners(pokemons);
  addPageButtons();
}
async function previousPage() {
  if (index >= 20) {
    index -= 20;
  } else {
    return;
  }
  document.querySelector(".pokemon-list").innerHTML = "";
  document.querySelector(".page-buttons").innerHTML = "";
  pokemonList = await getPokemonList(index);
  pokemonWithImages = await getSprites(pokemonList);
  pokemons = createCards(pokemonWithImages);
  addListeners(pokemons);
  addPageButtons();
}
function addPageButtons() {
  new ButtonComponent(
    document.querySelector(".page-buttons"),
    "page-buttons__previous",
    "li",
    "Previous 20",
    () => previousPage(index)
  );
  new ButtonComponent(
    document.querySelector(".page-buttons"),
    "page-buttons__next",
    "li",
    "Next 20",
    () => nextPage(index)
  );
}
addListeners(pokemons);

addPageButtons();

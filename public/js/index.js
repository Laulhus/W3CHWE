import CardComponent from "./components/CardComponent.js";
import Component from "./components/Component.js";
import PageComponent from "./components/PageComponent.js";
import getPokemonList from "./getPokemonList.js";

const pokemonList = await getPokemonList();

const documentBody = document.querySelector("body");
const page = new PageComponent(documentBody, "pageContainer", "div");
const cardList = page.element.querySelector(".pokemon-list");

function createCards(list) {
  list.forEach((pokemon) => {
    new CardComponent(cardList, "card", "li", pokemon);
  });
}
createCards(pokemonList);

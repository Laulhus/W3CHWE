import CardComponent from "./components/CardComponent.js";
import Component from "./components/Component.js";

const page = new Component(document.body, "navbar");
console.log(page);
const mockPokemon = { name: "Pikachu", type: "shock" };
console.log(mockPokemon);
const card = new CardComponent(page.element, "pokemon", "div", mockPokemon);
console.log(card.pokemon.name);

import Component from "./components/Component.js";

export default class DetailsComponent extends Component {
  pokemon;

  constructor(parentElement, className, htmlTag, pokemon) {
    super(parentElement, className, htmlTag, pokemon);
    this.pokemon = pokemon;
    this.pokemon.name =
      this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1);
    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `<img src=${
      this.pokemon.sprite
    }><p class="details-card__name">${
      this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1)
    }</p><p>Number: ${this.pokemon.id}</p>
    <p>Type: ${
      this.pokemon.type1.charAt(0).toUpperCase() + this.pokemon.type1.slice(1)
    }</p><p>Abilities: ${
      this.pokemon.ability1.charAt(0).toUpperCase() +
      this.pokemon.ability1.slice(1)
    }, ${
      this.pokemon.ability2.charAt(0).toUpperCase() +
      this.pokemon.ability2.slice(1)
    }</p>`;
  }
}

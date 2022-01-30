import Component from "./Component.js";

export default class CardComponent extends Component {
  pokemon;

  constructor(parentElement, className, htmlTag, pokemon) {
    super(parentElement, className, htmlTag, pokemon);
    this.pokemon = pokemon;
    this.pokemon.name =
      this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1);
    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `<img src=${this.pokemon.sprite}><p>${this.pokemon.name}</p><p>#${this.pokemon.id}</p>`;
  }
}

import Component from "./Component.js";

export default class CardComponent extends Component {
  pokemon;

  constructor(parentElement, className, htmlTag, pokemon) {
    super(parentElement, className, htmlTag, pokemon);
    this.pokemon = pokemon;
  }
}

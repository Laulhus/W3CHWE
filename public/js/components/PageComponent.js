import ButtonComponent from "./ButtonComponent.js";
import Component from "./Component.js";

export default class PageComponent extends Component {
  constructor(parentElement, className, htmlTag) {
    super(parentElement, className, htmlTag);

    this.generateHTML();
    this.createNavButtons();
  }

  generateHTML() {
    this.element.innerHTML = `<header>
    <ul class="navbar">
    </ul></header>
    <main><ul class="pokemon-list"></ul></main>`;
  }

  createNavButtons() {
    new ButtonComponent(
      this.element.querySelector(".navbar"),
      "navbar__button",
      "li",
      "All Pokemon",
      () => {
        window.location = "index.html";
      }
    );
    new ButtonComponent(
      this.element.querySelector(".navbar"),
      "navbar__button",
      "li",
      "My Pokemon",
      () => {
        window.location = "myPokemon.html";
      }
    );
  }
}

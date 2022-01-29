import Component from "./Component.js";

export default class PageComponent extends Component {
  constructor(parentElement, className, htmlTag) {
    super(parentElement, className, htmlTag);

    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `<header>
    <ul>
    <li>All Pokemon</li>
    <li>My Pokemon</li>
    </ul></header>
    <main><ul class="pokemon-list"></ul></main>`;
  }
}

import Component from "./Component";

export default class PageComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "main", "main");

    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `<ul></ul>`;
  }
}

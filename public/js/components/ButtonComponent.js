import Component from "./Component.js";

export default class ButtonComponent extends Component {
  constructor(parentElement, className, htmlTag, text, actionOnClick) {
    super(parentElement, className, htmlTag);
    this.element.addEventListener("click", actionOnClick);
    this.element.innerHTML = text;
  }
}

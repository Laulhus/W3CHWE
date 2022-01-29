import Component from "./Component.js";

export default class ButtonComponent extends Component {
  constructor(parentElement, className, actionOnClick) {
    super(parentElement, className, "button");
    this.element.addEventListener("click", actionOnClick);
  }
}

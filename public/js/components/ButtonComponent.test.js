import ButtonComponent from "./ButtonComponent.js";

describe("Given a ButtonComponent component", () => {
  describe("When it gets instantiated", () => {
    test("Then it should render a button element", () => {
      const container = document.createElement("div");

      new ButtonComponent(container);

      expect(container.querySelector("button")).not.toBe(null);
    });
  });

  describe("When it gets instantiated with a function as attribute", () => {
    test("Then it should call that function when clicked", () => {
      const container = document.createElement("div");
      const action = jest.fn();

      const button = new ButtonComponent(container, "", action);
      button.element.click();

      expect(action).toHaveBeenCalled();
    });
  });
});

import PageComponent from "./PageComponent.js";

describe("Given a PageComponent component", () => {
  describe("When it gets instantiated", () => {
    test("Then it should render an 'ul' element", () => {
      const container = document.createElement("div");

      new PageComponent(container);

      expect(container.innerHTML).toMatch("ul");
    });
  });
});

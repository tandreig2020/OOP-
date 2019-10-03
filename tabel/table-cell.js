class TableCell extends BaseElement {
  constructor(parent) {
    super(parent, "td");
    this.domElement.style.border = "1px solid grey";
    this.domElement.style.padding = "5px 10px";
    this.elements = [];
  }

  add(element) {
    this.elements.push(element);
  }
  render() {
    super.render();
    this.elements.forEach(element => {
      element.render();
    });
  }
}

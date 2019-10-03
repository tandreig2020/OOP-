class TableHeadCell extends BaseElement {
  constructor(parent, text) {
    super(parent, "th");
    this.domElement.style.border = "1px solid grey";
    this.domElement.style.padding = "5px 10px";
    this.textItem = new TextItem(this.domElement, text);
  }
  render() {
    super.render();
    this.textItem.render();
  }
}

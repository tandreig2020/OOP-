class TileTitle extends BaseElement {
  constructor(parent, text) {
    super(parent, "h3");
    this.domElement.textContent = text;
  }
}

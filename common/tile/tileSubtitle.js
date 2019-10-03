class TileSubtitle extends BaseElement {
  constructor(parent, text) {
    super(parent, "h5");
    this.domElement.textContent = text;
  }
}

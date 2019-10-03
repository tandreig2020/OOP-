class OptionItem extends BaseElement {
  constructor(parent, text, value) {
    super(parent, "option");
    this.domElement.value = value;
    this.domElement.textContent = text;
  }
}

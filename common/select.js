class Select extends BaseElement {
  constructor(parent, enumEntries) {
    super(parent, "select");
    this.domElement.style.display = "block";
    enumEntries = enumEntries ? enumEntries : [];

    this.options = [];
    for (var i = 0; i < enumEntries.length; i++) {
      this.options.push(
        new OptionItem(this.domElement, enumEntries[i][0], enumEntries[i][1])
      );
    }
  }
  get isValid() {
    return this.domElement.value;
  }
  get value() {
    if (!this.isValid) {
      this.domElement.style.borderColor = "red";
    } else {
      this.domElement.style.borderColor = "initial";
    }
    return this.domElement.value;
  }
  set value(value) {
    this.domElement.value = value;
  }
  render() {
    super.render();
    for (var i = 0; i < this.options.length; i++) {
      this.options[i].render();
    }
  }
}

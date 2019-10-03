class Input extends BaseElement {
  constructor(parent, inputType) {
    super(parent, "input");
    this.domElement.type = inputType;
    this.domElement.style.display = "block";
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
}

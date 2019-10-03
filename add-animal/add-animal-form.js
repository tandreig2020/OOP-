class AddAnimalForm extends BaseElement {
  constructor() {
    super(document.body, "div");
    this.formTitle = new Title(this.domElement, "Adauga Animal");
    this.categoryLabel = new Label(this.domElement, "Category", "category");
    this.categorySelect = new Select(this.domElement, Object.entries(CATEGORY));
    this.typeLabel = new Label(this.domElement, "Type", "type");
    this.typeInput = new InputText(this.domElement);
    this.nameLabel = new Label(this.domElement, "Name", "name");
    this.nameInput = new InputText(this.domElement);
    this.ageLabel = new Label(this.domElement, "Age", "age");
    this.ageInput = new InputNumber(this.domElement);
    this.riskLabel = new Label(this.domElement, "Risk", "risk");
    this.riskSelect = new Select(this.domElement, Object.entries(RISK));
    this.imgUrlLabel = new Label(this.domElement, "Image Url", "image-url");
    this.imgUrlInput = new InputText(this.domElement);
    this.savebutton = new Button(this.domElement, "Save", () => this.save());
    this.cancelbutton = new Button(this.domElement, "Cancel", () =>
      this.cancel()
    );
    this.animalStorage = new AnimalsStorage();
  }

  get isValid() {
    return (
      this.categorySelect.value &&
      this.typeInput.value &&
      this.nameInput.value &&
      this.ageInput.value &&
      this.riskSelect.value &&
      this.imgUrlInput.value
    );
  }

  save() {
    if (this.isValid) {
      window.location = "../animals-display/animals-display.html";
      this.animalStorage.add(
        new Animal(
          this.animalStorage.storage.length,
          this.categorySelect.value,
          this.typeInput.value,
          this.nameInput.value,
          this.ageInput.value,
          this.riskSelect.value,
          this.imgUrlInput.value
          
        )

        
      );
      this.cancel();
      
    }
  }

  cancel() {
    this.categorySelect.value = CATEGORY.CARNIVOR;
    this.typeInput.value = "";
    this.nameInput.value = "";
    this.ageInput.value = "";
    this.riskSelect.value = RISK.LOW;
    this.imgUrlInput.value = "";
  }

  render() {
    super.render();
    this.formTitle.render();
    this.categoryLabel.render();
    this.categorySelect.render();
    this.typeLabel.render();
    this.typeInput.render();
    this.nameLabel.render();
    this.nameInput.render();
    this.ageLabel.render();
    this.ageInput.render();
    this.riskLabel.render();
    this.riskSelect.render();
    this.imgUrlLabel.render();
    this.imgUrlInput.render();
    this.cancelbutton.render();
    this.savebutton.render();
  }
}


new AddAnimalForm().render();
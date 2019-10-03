class AddVisitorForm extends BaseElement {
  constructor() {
    super(document.body, "div");
    this.formTitle = new Title(this.domElement, "Adauga Vizitator");
    this.genderLabel = new Label(this.domElement, "Gender", "gender")
    this.genderSelect = new Select(this.domElement, Object.entries(GENDER));
    this.nameLabel = new Label(this.domElement, "FirstName", "firstname");
    this.nameInput = new InputText(this.domElement);
    this.lastnameLabel = new Label(this.domElement, "LastName", "lastname");
    this.lastnameInput = new InputText(this.domElement);
    this.abonamentLabel = new Label(this.domElement, "Tip Abonament", "Abonament");
    this.abonamentSelect = new Select(this.domElement, Object.entries(ABONAMENT));
    this.savebutton = new Button(this.domElement, "Save", () => this.save());
    this.cancelbutton = new Button(this.domElement, "Cancel", () =>
      this.cancel()
    );

    this.visitStorage = new VisitorsStorage();
    
  }
  get isValid() {
    return (
      this.genderSelect.value &&
      this.nameInput.value &&
      this.lastnameInput.value &&
      this.abonamentSelect.value


    );
  }

  save() {
    if (this.isValid) {
      window.location = "../visitors-display/visitors-display.html"
      this.visitStorage.add(
        new Visitor (
        this.visitStorage.storage.length,
        this.genderSelect.value,
        this.nameInput.value,
        this.lastnameInput.value,
        this.abonamentSelect.value
      ));
    };
    this.cancel();
  }
  cancel() {
    this.genderSelect.value = GENDER.MALE;
    this.nameInput.value = "";
    this.lastnameInput.value = "";
    this.abonamentSelect.value = ABONAMENT.WEEKEND;
  };
  render() {
    super.render();
    this.formTitle.render();
    this.genderLabel.render();
    this.genderSelect.render();
    this.nameLabel.render();
    this.nameInput.render();
    this.lastnameLabel.render();
    this.lastnameInput.render();
    this.abonamentLabel.render();
    this.abonamentSelect.render();
    this.cancelbutton.render();
    this.savebutton.render();
  }

}



new AddVisitorForm().render();
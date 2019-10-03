class EditVisitorsForm extends BaseElement {
    constructor() {
        super(document.body, "div");
        this.formTitle = new Title(this.domElement, "Editeaza Vizitator");
        this.genderLabel = new Label(this.domElement, "Gender", "gender")
        this.genderSelect = new Select(this.domElement, Object.entries(GENDER));
        this.nameLabel = new Label(this.domElement, "FirstName", "firstname");
        this.nameInput = new InputText(this.domElement);
        this.lastnameLabel = new Label(this.domElement, "LastName", "lastname");
        this.lastnameInput = new InputText(this.domElement);
        this.abonamentLabel = new Label(this.domElement, "Tip Abonament", "Abonament");
        this.abonamentSelect = new Select(this.domElement, Object.entries(ABONAMENT));
        this.updatevisitorbutton = new Button(this.domElement, "Update", () => this.update());
        this.cancelbutton = new Button(this.domElement, "Cancel", () =>
            this.cancel()
        );

        this.visitStorage = new VisitorsStorage();
        var params = new URLSearchParams(window.location.search);
        this.visitor = this.visitStorage.getById(Number(params.get("id")));

        this.genderSelect.value = this.visitor.gender;
        this.nameInput.value = this.visitor.firstName;
        this.lastnameInput.value = this.visitor.lastName;
        this.abonamentSelect.value = this.visitor.abonament;
    }
    get isValid() {
        return (
            this.genderSelect.value &&
            this.nameInput.value &&
            this.lastnameInput.value &&
            this.abonamentSelect.value


        );
    }

  update() {
      if (this.isValid) {

        this.visitor.gender = this.genderSelect.value
        this.visitor.firstName = this.nameInput.value
        this.visitor.lastName = this.lastnameInput.value;
        this.visitor.abonament = this.abonamentSelect.value;
        this.visitStorage.update(this.visitor);
        window.location.href = "../visitors-display/visitors-display.html"

      }
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
        this.updatevisitorbutton.render();
    }

}

new EditVisitorsForm().render();
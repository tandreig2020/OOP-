class AddWorkersForm extends BaseElement {
    constructor() {
        super(document.body, "div");
        this.formTitle = new Title(this.domElement, "Adauga Personal");
        this.staffLabel = new Label(this.domElement, "Personal", "Staf");
        this.staffSelect = new Select(this.domElement, Object.entries(STAFF));
        this.nameLabel = new Label(this.domElement, "FirstName", "firstname");
        this.nameInput = new InputText(this.domElement);
        this.lastnameLabel = new Label(this.domElement, "LastName", "lastname");
        this.lastnameInput = new InputText(this.domElement);
        this.ageLabel = new Label(this.domElement, "Age", "age");
        this.ageInput = new InputNumber(this.domElement);
        this.salaryLabel = new Label(this.domElement, "Salary", "Salary");
        this.salarySelect = new Select(this.domElement, Object.entries(SALARY));
        this.savebutton = new Button(this.domElement, "Save", () => this.save());
        this.cancelbutton = new Button(this.domElement, "Cancel", () =>
            this.cancel()
        );

        this.workerStorage = new WorkersStorage();
        // this.workerStorage = new Storage("Angajati")
    }
    get isValid() {
        return (
            this.staffSelect.value &&
            this.nameInput.value &&
            this.lastnameInput.value &&
            this.ageInput.value &&
            this.salarySelect.value
        );
    }

    save() {
        if (this.isValid) {
          window.location = "../workers-display/workers-display.html"
          this.workerStorage.add(
            new Workers (
            this.workerStorage.storage.length,
            this.staffSelect.value ,
            this.nameInput.value,
            this.lastnameInput.value,
            this.ageInput.value,
            this.salarySelect.value
          ));
        };
        this.cancel();
      }

      cancel() {
        this.staffSelect.value = STAFF.DIRECTOR;
        this.nameInput.value = "";
        this.lastnameInput.value = "";
        this.ageInput.value = "";
        this.salarySelect.value = SALARY.LEVELA;
      };

      render() {
        super.render();
        this.formTitle.render();
        this.staffLabel.render();
        this.staffSelect.render();
        this.nameLabel.render();
        this.nameInput.render();
        this.lastnameLabel.render();
        this.lastnameInput.render();
        this.ageLabel.render();
        this.ageInput.render();
        this.salaryLabel.render();
        this.salarySelect.render();
        this.cancelbutton.render();
        this.savebutton.render();
      }

}

new AddWorkersForm().render();
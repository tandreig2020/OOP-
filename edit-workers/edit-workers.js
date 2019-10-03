class EditWorkersForm extends BaseElement {
    constructor() {
        super(document.body, "div");
        this.formTitle = new Title(this.domElement, "Editeaza Personal");
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
        this.updateworkerbutton = new Button(this.domElement, "Update", () => this.update());
        this.cancelbutton = new Button(this.domElement, "Cancel", () =>
            this.cancel()
        );

        this.workerStorage = new WorkersStorage();
        var params = new URLSearchParams(window.location.search);
        this.worker = this.workerStorage.getById(Number(params.get("id")));


        this.staffSelect.value = this.worker.staff;
        this.nameInput.value = this.worker.firstName;
        this.lastnameInput.value = this.worker.lastName;
        this.ageInput.value = this.worker.age;
        this.salarySelect.value = this.worker.salary;


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

    update() {
        if (this.isValid) {
    
        this.worker.staff = this.staffSelect.value ;
        this.worker.firstName = this.nameInput.value ;
        this.worker.lastName = this.lastnameInput.value;
        this.worker.age = this.ageInput.value
        this.worker.salary = this.salarySelect.value ;
        this.workerStorage.update(this.worker);

        window.location = "../workers-display/workers-display.html"

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
        this.updateworkerbutton.render();
      }

}

new EditWorkersForm().render();
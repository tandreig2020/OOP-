class Table extends BaseElement {
    constructor(parent) {
        super(parent, "table");

        this.domElement.style.borderCollapse = "collapse";
        this.domElement.style.textAlign = "center";
        this.tableHead = new TableHead(this.domElement, [
            "ID",
            "STAFF",
            "FIRSTNAME",
            "LASTNAME",
            "AGE",
            "SALARY",
            "CONTROLS"
        ]);
        this.tableBody = new TableBody(this.domElement);
        this.workerStorage = new WorkersStorage();
        this.workerStorage.get().forEach(workers => {
            this.addWorker(workers);
        });
    }

    addWorker(workers) {
        var tableRow = new TableRow(this.tableBody.domElement);

        var idCell = new TableCell(tableRow.domElement);
        idCell.add(new TextItem(idCell.domElement, workers.id));
        tableRow.addCell(idCell);

        var staffCell = new TableCell(tableRow.domElement);
        staffCell.add(new TextItem(staffCell.domElement, workers.staff));
        tableRow.addCell(staffCell);

        var firstNameCell = new TableCell(tableRow.domElement);
        firstNameCell.add(new TextItem(firstNameCell.domElement, workers.firstName));
        tableRow.addCell(firstNameCell);

        var lastNameCell = new TableCell(tableRow.domElement);
        lastNameCell.add(new TextItem(lastNameCell.domElement, workers.lastName));
        tableRow.addCell(lastNameCell);

        var ageCell = new TableCell(tableRow.domElement);
        ageCell.add(new TextItem(ageCell.domElement, workers.age));
        tableRow.addCell(ageCell);





        var salaryCell = new TableCell(tableRow.domElement);
        salaryCell.add(new TextItem(salaryCell.domElement, workers.salary));
        tableRow.addCell(salaryCell);



        var controlsCell = new TableCell(tableRow.domElement);
        controlsCell.add(
            new Button(controlsCell.domElement, "Edit", () => {


                window.location.href = `../edit-workers/edit-workers.html?id=${workers.id}`;


                alert("Are you sure?");
            })
        );
        controlsCell.add(
            new Button(controlsCell.domElement, "Delete", () => {
                var message = confirm("Are you sure?");
                if (message) {
                    this.workerStorage.delete(workers.id);
                    this.tableBody.delete(tableRow)
                }
                alert("Delete");
            })
        );
        tableRow.addCell(controlsCell);
        this.tableBody.add(tableRow);
    }

    render() {
        super.render();
        this.tableHead.render();
        this.tableBody.render();
    }
}

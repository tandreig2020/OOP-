class Table extends BaseElement {
  constructor(parent) {
    super(parent, "table");

    this.domElement.style.borderCollapse = "collapse";
    this.domElement.style.textAlign = "center";
    this.tableHead = new TableHead(this.domElement, [
      "ID",
      "CATEGORY",
      "TYPE",
      "NAME",
      "AGE",
      "RISK",
      "IMAGE",
      "CONTROLS"
    ]);
    this.tableBody = new TableBody(this.domElement);
    this.animalStorage = new AnimalsStorage();
    this.animalStorage.get().forEach(animal => {
      this.addAnimal(animal);
    });
  }

  addAnimal(animal) {
    var tableRow = new TableRow(this.tableBody.domElement);

    var idCell = new TableCell(tableRow.domElement);
    idCell.add(new TextItem(idCell.domElement, animal.id));
    tableRow.addCell(idCell);

    var categoryCell = new TableCell(tableRow.domElement);
    categoryCell.add(new TextItem(categoryCell.domElement, animal.category));
    tableRow.addCell(categoryCell);

    var typeCell = new TableCell(tableRow.domElement);
    typeCell.add(new TextItem(typeCell.domElement, animal.type));
    tableRow.addCell(typeCell);

    var nameCell = new TableCell(tableRow.domElement);
    nameCell.add(new TextItem(nameCell.domElement, animal.name));
    tableRow.addCell(nameCell);

    var ageCell = new TableCell(tableRow.domElement);
    ageCell.add(new TextItem(ageCell.domElement, animal.age));
    tableRow.addCell(ageCell);

    var riskCell = new TableCell(tableRow.domElement);
    riskCell.add(new TextItem(riskCell.domElement, animal.risk));
    tableRow.addCell(riskCell);

    var imageUrlCell = new TableCell(tableRow.domElement);
    imageUrlCell.add(new ImageItem(imageUrlCell.domElement, animal.imageUrl));
    tableRow.addCell(imageUrlCell);

    var controlsCell = new TableCell(tableRow.domElement);
    controlsCell.add(
      new Button(controlsCell.domElement, "Edit", () => {


        window.location.href = `../edit-animal/edit-animal.html?id=${animal.id}`;


        alert("Are you sure?");
      })
    );
    controlsCell.add(
      new Button(controlsCell.domElement, "Delete", () => {
        var message = confirm("Are you sure?");
        if (message) {
          this.animalStorage.delete(animal.id);
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

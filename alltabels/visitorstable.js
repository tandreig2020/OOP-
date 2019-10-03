class Table extends BaseElement {
    constructor(parent) {
      super(parent, "table");
  
      this.domElement.style.borderCollapse = "collapse";
      this.domElement.style.textAlign = "center";
      this.tableHead = new TableHead(this.domElement, [
        "ID",
        "GENDER",
        "FIRSTNAME",
        "LASTNAME",
        "ABONAMENT",
        "CONTROLS"
      ]);
      this.tableBody = new TableBody(this.domElement);
      this.visitStorage = new VisitorsStorage();
      this.visitStorage.get().forEach(visitors => {
        this.addVisitor(visitors);
      });
    }
  
    addVisitor(visitors) {
      var tableRow = new TableRow(this.tableBody.domElement);
  
      var idCell = new TableCell(tableRow.domElement);
      idCell.add(new TextItem(idCell.domElement, visitors.id));
      tableRow.addCell(idCell);
  
      var genderCell = new TableCell(tableRow.domElement);
      genderCell.add(new TextItem(genderCell.domElement, visitors.gender));
      tableRow.addCell(genderCell);
  
      var firstNameCell = new TableCell(tableRow.domElement);
      firstNameCell.add(new TextItem(firstNameCell.domElement, visitors.firstName));
      tableRow.addCell(firstNameCell);
  
      var lastNameCell = new TableCell(tableRow.domElement);
      lastNameCell.add(new TextItem(lastNameCell.domElement, visitors.lastName));
      tableRow.addCell(lastNameCell);
  
  
      var abonamentCell = new TableCell(tableRow.domElement);
      abonamentCell.add(new TextItem(abonamentCell.domElement, visitors.abonament));
      tableRow.addCell(abonamentCell);
  
    
  
      var controlsCell = new TableCell(tableRow.domElement);
      controlsCell.add(
        new Button(controlsCell.domElement, "Edit", () => {
  
  
          window.location.href = `../edit-visitors/edit-visitors.html?id=${visitors.id}`;
  
  
          alert("Are you sure?");
        })
      );
      controlsCell.add(
        new Button(controlsCell.domElement, "Delete", () => {
          var message = confirm("Are you sure?");
          if (message) {
            this.visitStorage.delete(visitors.id);
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
  
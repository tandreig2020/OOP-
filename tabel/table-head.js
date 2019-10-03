class TableHead extends BaseElement {
  constructor(parent, headers) {
    super(parent, "thead");
    this.tableRow = new TableRow(this.domElement);
    headers.forEach(header => {
      this.tableRow.addCell(
        new TableHeadCell(this.tableRow.domElement, header)
      );
    });
  }
  render() {
    super.render();
    this.tableRow.render();
  }
}

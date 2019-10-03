class TableRow extends BaseElement {
  constructor(parent) {
    super(parent, "tr");
    this.cells = [];
  }

  addCell(cell) {
    this.cells.push(cell);
  }
  render() {
    super.render();
    this.cells.forEach(cell => {
      cell.render();
    });
  }
}

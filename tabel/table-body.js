class TableBody extends BaseElement {
  constructor(parent) {
    super(parent, "tbody");
    this.rows = [];
  }
  add(row) {
    this.rows.push(row);
  }
  //delete button
  delete(row) {
    this.domElement.removeChild(row.domElement);
  }

  render() {
    super.render();
    this.rows.forEach(row => {
      row.render();
    });
  }
}
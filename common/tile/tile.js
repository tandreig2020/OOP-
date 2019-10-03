class Tile extends BaseElement {
  constructor(parent, items, itemsNumber, chartData, labels) {
    super(parent, "div");
    this.domElement.style.border = "1px solid #000000";
    this.domElement.style.width = "300px";
    this.domElement.style.height = "300px";
    this.domElement.style.textAlign = "center";

    this.tileTitle = new TileTitle(this.domElement, items);
    this.tileSubtitle = new TileSubtitle(this.domElement, itemsNumber);
    this.doughnutChart = new DoughtnutChart(this.domElement, chartData, labels);
  }

  render() {
    super.render();
    this.tileTitle.render();
    this.tileSubtitle.render();
    this.doughnutChart.render();
  }
}

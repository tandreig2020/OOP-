var visitorsChartData = [0, 0, 0];
var visitorsChartLabels = ["Male", "Female", "Children"];


var visitStorage = new VisitorsStorage("visitors");



visitStorage.get().forEach(visitor => {
  if (visitor.gender === "Barbat") {
    visitorsChartData[0] += 1;
  } else if (visitor.gender === "Femeie") {
    visitorsChartData[1] += 1;
  } else if (visitor.gender === "Copil") {
    visitorsChartData[2] += 1;
  }
});

// getRisk(this.itemsStorage.get());

new Title(document.body, "Dashboard").render();

new Tile(
  document.body,
  "Visitors DashBoard",
  visitStorage.get().length,
  visitorsChartData,
  visitorsChartLabels
).render();

new Button(document.body, "Back", () => {
  window.location.href = "../index2.html";
}).render();

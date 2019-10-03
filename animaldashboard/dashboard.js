var animalsChartData = [0, 0, 0];

var animalsChartLabels = ["Low", "Medium", "high"];


var animalStorage = new Storage("animals");

animalStorage.get().forEach(animal => {
  if (animal.risk === "Low") {
    animalsChartData[0] += 1;
  } else if (animal.risk === "Medium") {
    animalsChartData[1] += 1;
  } else if (animal.risk === "High") {
    animalsChartData[2] += 1;
  }
});


new Title(document.body, "Dashboard").render();
new Tile(
  document.body,
  "Animals DashBoard",
  animalStorage.get().length,
  animalsChartData,
  animalsChartLabels
).render();


new Button(document.body, "Back", () => {
  window.location.href = "../index2.html";
}).render();



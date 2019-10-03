var workersChartData = [0, 0, 0];
var workersChartLabels = ["MANAGER", "DIRECTOR", "EMPLOYERS"];

 var workerStorage = new WorkersStorage("personal");

workerStorage.get().forEach(workers => {
  if (workers.staff === "Manager") {
    workersChartData[0] += 1;
  } else if (workers.staff === "Director") {
    workersChartData[1] += 1;
  } else if (workers.staff === "Angajati") {
    workersChartData[2] += 1;
  }
});



new Title(document.body, "Dashboard").render();

new Tile(
  document.body,
  "Workers DashBoard",
  workerStorage.get().length,
  workersChartData,
  workersChartLabels
).render();

new Button(document.body, "Back", () => {
  window.location.href = "../index2.html";
}).render();

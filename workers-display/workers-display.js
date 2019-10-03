var workersTabel = new Title(document.body, "PERSONAL/STAFF");
workersTabel.render();

var workersButton = new Button(document.body, "ADD", ()=> {
    window.location = "../add-workers/add-workers.html";
  });
  
  workersButton.render();
  var table = new Table (document.body);
  table.render();
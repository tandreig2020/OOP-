var tableTitle = new Title(document.body, "ANIMALS");
tableTitle.render();

var addButtonn = new Button(document.body, "ADD", ()=> {
  window.location = "../add-animal/add-animal.html";
})

addButtonn.render() ;
var table = new Table(document.body);


table.render();

var visitorsTabel = new Title(document.body, "VISITORS");
visitorsTabel.render();

var visitorsButton = new Button(document.body, "ADD", ()=> {
  window.location = "../add-visitors/add-visitors.html";
});

visitorsButton.render() ;
var table = new Table(document.body);


table.render();

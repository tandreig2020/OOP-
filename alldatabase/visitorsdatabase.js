var GENDER = {
    MALE: "Barbat",
    FEMALE: "Femeie",
    CHILDREN: "Copil"
  };
  
  var ABONAMENT = {
    WEEKEND: "Weekend",
    MONTH: "Luna",
    YEAR: "An"
  };
  

  class Visitor {
    constructor(id, gender, firstName, lastName, abonament) {
      this.id = id;
      this.gender = gender;
      this.firstName = firstName;
      this.lastName = lastName;
      this.abonament = abonament;
    }
  }
  
var CATEGORY = {
  CARNIVOR: "Carnivor",
  ERBIVOR: "Erbivor"
};

var RISK = {
  LOW: "Low",
  MEDIUM: "Medium",
  HIGH: "High"
};

class Animal {
  constructor(id, category, type, name, age, risk, imageUrl) {
    this.id = id;
    this.category = category;
    this.type = type;
    this.name = name;
    this.age = age;
    this.risk = risk;
    this.imageUrl = imageUrl;
  }
}



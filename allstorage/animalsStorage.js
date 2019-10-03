class AnimalsStorage {
  constructor() {
    var storageAsJson = localStorage.getItem("animals");
    if (storageAsJson) {
      this.storage = JSON.parse(storageAsJson);
    } else {
      this.storage = [];
    }
  }
  get() {
    return this.storage;
  }
  saveToLocalStorage() {
    localStorage.setItem("animals", JSON.stringify(this.storage));
  }
  getById(id) {
    for (var i = 0; i < this.storage.length; i++) {
      if (id === this.storage[i].id) {
        return this.storage[i];
      }
    }
    return null;
  }

  add(animal) {
    this.storage.push(animal);
    this.saveToLocalStorage();
  }

  update(animal) {
    var existingAnimal = this.getById(animal.id);
    if (existingAnimal) {
      existingAnimal.category = animal.category;
      existingAnimal.type = animal.type;
      existingAnimal.name = animal.name;
      existingAnimal.age = animal.age;
      existingAnimal.risk = animal.risk;
      existingAnimal.imageUrl = animal.imageUrl;
    }
    this.saveToLocalStorage();
  }
  delete(id) {
    for (var i = 0; i < this.storage.length; i++) {
      if (id === this.storage[i].id) {
        this.storage.splice(i, 1);
        break;
      }
    }
    this.saveToLocalStorage();
  }
}

class VisitorsStorage {
  constructor() {
    var storageAsJson = localStorage.getItem("visitors");
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
    localStorage.setItem("visitors", JSON.stringify(this.storage));
  }
  getById(id) {
    for (var i = 0; i < this.storage.length; i++) {
      if (id === this.storage[i].id) {
        return this.storage[i];
      }
    }
    return null;
  }

  add(visitor) {
    this.storage.push(visitor);
    this.saveToLocalStorage();
  }

  update(visitor) {
    var existingVisitors = this.getById(visitor.id);
    if (existingVisitors) {
      existingVisitors.gender = visitor.gender;
      existingVisitors.firstName = visitor.firstName;
      existingVisitors.lastName = visitor.lastName;
      existingVisitors.abonament = visitor.abonament;
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

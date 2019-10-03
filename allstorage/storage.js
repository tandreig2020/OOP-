class Storage {
  constructor(items) {
    this.items = items;
    var storageAsJson = localStorage.getItem(this.items);
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
    localStorage.setItem(this.items, JSON.stringify(this.storage));
  }
  getById(id) {
    for (var i = 0; i < this.storage.length; i++) {
      if (id === this.storage[i].id) {
        return this.storage[i];
      }
    }
    return null;
  }

  getNextId() {
    var max = 0;
    for (var i = 0; i < this.storage.length; i++) {
      if (this.storage[i].id > max) {
        max = this.storage[i].id;
      }
    }

    return max + 1;
  }

  add(item) {
    this.storage.push(item);
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

class WorkersStorage {
    constructor() {
      var storageAsJson = localStorage.getItem("personal");
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
      localStorage.setItem("personal", JSON.stringify(this.storage));
    }
    getById(id) {
      for (var i = 0; i < this.storage.length; i++) {
        if (id === this.storage[i].id) {
          return this.storage[i];
        }
      }
      return null;
    }
  
    add(worker) {
      this.storage.push(worker);
      this.saveToLocalStorage();
    }
  
    update(worker) {
      var existingWorker = this.getById(worker.id);
      if (existingWorker) {
        existingWorker.gender = worker.gender;
        existingWorker.firstName = worker.firstName;
        existingWorker.lastName = worker.lastName;
        existingWorker.abonament = worker.abonament;
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
  
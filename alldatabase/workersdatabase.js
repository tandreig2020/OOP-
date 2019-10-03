var STAFF = {
    MANAGER: "Manager",
    DIRECTOR: "Director",
    EMPLOYERS: "Angajati"
};


var SALARY = {
    LEVELA : "Nivel1",
    LEVELB : "Nivel2",
    LEVELC : "Nivel3"
};


class Workers {
    constructor(id, staff, firstName, lastName, age, salary) {
        this.id = id;
        this.staff = staff;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.salary = salary;
    }
}
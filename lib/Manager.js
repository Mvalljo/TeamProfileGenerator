const Employee = require("./Employee")

// The Manager class is responsible for creating an object of arrays
class Manager extends Employee {
    constructor (name,id,email,officeNumber) {
        super(name,id,email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber () {
        return this.officeNumber;
    }
    getRole(){
        return 'Manager';
    }
}
module.exports = Manager;
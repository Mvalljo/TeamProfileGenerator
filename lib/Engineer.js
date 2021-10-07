const Employee = require("./Employee")

// The Engineer class is responsible for creating an object of arrays
class Engineer extends Employee {
    constructor (name,id,email,github) {
        super(name,id,email);
        this.github = github;
    }
    getGithub () {
        return this.github;
    }
    getRole(){
        return 'Engineer';
    }
}
module.exports = Engineer;
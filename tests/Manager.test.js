const Manager = require("../lib/Manager");

describe ("Manager", () =>{
    describe("getOfficeNumber()", () => {
        it("should return an Manager office number", () => {
            const officeNumber = 2135602580;
            const manager = new Manager('Maria',1,'maria@fakemail.com',officeNumber);

            expect(manager.getOfficeNumber()).toBe(officeNumber);
        })
    })
    describe("getRole()", () => {
        it("should return a manager role", () => {
            const role = 'Manager';
            const manager = new Manager('Maria',1,'maria@fakemail.com');

            expect(manager.getRole()).toBe(role);
        })
    })
})
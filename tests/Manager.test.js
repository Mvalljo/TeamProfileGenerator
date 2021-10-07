const Manager = require("../lib/Manager");

describe ("Manager", () =>{
    describe("Initialization", () => {
        it("should return an manager object", () => {
            const manager = new Manager('Maria',1,'maria@fakemail.com',2135602580);

            expect(manager.name).toEqual(expect.any(String));
            expect(manager.id).toEqual(expect.any(Number));
            expect(manager.email).toEqual(expect.any(String));
            expect(manager.officeNumber).toEqual(expect.any(Number));
        })
    })

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
            const manager = new Manager('Maria',1,'maria@fakemail.com',2135602580);

            expect(manager.getRole()).toBe(role);
        })
    })
})
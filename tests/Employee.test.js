const Employee = require("../lib/Employee")

describe ("Employee", () =>{
    describe("Initialization", () => {
        it("should return an employee object", () => {
            const employee = new Employee('Maria',1,'maria@fakemail.com');

            expect(employee.name).toEqual(expect.any(String));
            expect(employee.id).toEqual(expect.any(Number));
            expect(employee.email).toEqual(expect.any(String));
        })
    })
    describe("getName()", () => {
        it("should return an employee name", () => {
            const name = "Maria"
            const employee = new Employee(name,1,'maria@fakemail.com');

            expect(employee.getName()).toBe(name);
        })
    })
    describe("getId()", () => {
        it("should return an employee id", () => {
            const id = 4565;
            const employee = new Employee('Maria',id,'maria@fakemail.com');

            expect(employee.getId()).toBe(id);
        })
    })
    describe("getEmail()", () => {
        it("should return an employee email", () => {
            const email = "maria@fakeemail.com"
            const employee = new Employee('Maria',1,email);

            expect(employee.getEmail()).toBe(email);
        })
    })
    describe("getRole()", () => {
        it("should return an employee role", () => {
            const role = "Employee";
            const employee = new Employee('Maria',1,'maria@fakemail.com');

            expect(employee.getRole()).toBe(role);
        })
    })
})
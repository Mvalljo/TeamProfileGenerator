const Intern = require("../lib/Intern");

describe ("Intern", () =>{
    describe("Initialization", () => {
        it("should return an intern object", () => {
            const intern = new Intern('Maria',1,'maria@fakemail.com',"UTSA");

            expect(intern.name).toEqual(expect.any(String));
            expect(intern.id).toEqual(expect.any(Number));
            expect(intern.email).toEqual(expect.any(String));
            expect(intern.school).toEqual(expect.any(String));
        })
    })
    describe("getSchool()", () => {
        it("should return an intern school name", () => {
            const school = "UTSA";
            const intern = new Intern('Maria',1,'maria@fakemail.com',school);

            expect(intern.getSchool()).toBe(school);
        })
    })
    describe("getRole()", () => {
        it("should return a intern role", () => {
            const role = 'Intern';
            const intern = new Intern('Maria',1,'maria@fakemail.com',"UTSA");

            expect(intern.getRole()).toBe(role);
        })
    })
})
const Engineer = require("../lib/Engineer");

describe ("Engineer", () =>{
    describe("Initialization", () => {
        it("should return an engineer object", () => {
            const engineer = new Engineer('Maria',1,'maria@fakemail.com',"mvalljo");

            expect(engineer.name).toEqual(expect.any(String));
            expect(engineer.id).toEqual(expect.any(Number));
            expect(engineer.email).toEqual(expect.any(String));
            expect(engineer.github).toEqual(expect.any(String));
        })
    })
    describe("getGithub()", () => {
        it("should return an engineer github account name", () => {
            const github = "mvalljo";
            const engineer = new Engineer('Maria',1,'maria@fakemail.com',github);

            expect(engineer.getGithub()).toBe(github);
        })
    })
    describe("getRole()", () => {
        it("should return a engineer role", () => {
            const role = 'Engineer';
            const engineer = new Engineer('Maria',1,'maria@fakemail.com');

            expect(engineer.getRole()).toBe(role);
        })
    })
})
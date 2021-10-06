const inquirer = require("inquirer")
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
let team;


const managerInfo = [
    {
        type: 'input',
        message: 'What is your team managers name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your team managers employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your team managers email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your team managers office number?',
        name: 'officeNumber',
    },
]

const buildTeam = [
    {
        type: 'list',
        message: 'Select a option.',
        choices: ['Engineer', 'Intern', 'Finish building team'],
        name: 'choice',
    },
]

const engineerInfo = [
    {
        type: 'input',
        message: 'What is your engineers name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your engineers employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your engineers email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your engineers github?',
        name: 'officeNumber',
    },
]
// Function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully wrote HTML file')
    );
}


inquirer
    .prompt(managerInfo)
    .then((data) => {
        console.log(data);
        team = data;
        function init() {
            inquirer
                .prompt(buildTeam)
                .then((data) => {
                    if (data.choice === "Engineer") {
                        inquirer
                            .prompt(engineerInfo)
                            .then((engineerAns) => {
                                console.log(engineerAns)
                                team.name += "," + engineerAns.name;
                                let name = team.name;
                                console.log(name);
                                let names = name.split(',');
                                console.log(names);
                                team.name = names;
                                console.log(team.name);
                                init();
                            })
                    } else if (data.choice === "Finish building team") {
                        writeToFile("./dist/index.html", generateHTML(team));
                    }

                })
        }
        for (let i = 0; i < 1; i++) {
           init(); 
        }
    })

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
        name: 'github',
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
                                let names = name.split(',');
                                team.name = names;
                                team.id += "," + engineerAns.id;
                                let id = team.id;
                                let ids = id.split(',');
                                team.id = ids;
                                team.email += "," + engineerAns.email;
                                let email = team.email;
                                let emails = email.split(',');
                                team.email = emails;
                                let g = team.github;
                                if (g === undefined) {
                                    team.github += "," + engineerAns.github;
                                    let github = team.github;
                                    let githubs = github.split(',');
                                    team.github = githubs;
                                } else {
                                    let githubs = "";
                                    let git;
                                    git += "," + engineerAns.github;
                                    githubs = git.split(',');
                                    g.push(githubs[1]);
                                    var filtered = g.filter(function (el) {
                                        return el !== 'undefined';
                                    });
                                    team.github = filtered;
                                }
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

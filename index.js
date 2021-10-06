const inquirer = require("inquirer")
const fs = require('fs');
const generateHTML = require ('./src/generateHTML');


const questions = [
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

// Function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully wrote HTML file')
    );
}

// Function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile("./dist/index.html",generateHTML(data));
        })
}

// Function call to initialize app
init();
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const genMarkdown = require('./utils/generateMarkdown');
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    'What will be the title of your README?',
    'What will be the description of your README?',
    'How can the user install your application?',
    'Please enter your usage information:',
    'Please provide contribution guidelines:',
    'How can the user run the tests for your application?',
    'Please enter your GitHub username:',
    'Please enter your email for future questions:',
    'What are the licenses your application uses?'
];

const licenseChoices = ['GPL v3','AGPL v3','LGPL v3','MPL 2.0','Apache 2.0','MIT','Boost 1.0','Unlicense']

inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title'
        },
        {
            type: 'input',
            message: questions[1],
            name: 'desc'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'install'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage'
        },
        {
            type: 'input',
            message: questions[4],
            name: 'contribute'
        },
        {
            type: 'input',
            message: questions[5],
            name: 'test'
        },
        {
            type: 'input',
            message: questions[6],
            name: 'gitusername'
        },
        {
            type: 'input',
            message: questions[7],
            name: 'email'
        },
        {
            type: 'list',
            message: questions[8],
            choices: licenseChoices,
            loop: false,
            name: 'license'
        }
    ])

    // TODO: Create a function to write README file
    .then((response) => {
        fs.writeFile('README.md', genMarkdown(response), (error) => {
            error ? console.error(error) : console.log('Woohoo! Please check your folder for your automatically generated README.md file');
        })
    })
// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

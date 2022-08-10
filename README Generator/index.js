// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const genMarkdown = require('./utils/generateMarkdown');
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    'What will be the title of your README?',
    'What was your motivation for this application?',
    'Why did you build this application?',
    'What problem does your application solve?',
    'What did you learn throughout the process?',
    'How can the user install your application?',
    'Please enter your usage information:',
    'Please provide contribution guidelines:',
    'How can the user run the tests for your application?',
    'Please enter your GitHub username:',
    'Please enter your email for future questions:',
    'What are the licenses your application uses?'
];

const licenseChoices = ['GPL v3.0','AGPL v3.0','LGPL v3.0','MPL 2.0','Apache 2.0','MIT','BSL 1.0','Unlicense']

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
            name: 'motivation'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'build'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'solution'
        },
        {
            type: 'input',
            message: questions[4],
            name: 'learn'
        },
        {
            type: 'input',
            message: questions[5],
            name: 'install'
        },
        {
            type: 'input',
            message: questions[6],
            name: 'usage'
        },
        {
            type: 'input',
            message: questions[7],
            name: 'contribute'
        },
        {
            type: 'input',
            message: questions[8],
            name: 'test'
        },
        {
            type: 'input',
            message: questions[9],
            name: 'gitusername'
        },
        {
            type: 'input',
            message: questions[10],
            name: 'email'
        },
        {
            type: 'list',
            message: questions[11],
            choices: licenseChoices,
            loop: false,
            name: 'license'
        }
    ])

    // TODO: Create a function to write README file
    .then((data) => {
        fs.writeFile('README.md', genMarkdown(data), (error) => {
            error ? console.error(error) : console.log('Woohoo! Please check your folder for your automatically generated README.md file');
        })
    })
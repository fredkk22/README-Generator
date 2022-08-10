// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const genMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    'What will be the title of your README?',
    'What will be the description of your README?',
    'How can the user install your application?',
    'Please enter your usage information:',
    'Please provide contribution guidelines:',
    'How can the user run the tests for your application?',
    'Please enter your GitHub username:',
    'Please enter your email for future questions:'
];

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
    ])

    // TODO: Create a function to write README file
    .then((response) => {
        fs.writeFile('README.md', JSON.stringify(response), (error) => {
            error ? console.error(error) : console.log('Woohoo! Please check for your generate README.md file');
        })
    })
// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

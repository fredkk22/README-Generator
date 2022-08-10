// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const genMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    'What will be the title of your README?',
    'What will be the description of your README?',
    'How can the user install your application?',
    'Please enter your usage information'
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
            name: 'install'
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

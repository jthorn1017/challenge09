// TODO: Include packages needed for this application
const inquirer  = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
    },
    {
        type: "imput",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use."
    },
    {
        type: "input",
        name: "contributing",
        message: "What are the guidelines for contributing to this project?"
    },
    {
        type: "input",
        name: "test",
        message: "What are the test instructions?"
    },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log("This is answers", answers)
        let template = generateMarkdown(answers);
        console.log(template)
        fs.writeFile("readmegenerator.md", template, (err) => {
            if (err) {
                throw err
            } else{
                console.log("Successfully created your file.")
            }
        });
        })
}

// Function call to initialize app
init();
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const { writeFile, copyFile } = require('./Develop/utils/generateMarkdown');

//Prompt the user questions to populate the README.md
function promptUser() {
    return inquirer.prompt([{
            type: "input",
            name: "projectTitle",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?"
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache license 2.0	",
                "Academic Free License v3.0	",
                "GNU Affero General Public License v3.0	",
                "ISC",
                "MIT",
                "Mozilla Public License 2.0	",
                "Open Software License 3.0	",
                "PostgreSQL License	"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this projects?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue? "
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);
}

const promptReadME = readMEData => {
    console.log(`ADD A NEW READ ME`)

    // If there's no 'projects' array property, create one
    if (!readMEData.projects) {
        readMEData.projects = [];
    }
    return inquirer
        .then(projectData => {
            readMEData.projects.push(projectData);
            if (projectData.confirmAddProject) {
                return promptReadME(readMEData);
            } else {
                return readMEData;
            }
        });
};

//take user questions and write to html file in generateMarkdown page
promptUser()
    .then(promptReadME)
    .then(readMEData => {
        return generatePage(readMEData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });

//     // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
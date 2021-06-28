const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown.js")
const writeFileAsync = util.promisify(fs.writeFile);

//Prompt the user questions to populate the README.md
function promptUser() {
    return inquirer.prompt([{
            type: "input",
            name: "projectTitle",
            message: "What is the project title?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a project title.');
                    return false;
                }
            },
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
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open",
                "PostgreSQL",
                "Microsoft",
                "Eclipse",
                "Educational"
            ]
        },
        {
            type: "input",
            name: "contributors",
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
            message: "What are the steps if there is an issue? "
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your github username.');
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email.');
                    return false;
                }
            },
        },
    ]);
}

// Async function using util.promisify 
async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateReadme(answers);
        // Write new README.md to dist directory
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('Successfully wrote to README.md');
    } catch (err) {
        console.log(err);
    }
}

init();
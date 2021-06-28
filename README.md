# Professional README Generator


## Description 
This is a application that prompts the user specific questions to automatically generate a perfect README.md for any project in just a few minutes.


## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation
you will need to either download it or clone it to your machine.<br>
Click the green "clone or download repository" button on the top<br>
right of the repository. In order to clone, you will need to have<br>
git installed on your computer.<br>

Once project is installed/cloned install the packages below<br>
* npm install prompt
* npm install inquirer

Now your ready to use the application! 👏<br>
👉  Open Terminal/command line in your text editor make sure you are in the project directory.<br>
👉  enter ```node index.js``` and press enter.<br>
👉  Answer the prompts accordingly.<br>
👉  Once you get a response of success after anwsering all the prompts go ahead and <br>checkout your newly created README.md in the dist folder!<br>


## Usage 

<br />

https://user-images.githubusercontent.com/52016382/123696620-86adf580-d821-11eb-8a87-41a518a2a928.mp4

## Credits
For badges & license https://shields.io/category/build

Inquirer https://www.npmjs.com/package/inquirer

Prompt https://www.npmjs.com/package/prompt

node.js https://nodejs.org/en/

<br />

## License
![badge](https://img.shields.io/npm/l/inquirer)

## Badges
![Language](https://img.shields.io/github/languages/top/rmwillow/readme-generator-)


## Contributing
![badge](https://img.shields.io/badge/GitHub-Rmwillow-pink)

## Tests
```
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
```

```
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
```
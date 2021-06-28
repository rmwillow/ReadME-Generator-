// generateReadme function populating the README.md
//table of contents contains links to each section 

function generateReadme(answers) {
    return `
<h1 align="center">${answers.projectTitle}</h1>
  
![badge](https://img.shields.io/badge/license-${answers.license}-orange)<br />

<br />

## Description 📋
${answers.description}



## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Installation 📁  
${answers.installation}

<br />
<br />

## Usage 💻 
${answers.usage}

<br />
<br />

## License
![badge](https://img.shields.io/badge/license-${answers.license}-orange)
<br />
This application is covered by the ${answers.license} license. 

<br />
<br />

## Contribution ➕ 
${answers.contributing}

<br />
<br />

## Tests ✔️ 
${answers.tests}

<br />
<br />

## Questions ❔ 
${answers.questions}

<br />
<br />

📍 Find me on GitHub: [${answers.username}](https://github.com/${answers.username})

<br />

📧  Email me with any questions: ${answers.email}

<br />
<br />

## Created by Rachel McGrath [README-generator](https://github.com/rmwillow/ReadME-Generator-)
    `;
}


//export readme to display 
module.exports = generateReadme;
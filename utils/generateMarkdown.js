function generateReadme(answers) {
    return `
<h1 align="center">${answers.projectTitle} 👋</h1>
  
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
    <h1 align="center">${answers.title}</h1>

    ${answers.description}
    ${answers.usage}
    ${answers.installation}
    ${answers.contribution}
    ${answers.tests}
    `;
}

module.exports = generateReadme;
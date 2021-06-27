//Create project title
const title = titleText => {
    return `
  <h1 id="title">${title}</h1>`;
};

//links I click on the links in the Table of Contents
//THEN I am taken to the corresponding section of the README

//GitHub username this is added to the section of the README entitled Questions, with a link to my GitHub profile
const username = githubUserName => {
    return `
  <section id="readMeOverview">
  <a href="https://github.com/rmwillow">${username}</a>

<a href="#description">description</a>
<a href="#usageInformation">usage information</a>
<a href="#installationInstructions">installation instructions</a>
<a href="#contributionGuidelines">contribution guidelines</a>
<a href="#testInstructions">test instructions</a>
</section>`;
};
//read me sections for each questions
//description, installation instructions, usage information, contribution guidelines, and test instructions


//description
const description = descriptionReadMe => {
    return `
      <section id="description">
      <div>${descriptionReadMe}</div>
      </section>
  
  `;
}

//usage information
const usage = usageInformation => {
    return `
    <section id="usageInformation">
    <div>${usageInformation}</div>
    </section>

`;
}

//installation
const installation = installInstructions => {
    return `
  <section id="installationInstructions">
  <div>${installInstructions}</div>
  </section>

`;
}

//contributionGuidelines
const contribution = contributionGuidelines => {
    return `
<section id="contributionGuidelines">
<div>${contributionGuidelines}</div>
</section>

`;
}

//testInstructions
const tests = testInstructions => {
    return `
<section id="testInstructions">
<div>${testInstructions}</div>
</section>

`;
}


// export function to generate entire page
module.exports = templateData => {
    // destructure page data by section
    // const { title, username, description, usage, installation, contribution, tests } = templateData;

    return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Portfolio Demo</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <header>
    <div class="container flex-row justify-space-between align-center py-3">
      <h1 class="page-title text-secondary bg-dark py-2 px-3">${title}</h1>
      <nav class="flex-row">
        <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${username.github}">GitHub</a>
      </nav>
    </div>
  </header>
  <main class="container my-5">
    ${description}
    ${usage}
    ${installation}
    ${contribution}
    ${tests}
  </main>
  <footer class="container text-center py-3">
    <h3>Copyright &copy; <script>document.write(new Date().getFullYear())</script> ${title.name} All Rights Reserved</h3>
  </footer>
</body>
</html>
`;
};

//my email address, this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

//badge added to license section
//notice is added to the section of the README entitled License that explains which license the application is covered under

// module.exports = generateMarkdown;
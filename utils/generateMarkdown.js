// TODO: Create a function that returns a license badge based on which license is passed in



// Ive Created a function to generate markdowns for README
function generateMarkdown(data) {
  return `# ${data.title}
  # ${data.projectname}
  ##${data.license}
  ## Description
  ${data.description}
  ## Table of Contents
  ## Table of Contents
 * [Installation](#installation)
 * [Usage](#usage)
 * [License](#license)
 * [Contributing](#contributing)
 * [test](#tests)
 * [Your Info](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Creator Info
  [${data.githubName}](https://github.com/${data.githubName})
  ${data.githubEmail}

`;
}




module.exports = generateMarkdown;

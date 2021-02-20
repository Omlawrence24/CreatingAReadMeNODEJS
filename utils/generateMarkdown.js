// TODO: Create a function that returns a license badge based on which license is passed in

// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # ${data.projectname}
  ###${data.license}
  ## Description
  ${data.description}
  ## Table of Contents
 * [Table of Contents](#contents)
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
  ## User Story and Directions
  ${data.githubname}
  ${data.githubemail}
`;
}




module.exports = generateMarkdown;

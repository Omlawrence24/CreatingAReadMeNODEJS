// TODO: Create a function that returns a license badge based on which license is passed in



// Ive Created a function to generate markdowns for README
function generateMarkdown(data) {
  return `
  # ${data.projectname}
  ### ${data.license}
  ## Description
  ${data.description}
  ## Table of Contents
  ## Table of Contents
 * [Installation](#installation)
 * [Usage](#usage)
 * [License](#license)
 * [Contributing](#contributing)
 * [Test](#tests)
 * [Developer Info](#questions)
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
  ## Developer Info
  ${data.questions}
  ## For any Questions or Concerns please Reach me at the info below.
  
  [${data.githubName}](https://github.com/${data.githubName}) 

  ${data.githubEmail}
  ## I've attached a link to the Step by Step Functionality of this Project.
  https://drive.google.com/file/d/1LF2F8HlBsD_LWZ_wZyMkmh_3RvaOx3Gt/view
`;
}




module.exports = generateMarkdown;

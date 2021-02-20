const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);


const questions = [];

// const writeFileAsync = promisify(fs.writeFile);

// Creates a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
}

// This prompts for read me input 
function init() {
  console.log("Welcome to Node");
  console.log("README.md Generator! Answer some questions, and get a README.md file based on your response!");
  inquirer.prompt([
    {
      type: "input",
      name: "projectname",
      message: "What would you like to name your Project?"
    },
    {
      type: "input",
      message: "Table of Contents",
      name: "contents",

    },
    {
      type: "input",
      message: "Description",
      name: "description",
    },

    {
      type: "input",
      message: "Installation",
      name: "installation",
    },

    {
      type: "input",
      message: "Usasge",
      name: "usage",
    },

    {
      type: "list",
      message: "License",
      name: "license",
      choices: ['MIT', 'APACHE','BSD'], 
    },
    {
      type: "input",
      message: "Contributing",
      name: "contributing",
    },
    {
      type: "input",
      message: "Tests",
      name: "tests",
    },
    
    {
      type: "input",
      message: "Developer Info",
      name: "questions",
    },
    {
      type: "input",
      message: "What is your GitHub Name",
      name: "githubName",
    },
    {
      type: "input",
      message: "What is your GitHub Email?",
      name: "githubEmail",
    },
     ])
  // gathers the data to create the README after user input 
    .then(function (data) {
      const read = generateMarkdown (data);
     
      return writeFileAsync("output/README.md", read);
     
       })
       .then(function() {
     console.log("Successfully wrote to output folder")
       })
       .catch(function(err) {
         console.log(err);
       });
         

 
}
    init() 
    
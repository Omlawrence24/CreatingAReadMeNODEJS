const inquirer = require("inquirer");
const fs = require("fs");
// const Choices = require("inquirer/lib/objects/choices");
// TODO: Include packages needed for this application
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [];

// const writeFileAsync = promisify(fs.writeFile);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
}

// TODO: Create a function to initialize app
function init() {
  console.log("Welcome to Node");
  console.log("README.md Generator! Answer some questions, and get a README.md file based on your response!");
  inquirer.prompt([
    {
      type: "input",
      name: "title",
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
      choices: ['license1', 'license2','license3','license4'], //MIT, APACHE, etc...
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
      message: "Questions",
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
    
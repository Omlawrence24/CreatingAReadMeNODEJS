const inquirer = require("inquirer");

// TODO: Include packages needed for this application
fs = require("fs")
inquirer = require("inquirer")

// TODO: Create an array of questions for user input
const questions = [];

inquirer 
.prompt 
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
  
      if (err) {
        return console.log(err);
      }
  
      console.log("Success!");
  
    });}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Welcome to Node"
    },
    {
        type:"input",
        message:"What would you like to nme your Project?",
        name: "projectname",
        
      },
    {
      type:"input",
      message:"Table of Contents",
      name: "Table of Contents",

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
        type: "input",
        message: "License",
        name: "license",
      },
      {
        type: "input",
        message: "Contributing",
        name: "contributing",
      },
      {
        type: "input",
        message: "Tests ",
        name: "tests",
      },
    

    {
      type: "input",
      message: "Questions",
      name: "questions",
    },
    
  ]).then(function(data) {
  
    var filename = data.name.toLowerCase().split(' ').join('') + ".json";
  
  });
  }

// Function call to initialize app
init();

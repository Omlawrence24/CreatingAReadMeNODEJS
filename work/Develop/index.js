const inquirer = require("inquirer");
const fs = require("fs");
const Choices = require("inquirer/lib/objects/choices");
// TODO: Include packages needed for this application
const util = require("util");
const generateReadme = require("./generateReadme");

const writeFileAsync = util.promisify(fs.writeFile);
const api = require("./api")

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
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Welcome to Node"
    },
    {
      type: "input",
      message: "What would you like to name your Project?",
      name: "projectname",

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
      choices: ['license1', 'license2','license3','license4'],
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
    {
      type: "input",
      message: "What is your GitHub Name",
      name: "questions",
    },
    {
      type: "input",
      message: "What is your GitHub Email?",
      name: "questions",
    },
     ])

    .then(function (data) {
      const readme = generateReadme (data)
     
      return writeFileAsync("readme.md", html);
     
       })
       .then(function() {
     console.log("Successfully wrote to index")
       })
       .catch(function(err) {
         console.log(err);
       });
         

 
}
//   function generateHTML(data) {
//     return `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Document</title>
//     </head>
//     <body>
//         <div class="card text-center">
//             <div class="card-header">
//               README
//             </div>
//             <div class="card-body">
//               <h1 id ="projectname"class="card-title">${data.title}</h1>
//               <h2 id ="projectname"class="card-title">${data.projectname}</h2>
//               <h1 id="topics"class="card-text"> Table of Contents</h1>
//               <h4 id="topics"class="card-text"> ${data.contents}</h4>
//               <h1 id="topics"class="card-text"> Description </h1>
//               <h4 id="topics"class="card-text"> ${data.description}</h4>
//               <h1 id="topics"class="card-text"> Installation </h1>
//               <h4 id="topics"class="card-text"> ${data.installation}</h4>
//               <h1 id="topics"class="card-text"> Usage </h1>
//               <h4 id="topics"class="card-text"> ${data.usage}</h4>
//               <h1 id="topics"class="card-text"> License </h1>
//               <h4 id="topics"class="card-text"> ${data.license}</h4>
//               <h1 id="topics"class="card-text"> Contributing </h1>
//               <h4 id="topics"class="card-text"> ${data.contributing}</h4>
//               <h1 id="topics"class="card-text"> Tests </h1>
//               <h4 id="topics"class="card-text"> ${data.tests}</h4>
//               <h1 id="topics"class="card-text"> Questions </h1>  
//               <h4 id="topics"class="card-text"> ${data.questions}</h4>
//             </div>
//             <div class="card-footer text-muted">
              
//             </div>
//           </div>
        
//     </body>
//     </html>`
//   }
  
    init() 


// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./Utils/generateReadMe');

const licenses = ['MIT License','GNU GPLv3','GNU LGPLv3', 'The Unlicense','No License'];

// TODO: Create an array of questions for user input
const questions = [ 

      {
        type:'input',
        name:'title',
        message:'What is your title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Write a brief description of the project:',
      },

      {
        type: 'input',
        message: 'What is your user name?',
        name: 'username',
        default: 'bchamidou',
     },
     
     {
        type: 'input',
        name: 'repository',
        message: 'Enter the repository name:',
     },

     {
        type: 'list',
        message: 'What kind of project it is?',
        name: 'installation',
        choices: ['Website', 'NodeJS', 'Other'],
     },

      {
         type: 'list',
         name: 'test',
         message: 'Does you project has a test script?',
         choices:['Yes','No'],
         default: 'No',
      },
      {
          type:'checkbox',
          name:'license',
          message:'What License has been applied?',
          choices: licenses
      },
       
      {
          type:'input',
          name:'email',
          message:'What is your email?',
      },

];

function writeToFile(questions) {
    inquirer
      .prompt(questions)
          .then(answers =>{
            answers.confirm === answers.password
              ? console.log('Success!')
              : console.log('You forgot your password already?!')
        
            console.log(answers)
            const readmeContent = generateReadMe(answers) 

            fs.writeFile('README.md', readmeContent, function (err) {
            if (err) 
            console.log('Could not save');
            else
            console.log('Page created!');
            console.log("File written successfully\n");
 
          })
          })
      
        }
        function init() {
            writeToFile(questions)
          }
          
          // // Function call to initialize app
          init();
          

    
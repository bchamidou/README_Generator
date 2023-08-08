// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./Utils/generateReadMe');

// TODO: Create an array of questions for user input
const questions = [

      {
        type:'input',
        name:'title',
        message:'What is your title?',
      },
      {
        type:'input',
        name:'Purpose',
        message:'What is the purpose of your project?',
      },

      {
          type: 'input',
          message: 'What is your user name?',
          name: 'username',
          default: 'cheikHBagagnan'
        },
        {
          type: 'password',
          message: 'What is your password?',
          name: 'password',
        },
        {
          type: 'password',
          message: 'Re-enter password to confirm:',
          name: 'confirm',
        },
        {
          type:'input',
          name:'Installation',
          message:'How do you Install it?'
      },
      {
          type:'input',
          name:'Usage',
          message:'How do you use it?'
      },
      {
          type:'checkbox',
          name:'Licenses',
          message:'What License has been applied?',
          choices:['MIT','GNU GPLv3','GNU LGPLv3', 'GNU AGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense']
      },
      {
          type:'input',
          name:'Contributors',
          message:'Name of Contributors'
      },
      {
          type:'input',
          name:'Weblink',
          message:'What is the link to your website?'
      },
      {
          type:'input',
          name:'Github',
          message:'Github name to redirect to your Github profile'
      },
      {
          type:'input',
          name:'Email',
          message:'What is your email?'
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
              console.log("The written has the following contents:");
              // console.log(fs.readFileSync("books.txt", "utf8"));
          })
          })
      
        }
    

    writeToFile(questions)
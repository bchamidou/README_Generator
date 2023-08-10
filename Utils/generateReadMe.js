    // TODO: Create a function that returns a license badge based on which license is passed in
    // If there is no license, return an empty string

    function renderLicenseBadge(license) {
    let badge = "";

    if(license != 'No License') {
        badge = "https://img.shields.io/badge/License-MIT%20License-blue";
    }

    return badge;
    }
    
// TODO: Create a function that returns the license link
// If there is no license, return an empty string

    function renderLicenseLink(license) {
    let licenseLink='';
    console.log(license)
    // select correct license link for the selected license
    if(license === 'MIT License') { 
        licenseLink = "https://mit-license.org/";
        }else if (license =  "GNU GPLv3"){ 
        licenseLink = "https://www.gnu.org/licenses/gpl-3.0.md";
        }else if (license ===  "GNU LGPLv3") {
        licenseLink = "https://www.gnu.org/licenses/lgpl-3.0.md";
        }else if (license === "The Unlicense"){ 
        licenseLink = "https://unlicense.org/";
    } else {
        licenseLink = "hhjjioop";
    }
    console.log(licenseLink)
    return licenseLink;
}

function renderLicenseSection(license) {
    let licenseText;

    // if a license has been selected, create License section
    // with link to license information
    if (license != 'No License') {
    licenseText=`
    This software/code is licensed under the ${license}; 
    to use this software/code you must agree to follow and comply the License.
    A copy of the License can be found at: ${renderLicenseLink(license)}`
    }
    else{
        licenseText='Not licensed.';
        }

    return licenseText;
}
    
// Function to get current year text
function getYear(){
    var date = new Date();
    var n = date.getFullYear();
    return n;
}

// Render Installation Instructions

function renderInstallation(answers){
    if (answers.Installation === 'Website')
    {
        let WebsiteInstructions = `            
        1. To install this website to a local computer, clone the repository that is found in the following link:
    
        * Repository link on GitHub website: https://github.com/${answers.username}/${answers.repository}
    
        2. Double click on the \u0060\u0060\u0060index.html\u0060\u0060\u0060 file to open the website. 
        The website will open on your default web browser. 
    
        Or
    
        1. The live webpage is served on the GitHub Pages website and it can be accessed by clicking on the following link: https://${answers.username}.github.io/${answers.repo}/.
        The webpage will open on your default browser.`;
    
    return (WebsiteInstructions);
    }

    else if(answers.installation === 'NodeJS'){

        let nodeInstructions = `
        1. To install a Node JS project, install [Node JS](https://nodejs.org/)
        2. Clone the GitHub repository to you local computer. Click on the following link.
        * Repository link : https://github.com/${answers.username}/${answers.repository}`;
    
    return (nodeInstructions);
    }
    else{

        let otherInstructions = `
        Clone the GitHub repository to you local computer. Click on the following link.
        * Repository link : https://github.com/${answers.username}/${answers.repository}`;

    return (otherInstructions);
    }

}

// Render Usage

function renderUsage(answers){
    if (answers.installation === 'Website')
    {

    let websiteUsage = `On the local installation folder, open the website by double-clicking the \u0060\u0060\u0060index.html\u0060\u0060\u0060.`;

    return websiteUsage;

    }

    else if(answers.installation === 'NodeJS'){

    let nodeUsage = `To execute the script, open a Git terminal on the main project folder (cloned folder) Run the following command: \u0060\u0060\u0060node index.js\u0060\u0060\u0060.`;

    return nodeUsage;

    }
    else{

        let otherUsage = `[Contact](#Questions) the developer for additional information.`;

        return otherUsage;
    }

}

// Function to render test text

function renderTest(answers){
    
    let testInfo='No test was written for this application/software.'
    if (answers.Test==='Yes'){

    testInfo=`

    To run the software test, complete the following:

    1. Run \u0060\u0060\u0060npm install\u0060\u0060\u0060 in your console. This step shall be done only once.

    2. Run \u0060\u0060\u0060npm run test\u0060\u0060\u0060 in your console.
    
    The test script can be found at the test folder: https://github.com/${answers.username}/${answers.repo}/.
    
    `;
    
    }
    return testInfo;
}

// TODO: Create a function to generate markdown for README

function generateReadMe(answers){ 
    return`
# Project: ${answers.title}
 ![License Badge](${renderLicenseBadge(answers.license)})

## Description
***

${answers.description}

## Table of Contents
***
- [Installation](#installation)
- [Project Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)


## Installation
***

The installation can be completed by following these instructions:
${renderInstallation(answers)}  

## Usage 
***

${renderUsage(answers)}  

## Contributing
***

I  utilized several coding website for help, including STackOverflow, w#schools.com, …. I also watched YouTube video tutorials and the course resources.

Any developers who are interested in contributing ideas for this application must agree to follow and comply with the Contributor Covetnant: Code of Conduct.
The Contributor Covenant Code of Conduct can be found in the following address:

[Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md/)


## Tests
***

${renderTest(answers)}

## Questions
***

For additional questions, please contact ${answers.email}.
or my Github page:(https://github.com/${answers.username})

## License
***

This application is covered under the ${answers.license}.

Copyright (c) ${getYear()} ${answers.username}.
${renderLicenseSection(answers.license)} 

`;
}

    module.exports = generateReadMe;
    
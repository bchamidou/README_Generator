// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string

// function renderLicenseBadge(license) {
//     let licenseType = license.license; // i think this is problem #1
//       let yourLicense = ''
//       if(licenseType === 'MIT') {
//         yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
//       } else if (licenseType === 'GPLv3') {
//         yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
//       } else if (licenseType === 'GPL') {
//         yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
//       } else {
//         license.license = "N/A"
//       }
//       return yourLicense;
//     }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//     let licenselinks={
//         MIT:'',
//         GPLv3:'',
//         GPL:''
//     }
//     return licenselinks[licesnce];
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {

//     let licenseText;
  
//     if (license != 'No License'){
//       licenseText=`
    
//     This software/code is licensed under the ${selectLicense(license).fullName}; to use this software/code you must agree to follow and comply the License. A copy of the License can be found at:

//     ${selectLicense(license).link}
//     `
//     }
    
//     else{
//       licenseText='Not licensed.';
    
//     }
//     return licenseText;
  
//   }

    function generateReadMe(answers){ 
        return`
    # ${answers.title} 
    
    ## Table of Contents
    - [Project description](#Description)
    - [Installation](#installation)
    - [Project Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Description
    ${answers.description}
    
    ## Installation
    ${answers.Installation}
    
    ## Usage
    ${answers.Usage}
    
    ## License= 
    This application is covered under the ${answers.Licence} license.
    
    ## Contributing
    ${answers.Contributing}
    
    ## Tests
    ${answers.Tests}
    
    ## Questions
    For additional questions, please contact ${answers.email}.
    GitHub: [${answers.github}](https://github.com/${answers.github})
    `;
    }
    
     module.exports = generateReadMe;
     
// License Badge Generator Function
function renderLicenseBadge(license) {
  if (license) {
    return '![License Badge](https://img.shields.io/badge/License-' + license.split(' ').join('_') + '-blue.svg)'
  } else {
    return;
  }
}

// License Used Generator Function
function renderLicense(license) {
  if (license) {
    return 'License Used: ' + license
  } else {
    return;
  }
}

// License Section Generator Function
function renderLicenseSection(license) {
  if (license) {
    return '## License \n\n' + renderLicense(license);
  } else {
    return;
  }
}

// README.md Text Generator Function
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  ${data.motivation}

  ${data.build}

  ${data.solution}

  ${data.learn}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribute}

  ## Tests
  ${data.test}

  ## Questions
  https://github.com/${data.gitusername}

  Contact Me: ${data.email}

  ${renderLicenseSection(data.license)}`;
}

module.exports = generateMarkdown;
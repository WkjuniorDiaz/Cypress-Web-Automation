# Cypress Test Automation Framework

## Overview
This repository contains a Cypress-based test automation framework designed to streamline end-to-end testing for web applications. The framework is built with scalability, maintainability, and ease of use in mind.

## Features
- **Comprehensive Test Coverage**: Covers UI testing.
- **Modular Design**: Follows the Page Object Model (POM) to ensure test cases are easy to maintain and extend.
- **Custom Commands**: Includes reusable custom commands to simplify test writing.
- **Cross-Browser Testing**: Supports running tests across different browsers.
- **Reporting**: Generates detailed reports using Mochawesome.

## Prerequisites
- Node.js (version 16 or higher)
- npm (version 8 or higher)
- Cypress (version 13 or higher)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/WkjuniorDiaz/Cypress-Web-Automation.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repo
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Running Tests
### Run All Tests
To run all the test cases:
```bash
npm run test
```

### Open Cypress Test Runner
To open the interactive Cypress Test Runner:
```bash
npm run cy:open
```

## Project Structure
- `cypress/fixtures`: Contains test data files.
- `cypress/integration`: Contains the test cases.
- `cypress/support`: Contains custom commands and support files.
- `cypress/reports`: Stores test reports.

## Custom Commands
Custom commands can be found in the `cypress/support/commands.js` file. These commands help reduce redundancy in test cases.

## Reporting
Reports are automatically generated after test execution and can be found in the `cypress/reports` directory.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

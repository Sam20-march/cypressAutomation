### Project overview
Plotly assignment : This submission contains four test that were provided in pdf.


### E2E Test
- Test site: 'https://www.cypress.io/'
- Page Object: Here I have included [Cypress Home page](/cypress/integration/pageObject/CypressPage.js), [Company information page](/cypress/integration/pageObject/CompanyPage.js) and [Product page](/cypress/integration/pageObject/ProductPage.js). All three pages extend [Headers class](/cypress/integration/pageObject/Header.js).
- Utility Command: [New Utility commands](/cypress/support/commands.js) were added to Cypress framework that include assertValueCopiedToClipboard and getPage.
- Test Class:  All test start from [ploty_Assignment.js](/cypress/integration/automation/plotly_Asignment.js)

### Install requirements
- npm : Download npm locally and run 'npm -i init'
- cypress install : run command 'npm install cypress --save-dev'
- To open cypress : run command '.\node_modules\.bin\cypress open'
- If Cypress installation fail : run command 'Set-ExecutionPolicy RemoteSigned'

### Command line test Execution
- To run test Headless mode in Electorn browser supported by default from Cypress run command: 'npm run test'
- To run test with Headed mode run command: 'npm run headTest'
- To run test with Chrome browser: 'npm run chromeTest'

### Jenkins setup
- jenkins.war file is added to package
- Open command prompt as Administrator and run following command : 'java -jar jenkins.war'
- By default jenkins will start at port 8080, If any service is running at this location you can pass 'httpPort=NEW_PORT_NO'
- Once you have jenkins started message on cli enter 'localhost:8080' in your browser and complete setup. To initiate you will need to pass password that will be provided in log before jekins start message.
- Create new Jenkins item  - Pipeline Or FreeStyle
- In Pipeline section select - Pipeline script from SCM


### To Do
- Jenkins integration to run for CI/CD
- Reporting : Can use open source reporting library like mockawesome
- Code enhancement 

# reebelo-case-study



This is a set of tests made for Reebelo using cypress automation tool
To execute these test its required to have cypress 10 automation tool installed; import the test (cy.js files) to the "e2e" folder and the "example_users.json" file to the "fixtures" folder
The critical path chosen to write the test took into consideration the main flows for the business:
  *Creation of new users
  *Capability of existing users to login to the app
  *Capability for users to perform a purchase (limited by the environment nature, this could be completed in a dedicated automation environment)
  *Capability for users to create a new sale request
These tests shouls be executed on a dedicated automation environment to prevent manual changes made by testers affect the results of the executions.
These tests shouls be executed periodically (daily executions) to make sure that no issues are caused by new changes made to the system.

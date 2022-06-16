import {example_users} from '../fixtures/example_users.json'

describe
//Access the reebelo.com.au page
describe('Reebelo sell product', function() {
  beforeEach(function(){
    cy.fixture('example_users').then(userDetails => {
      this.userDetails = userDetails
    })
  })
  it('Access the rebeelo.com.au main page', () => {
      cy.visit('https://www.reebelo.com.au')
         })
//Click the "Sell your device" button
it('Click the "Sell your device" button',() => {
  cy.get('.sell-your-device > .nav-bar__link').click()
  cy.wait(2000)
  cy.url().should('contain','sell-phone')
})
//Click the "Sell My Phone for Cash " button
it('Click the "Sell My Phone for Cash " button',() => {
  cy.get('.box_left > button').click()
  cy.url().should('equal','https://sell.reebelo.com.au/')
})
//Select a phone model from the list and click "Next"
it('Select a phone model from the list',() => {
cy.get('.select2-selection').click()
cy.get('.select2-search__field').type('iPhone 12 Pro Max{enter}')
cy.get('.button').click()
})
//Select the status of the phone, enter the IMEI and click "Next Step"
it('Select the status of the device and provide an IMEI',() => {
  cy.get('#New-tab').click()
  cy.get('#New > .text-center > .which_phone > .customer-price').should('have.text','$1090.00')
  cy.get(':nth-child(2) > li > .form-group > label').click
  cy.get('#orderitem-imei').type('103866428682629')
  cy.get('button.button').click()
  })
//Verify the details sumary matches the previous selections
it('Verify all the previouse selections summary',() => {
  cy.get('.list_part > :nth-child(1)').should('have.text',' Trading in an iPhone 12 Pro Max 512GB')
  cy.get('.list_part > :nth-child(2)').should('have.text',' As New Condition')
  cy.get('.list_part > :nth-child(3)').should('have.text',' Not Locked to any Provider')
  cy.get('.list_part > :nth-child(4)').should('have.text',' Will Not Accept a Reduced Offer if the Condition Isn\'t As New')
  cy.get('.list_part > :nth-child(5)').should('have.text',' IMEI is 103866428682629')
  })
//Select a send method
it('Select "Send it MySelf from the Send options',() => {
  cy.get('#Myself-tab').click()
})
//Select Bank as way to receive the funds of the sale and fill the bank details
it('Select "Bank" and fill the bank details fields',function() {
  cy.get('#Bank-tab').click()
  cy.get('#orders-account_name').type(this.userDetails.account_name)
  cy.get('#orders-bsb').type(this.userDetails.bsb)
  cy.get('#orders-bank_name').type(this.userDetails.bank_name)
  cy.get('#orders-account_number').type(this.userDetails.account_number)
  cy.get('button.button').click()
  cy.url().should('contain','/your-information?')
})
//Fill the contact information in case of emergency with the transaction
it('Populate the Contact details fields and confirm the order',function(){
  cy.get('#user-first_name').type(this.userDetails.name)
  cy.get('#user-last_name').type(this.userDetails.last_name)
  cy.get('#user-email').type(this.userDetails.email)
  cy.get('#user-phone').type(this.userDetails.phone)
  cy.get('button.button').click()
})
//Confirmation page with the BuyBack order #
it('Order confirmation page is displayed',() => {
  cy.get('.full_width > h3').should('contain','Your Buyback Order #')
})
})

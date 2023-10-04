const {describe} = require("mocha");

const cy = require("cypress");
 
describe('Test FlipKart', () => {
  it('Using CLASS loactor', () => {
    cy.visit("https://banking.westpac.com.au/wbc/banking/handler?TAM_OP=login&URL=https%3A%2F%2Fbanking.westpac.com.au%2Fsecure%2Fbanking%2Foverview%2Fdashboard&logout=false")

    cy.get("input#fakeusername").type("Cycles")

    cy.get(".promoHeader").should("have.length",2)


    //implicit - built in assertions
    // should, and
    // explicit - need to develop
    // expect (BDD) and assert (TDD type of framework)


//script#__LOADABLE_REQUIRED_CHUNKS__
  })
})
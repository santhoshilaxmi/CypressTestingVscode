// const {describe} = require("mocha");

// const cy = require("cypress");

describe("Assesions Demo", ()=>{


    it("Implicit Assesrtions", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // check url 
        // cy.url().should('include',"orangehrmlive.com")
        // cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.url().should('contain',"opensource-demo")

        // include everything here 

        // check url 
        // cy.url().should('include',"orangehrmlive.com")
        // .should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // .should('contain',"opensource-demo")

        // cy.url().should('include',"orangehrmlive.com")
        // .and('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // .and('contain',"opensource-demo")

        // cy.url().should('not.include',"orangehrm.com")
        // .and('not.eq',"https://opensource-dem.orangehrmlive.com/web/index.php/auth/login")
        // .and('not.contain',"openource-demo")

        cy.title().should('include',"OrangeHRM" )

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('exist')

      //  to check how many <a> are present 

            cy.get('a').its('length').should('be.eq',5)

            cy.get('input[name="username"]').should('be.visible').type("Santhoshi")
          //  need to give the property name inside its() this element does not have text/value/val as the properties so it failed
           //.its('val').should('eq',"Santhoshi")
           .should('have.value', "Santhoshi")
           .clear()



           /// explicit assertions 

           cy.get('input[name="username"]').should('be.visible').type("Admin")
           cy.get('input[name="password"]').should('be.visible').type("admin123")
           cy.get('button[type="submit"]').should('be.visible').click()



           ///it needs js methos

           let expName = "Roshini Sharma"
            //////////still the below statment did not work its() 
         //  cy.get(".oxd-userdropdown-name").should('be.visible').its('val').should('be.eq',expName)

       ///  cy.get(".oxd-userdropdown-name").text().should('be.eq',expName)

           cy.get(".oxd-userdropdown-name").then(  (x)=>{
                let actName = x.text()

                ///BDD style
                //expect(actName).to.equal(expName)
                expect(actName).to.not.equal(expName)

                // TDD style

                assert.equal(actName,expName)
                assert.notEqual(actName, expName)

           }


           )








    })


})
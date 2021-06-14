
import React from 'react'


describe('The Home Page', () => {
  it('successfully loads', () => {

    cy.log('START');
    cy.intercept('/citmData.json', (req) => {

      req.reply((res) => {

        // update msg
        const origJson = res.body
        console.log('RES:', origJson)
        let jsonObj = res.body
        jsonObj.msg = 'Welcome to Cypress Intercept12345' 
        //console.log('JSON UPDATED:', jsonObj)

        //list.push('Kiwi')
        res.send(jsonObj)
      })
    })

    //cy.intercept('/citmData.json', { msg: 'Welcome to Cypress Intercept' })
    cy.visit('/'); // change URL to match your dev URL
    
  });



    


});

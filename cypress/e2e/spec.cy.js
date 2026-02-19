// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe('début de partie',()=>{
  it('démarrer une partie simple', () => {
    cy.visit('http://localhost:8080/')
    cy.get(':nth-child(2) > .text-center').should('contain', 'Sélectionnez votre mode de jeu :')
    cy.get(':nth-child(2) > .mb-4').click()
    cy.get(':nth-child(2) > .py-2').should('contain', 'Partie simple')
    cy.get(':nth-child(2) > .italic').should('contain', 'Sélectionnez votre pirate :')
    cy.get('#Barbe-blonde').click()
    cy.get('#start-game').click()
    cy.get('.mb-4 > :nth-child(1) > .font-semibold').should('contain', 'Choisissez votre action :')
  })
})
describe('Mi primer test', () => {
    it('Visita la página principal', () => {
      cy.visit('http://localhost:3000')
      cy.contains('Hola Mundo')
    })
  })
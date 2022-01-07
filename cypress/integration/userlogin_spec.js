
describe('login', () => {
    it('on login, user data is rendered if found', () => {
        // login
        cy.visit('/');
        cy.findByRole('textbox').should('be.visible');
        cy.findByRole("button", {name: /login/i}).should('be.visible');
        cy.findByRole('textbox').type('Leanne Graham');
        cy.wait(1000);
        cy.findByRole("button", {name: /login/i}).click();
        
        // view user data
        cy.findByRole("button", {name: /logout/i}).should('be.visible');
        cy.wait(2000);
        cy.get("div.user-name-data").find('.user-name').invoke('text').then((text) => {
            expect(text.trim()).equal('Leanne Graham');
        }); // OR
        cy.get("div.user-name-data").find('.user-name').should('have.text',"Leanne Graham");
        cy.wait(1000);
        cy.get("p.user-address").invoke("text").should("eq", "Gwenborough"); // OR
        cy.contains('Gwenborough'); // OR
        cy.get("div.user-address-data").find('.user-address').should('have.text',"Gwenborough");
        cy.wait(1000);
        
        // logout
        cy.findByRole("button", {name: /logout/i}).click();
        cy.wait(1000);
        cy.findByRole('textbox').should('be.visible');
        cy.findByRole("button", {name: /login/i}).should('be.visible');
    });
});

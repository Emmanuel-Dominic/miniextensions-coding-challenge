describe('list user class', () => {
    it('user can login then logout', () => {
        // login page
        cy.visit('/');
        cy.findByRole('textbox').should('be.visible');
        cy.findByRole("button", {name: /login/i}).should('be.visible');

        // invalid user fail to login
        cy.findByRole("button", {name: /login/i}).click();
        cy.findByText("Invaild Credentials!").should('be.visible');
        cy.wait(2500);
        
        // valid user login
        cy.findByRole('textbox').type('Jenny');
        cy.wait(500);

        cy.findByRole("button", {name: /login/i}).click();

        cy.window().then(win => win.sessionStorage.setItem('isLoggedIn', JSON.stringify(true)));
        cy.window().then(win => win.sessionStorage.setItem('user', JSON.stringify({
            "id": "recoQBxwU83QJq69L", "fields": {"Name": "Jenny", "Classes": ["rectGHWsZVmkeRwGh", "recwrHZ9zBIYFiU07", "recr0DOF3YWjN9wAH"]}, "createdTime": "2021-08-11T15:31:32.000Z"
        })));

        // view user data
        cy.wait(1000);
        cy.findByRole("button", {name: /logout/i}).should('be.visible');
        cy.get("div.student-names").find(".student-name").first().invoke('text').then((text) => {
            expect(text.trim()).equal('Jenny');
        }); // OR
        cy.get("div.student-names").find(".student-name").eq(1).should('have.text',"Khalid");
        cy.get("p.klass-name").first().invoke("text").should("eq", "CS 101"); // OR
        cy.contains('CS 102'); // OR
        cy.get("div.card-body").find('.klass-name').eq(1).should('have.text',"CS 102");
        cy.wait(1000);
        
        // logout
        cy.findByRole("button", {name: /logout/i}).click();
        cy.window().then((win) => win.sessionStorage.clear());
        cy.findByRole('textbox').should('be.visible');
        cy.findByRole("button", {name: /login/i}).should('be.visible');
    });
});

describe("Pets API", () => {
    beforeEach(function () {
        // Task would need to be added creating data as per:
        // https://learn.cypress.io/advanced-cypress-concepts/database-initialization-and-seeding
        cy.task("db:seed");
    });

    context("GET /pet", () => {
        it("gets a pet by id", () => {
            cy.request("GET", "/pet/1").then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.pet.name).to.be('doggie');
            });
        });
    });

    context("POST /pet", () => {
        it("posts a pet", () => {
            cy.request("POST", "/pet", {
                "id": 0,
                "category": {
                    "id": 0,
                    "name": "petCategoryName"
                },
                "name": "pooch",
                "photoUrls": [
                    "http://example.com/1.jpg"
                ],
                "tags": [
                    {
                        "id": 0,
                        "name": "tagName"
                    }
                ],
                "status": "available"
            }).then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body.pet.name).to.be('pooch');
            });
        });
    });
});

describe("Adding users", () => {
	it("Should add a first user", () => {
		cy.visit("/")

		const firstName = "someone"
		const lastName = "something"
		const email = "something"

		for (let user = 0; user < 2; user++) {
			cy.findByTestId("users-list").then(($element) => {
				const users = $element.get(0).getAttribute("value")
				if (!users) {
					const NO_USER = "No user ! click on the button below to add a user "
					cy.findByTestId("empty-usersList").should("contain", NO_USER)
					cy.findByTestId("fab-button-empty-list").click()
				} else {
					cy.findByTestId("fab-button").click()
				}
				cy.findByTestId("id").then(($element) => {
					cy.findByTestId("firstName-textField").type(firstName)
					cy.findByTestId("lastName-textField").type(lastName)
					cy.findByTestId("email-textField").type(email)

					const userId = $element.get(0).getAttribute("data-id")

					cy.findByTestId("add").click()

					cy.findByTestId(`name-tableCell-${userId}`).should(
						"contain",
						firstName + " " + lastName
					)
					cy.findByTestId(`email-tableCell-${userId}`).should("contain", email)
				})
			})
		}
	})
})

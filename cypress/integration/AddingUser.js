/* global cy */

describe("Adding users", () => {
	it("Should add a user to the users table", () => {
		cy.visit("/")
		const firstName = "someone"
		const lastName = "something"
		const email = "something"

		cy.findByTestId("fab-button").click()

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
})

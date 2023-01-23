/// <reference types="Cypress" />
import { Newsletter } from "../../support/pages/NewsletterPO/Newsletter";

describe('Newsletter tests', () => {

    const newsletter = new Newsletter()

    beforeEach(() => {
        cy.visitNewsletter()
      });

      it('Newsletter subscription pass simulation - captcha needed', () => {
        newsletter.newsletterPass()
      });

      it('Newsletter subscription should fail - bad email format', () => {
        newsletter.newsletterFailedEmail()
      });

      it('Newsletter subscription should fail - nothing filled', () => {
        newsletter.newsletterNothingFilled()
      });

      it('Newsletter subscription should fail - first name input is not filled', () => {
        newsletter.newsletterFailedFirstName()
      })

      it('Newsletter subscription should fail - last name input is not filled', () => {
        newsletter.newsletterFailedLastName()
      })

})
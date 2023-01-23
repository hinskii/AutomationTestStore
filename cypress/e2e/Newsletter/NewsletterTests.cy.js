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

      it('Newsletter subscription failed - bad email format', () => {
        newsletter.newsletterFailedEmail()
      });

      it('Newsletter subscription failed - nothing filled', () => {
        newsletter.newsletterNothingFilled()
      });

      it('Newsletter subscription failed - first name input is not filled', () => {
        newsletter.newsletterFailedFirstName()
      })

      it('Newsletter subscription failed - last name input is not filled', () => {
        newsletter.newsletterFailedLastName()
      })

})
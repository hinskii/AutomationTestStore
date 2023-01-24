import {
  accountDetails,
  passwordChange,
} from "../../locators/AccountPanelLocators";
import { detailsBtn } from "../../locators/AccountPanelLocators";
import { register, defaultData } from "../../FakeData/FakeData";
import { successMsg } from "../../locators/AccountPanelLocators";
import { head } from "../../locators/AccountPanelLocators";
import { addressChange } from "../../locators/AccountPanelLocators";

class AccountPanel {
  accountDetails() {
    cy.get(detailsBtn.btn).eq(0).click();
    cy.get(head.header)
      .invoke("text")
      .then((header) => {
        cy.get(head.header).should("have.text", header);
      });
    cy.get(accountDetails.firstName).clear().type(defaultData.firstName);
    cy.get(accountDetails.lastName).clear().type(defaultData.lastName);
    cy.get(accountDetails.email).clear().type(defaultData.email);
    cy.get(accountDetails.phone).clear().type(register.phone);
    cy.get(accountDetails.fax).clear().type(register.fax);
    cy.get(accountDetails.detailsBtn).click();
    cy.get(successMsg.msg)
      .invoke("text")
      .then((text) => {
        cy.get(successMsg.msg).should("have.text", text);
      });
  }

  passwordChange() {
    cy.get(detailsBtn.btn).eq(1).click();
    cy.get(head.header)
      .invoke("text")
      .then((header) => {
        cy.get(head.header).should("have.text", header);
      });
    cy.get(passwordChange.currentPass).type(register.password);
    cy.get(passwordChange.newPass).type(register.password);
    cy.get(passwordChange.confirmPass).type(register.password);
    cy.get(accountDetails.detailsBtn).click();
    cy.get(successMsg.msg)
      .invoke("text")
      .then((text) => {
        cy.get(successMsg.msg).should("have.text", text);
      });
  }

  addNewAddress() {
    cy.get(detailsBtn.btn).eq(2).click();
    cy.get(head.header)
      .invoke("text")
      .then((header) => {
        cy.get(head.header).should("have.text", header);
      });
    cy.get(addressChange.addNewAddressBtn).click();
    cy.get(addressChange.editAddressBreadcrumb).eq(3).should("be.visible");
    cy.get(addressChange.country).select(4);
    cy.get(addressChange.firstName).type(defaultData.firstName);
    cy.get(addressChange.lastName).type(defaultData.lastName);
    cy.get(addressChange.company).type(register.company);
    cy.get(addressChange.firstAddress).type(register.address);
    cy.get(addressChange.secondAddress).type(register.address);
    cy.get(addressChange.city).type(register.city);
    cy.get(addressChange.zipCode).type(register.zipCode);
    cy.get("#AddressFrm_default1").check();
    cy.get(addressChange.state).select(5);
    cy.get(accountDetails.detailsBtn).click();
    cy.get(successMsg.msg)
      .invoke("text")
      .then((text) => {
        cy.get(successMsg.msg).should("have.text", text);
        cy.visitAccountPanel();
      });
    cy.get(addressChange.blueIconNumber)
      .invoke("text")
      .then((blueText) => {
        cy.get(addressChange.badgeIcon)
          .eq(0)
          .invoke("text")
          .then((badgeText) => {
            if (blueText === badgeText) {
              cy.get(addressChange.blueIconNumber).should(
                "have.text",
                badgeText
              );
              cy.get(addressChange.badgeIcon)
                .eq(0)
                .should("have.text", blueText);
            }
          });
      });
  }

 
}

export { AccountPanel };

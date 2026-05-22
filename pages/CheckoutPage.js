const BasePage = require("./BasePage");
const testData = require("../fixtures/testData.json");

class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);

    this.firstName = "#first-name";
    this.lastName = "#last-name";
    this.postalCode = "#postal-code";
    this.continueBtn = "#continue";
    this.finishBtn = "#finish";
  }

  async fillCheckoutInfo() {
    await this.safeFill(this.firstName, testData.checkout.firstName);
    await this.safeFill(this.lastName, testData.checkout.lastName);
    await this.safeFill(this.postalCode, testData.checkout.postalCode);

    await this.safeClick(this.continueBtn);
  }

  async finishOrder() {
    await this.safeClick(this.finishBtn);
  }
}

module.exports = CheckoutPage;

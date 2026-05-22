const BasePage = require("./BasePage");

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.checkoutBtn = "#checkout";
  }

  async proceedToCheckout() {
    await this.safeClick(this.checkoutBtn);
  }
}

module.exports = CartPage;

const BasePage = require("./BasePage");

class InventoryPage extends BasePage {
  constructor(page) {
    super(page);

    this.addToCartBtn = ".inventory_item button";
    this.cartIcon = ".shopping_cart_link";
  }

  async addFirstProduct() {
    const firstBtn = this.page.locator(this.addToCartBtn).first();
    await firstBtn.waitFor({ state: "visible" });
    await firstBtn.click();
  }

  async goToCart() {
    await this.safeClick(this.cartIcon);
  }
}

module.exports = InventoryPage;

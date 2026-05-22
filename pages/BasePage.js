class BasePage {
  constructor(page) {
    this.page = page;
  }

  async safeGoto(url) {
    await this.page.goto(url);
    await this.page.waitForLoadState("domcontentloaded");
  }

  async safeClick(locator) {
    await this.page.waitForSelector(locator, { state: "visible" });
    await this.page.click(locator);
  }

  async safeFill(locator, value) {
    await this.page.waitForSelector(locator, { state: "visible" });
    await this.page.fill(locator, value);
  }
}

module.exports = BasePage;

const config = require("../utils/config");
const BasePage = require("./BasePage");

class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    this.username = "#user-name";
    this.password = "#password";
    this.loginBtn = "#login-button";
  }

  async goto() {
    await this.safeGoto(config.baseUrl);
    await this.page.waitForSelector(this.username);
  }

  async login(user, pass) {
    await this.safeFill(this.username, user);
    await this.safeFill(this.password, pass);

    await this.page.click(this.loginBtn);
    await this.page.waitForURL("**/inventory.html");
  }
}

module.exports = LoginPage;

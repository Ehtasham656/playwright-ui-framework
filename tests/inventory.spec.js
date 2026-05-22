const { test, expect } = require("@playwright/test");

const LoginPage = require("../pages/LoginPage");
const InventoryPage = require("../pages/InventoryPage");

let inventory;

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);

  inventory = new InventoryPage(page);

  await login.goto();

  await login.login("standard_user", "secret_sauce");
});

test("Add product to cart", async ({ page }) => {
  await inventory.addFirstProduct();

  await inventory.goToCart();

  await expect(page).toHaveURL(/cart/);
});

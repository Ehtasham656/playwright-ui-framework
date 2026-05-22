const { test, expect } = require("@playwright/test");

const LoginPage = require("../pages/LoginPage");
const InventoryPage = require("../pages/InventoryPage");
const CartPage = require("../pages/CartPage");
const CheckoutPage = require("../pages/CheckoutPage");

const testData = require("../fixtures/testData.json");

test("Complete checkout flow", async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();

  await login.login(
    testData.users.standardUser.username,
    testData.users.standardUser.password,
  );

  await inventory.addFirstProduct();
  await inventory.goToCart();

  await cart.proceedToCheckout();

  await checkout.fillCheckoutInfo();
  await checkout.finishOrder();

  await expect(page.locator(".complete-header")).toHaveText(
    "Thank you for your order!",
  );
});

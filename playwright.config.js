// @ts-check
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  /* Run tests in parallel */
  fullyParallel: true,

  /* Fail CI on test.only */
  forbidOnly: !!process.env.CI,

  /* Retries */
  retries: process.env.CI ? 2 : 1,

  /* Workers */
  workers: process.env.CI ? 1 : undefined,

  /* REPORTING (UPDATED) */
  reporter: [["html", { open: "never" }], ["list"]],

  /* GLOBAL TEST SETTINGS */
  use: {
    /* Optional base URL (recommended later) */
    // baseURL: 'https://www.saucedemo.com',

    /* Debugging tools */
    trace: "on-first-retry", // 🔥 trace viewer
    screenshot: "only-on-failure", // 📸 screenshots
    video: "retain-on-failure", // 🎥 video recording

    /* Stability */
    actionTimeout: 15000,
    navigationTimeout: 30000,

    /* UI mode - Dynamically switches based on environment */
    headless: process.env.CI ? true : false,
  },

  /* BROWSER PROJECTS */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});

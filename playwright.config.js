// @ts-check
const { defineConfig, devices } = require('@playwright/test');
import {config as testConfig} from "./config/config.js";

module.exports = defineConfig({
  testDir: './src/tests',
  globalSetup: './globalSetup',
  timeout: 300_000,
  fullyParallel: false,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    httpCredentials: testConfig.httpCredentials,
    baseURL: testConfig.baseURL,
    headless: false,
    viewport: {
      width: 1200,
      height: 840
    },
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'setup',
      testDir: 'src/setup/userLogin.setup.js',
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      dependencies: ['setup']
    }
    ]
});


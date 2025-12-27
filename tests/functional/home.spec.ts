import { test, expect } from '@playwright/test';

test('Homepage loads and displays main heading', async ({ page }) => {
  await page.goto('https://playwright.dev');

  const heading = page.getByRole('heading', { name: 'Playwright enables reliable end-to-end testing' });

  await expect(heading).toBeVisible();
});

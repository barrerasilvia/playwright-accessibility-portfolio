import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Homepage has no serious or critical accessibility issues', async ({ page }) => {
  await page.goto('https://playwright.dev');

  const results = await new AxeBuilder({ page }).analyze();

  const seriousViolations = results.violations.filter(
    v => v.impact === 'serious' || v.impact === 'critical'
  );

  expect(seriousViolations).toEqual([]);
});

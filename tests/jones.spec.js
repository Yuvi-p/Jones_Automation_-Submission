const { test, expect } = require('@playwright/test');

test('Jones Automation Form Submission', async ({ page }) => {
  // Navigate to the requested site
  await page.goto('https://test.netlify.app/');

  // Type values into the text fields using the explicit IDs provided in the HTML
  await page.locator('#name').fill('Yuval P');
  await page.locator('#email').fill('yuval@example.com');
  await page.locator('#phone').fill('0501234567');
  await page.locator('#company').fill('Jones Testing');
  await page.locator('#website').fill('https://www.google.com');

  // Bonus: Change the Number of Employees from 1-10 to 51-500 using the select ID
  await page.locator('#employees').selectOption('51-500');

  // Create a screenshot before clicking the button
  await page.screenshot({ path: 'form-before-submit.png', fullPage: true });

  // Click the "Request a call back" button
  await page.getByRole('button', { name: 'Request a call back' }).click();

  // Wait for the URL to contain 'thank-you.html', ignoring any query parameters appended by the GET form submission
  await expect(page).toHaveURL(/thank-you\.html/);

  // Write to the console.log when reaching the thank you page
  console.log('Successfully reached the thank you page!');
});
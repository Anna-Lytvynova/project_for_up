import { test, expect } from '@playwright/test';

test.describe('Buttons E2E Testing', () => {
    test('користувач може натискати кнопки та бачити повідомлення', async ({ page }) => {
    // 1. Перейти на локальну адресу
    await page.goto('/'); 

    // 2. Перевірити заголовок
    const title = page.locator('h1.title');
    await expect(title).toHaveText('Second test');

    // 3. Натискання Кнопки 1
    await page.click('text=Кнопка 1');
    const message = page.locator('.message');
    await expect(message).toHaveText('Натиснута перша кнопка');

    // 4. Натискання Кнопки 4
    await page.click('text=Кнопка 4');
    await expect(message).toHaveText('Натиснута четверта кнопка');
    });
});
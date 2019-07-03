describe("Welcome screen tests", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Should show welcome text', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('Show more info', async () => {
    await expect(element(by.id('email'))).toBeVisible();
    await element(by.id('email')).typeText('test@mailbox.com');
    await element(by.id('password')).typeText('123456');

    await element(by.id('button')).tap();
    await expect(element(by.text('More information you can find on the React-Native website'))).toBeVisible();
  });
});
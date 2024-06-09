const {test, expect} =require('@playwright/test')

test('Working with multiple tabs', async ({browser}) => {

    const context= await browser.newContext()
    const page = await context.newPage();
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    const [newPage] = await Promise.all
    (
        [
           context.waitForEvent("page"),
          page.locator("//div[@class='container-child']//a[4]").click()
        
        ]

    )
    await newPage.waitForTimeout(3000)
    await newPage.locator("//input[@id=':r6:']").click()
    await newPage.waitForTimeout(3000)
    await newPage.close()
    await page.getByPlaceholder("Enter Email").fill("admin@email.com")
    await page.waitForTimeout(3000)

});
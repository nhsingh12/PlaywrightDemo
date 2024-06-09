const{test,expect} =require('@playwright/test')

test("Validate login", async function({page}){

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.getByPlaceholder("Enter Email").fill("admin@email.com")

    await page.getByPlaceholder("Enter Password").fill("admin@123")

    await page.locator("//button[normalize-space()='Sign in']").click()

    await page.locator("//span[text()='Manage']").hover()

    await page.locator("//a[normalize-space()='Manage Courses']").click()
})

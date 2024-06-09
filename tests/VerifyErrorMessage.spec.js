const{test,expect} =require('@playwright/test')

test("Verify Error Message", async function({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").fill("Admin",{delay:200})
    await page.getByPlaceholder("Password").fill("Admin123",{delay:200})
    await page.locator("//button[@type='submit']").click()
   const errorMsg= await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent()
   console.log("Error Message is "+  errorMsg)
   expect(errorMsg.includes("Invalid")).toBeTruthy()
})

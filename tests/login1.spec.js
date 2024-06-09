const{test, expect}=require("@playwright/test")
const testdata= JSON.parse(JSON.stringify(require("../testdata.json")))

test("Login to application",async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").fill(testdata.username)
    await page.getByPlaceholder("Password").fill(testdata.password)
    await page.pause()
    await page.locator("//button[@type='submit']").click()
});
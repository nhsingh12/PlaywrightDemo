const {test, expect} =require('@playwright/test')

test("Handling frames",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/iframe")   
    const iframe= await page.frameLocator("//iframe[@id='mce_0_ifr']")
    await iframe.locator("#tinymce").click()
    await page.pause()
})
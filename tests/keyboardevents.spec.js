const {test, expect} =require('@playwright/test')

test("Keyboard Events in Playwright",async({page})=>{
    await page.goto("https://google.com");
    //await page.getByRole("combobox").fill("Mukesh Otwani")
    //await page.keyboard.press("Enter")
   // await page.keyboard.press("Ctrl+A")
   // await page.keyboard.press("Backspace")
   await page.getByRole("combobox").focus();
   await page.keyboard.type("Mukesh Otwani!")
   await page.keyboard.press("ArrowLeft")
   await page.keyboard.down("Shift")
   for(let i=0;i<6;i++)
    {
        await page.keyboard.press("ArrowLeft")
    }
    await page.keyboard.up("Shift")

    await page.keyboard.press("Backspace")


})
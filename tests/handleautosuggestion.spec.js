const {test, expect} =require('@playwright/test')

test("Verify application title Using keyboard",async({page})=>{
    await page.goto("https://google.com");
    await page.getByRole("combobox").fill("Mukesh Otwani")
    await page.waitForSelector("//div[@role='presentation']")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("Enter")
})

    test.only("Verify application title Using loop",async({page})=>{
        await page.goto("https://google.com");
        await page.getByRole("combobox").fill("Mukesh Otwani")
        await page.waitForSelector("//div[@role='presentation']")
     const elements= await page.$$("//div[@role='presentation']")
     for(let i=0; i<elements.length; i++) {
        const text = await elements[i].textContent()
        if(text.includes("playwright")) {
            await elements[i].click()
            break;
        }
    }

})
const{test,expect} =require('@playwright/test')

test("Select value from dropdown", async function({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/signup")
    await page.getByPlaceholder("Name").fill("Admin",{delay:200})
    await page.getByPlaceholder("Email").fill("admin1@email.com")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByText("Playwright").click()
    await page.locator("//input[@id='gender2']").click()
    await page.locator("#state").selectOption({lable:"Goa"})
    await page.waitForTimeout(1000)
    await page.locator("#state").selectOption({value:"Himachal Pradesh"})
    await page.waitForTimeout(1000)
    await page.locator("#state").selectOption({index:4})
    await page.waitForTimeout(3000)
    const value= await page.locator("#state").textContent()
    console.log("All dropdown values "+value);
    await expect(value.includes("Kerala")).toBeTruthy()
    let state =await page.$("#state")
    let allElements=await state.$$("option")
    let ddstatus= false
    for(let i=0; i<allElements.length; i++){
        let element= allElements[i] 
        let value = await element.textContent()
        console.log("the dropdown values using for loop:"+value) 
        if(value.includes("Sikkim"))
            {
            ddstatus = true
            break;
        }

    }
    await expect(ddstatus).toBeTruthy()
    await page.locator("#hobbies").selectOption(['Playing','Swimming'])
    await page.waitForTimeout(3000)

})
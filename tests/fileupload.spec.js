const{test,expect} =require('@playwright/test')

test("Validate login", async ({page})=> {

    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator("#file-upload").setInputFiles("C:\Users\nhsin\SampleGit\Mydata.xlsx");
    await page.locator("#file-upload").click()
    expect(await page.locator("//h3")).toHaveText("File Uploaded!")
})

const{test, expect}=require('@playwright/test');
const testdata= JSON.parse(JSON.stringify(require("../testdataddt.json")))

test.describe("Data driven login Test", function()
{
    for (const data of testdata)
        {
    
        test.describe(`Login with user ${data.id}`, function() 
          {
            test('Login to application', async ({page}) => {
    
                await page.goto("https://freelance-learn-automation.vercel.app/login")
                await page.getByPlaceholder("Enter Email").fill(data.username)
                await page.getByPlaceholder("Enter Password").fill(data.password)
                
                //await page.locator("//button[normalize-space()='Sign in']").click()
            });
        }) 
    }
})

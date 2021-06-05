const {chromium} = require("playwright");
const chai = require('chai')
let browser,page ;
describe('Validate the home page title', () => {
    before(async()=>{
        browser = await chromium.launch({headless:false});
        page = await browser.newPage();
    });
    it('',async()=>{
        await page.goto('https://qa.ssense.com');
        console.log("Page Title  :  " + await page.title());
    });
    after(async()=>{
        await browser.close();
    });
});
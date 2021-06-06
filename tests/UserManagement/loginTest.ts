import { chromium, Browser, Page } from "playwright";
import NavigationPage from '../../pageObjects/navigationPage';
describe('Validate the home page title',async () => {
    let browser:Browser,page:Page;
    let navigationPage:NavigationPage;
    
    before(async()=>{
        browser = await chromium.launch({headless:false});
        page = await browser.newPage();
        navigationPage = new NavigationPage(page);
    });
    it('',async()=>{
        await page.goto('https://qa.ssense.com');
        await page.waitForSelector(navigationPage.mensNavLink);
        await navigationPage.clickMensNavLink();
        await page.waitForSelector('.plp-products__row .plp-products__column:nth-child(1) .product-tile__description');
        console.log('Page Title   :  ' + await page.title());
    });
    after(async()=>{
        await browser.close();
    });
});
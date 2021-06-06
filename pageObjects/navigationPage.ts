import type {Page} from 'playwright';
export default class NavigationPage {
   private page:Page;
   constructor(page){
    this.page = page;
   }

   public mensNavLink = '#men-link';

   async clickMensNavLink(){
    await this.page.click('#men-link');
   }
}
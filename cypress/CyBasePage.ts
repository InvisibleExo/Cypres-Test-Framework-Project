
//use https://store.steampowered.com/ as example to automate portion of e2e UI


//Test for menu displays, targeted search(search bar and results), headers/footers, and login
export default class CyBasePage {
    constructor(){
        
    }

    get(target: any){
        return cy.get(target);
    }

    pause(ms: number) {
        cy.wait(ms);
    }

    logInfo(message: any ){
        cy.log(message);
    }

    pauseTillPresent(target: any ) {
        if(cy.get(target, {timeout: 10000})){
            return true;
        } else {
            return false;
        }
    }

    pauseTillVisible(elementSelector: any) {
        if (cy.get(elementSelector, {timeout: 10000}).should('be.visible')) {
            return true;
        }
        else {
            return false;
        };
    }

    pauseTillClickeable(element: Cypress.Chainable<JQuery<HTMLElement>>){
        if (element.get('[href]')!=null || element.get('[onclick]')!=null){
            return true;
        }
        else{
            return false;
        }
    }

    setMobileViewPort() {
        cy.viewport('iphone-x');
    }

    setTabletViewPort() {
        cy.viewport('ipad-2');
    }

    setDesktopViewPort() {
        cy.viewport('macbook-13');
    }

    setLargeDesktopViewport(){
        cy.viewport(1980, 1080);
    }

    refresh(){
        cy.reload();
    }

    getURL(options?: Partial<Cypress.Loggable & Cypress.Timeoutable> | undefined){
        return cy.url(options);
  
    }

    goToURL(target: string){
        cy.visit(target);
    }

    request(target: string){
        return cy.request(target);
    }

    wrap(subject: string | Cypress.Chainable<any>, option?: any) {
        if(option){
            return cy.wrap(subject, option);
        } else {
            return cy.wrap(subject);
        }
    };

    getCy(){
        return cy;
    }

    forceClick(givenValue:  Cypress.Chainable<any>){
        givenValue.then(($ele: any) => {
            cy.wrap($ele).click({force:true});
        })
    }

    inspectRequestURL(givenValue: Cypress.Chainable<JQuery<HTMLElement>>, propValue: string, requestSection: string, requestTarget: string){
        givenValue.then(($a) => {
            const prop = $a.prop(propValue);

            cy.request(prop).its(requestSection).should('include', requestTarget);
        })
    }

}

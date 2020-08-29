

//use https://store.steampowered.com/ as example to automate portion of e2e UI
//Test for menu displays, targeted search(search bar and results), headers/footers, and login
class CyBasePage {

    constructor(cy){
        this.cy = cy;
    }

    get(target){
        return this.cy.get(target);
    }

    pause(ms) {
        this.cy.wait(ms);
    }

    logInfo(message){
        this.cy.log(message);
    }

    pauseTillPresent(target) {
        if(this.cy.get(target, {timeout: 10000})){
            return true;
        } else {
            return false;
        }
    }

    pauseTillVisible(elementSelector) {
        if (this.cy.get(elementSelector, {timeout: 10000}).should('be.visible')) {
            return true;
        }
        else {
            return false;
        };
    }

    pauseTillClickeable(element){
        if (element.get('[href]')!=null || element.get('[onclick]')!=null){
            return true;
        }
        else{
            return false;
        }
    }

    setMobileViewPort() {
        this.cy.viewport('iphone-x');
    }

    setTabletViewPort() {
        this.cy.viewport('ipad-2');
    }

    setDesktopViewPort() {
        this.cy.viewport('macbook-13');
    }

    setLargeDesktopViewport(){
        this.cy.viewport(1980, 1080);
    }

    refresh(){
        this.cy.reload();
    }

    getURL(){
        return this.cy.url();
    }

    goToURL(target){
        this.cy.visit(target);
    }

}

module.exports = {CyBasePage};
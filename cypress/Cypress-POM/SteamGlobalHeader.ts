import CyBasePage  from '../CyBasePage';

export class SteamGlobalHeader extends CyBasePage {

    constructor(){
        super();
    }

    getHeaderSection(){
        return cy.get('#global_header');
    }

    getHeaderLogo(){
        return cy.get('#logo_holder');
    }

    getNavHeader(){
        return cy.get('.supernav_container');
    }

    getHeaderCategory(target: string){
        return this.getNavHeader().find('a').contains(`${target}`)
    }


    getActionSection(){
        return cy.get('#global_actions');
    }

    getActionItem(tag: string, target: string){
        return this.getActionSection().find(`${tag}`).contains(`${target}`)
        /* return this.getActionSection().within(() => {
            cy.get(`${tag}`).contains(`${target}`);
        }) */
    }

    pickSubCategory(headerTarget: string, subTarget:string) : Cypress.Chainable<JQuery<HTMLElement>> {
       return this.getHeaderCategory(`${headerTarget}`).trigger('mouseover').then(() => {
           return cy.get(`.submenu_${headerTarget.toString().toLowerCase()}`).contains(`${subTarget.toString()}`); 
        });
    }




}
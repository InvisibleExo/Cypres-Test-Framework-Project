const {CyBasePage} = require('../CyBasePage');

export class SteamGlobalHeader extends CyBasePage {

    constructor(cy){
        super(cy);
    }

    getHeaderSection(){
        return this.cy.get('#global_header');
    }

    getHeaderLogo(){
        return this.cy.get('#logo_holder');
    }

    getNavHeader(){
        return this.cy.get('.supernav_container');
    }

    getHeaderCategory(target){
        return this.getNavHeader().within(() => {
            this.cy.get('a').contains(`${target}`);
        });
    }


    getActionSection(){
        return this.cy.get('#global_actions');
    }

    getActionItem(tag, target){
        return this.getActionSection().within(() => {
            this.cy.get(`${tag}`).contains(`${target}`);
        })
    }

    pickSubCategory(headerTarget, subTarget){
       return this.getHeaderCategory(`${headerTarget}`).trigger('mouseover').then(() => {
           return this.cy.get(`.submenu_${headerTarget.toString().toLowerCase()}`).contains(`${subTarget.toString()}`); 
        });
    }




}
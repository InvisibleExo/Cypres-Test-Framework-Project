/// <reference types="cypress" />
import CyBasePage from '../CyBasePage';
export declare class SteamGlobalHeader extends CyBasePage {
    constructor();
    getHeaderSection(): Cypress.Chainable<JQuery<HTMLElement>>;
    getHeaderLogo(): Cypress.Chainable<JQuery<HTMLElement>>;
    getNavHeader(): Cypress.Chainable<JQuery<HTMLElement>>;
    getHeaderCategory(target: string): Cypress.Chainable<JQuery<HTMLElement>>;
    getActionSection(): Cypress.Chainable<JQuery<HTMLElement>>;
    getActionItem(tag: string, target: string): Cypress.Chainable<JQuery<HTMLElement>>;
    pickSubCategory(headerTarget: string, subTarget: string): Cypress.Chainable<JQuery<HTMLElement>>;
}

/// <reference types="cypress" />
import CyBasePage from '../CyBasePage';
declare let runner: CyBasePage;
declare function expectValueToContain(givenFunction: Cypress.Chainable<any>, expectedValue: string | number | boolean): Cypress.Chainable<Chai.Assertion>;
export { CyBasePage, runner, expectValueToContain };

import { assert, expect } from 'chai';
import CyBasePage from '../CyBasePage';
let runner = new CyBasePage();
before('BaseSetup', () => {
    
});


function expectValueToContain(givenFunction: Cypress.Chainable<any>, expectedValue: string | number | boolean){
    return givenFunction.then(($target) => {
        return expect($target).to.contain(expectedValue);
    });
}

export {CyBasePage, runner, expectValueToContain};


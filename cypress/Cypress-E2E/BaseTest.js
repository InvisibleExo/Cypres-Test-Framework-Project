const { assert, expect } = require('chai');
const CyBasePage = require('../CyBasePage').CyBasePage;
let runner = new CyBasePage(cy);
before('BaseSetup', () => {
    
});


function expectValueToContain(givenFunction, expectedValue){
    return givenFunction.then(($target) => {
        return expect($target).to.contain(expectedValue);
    });
}

module.exports = {CyBasePage, runner, expectValueToContain};


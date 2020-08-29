const { assert, expect } = require('chai');

require('../../CyBasePage').CyBasePage;
require('../../Cypress-E2E/BaseTest');
let runner = require('../../Cypress-E2E/BaseTest').runner;
const SteamGlobalHeader = require('../../Cypress-POM/SteamGlobalHeader').SteamGlobalHeader;

describe('Function test for Steam Header', () => {

    beforeEach('Restart: ', () => {
        runner.goToURL('/');
    })

    it('Click on Store Header', () =>{

    });

    it('Click on Community Header', () => {

    });

    it('Click on About Category', () => {

    });

    it('Click on Support category', () => {

    });

    it('Click on Logo Icon', () => {

    });


})
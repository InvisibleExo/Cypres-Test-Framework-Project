const { assert, expect } = require('chai');
const { expectValueToContain } = require('../../Cypress-E2E/BaseTest');

require('../../CyBasePage').CyBasePage;
require('../../CyBasePage').expectValueToContain;
require('../../Cypress-E2E/BaseTest');
let runner = require('../../Cypress-E2E/BaseTest').runner;
const SteamGlobalHeader = require('../../Cypress-POM/SteamGlobalHeader').SteamGlobalHeader;

describe('Function test for Steam Header', () => {

    beforeEach('Restart: ', () => {
        runner.goToURL('/');
    })

    it('Click on Store Header', () =>{
        const header = new SteamGlobalHeader(cy);

        header.getHeaderCategory('STORE').click();

        header.getURL().then( ($url) => {
             expect($url).to.equal('https://store.steampowered.com/');
       });

        
    });

    it('Click on Community Header', () => {
        const header = new SteamGlobalHeader(cy);

        header.getHeaderCategory('COMMUNITY').then(($a) => {
            const href = $a.prop('href');

            header.request(href)
            .its('body').should('include', 'Steam Community');

        });

    });

    it('Click on About Category', () => {
        const header = new SteamGlobalHeader(cy);

        header.getHeaderCategory('ABOUT').click();

        header.getURL().then( ($url) => {
             expect($url).to.equal('https://store.steampowered.com/about/');
       });
    });

    it('Click on Support category', () => {
        const header = new SteamGlobalHeader(cy);

        header.getHeaderCategory('SUPPORT').click();

        header.getURL().then( ($url) => {
            expect($url).to.equal('https://help.steampowered.com/en/');
        })
    });

    it('Click on Logo Icon', () => {
        const header = new SteamGlobalHeader(cy);

        header.getHeaderLogo().click();

        header.getURL().then( ($url) => {
            expect($url).to.equal('https://store.steampowered.com/');
        });
    });


    //Test dropdown lists for header category
    it.only('Hover and click on drop down list', () => {
        const steamHeader = new SteamGlobalHeader(cy);
        //Home
        steamHeader.pickSubCategory('STORE', 'Home').as('store-home');
        steamHeader.forceClick(steamHeader.get('@store-home'));
        expectValueToContain(steamHeader.getURL(), 'https://store.steampowered.com/')
        
        //Discovery Queue
        steamHeader.pickSubCategory('STORE', 'Discovery Queue').as('store-DQ');
        steamHeader.forceClick(steamHeader.get('@store-DQ'));
        expectValueToContain(steamHeader.getURL(), 'https://store.steampowered.com/login/');

        //WishList
        steamHeader.pickSubCategory('STORE', 'Wishlist').then(($a) => {
            const href = $a.prop('href');

            steamHeader.request(href)
            .its('body').should('include', 'Steam Community');

        });


        //Points Shop
        steamHeader.forceClick(steamHeader.pickSubCategory('STORE', 'Points Shop'));
        expectValueToContain(steamHeader.getURL(), 'https://store.steampowered.com/points/shop/');
        
        //News
        steamHeader.forceClick(steamHeader.pickSubCategory('STORE', 'News'));
        expectValueToContain(steamHeader.getURL(), 'https://store.steampowered.com/news/');

        //Stats
        steamHeader.forceClick(steamHeader.pickSubCategory('STORE', 'Stats'));
        expectValueToContain(steamHeader.getURL(), 'https://store.steampowered.com/stats/');
    });




})
import { assert, expect } from 'chai';

import '../../CyBasePage';
import {runner} from '../../Cypress-E2E/BaseTest';
import {SteamGlobalHeader} from '../../Cypress-POM/SteamGlobalHeader';

describe('Unit test for Steam Header', () => {


    beforeEach('Restart: ', () => {
        runner.goToURL('/');
    })

    it('Hover over Header Store Category', () => {
        let steamHeader = new SteamGlobalHeader();

        steamHeader.pickSubCategory('STORE', 'Home').as('store-home');
        steamHeader.get('@store-home').then(($ele) => {
            
            assert.isTrue(steamHeader.pauseTillPresent($ele), 'this val exists');
        });

        steamHeader.pickSubCategory('STORE', 'Discovery Queue').as('store-dq');
        steamHeader.get('@store-dq').then(($ele) => {
            assert.isTrue(steamHeader.pauseTillPresent($ele), 'this val exists');
        });


        steamHeader.pickSubCategory('STORE', 'Wishlist').as('store-wl');
        steamHeader.get('@store-wl').then(($ele) => {
            assert.isTrue(steamHeader.pauseTillPresent($ele));
        });

        
        steamHeader.pickSubCategory('STORE', 'Points Shop').as('store-ps');
        steamHeader.get('@store-ps').then(($ele) => {
            assert.isTrue(steamHeader.pauseTillPresent($ele));
        });

        steamHeader.pickSubCategory('STORE', 'News').as('store-news');
        steamHeader.get('@store-news').then(($ele) => {
            assert.isTrue(steamHeader.pauseTillPresent($ele));
        });

        steamHeader.pickSubCategory('STORE', 'Stats').as('store-stats');
        steamHeader.get('@store-stats').then(($ele) => {
            assert.isTrue(steamHeader.pauseTillPresent($ele));
        });


    })

    it('Hover over Community Category', () => {
        let steamHeader = new SteamGlobalHeader();

        steamHeader.pickSubCategory('COMMUNITY', 'Home').then(($ele) => {
           return assert.isTrue(steamHeader.pauseTillPresent($ele));
        });

        steamHeader.pickSubCategory('COMMUNITY', 'Discussions').then(($ele) => {
           return assert.isTrue(steamHeader.pauseTillPresent($ele));
        });

        steamHeader.pickSubCategory('COMMUNITY', 'Workshop').then(($ele) => {
            return assert.isTrue(steamHeader.pauseTillPresent($ele));
        });

        steamHeader.pickSubCategory('COMMUNITY', 'Market').then(($ele) => {
            return assert.isTrue(steamHeader.pauseTillPresent($ele));
        });

        steamHeader.pickSubCategory('COMMUNITY', 'Broadcasts').then(($ele) => {
           return assert.isTrue(steamHeader.pauseTillPresent($ele));
        });

        

    })

    it('Hover over About', () => {
        let steamHeader = new SteamGlobalHeader();

        steamHeader.getHeaderCategory('ABOUT').contains('home').should('not.exist');

    });

    it('Hover over Support', () => {
        let steamHeader = new SteamGlobalHeader();

        steamHeader.getHeaderCategory('SUPPORT').contains('home').should('not.exist');
    });

    it('Hover and test Action items', () => {
        let steamHeader = new SteamGlobalHeader();

        steamHeader.getActionItem('a', 'Install Steam').as('install-link');

        steamHeader.getActionItem('a', 'login').as('login-link');

        steamHeader.getActionItem('#language_pulldown', 'language').as('language-list');

        steamHeader.get('@install-link').should('exist');

        steamHeader.get('@login-link').should('exist');

        steamHeader.get('@language-list').should('exist');

    })

    it('verify logo', () => {
        let steamHeader = new SteamGlobalHeader();

        steamHeader.getHeaderLogo().children().should('have.attr', 'href').and('include', 'store.steampowered.com');
        
    })


})

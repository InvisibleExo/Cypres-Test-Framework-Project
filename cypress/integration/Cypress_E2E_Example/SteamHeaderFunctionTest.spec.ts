import { assert, expect } from 'chai';
import{ expectValueToContain } from '../../Cypress-E2E/BaseTest';

import '../../Cypress-E2E/BaseTest';
import {runner} from '../../Cypress-E2E/BaseTest'
import{ SteamGlobalHeader } from '../../Cypress-POM/SteamGlobalHeader';

describe('Function test for Steam Header', () => {

    beforeEach('Restart: ', () => {
        runner.goToURL('/');
    })

    it('Click on Store Header', () =>{
        const header = new SteamGlobalHeader();

        header.getHeaderCategory('STORE').click();

        header.getURL().then( ($url) => {
            cy.log($url)
             expect($url).to.equal('https://store.steampowered.com/');
       });

        
    });

    it('Click on Community Header', () => {
        const header = new SteamGlobalHeader();

        header.getHeaderCategory('COMMUNITY').then(($a) => {
            const href = $a.prop('href');

            header.request(href)
            .its('body').should('include', 'Steam Community');

        });

    });

    it('Click on About Category', () => {
        const header = new SteamGlobalHeader();

        header.getHeaderCategory('ABOUT').click();

        header.getURL().then( ($url) => {
             expect($url).to.equal('https://store.steampowered.com/about/');
       });
    });

    it('Click on Support category', () => {
        const header = new SteamGlobalHeader();

        header.getHeaderCategory('SUPPORT').click();

        header.getURL().then( ($url) => {
            expect($url).to.equal('https://help.steampowered.com/en/');
        })
    });

    it('Click on Logo Icon', () => {
        const header = new SteamGlobalHeader();

        header.getHeaderLogo().click();

        header.getURL().then( ($url) => {
            expect($url).to.equal('https://store.steampowered.com/');
        });
    });


    //Test dropdown lists for header category
    it('Hover and click on drop down list for Store', () => {
        const steamHeader = new SteamGlobalHeader();
        //Home
        steamHeader.pickSubCategory('STORE', 'Home').as('store-home');
        steamHeader.forceClick(steamHeader.get('@store-home'));
        expectValueToContain(steamHeader.getURL(), 'https://store.steampowered.com/')
        
        //Discovery Queue
        steamHeader.pickSubCategory('STORE', 'Discovery Queue').as('store-DQ');
        steamHeader.forceClick(steamHeader.get('@store-DQ'));
        expectValueToContain(steamHeader.getURL(), 'https://store.steampowered.com/login/');

        //WishList
        steamHeader.inspectRequestURL(steamHeader.pickSubCategory('STORE', 'Wishlist'), 'href', 'body', 'Sign In');

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

    it('Test Drop down list for header Community', () => {
        const steamHeader = new SteamGlobalHeader();

        steamHeader.inspectRequestURL(steamHeader.pickSubCategory('COMMUNITY', 'Home'), 'href', 'body', 'Steam Community');

        steamHeader.inspectRequestURL(steamHeader.pickSubCategory('COMMUNITY', 'Discussions'), 'href', 'body', 'Steam Community :: Discussions');

        steamHeader.inspectRequestURL(steamHeader.pickSubCategory('COMMUNITY', 'Workshop'), 'href', 'body', 'Steam Community :: Steam Workshop');

        steamHeader.inspectRequestURL(steamHeader.pickSubCategory('COMMUNITY', 'Market'), 'href', 'body', 'Steam Community :: Steam Community Market');

        steamHeader.inspectRequestURL(steamHeader.pickSubCategory('COMMUNITY', 'Broadcasts'), 'href', 'body', 'Steam Community');
    });

    it('Test Install Steam Link', () => {
        const steamHeader = new SteamGlobalHeader();

        steamHeader.getActionItem('a', 'Install Steam').click().wait(1000);

        expectValueToContain(steamHeader.getURL(), 'https://store.steampowered.com/about/');
    });

    it('Test Login link', () => {
        const steamHeader = new SteamGlobalHeader();

        steamHeader.getActionItem('a', 'login').click();

        expectValueToContain(steamHeader.getURL(), 'https://store.steampowered.com/login/');
    })

    //Test list validation for languages
    it('Test Language list', () => {
        const steamHeader = new SteamGlobalHeader();

        steamHeader.getActionItem('span', 'language').click();

        steamHeader.getActionSection().get('#language_dropdown')
            .within(() => {
                const langList = /^schinese|tchinese|japanese|koreana|thai|bulgarian|czech|danish|german|spanish|latam|greek|french|italian|hungarian|dutch|norwegian|polish|portuguese|brazilian|romanian|russian|finnish|swedish|turkish|vietnamese|Steam Translation Server/;
                steamHeader.get('a[class="popup_menu_item tight"]').as('languageLinks');
                steamHeader.get('@languageLinks').should('have.length', 28);

                //This using task on whole array.
                let urlList : string[] = [];
                steamHeader.get('@languageLinks').each(($a) => {
                    urlList.push($a.prop('href'));
                });
                steamHeader.getCy().task('getURLListBodyResponseContains', {hrefList: urlList, target: langList}, {timeout: 100000})
                    .then(($value) => {
                        if(Array.isArray($value)){
                            console.log($value);
                            $value.forEach((val: Object) => {
                                console.log(val);
                                steamHeader.getCy().wrap(val).its('status').should('eq', 200);
                                steamHeader.getCy().wrap(val).its('answer').should('be.true');
                            })
                        }
                }); 


                //This approach using each loop 
               /* steamHeader.get('@languageLinks').each(($a) => {
                    steamHeader.getCy().task('getURLBodyResponseContains', {href: $a.prop('href'), target: langList}, {timeout: 100000}).as('returnValue');
                    steamHeader.get('@returnValue').its('status').should('equal', 200);
                    steamHeader.get('@returnValue').its('answer').should('be.true');
                    
                }); */
            });

    })


})
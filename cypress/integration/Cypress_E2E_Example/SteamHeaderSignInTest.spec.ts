import { assert, expect } from 'chai';
import '../../CyBasePage';

import {runner, expectValueToContain} from'../../Cypress-E2E/BaseTest';
import { SteamGlobalHeader } from '../../Cypress-POM/SteamGlobalHeader';

describe('Signin test for Steam Header', () => {

    beforeEach('Restart: ', () => {
        runner.goToURL('/');
    })

    //Work on Tests for signin
    //Appears I'm limited to front end testing
    //Use Add Command
    it('Login using requests', () => {
        

        const steamHeader = new SteamGlobalHeader();

        let urlLink; 
        /*steamHeader.getActionItem('a', 'login').then((a) => {
             urlLink = a.prop('href').toString();
            //steamHeader.getCy().visit(urlLink);
            steamHeader.getCy().log(urlLink);
            steamHeader.getCy().visit({
                method: 'POST',
                url: `${urlLink}`,
                form: true,
                followRedirect: true,
                auth: {
                    username: 'TestDummy789',
                    password: 'M@nkeyFeathers!08'
                } 
                
            });

        });

        steamHeader.getCy().log(urlLink);
        */

        

        steamHeader.getCy().reload();
    });

});


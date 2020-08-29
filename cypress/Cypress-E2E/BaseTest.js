const CyBasePage = require('../CyBasePage').CyBasePage;
let runner = new CyBasePage(cy);
before('BaseSetup', () => {
    
});


module.exports = {CyBasePage, runner};


/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
const axios = require('axios').default;
const {expect} = require('chai');
 // use axios
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('task', {
    //Work on request and return, learn what gets returned
    getURLBodyResponseContains: ({href, target}) => {
        return axios.get(href)
          .then( (response) => {
            //console.log('target: '+ target);
            if (response.data.match(target)) {
              return { answer: true, status: response.status };
            } else {
              return { answer: false, status: response.status };
            }
          })
          .catch((error) => console.log(error));
          
          
    },
    getURLStatusResponse: (href) => {
      return axios.get(href)
        .then((response) => {
          return { status: response.status };
        })
        .catch((error) => console.log(error));
    }
  })
}


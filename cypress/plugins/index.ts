/// <reference types="cypress"/>
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
import axios from 'axios';
// @ts-ignore
import plugins from 'cypress-social-logins';
 // use axios
export default (on: Function, config: any) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  on('task', {
    //Work on request and return, learn what gets returned
    getURLBodyResponseContains: async (linkAndTarget: {href:string, target: string}) => {
        try {
        const response = await axios.get(linkAndTarget.href);
        //console.log('target: '+ target);
        if (response.data.match(linkAndTarget.target)) {
          return { answer: true, status: response.status };
        } else {
          return { answer: false, status: response.status };
        }
      } catch (error) {
        return console.log(error);
      }  
    },

    getURLListBodyResponseContains: async (urlList: {hrefList: string[], target: string}) => {
     try {
        const result = await Promise.all(urlList.hrefList.map((href) => {
          return checkIfRequestContains(href, urlList.target);
        }));
        return result;
      } catch (error) {
        return console.log(error);
      }
    },

    getURLStatusResponse: async (href: string) => {
      try {
        const response = await axios.get(href);
        return { status: response.status };
      } catch (error) {
        return console.log(error);
      }
    }


  })
}

async function checkIfRequestContains(url: string, target: string){
  try {
    const response = await axios.get(url);
    //console.log('target: '+ target);
    if (response.data.match(target)) {
      return { answer: true, status: response.status };
    } else {
      return { answer: false, status: response.status };
    }
  } catch (error) {
    return console.log(error);
  } 
}


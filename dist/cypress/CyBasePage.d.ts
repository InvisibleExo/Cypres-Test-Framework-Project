/// <reference types="cypress" />
export default class CyBasePage {
    constructor();
    get(target: string): Cypress.Chainable<JQuery<HTMLElement>>;
    pause(ms: number): void;
    logInfo(message: string): void;
    pauseTillPresent(target: string): boolean;
    pauseTillVisible(elementSelector: string): boolean;
    pauseTillClickeable(element: Cypress.Chainable<JQuery<HTMLElement>>): boolean;
    setMobileViewPort(): void;
    setTabletViewPort(): void;
    setDesktopViewPort(): void;
    setLargeDesktopViewport(): void;
    refresh(): void;
    getURL(options?: Partial<Cypress.Loggable & Cypress.Timeoutable> | undefined): Cypress.Chainable<string>;
    goToURL(target: string): void;
    request(target: string): Cypress.Chainable<Cypress.Response>;
    wrap(subject: string | object, option?: any): Cypress.Chainable<string | object>;
    getCy(): Cypress.cy & EventEmitter;
    forceClick(givenValue: Cypress.Chainable<JQuery<HTMLElement>>): void;
    inspectRequestURL(givenValue: Cypress.Chainable<JQuery<HTMLElement>>, propValue: string, requestSection: string, requestTarget: string): void;
}

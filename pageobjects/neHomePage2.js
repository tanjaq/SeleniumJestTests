const Page = require('./basePage');
const { By } = require('selenium-webdriver')

const baseUrl = 'https://www.bookdepository.com/'
const cookiesConsentBtn = By.css('div.cookie-consent > div.cookie-consent-buttons > button.btn.btn-sm.btn-yes');
const brandLinkHeader = By.xpath('//h1/a[@class="brand-link"]/img');
const searchField = By.css('#book-search-form > div > input[name="searchTerm"]');
const searchBtn = By.className('header-search-btn');
const searchResultHeader = By.css('div.main-content.search-page > h1');
const searchResultCount = By.className('search-count');
const searchResultItemTitle = By.css('div.item-info > h3.title');
const firstBook = By.css('div:nth-child(1) > div.item-actions > div > a');
const checkIfAdded = By.css('div.modal.fade.status-success.in > div > div > div.modal-header > h3');
const leaveShopping = By.css(' div.basket-info > a.btn.btn-secondary.pull-left.continue-shopping.string-to-localize');
const secondBook = By.css('div:nth-child(2) > div.item-actions > div > a');
const goBasket = By.css('div.basket-info > a.btn.btn-primary.pull-right.continue-to-basket.string-to-localize.link-to-localize');
const basketText = By.css('div.page-slide > div.content-wrap > div.basket-page > h1');

const basketElements = By.css('div.page-slide > div.content-wrap > div.basket-page > div.grid-container > div.checkout-head-wrap > div.basket-msg');

module.exports = class HomePage extends Page {
    constructor(driver) {
        super(driver);
    }
    async openUrl() {
        await super.openUrl(baseUrl);
    }

    async agreeWithCookies() {
        await super.waitForElementVisible(cookiesConsentBtn);
        await super.clickButton(cookiesConsentBtn);
    }

    async verifyPageTitleContains(pageTitle) {
        const pageTitleElement = await super.getElementAttribute(brandLinkHeader, 'alt');
        expect(pageTitleElement).toContain(pageTitle)
    }
    async verifyAllSearchItemsContainText(text) {
        let itemFormats = await super.getElements(searchResultItemTitle);

        for(let item of itemFormats) {
            expect(await item.getText()).toContain(text);
        }
    }
    async searchForText(text) {
        await super.sendText(searchField, text);
        await super.clickButton(searchBtn);
    }

    async verifySearchResultText(text) {
        const searchResultTitle = await super.getElementText(searchResultHeader);
        expect(searchResultTitle).toContain('Search results for ' + text)
    }


    async verifySearchResultContainsMoreItemsThan(number) {
        const searchCount = await super.getElementText(searchResultCount)
        searchCountNum = parseInt(searchCount.replace(',', ''))
        expect(searchCountNum).toBeGreaterThan(number)
    }

    async addFirstBook() {
        await super.clickButton(firstBook)

    }
    async getAddedText(text) {
        await super.waitForElementVisible(checkIfAdded)
        const getText = await super.getElementText(checkIfAdded)
        console.log(getText)
        expect(getText).toContain(text)
    }
    async leaveToSearch() {
        await super.clickButton(leaveShopping)
    }
    async addSecondBook() {
        await super.clickButton(secondBook)
    }
    async clickToBasket() {
        await super.clickButton(goBasket)
    }
    async getBasketText(text) {
        await super.waitForElementVisible(basketText)
        const getTextOfBasket = await super.getElementText(basketText)
        expect(getTextOfBasket).toContain(text)
    }
    async getBusketElements(text) {
        await super.waitForElementVisible(basketElements)
        const busketElem = await super.getElementText(basketElements)
        console.log(busketElem)
        expect(busketElem).toContain(text)
    }
    async deleteBusketElem(text) {
        await super.clickButton(By.css('body > div.page-slide > div.content-wrap > div.basket-page > div.grid-container > div.basket-items-wrap > div:nth-child(' + text + ') > div.item-checkout-info > form.remove-item > button'))
    }
}
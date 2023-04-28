const Page = require('./basePage');
const {By} = require('selenium-webdriver')

const baseUrl = 'https://www.abebooks.com/'

let searchCountNum;

//locators
const cookiesConsentBtn = By.css('div.cookie-consent > div.cookie-consent-buttons > button.btn.btn-sm.btn-yes');
const brandLinkHeader = By.xpath('//h1/a[@class="brand-link"]/img');

const searchField = By.css('#header-searchbox-input');
const searchBtn = By.className('gnav-searchbox-button');
const searchResultHeader = By.css('#pageHeader > h1');
const searchResultCount = By.id('topbar-search-result-count-header');
const searchResultItemTitle = By.css('div > h2.title');
const searchResultItemFormat = By.css('div.item-info > p.format');
const searchResultsItemPrice = By.css('.item-price');

const sortOptions = By.xpath('//*[@id="sortby-topbar"]/option');
const sortByPriceBtn = By.xpath('//*[@id="sortby-topbar"]/option[@value="2"]');

const filterOptions = By.css('form.filter-menu > div > label');
const filterResultsBtn = By.xpath('//button[contains(text(),"Refine results")]');

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
        const pageTitleElement = await /*super.getElementAttribute(brandLinkHeader, 'alt')*/ super.getElementText(By.css('#logo > span'));
        expect(pageTitleElement).toContain(pageTitle)
    }

    async searchForText(text) {
        await super.sendText(searchField, text);        
        await super.clickButton(searchBtn);
    }

    async verifySearchResultText(text) {
        const searchResultTitle = await super.getElementText(searchResultHeader);
        expect(searchResultTitle).toContain(text)
    }

    async verifyAllSearchItemsContainText(text) {
        let itemFormats = await super.getElements(searchResultItemTitle);

        for(let item of itemFormats) {
            expect(await item.getText()).toContain(text);
        }
    }

    async verifySearchResultContainsMoreItemsThan(number) {
        const searchCount = await super.getElementText(searchResultCount)
        searchCountNum = parseInt(searchCount.replace(',', ''))
        expect(searchCountNum).toBeGreaterThan(number)
    }

    async verifyProductSortOptions() {
        let sortByOptions = await super.getElements(sortOptions);
        expect(sortByOptions).toHaveLength(12)
    }

    async sortResultsByPrice() {
        await super.clickButton(sortByPriceBtn);

    }

    async verifyResultsAreSorted() {
        let searchItems = await super.getElements(searchResultsItemPrice);
        //console.log(await searchItems[0].getText())
        //Verify that the products are sorted correctly.
        let price1 = parseFloat((await searchItems[0].getText()).replace('US$ ', ''))
        let price2 = parseFloat((await searchItems[1].getText()).replace('US$ ', ''))
        
        expect(price1).toBeGreaterThanOrEqual(price2)
    }

    async verifyProductFilters() {
        let filterByOptions = await super.getElements(filterOptions)
        expect(filterByOptions).toHaveLength(6)
    }

    async filterResultsByText(text) {
        await super.clickButton(By.xpath('//*[@id="filterFormat"]/option[contains(text(),"' + text + '")]'));
        await super.clickButton(filterResultsBtn);
    }

    async verifyResultsFilter(text) {  
        let itemFormats = await super.getElements(searchResultItemFormat)

        for(let item of itemFormats) {
            expect(await item.getText()).toContain(text)
        }
    }

    async verifyResultsAreFiltered() {
        const searchCountFiltered = await super.getElementText(searchResultCount)
        const searchCountFilteredNum = parseInt(searchCountFiltered.replace(',', ''))

        expect(searchCountFilteredNum).toBeLessThan(searchCountNum)
    }
}
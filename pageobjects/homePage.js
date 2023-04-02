const Page = require('./basePage');
const { By } = require('selenium-webdriver')

const baseUrl = 'https://www.bookdepository.com/'

let searchCountNum;

//locators
const cookiesConsentBtn = By.css('div.cookie-consent > div.cookie-consent-buttons > button.btn.btn-sm.btn-yes');
const brandLinkHeader = By.xpath('//h1/a[@class="brand-link"]/img');

const searchField = By.css('#book-search-form > div > input[name="searchTerm"]');
const searchBtn = By.className('header-search-btn');
const searchResultHeader = By.css('div.main-content.search-page > h1');
const searchResultCount = By.className('search-count');
const searchResultItemTitle = By.css('div.item-info > h3.title');
const searchResultItemFormat = By.css('div.item-info > p.format');
const searchResultsItemPrice = By.css('span.sale-price');

const sortOptions = By.xpath('//select[@name="searchSortBy"]/option');
const sortByPriceBtn = By.xpath('//select[@name="searchSortBy"]/option[@value="price_high_low"]');

const filterOptions = By.css('form.filter-menu > div > label');
const filterResultsBtn = By.xpath('//button[contains(text(),"Refine results")]');

const addToCartBtn = (number) => By.css(`div.book-item:nth-child(${number}) > div.item-actions > div > a.add-to-basket`);
const continueShoppingBtn = By.xpath('//div[@class="modal fade status-success in"]//div[@class="modal-content"]//*[text() = "Continue Shopping"]');
const modalContent = By.xpath('//div[@class="modal fade status-success in"]//div[@class="modal-content"]');
const basketBtn = By.xpath('//div[@class="basket-wrap"]/a[@class="basket-btn"]');

const categoryDropdown = By.css('ul.page-links>li.category-dropdown>a');
const openedCategoryDropdown = By.css('ul.page-links>li.category-dropdown.open');
const categoryBtn = (text) => By.xpath(`//ul[@class="tbd-dropdown-menu dropdown-menu"]//*[contains(text(), "${text}")]`);
const sidebarBtn = (text) => By.xpath(`//ul[contains(@class, "category-list sidebar-nav")]//*[contains(text(), "${text}")]`)
const categoryHeader = By.css('div.main-content.category-page h1');
const searchCount = By.className("search-count");

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

    async searchForText(text) {
        await super.sendText(searchField, text);
        await super.clickButton(searchBtn);
    }

    async verifySearchResultText(text) {
        const searchResultTitle = await super.getElementText(searchResultHeader);
        expect(searchResultTitle).toContain('Search results for ' + text)
    }

    async verifyAllSearchItemsContainText(text) {
        let itemFormats = await super.getElements(searchResultItemTitle);

        for (let item of itemFormats) {
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
        expect(sortByOptions).toHaveLength(5)
    }

    async sortResultsByPrice() {
        await super.clickButton(sortByPriceBtn);
    }

    async verifyResultsAreSorted() {
        let searchItems = await super.getElements(searchResultsItemPrice);

        //Verify that the products are sorted correctly.
        let price1 = parseFloat((await searchItems[0].getText()).replace(/[^\d,.]/, '').replace(',', '.'))
        let price2 = parseFloat((await searchItems[1].getText()).replace(/[^\d,.]/, '').replace(',', '.'))

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

        for (let item of itemFormats) {
            expect(await item.getText()).toContain(text)
        }
    }

    async verifyResultsAreFiltered() {
        const searchCountFiltered = await super.getElementText(searchResultCount)
        const searchCountFilteredNum = parseInt(searchCountFiltered.replace(',', ''))

        expect(searchCountFilteredNum).toBeLessThan(searchCountNum)
    }

    async addBookToCart(position) {
        await super.clickButton(addToCartBtn(position));
    }

    async verifyAddedToCartNotification() {
        const exists = await super.elementExists(continueShoppingBtn);
        expect(exists).toBe(true);
    }

    async closeCartAddedNotification() {
        await super.clickButton(continueShoppingBtn);
        const exists = await super.elementExists(modalContent);

        expect(exists).toBe(false);
    }

    async openBasket() {
        await super.clickButton(basketBtn);
    }

    async openCategoriesSubmenu() {
        await super.hoverOverElement(categoryDropdown);
    }

    async verifyCategoriesSubmenuOpened() {
        const exists = await super.elementExists(openedCategoryDropdown);

        expect(exists).toBe(true);
    }

    async selectCategory(text) {
        await super.clickButton(categoryBtn(text));
    }

    async selectFromSidebar(text) {
        await super.clickButton(sidebarBtn(text));
    }

    async verifyCategory(text) {
        const category = await super.getElementText(categoryHeader);
        expect(category).toContain(text);
    }

    async verifySearchCountToBeGreaterThan(number) {
        const count = await super.getElementText(searchCount);

        const countNum = parseInt(count.replace(",", ""));

        expect(countNum).toBeGreaterThan(number);
    }

    async verifyCategoriesHeaderText(text){

    }

}
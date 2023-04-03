const Page = require('./basePage');
const { By, Actions } = require('selenium-webdriver')
//Actions action = new Actions(driver);
const baseUrl = 'https://www.bookdepository.com/'

let searchCountNum;
let searchCountNum2;

//locators
const cookiesConsentBtn = By.css('div.cookie-consent > div.cookie-consent-buttons > button.btn.btn-sm.btn-yes');
const brandLinkHeader = By.xpath('//h1/a[@class="brand-link"]/img');

const searchResultCount = By.className('search-count');
const dropdownMenu = By.css("body > div.page-slide > div.secondary-header-wrap > div > ul > li.tbd-dropdown.category-dropdown.mob-nav-shop.dropdown > a.tbd-dropdown-toggle.desktop-only");

const audioBooks = By.css("body > div.page-slide > div.secondary-header-wrap > div > ul > li.tbd-dropdown.category-dropdown.mob-nav-shop.dropdown > ul > li.row > ul:nth-child(2) > ul > li:nth-child(1) > a");
const resultTitle = By.css("body > div.page-slide > div.content-wrap > div.main-content.featured-category.category-page > div:nth-child(2) > h1")
const foodDrink = By.css("body > div.page-slide > div.content-wrap > div.sidebar > div.sidebar-section > div > ul > li:nth-child(15) > a")
const bevarages = By.css("body > div.page-slide > div.content-wrap > div.sidebar > div:nth-child(1) > div > ul > li:nth-child(5) > a")
const BevaragesTitle = By.css("body > div.page-slide > div.content-wrap > div.main-content.category-page > div.block-wrap > h1")
//const links = By.className("parent-item");
const links = By.xpath('//li[@class="parent-item"]'); 
const checkForDropdown = By.css("body > div.page-slide > div.secondary-header-wrap > div > ul > li.tbd-dropdown.category-dropdown.mob-nav-shop.dropdown.open");


module.exports = class neHomePage extends Page {

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

    async verifySearchResultContainsMoreItemsThan(number) {
        const searchCount = await super.getElementText(searchResultCount)
        searchCountNum = parseInt(searchCount.replace(',', ''))
        expect(searchCountNum).toBeGreaterThan(number)
    }

    async dropdown(){
        const actions = driver.actions({bridge: true}); 
        console.log(actions)
        await this.driver.actions().move({duration:5000,origin:dropdownMenu,x:0,y:0}).perform();

    }

    async verifyThatDropdownIsOpened() {
        expect(checkForDropdown).not.toBeNull()
    }

    async clickOnAudioBooks() {
        await super.clickButton(audioBooks);
    }

    async verifyResultTitleContainsAudioBooks() {
        const searchResultTitle = await super.getElementText(resultTitle);
        expect(searchResultTitle).toContain('Featured Audio Books')

    }
    async clickOnFoodDrink() {
        await super.clickButton(foodDrink);
    }

    async verifySearchResultContainsMoreItemsThan(number) {
        searchCountNum = await super.getElementText(searchResultCount)
        searchCountNum = parseInt(searchCountNum.replace(',', ''))
        expect(searchCountNum).toBeGreaterThan(number)
    }


    async clickOnBevarages() {
        await super.clickButton(bevarages);
    }
    async verifyResultTitleContainsBevarages() {
        const searchResultTitle = await super.getElementText(BevaragesTitle);
        expect(searchResultTitle).toContain('All Beverages Audio Books')
    }
    async verifySearchResultContainsMoreItemsThanOther() {
        const searchCount2 = await super.getElementText(searchResultCount)
        searchCountNum2 = parseInt(searchCount2.replace(',', ''))
        expect(searchCountNum).toBeGreaterThan(searchCountNum2)
    }
    async veirfyThatPaginationIsCorrect() {
        let count = 0
        let paginator = await super.getElements(links);
        for (let item of paginator) {
            count++
        }
        expect(count).toEqual(3);
    }
    //

}
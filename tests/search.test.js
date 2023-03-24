const {Builder, By} = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
require('chromedriver')

const TIMEOUT = 50000

describe('Search products', () => {

    let driver

    beforeAll(async () => {
        driver = await new Builder()
        .forBrowser('chrome')
        //.setChromeOptions(new chrome.Options().addArguments('--headless'))
        .build()
        driver.manage().setTimeouts({implicit: TIMEOUT, pageLoad: TIMEOUT, script: TIMEOUT})
        driver.manage().window().maximize()

        await driver.get('https://www.bookdepository.com/')
        await driver.findElement(By.css('div.cookie-consent > div.cookie-consent-buttons > button.btn.btn-sm.btn-yes')).click()
    })
    
    afterAll(async () => {
        await driver.quit()
    })


    test('Test Open Web Page', async () => {
        const pageTitle = await driver.findElement(By.xpath('//h1/a[@class="brand-link"]/img')).getAttribute('alt')
        expect(pageTitle).toContain('Bookdepository.com')
    })

    test('Test Search by Keyword', async () => {
        const searchField = await driver.findElement(By.css('#book-search-form > div > input[name="searchTerm"]'))
        searchField.click()
        searchField.sendKeys('Harry Potter')
        await driver.findElement(By.className('header-search-btn')).click()

        const searchResultTitle = await driver.findElement(By.css('div.main-content.search-page > h1')).getText()
        expect(searchResultTitle).toContain('Search results for Harry Potter')

        const searchCount = await driver.findElement(By.className('search-count')).getText()
        const searchCountNum = parseInt(searchCount.replace(',', ''))

        expect(searchCountNum).toBeGreaterThan(1)
    })

})
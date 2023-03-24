const {Builder, By} = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
require('chromedriver')

const TIMEOUT = 50000
let searchCountNum

describe('Search products', () => {

    let driver

    beforeAll(async () => {
        driver = await new Builder()
        .forBrowser('chrome')
        // If you dont want to open browser, uncomment following row
        .setChromeOptions(new chrome.Options().addArguments('--headless'))
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
        //Verify that the web page has a Book Depository title.
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
        searchCountNum = parseInt(searchCount.replace(',', ''))

        //Verify that there are more than 1 products found.
        expect(searchCountNum).toBeGreaterThan(1)

        let itemFormats = await driver.findElements(By.css('div.item-info > h3.title'))

        //Verify that products presented have searched keyword in it.
        for(let item of itemFormats) {
            expect(await item.getText()).toContain('Harry Potter')
        }
    })

    test('Test Sort by price', async () => {
        //Verify that found products can be sorted.
        let sortByOptions = await driver.findElements(By.xpath('//select[@name="searchSortBy"]/option'))
        expect(sortByOptions).toHaveLength(5)

        await driver.findElement(By.xpath('//select[@name="searchSortBy"]/option[@value="price_high_low"]')).click()

        let searchItems = await driver.findElements(By.css('span.sale-price'))
        
        //Verify that the products are sorted correctly.
        let price1 = parseFloat((await searchItems[0].getText()).replace(/[^\d,.]/, '').replace(',', '.'))
        let price2 = parseFloat((await searchItems[1].getText()).replace(/[^\d,.]/, '').replace(',', '.'))

        expect(price1).toBeGreaterThanOrEqual(price2)
    })

    test('Test Filter by format', async () => {
        //Verify that products can be filtered by 6 categories.
        let filterByOptions = await driver.findElements(By.css('form.filter-menu > div > label'))
        expect(filterByOptions).toHaveLength(6)

        await driver.findElement(By.xpath('//*[@id="filterFormat"]/option[contains(text(),"Hardback")]')).click()
        await driver.findElement(By.xpath('//button[contains(text(),"Refine results")]')).click()

        //Verify that items selected have correct format.        
        let itemFormats = await driver.findElements(By.css('div.item-info > p.format'))

        for(let item of itemFormats) {
            expect(await item.getText()).toContain('Hardback')
        }

        //Verify that products list contains less items now.
        const searchCountFiltered = await driver.findElement(By.className('search-count')).getText()
        const searchCountFilteredNum = parseInt(searchCountFiltered.replace(',', ''))

        expect(searchCountFilteredNum).toBeLessThan(searchCountNum)
    })
})
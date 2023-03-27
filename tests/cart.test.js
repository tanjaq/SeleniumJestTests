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
        //.setChromeOptions(new chrome.Options().addArguments('--headless'))
        .build()
        driver.manage().setTimeouts({implicit: TIMEOUT, pageLoad: TIMEOUT, script: TIMEOUT})
        driver.manage().window().maximize()

        await driver.get('https://www.bookdepository.com/')
        await driver.findElement(By.css('div.cookie-consent > div.cookie-consent-buttons > button.btn.btn-sm.btn-yes')).click()
    })
    
    afterAll(async () => {
        //await driver.quit()
    })


    test('Test Open Web Page', async () => {
        //Verify that the web page has a Book Depository title.
        const pageTitle = await driver.findElement(By.xpath('//h1/a[@class="brand-link"]/img')).getAttribute('alt')
        expect(pageTitle).toContain('Bookdepository.com')
    })

    test('Test Search by Keyword', async () => {
        const searchField = await driver.findElement(By.css('#book-search-form > div > input[name="searchTerm"]'))
        searchField.click()
        searchField.sendKeys('Summer')
        await driver.findElement(By.className('header-search-btn')).click()

        const searchResultTitle = await driver.findElement(By.css('div.main-content.search-page > h1')).getText()
        expect(searchResultTitle).toContain('Search results for Summer')

        const searchCount = await driver.findElement(By.className('search-count')).getText()
        searchCountNum = parseInt(searchCount.replace(',', ''))

        //Verify that there are more than 1 products found.
        expect(searchCountNum).toBeGreaterThan(1)

        let itemFormats = await driver.findElements(By.css('div.item-info > h3.title'))

        //Verify that products presented have searched keyword in it.
        for(let item of itemFormats) {
            expect(await item.getText()).toContain('Summer')
        }
    })
    test('Test add first book to cart', async () =>{
        const pickOneBook = await driver.findElement(By.css('div:nth-child(1) > div.item-actions > div > a'))
        pickOneBook.click()
 // проверка
        //let modalTitle = await driver.findElement(By.css('div.modal-header > h3'))
        //expect(modalTitle).toContain('Item added to your basket')

    })
    test('Test add second book to cart', async () =>{
        
        let leaveShopping = await driver.findElement(By.css(' div.basket-info > a.btn.btn-secondary.pull-left.continue-shopping.string-to-localize'))
        leaveShopping.click()

        const searchResultTitle = await driver.findElement(By.css('div.main-content.search-page > h1')).getText()
        expect(searchResultTitle).toContain('Search results for Summer')

        const pickSecondBook = await driver.findElement(By.css('div:nth-child(2) > div.item-actions > div > a'))
        pickSecondBook.click()
 // проверка
        //let modalTitle = await driver.findElement(By.css('div.modal-header > h3'))
        //expect(modalTitle).toContain('Item added to your basket')
        //await driver.findElement(By.className('btn btn-secondary pull-left continue-shopping string-to-localize')).click()
    })
    test('Go to Basket/Checkout', async () =>{
        
        let basketCheck = await driver.findElement(By.css('div.basket-info > a.btn.btn-primary.pull-right.continue-to-basket.string-to-localize.link-to-localize'))
        basketCheck.click()

         // проверка
        //let modalTitle = await driver.findElement(By.css('div.modal-header > h3'))
        //expect(modalTitle).toContain('Item added to your basket')
        //await driver.findElement(By.className('btn btn-secondary pull-left continue-shopping string-to-localize')).click()
    })
    test('Check number of books', async () =>{
         // проверка
        
    })
    test('Check number of books after removing', async () =>{
        
        let basketCheck = await driver.findElement(By.css('body > div.page-slide > div.content-wrap > div.basket-page > div.grid-container > div.basket-items-wrap > div:nth-child(2) > div.item-checkout-info > form.remove-item > button'))
        basketCheck.click()
        // проверка
    })



})
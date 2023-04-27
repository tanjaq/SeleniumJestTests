const {Builder, By} = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
require('chromedriver')

let HomePage = require('../pageobjects/homePage')

const TIMEOUT = 10000

describe('Add products to cart', () => {
    
    let driver

    beforeAll(async () => {

        //TODO add method to delete all old screenshots

        driver = await new Builder()
        .forBrowser('chrome')
        // If you dont want to open browser, uncomment following row
        .setChromeOptions(new chrome.Options().addArguments('--headless'))
        .build()
        driver.manage().setTimeouts({implicit: TIMEOUT, pageLoad: TIMEOUT, script: TIMEOUT})
        driver.manage().window().maximize()

        HomePage = new HomePage(driver)

        await HomePage.openUrl()
        await HomePage.agreeWithCookies()
        
    })

    afterEach(function() {
        HomePage.takeScreenShotIfTestFailed(expect.getState())
    })
    
    afterAll(async () => {
        await driver.quit()
    })

    test('Test Open Web Page', async () => {
        await HomePage.verifyPageTitleContains('abebooks.com')
    })

    test('Test Search by Keyword', async () => {
        await HomePage.verifyPageTitleContains('abebooks.com')
    })
    test('Test Add to Сart', async () => {
        await HomePage.verifyPageTitleContains('abebooks.com')
    })
    test('Test Continue Shopping', async () => {
        await HomePage.verifyPageTitleContains('abebooks.com')
    })
    test('Test Select and add to Cart', async () => {
        await HomePage.verifyPageTitleContains('abebooks.com')
    })
    test('Test Basket/Checkout button', async () => {
        await HomePage.verifyPageTitleContains('abebooks.com')
    })
    test('Test Remove product from cart', async () => {
        await HomePage.verifyPageTitleContains('abebooks.com')
    })
})
const {Builder, By} = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
require('chromedriver')

let HomePage = require('../pageobjects/homepage')

const TIMEOUT = 10000

describe('Search products from menu', () => {
    
    let driver

    beforeAll(async () => {

        //TODO add method to delete all old screenshots

        driver = await new Builder()
        .forBrowser('chrome')
        // If you dont want to open browser, uncomment following row
        //.setChromeOptions(new chrome.Options().addArguments('--headless'))
        .build()
        driver.manage().setTimeouts({implicit: TIMEOUT, pageLoad: TIMEOUT, script: TIMEOUT})
        driver.manage().window().maximize()

        HomePage = new HomePage(driver)

        await HomePage.openUrl()
        //await HomePage.agreeWithCookies()
        
    })

    afterEach(function() {
        HomePage.takeScreenShotIfTestFailed(expect.getState())
    })
    
    afterAll(async () => {
        await driver.quit()
    })


    test('Test Open Web Page', async () => {
        await HomePage.verifyPageTitleContains('AbeBooks.com')
    })

    test('Test “Shop by Category” Menu', async () => {
        await HomePage.browseCollections()
        await HomePage.verifyBrowseText('Browse Collections')
    })
    test('Test “Comic Books” from Submenu', async () => {
        //await HomePage.verifyPageTitleContains('bookdepository.com')
    })
    test('Test “Food & Drink” from Submenu', async () => {
        //await HomePage.verifyPageTitleContains('bookdepository.com')
    })
    test('Test “Beverages” from Submenu', async () => {
        //await HomePage.verifyPageTitleContains('bookdepository.com')
    })
})
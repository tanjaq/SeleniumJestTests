const {Builder, By} = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
require('chromedriver')

let HomePage = require('../pageobjects/homePage')

const TIMEOUT = 50000

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

        HomePage = new HomePage(driver)

        await HomePage.openUrl()
        await HomePage.agreeWithCookies()
        
    })
    
    afterAll(async () => {
        //await driver.quit()
    })


    test('Test Open Web Page', async () => {
        await HomePage.verifyPageTitleContains('Bookdepository.com')
    })

    test('Test Search by Keyword', async () => {

        await HomePage.searchForText('Summer')
        await HomePage.verifySearchResultText('Summer')
        await HomePage.verifyAllSearchItemsContainText('Summer')

    })

    test('Test add first book to cart', async () => {
        await HomePage.addFirstBook();
        await HomePage.getAddedText('Item added to your basket')
    })
    test('Test add second book to cart', async () =>{
 
        await HomePage.leaveToSearch();
        await HomePage.verifySearchResultText('Summer')
        await HomePage.addSecondBook();
        await HomePage.getAddedText('Item added to your basket')
    })
    test('Test Go to Basket/Checkout', async () =>{
        await HomePage.clickToBasket();
        await HomePage.getBasketText('Your basket');
    })
    test('Check number of books before', async () =>{
        await HomePage.getBusketElements('2')
    })
    test('Check number of books after removing', async () =>{
        await HomePage.deleteBusketElem('2')
        await HomePage.getBusketElements('1')
    })
})
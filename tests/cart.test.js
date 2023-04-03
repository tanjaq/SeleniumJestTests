const {Builder, By} = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
require('chromedriver')

let neHomePage2 = require('../pageobjects/neHomePage2')

const TIMEOUT = 5000

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

        neHomePage2 = new neHomePage2(driver)

        await neHomePage2.openUrl()
        await neHomePage2.agreeWithCookies()
        
    })
    
    afterAll(async () => {
        //await driver.quit()
    })


    test('Test Open Web Page', async () => {
        await neHomePage2.verifyPageTitleContains('Bookdepository.com')
    })

    test('Test Search by Keyword', async () => {

        await neHomePage2.searchForText('Man')
        await neHomePage2.verifySearchResultText('Man')
        await neHomePage2.verifyAllSearchItemsContainText('Man')

    })

    test('Test add first book to cart', async () => {
        await neHomePage2.addFirstBook();
        await neHomePage2.getAddedText('Item added to your basket')
    })
    test('Test add second book to cart', async () =>{
 
        await neHomePage2.leaveToSearch();
        await neHomePage2.verifySearchResultText('Man')
        await neHomePage2.addSecondBook();
        await neHomePage2.getAddedText('Item added to your basket')
    })
    test('Test Go to Basket/Checkout', async () =>{
        await neHomePage2.clickToBasket();
        await neHomePage2.getBasketText('Your basket');
    })
    test('Check number of books before', async () =>{
        await neHomePage2.getBusketElements('2')
    })
    test('Check number of books after removing', async () =>{
        await neHomePage2.deleteBusketElem('2')
        await neHomePage2.getBusketElements('1')
    })
})

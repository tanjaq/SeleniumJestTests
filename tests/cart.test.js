const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
require('chromedriver');

let HomePage = require('../pageobjects/homePage');
let BasketPage = require('../pageobjects/basketPage');

const TIMEOUT = 5000;

describe('Add products to cart', () => {
    let driver;

    beforeAll(async () => {
        driver = await new Builder()
            .forBrowser('chrome')
            // If you dont want to open browser, uncomment following row
            .setChromeOptions(new chrome.Options().addArguments('--headless'))
            .build();
        driver.manage().setTimeouts({ implicit: TIMEOUT, pageLoad: TIMEOUT, script: TIMEOUT });
        driver.manage().window().maximize();

        HomePage = new HomePage(driver);
        BasketPage = new BasketPage(driver);

        await HomePage.openUrl();
        await HomePage.agreeWithCookies();

    })

    afterAll(async () => {
        await driver.quit();
    });

    test('Test Open Web Page', async () => {
        await HomePage.verifyPageTitleContains('Bookdepository.com');
    });

    test('Search for book', async () => {
        await HomePage.searchForText("Harry Potter");
        await HomePage.verifySearchResultContainsMoreItemsThan(1)
    })

    test('Add book to cart', async () => {
        await HomePage.addBookToCart(1);
        await HomePage.verifyAddedToCartNotification();
    })

    //Dont know how to check if element exists without messing with explicit wait
    test('Continue shopping - close notificaton', async () => {
        await HomePage.closeCartAddedNotification();
    })

    test('Add another item to cart', async () => {
        await HomePage.addBookToCart(2);
        await HomePage.verifyAddedToCartNotification();
        await HomePage.closeCartAddedNotification();
    })


    test("Go to the basket", async () => {
        await HomePage.openBasket();
        await BasketPage.verifyBasketPage();
        await BasketPage.verifyBasketSizeToBe(2);
    })

    test("Remove first book from the basket", async () => {
        await BasketPage.removeFromBasket();
        await BasketPage.verifyBasketSizeToBe(1);
    })

})
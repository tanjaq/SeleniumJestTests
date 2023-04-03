const { Builder, By, Actions } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

require("chromedriver");
let HomePage = require("../pageobjects/homePage");
const TIMEOUT = 5000;
let searchCountNum;
let searchCountNum2;

describe("Search products from menu", () => {

    let driver

    beforeAll(async () => {
        driver = await new Builder()
            .forBrowser('chrome')
            // If you dont want to open browser, uncomment following row
            //.setChromeOptions(new chrome.Options().addArguments('--headless'))
            .build()
        driver.manage().setTimeouts({ implicit: TIMEOUT, pageLoad: TIMEOUT, script: TIMEOUT })
        driver.manage().window().maximize()
        HomePage = new HomePage(driver)
        await HomePage.openUrl()
        await HomePage.agreeWithCookies()

    })

    afterAll(async () => {
        await driver.quit()
    })

    test('Test Open Web Page', async () => {
        await HomePage.verifyPageTitleContains('Bookdepository.com')
    })

    test("Test Click On Shop By Category", async () => {
        const dropdownMenu = driver.findElement(By.css("body > div.page-slide > div.secondary-header-wrap > div > ul > li.tbd-dropdown.category-dropdown.mob-nav-shop.dropdown > a.tbd-dropdown-toggle.desktop-only"));
        const actions = driver.actions({ bridge: true });
        //console.log(actions)
        await actions.move({ duration: 2000, origin: dropdownMenu, x: 0, y: 0 }).perform();

        //await neHomePage.dropdown();
        await HomePage.verifyThatDropdownIsOpened();
    });

    test("Test Select Audio Books", async () => {
        await HomePage.clickOnAudioBooks()
        await HomePage.verifyResultTitleContainsAudioBooks();
    });

    test("Test Select Food & Drink", async () => {
        await HomePage.clickOnFoodDrink()
        await HomePage.verifySearchResultContainsMoreItemsThan(1)
    });
    test("Test Select Beverages", async () => {
        await HomePage.clickOnBevarages()
        await HomePage.verifyResultTitleContainsBevarages()
        await HomePage.verifySearchResultContainsMoreItemsThanOther()
        await HomePage.veirfyThatPaginationIsCorrect()
    
    })
})
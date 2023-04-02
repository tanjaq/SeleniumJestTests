const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
require('chromedriver');

let HomePage = require('../pageobjects/homePage');

const TIMEOUT = 5000;

describe('Search products from menu', () => {
    let driver;
    let actions;

    beforeAll(async () => {
        driver = await new Builder()
            .forBrowser('chrome')
            // If you dont want to open browser, append this option .addArguments('--headless')
            .setChromeOptions(new chrome.Options())
            .build();
        driver.manage().setTimeouts({ implicit: TIMEOUT, pageLoad: TIMEOUT, script: TIMEOUT });
        driver.manage().window().maximize();

        HomePage = new HomePage(driver);

        await HomePage.openUrl();
        await HomePage.agreeWithCookies();

    })

    afterAll(async () => {
        await driver.quit();
    });

    test('Test Open Web Page', async () => {
        await HomePage.verifyPageTitleContains('Bookdepository.com');
    })

    test('Hover over categories submenu', async () => {
        await HomePage.openCategoriesSubmenu();
        await HomePage.verifyCategoriesSubmenuOpened();
    })

    test("Select Audio Books", async () => {
        const category = "Audio Books";
        await HomePage.selectCategory(category);
    
        await HomePage.verifyCategory(category);
      });
    
      let searchCount1;
      test("Select Food & Drink", async () => {
        const category = "Food & Drink";
        await HomePage.selectFromSidebar(category);
    
        await HomePage.verifySearchCountToBeGreaterThan(1);
      });
    
      test("Select Beverages", async () => {
        const category = "Beverages";
        await HomePage.selectFromSidebar(category);
    
        await HomePage.verifyCategory(category);

        //Test cases are too ambiguos, I don't really understand what to test
        //Verify products list now contains less items.
        //Verify that page submenu routing is correct.
      });

})
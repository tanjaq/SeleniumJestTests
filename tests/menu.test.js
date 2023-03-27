const { Builder, By, Actions } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
require("chromedriver");

const TIMEOUT = 10000;
let searchCountNum;
let searchCountNum2;

describe("Search products from menu", () => {
  beforeAll(async () => {
    driver = await new Builder()
      .forBrowser("chrome")
      // If you dont want to open browser, uncomment following row
      .setChromeOptions(new chrome.Options())
      .build();
    driver
      .manage()
      .setTimeouts({ implicit: TIMEOUT, pageLoad: TIMEOUT, script: TIMEOUT });
    driver.manage().window().maximize();

    await driver.get("https://www.bookdepository.com/");
    await driver
      .findElement(
        By.css(
          "div.cookie-consent > div.cookie-consent-buttons > button.btn.btn-sm.btn-yes"
        )
      )
      .click();
  });

  afterAll(async () => {
    //await driver.quit()
  });

  test("Test Open Web Page", async () => {
    //Verify that the web page has a Book Depository title.
    const pageTitle = await driver
      .findElement(By.xpath('//h1/a[@class="brand-link"]/img'))
      .getAttribute("alt");
    expect(pageTitle).toContain("Bookdepository.com");
  });

  test("Test Click On Shop By Category", async () => {
    const dropdownMenu = driver.findElement(
      By.css(
        "body > div.page-slide > div.secondary-header-wrap > div > ul > li.tbd-dropdown.category-dropdown.mob-nav-shop.dropdown > a.tbd-dropdown-toggle.desktop-only"
      )
    );
    const actions = driver.actions({ bridge: true });
    await actions.move({ duration: 2000, origin: dropdownMenu, x: 0, y: 0 }).perform();
      
    checkForDropdown = await driver.findElement(By.css("body > div.page-slide > div.secondary-header-wrap > div > ul > li.tbd-dropdown.category-dropdown.mob-nav-shop.dropdown.open"))
    expect(checkForDropdown).not.toBeNull()

  });


  test("Test Select Audio Books", async () => {
    const audioBooks = await driver
      .findElement(
        By.css(
          "body > div.page-slide > div.secondary-header-wrap > div > ul > li.tbd-dropdown.category-dropdown.mob-nav-shop.dropdown > ul > li.row > ul:nth-child(2) > ul > li:nth-child(1) > a"
        )
      )
      .click();

    const ResultTitle = await driver
      .findElement(
        By.css(
          "body > div.page-slide > div.content-wrap > div.main-content.featured-category.category-page > div:nth-child(2) > h1"
        )
      )
      .getText();
    expect(ResultTitle).toContain("Featured Audio Books");
  });

  test("Test Select Food & Drink", async () => {
    const foodDrink = await driver
      .findElement(
        By.css(
          "body > div.page-slide > div.content-wrap > div.sidebar > div.sidebar-section > div > ul > li:nth-child(15) > a"
        )
      )
      .click();

    const searchCount = await driver
      .findElement(By.className("search-count"))
      .getText();

    searchCountNum = parseInt(searchCount.replace(",", ""));

    expect(searchCountNum).toBeGreaterThan(1);
    //Verify that there are more than 1 products found.
  });

  test("Test Select Beverages", async () => {
    const foodDrink = await driver
      .findElement(
        By.css(
          "body > div.page-slide > div.content-wrap > div.sidebar > div:nth-child(1) > div > ul > li:nth-child(5) > a"
        )
      )
      .click();

    const BevaragesTitle = await driver
      .findElement(
        By.css(
          "body > div.page-slide > div.content-wrap > div.main-content.category-page > div.block-wrap > h1"
        )
      )
      .getText();
    expect(BevaragesTitle).toContain("All Beverages Audio Books");
    const searchCount2 = await driver
      .findElement(By.className("search-count"))
      .getText();

    searchCountNum2 = parseInt(searchCount2.replace(",", ""));

    expect(searchCountNum).toBeGreaterThan(searchCountNum2);
    let links = await driver.findElements(By.className("parent-item"));
    expect(links.length).toEqual(4);
  });
  //body > div.page-slide > div.content-wrap > div.main-content.category-page > div.block-wrap > h1
});
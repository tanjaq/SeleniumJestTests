const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
require("chromedriver");

const TIMEOUT = 50000;
let searchCountNum;

describe("Search products", () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder()
      .forBrowser("chrome")
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
    await driver.quit()
  });

  test("Test Open Web Page", async () => {
    const pageTitle = await driver
      .findElement(By.xpath('//h1/a[@class="brand-link"]/img'))
      .getAttribute("alt");
    expect(pageTitle).toContain("Bookdepository.com");
  });

  test("Test Search by Keyword", async () => {
    const searchField = await driver.findElement(
      By.css('#book-search-form > div > input[name="searchTerm"]')
    );
    searchField.click();
    searchField.sendKeys("Summer");
    await driver.findElement(By.className("header-search-btn")).click();

    const ResultTitle = await driver
      .findElement(By.css("div.main-content.search-page > h1"))
      .getText();
    expect(ResultTitle).toContain("Search results for Summer");

    const searchCount = await driver
      .findElement(By.className("search-count"))
      .getText();
    searchCountNum = parseInt(searchCount.replace(",", ""));
    expect(searchCountNum).toBeGreaterThan(1);

    let keyWord = await driver.findElements(By.css("div.item-info > h3.title"));

    for (let key of keyWord) {
      expect(await key.getText()).toContain("Summer");
    }
  });
  test("Test add first book to cart", async () => {
    await driver
      .findElement(By.css("div:nth-child(1) > div.item-actions > div > a"))
      .click();

    let modalTitle = await driver
      .findElement(
        By.css(
          "div.modal.fade.status-success.in > div > div > div.modal-header > h3"
        )
      )
      .getText();
    expect(modalTitle).toContain("Item added to your basket");
  });
  test("Test add second book to cart", async () => {
    let continueShopping = await driver
      .findElement(
        By.css(
          " div.basket-info > a.btn.btn-secondary.pull-left.continue-shopping.string-to-localize"
        )
      )
      .click();

    const searchResultTitle = await driver
      .findElement(By.css("div.main-content.search-page > h1"))
      .getText();
    expect(searchResultTitle).toContain("Search results for Summer");

    await driver
      .findElement(By.css("div:nth-child(2) > div.item-actions > div > a"))
      .click();
    let modalTitle = await driver
      .findElement(
        By.css(
          "div.modal.fade.status-success.in > div > div > div.modal-header > h3"
        )
      )
      .getText();
    expect(modalTitle).toContain("Item added to your basket");
  });
  test("Test Go to Basket/Checkout", async () => {
    let basketCheck = await driver
      .findElement(
        By.css(
          "div.basket-info > a.btn.btn-primary.pull-right.continue-to-basket.string-to-localize.link-to-localize"
        )
      )
      .click();

    let Basket = await driver
      .findElement(
        By.css("div.page-slide > div.content-wrap > div.basket-page > h1")
      )
      .getText();
    expect(Basket).toContain("Your basket");
  });
  test("Check number of books before", async () => {
    let numberOfBooks = await driver
      .findElement(
        By.css(
          "div.page-slide > div.secondary-header-wrap > div > div > div.basket-wrap > a > span"
        )
      )
      .getText();
    expect(numberOfBooks).toContain("2");
  });
  test("Check number of books after removing", async () => {
    let basketCheck = await driver
      .findElement(
        By.css(
          "body > div.page-slide > div.content-wrap > div.basket-page > div.grid-container > div.basket-items-wrap > div:nth-child(2) > div.item-checkout-info > form.remove-item > button"
        )
      )
      .click();

    let numberOfBooks = await driver
      .findElement(
        By.css(
          "div.page-slide > div.secondary-header-wrap > div > div > div.basket-wrap > a > span"
        )
      )
      .getText();
    expect(numberOfBooks).toContain("1");
  });
});

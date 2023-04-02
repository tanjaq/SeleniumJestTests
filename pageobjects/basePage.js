const { until } = require("selenium-webdriver");
const { addAttach } = require("jest-html-reporters/helper");
const fs = require("fs");
const path = require('path');

const DEFAULT_TIMEOUT = 5000;
const SCREENSHOT_FOLDER = "./screenshots/";
let driver;

//parent page, has functions that all pages could use
module.exports = class Page {
    constructor(driver) {
        this.driver = driver;
    }

    async openUrl(path) {
        return await this.driver.get(path);
    }

    async getElement(element) {
        return await this.driver.findElement(element);
    }

    async getElements(element) {
        return await this.driver.findElements(element);
    }

    async elementExists(element) {
        const el = await this.driver.findElements(element);

        if (el.length > 0) {
            return true;
        } else {
            return false
        }
    }

    async clickButton(element) {
        return await this.driver.findElement(element).click();
    }

    async sendText(element, text) {
        const elementField = await this.driver.findElement(element);
        elementField.click();
        return await elementField.sendKeys(text);
    }

    async getElementText(element) {
        return await this.driver.findElement(element).getText();
    }

    async getElementAttribute(element, attribute) {
        return await this.driver.findElement(element).getAttribute(attribute);
    }

    waitForElementVisible(element) {
        this.driver.wait(until.elementLocated(element), DEFAULT_TIMEOUT);
        return this.driver.wait(until.elementIsVisible(this.driver.findElement(element)), DEFAULT_TIMEOUT);
    }

    waitForElementNotVisible(element) {
        this.driver.wait(until.elementLocated(element), DEFAULT_TIMEOUT);
        return this.driver.wait(until.elementIsNotVisible(this.driver.findElement(element)), DEFAULT_TIMEOUT);
    }

    async hoverOverElement(element) {
        const toHover = this.driver.findElement(element);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({origin: toHover}).perform();
    }

    async takeScreenShotIfTestFailed(state) {
        if (state.assertionCalls != state.numPassingAsserts) {
            let imageFileName = state.currentTestName + ".jpg";

            this.driver.takeScreenshot().then(
                function (image) {
                    fs.writeFileSync(SCREENSHOT_FOLDER + imageFileName, image, 'base64');
                }
            )
            let imagePath = path.resolve(SCREENSHOT_FOLDER + imageFileName)
            await addAttach({
                attach: imagePath
            });
        }
    }

    async getPageSource() {
        //TODO get pageSource and add it to test report
        //Hint: driver has a function for getting page source
    }

    emptyScreenshotFolder() {
        //TODO clean screenshots folder before all tests
    }

}
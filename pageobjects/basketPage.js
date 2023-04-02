const Page = require('./basePage');
const {By} = require('selenium-webdriver')

const baseUrl = 'https://www.bookdepository.com/'

const basketBtn = By.xpath('//div[@class="basket-wrap"]/a[@class="basket-btn"]');

const basketHeader = By.css('div.basket-page>h1');
const removeFromBasketBtn = By.xpath('//div[@class="basket-item"]//button');
const basketCount = By.xpath('//div[@class="basket-wrap"]/a[@class="basket-btn"]/span')

module.exports = class BasketPage extends Page {
    constructor(driver) {
        super(driver);
    }

    async openBasket(){
        await super.clickButton(basketBtn);
    }

    async verifyBasketPage(){
        const header = await super.getElementText(basketHeader);
        expect(header).toBe("Your basket");
    }

    async verifyBasketSizeToBe(number){
        const count = await super.getElementText(basketCount);
        const countNumber = parseInt(count);
        if(number instanceof String){
            number = parseInt(number);
        }
        expect(countNumber).toBe(number);
    }

    async removeFromBasket(){
        await super.clickButton(removeFromBasketBtn);
    }

}
const Page = require('./basepage');
const {By} = require('selenium-webdriver')
const baseUrl = 'https://www.bookdepository.com/'
const cookiesConsentBtn = By.css('div.cookie-consent > div.cookie-consent')
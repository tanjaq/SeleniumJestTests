window.jest_html_reporters_callback__({"numFailedTestSuites":1,"numFailedTests":4,"numPassedTestSuites":2,"numPassedTests":2,"numPendingTestSuites":0,"numPendingTests":0,"numRuntimeErrorTestSuites":0,"numTodoTests":0,"numTotalTestSuites":3,"numTotalTests":6,"startTime":1682077272132,"success":false,"testResults":[{"numFailingTests":0,"numPassingTests":1,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1682077273544,"runtime":967,"slow":false,"start":1682077272577},"testFilePath":"C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\tests\\cart.test.js","failureMessage":null,"testResults":[{"ancestorTitles":["Add products to cart"],"duration":1,"failureMessages":[],"fullName":"Add products to cart Test Open Web Page","status":"passed","title":"Test Open Web Page"}]},{"numFailingTests":0,"numPassingTests":1,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1682077273547,"runtime":976,"slow":false,"start":1682077272571},"testFilePath":"C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\tests\\menu.test.js","failureMessage":null,"testResults":[{"ancestorTitles":["Search products from menu"],"duration":1,"failureMessages":[],"fullName":"Search products from menu Test Open Web Page","status":"passed","title":"Test Open Web Page"}]},{"numFailingTests":4,"numPassingTests":0,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1682077279531,"runtime":6960,"slow":true,"start":1682077272571},"testFilePath":"C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\tests\\search.test.js","failureMessage":"\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mSearch products › Test Open Web Page\u001b[39m\u001b[22m\n\n    ElementClickInterceptedError: element click intercepted: Element <button rel=\"nofollow\" href=\"#\" class=\"btn btn-sm btn-yes\">...</button> is not clickable at point (400, 504). Other element would receive the click: <div class=\"modal fade status-success in\" style=\"display: block; padding-right: 17px;\">...</div>\n      (Session info: headless chrome=112.0.5615.137)\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 27 |\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 28 |\u001b[39m     \u001b[36masync\u001b[39m clickButton(element) {\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 29 |\u001b[39m         \u001b[36mreturn\u001b[39m \u001b[36mawait\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdriver\u001b[33m.\u001b[39mfindElement(element)\u001b[33m.\u001b[39mclick()\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m    |\u001b[39m                \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 30 |\u001b[39m     }\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 31 |\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 32 |\u001b[39m     \u001b[36masync\u001b[39m sendText(element\u001b[33m,\u001b[39m text) {\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.throwDecodedError (\u001b[22m\u001b[2mnode_modules/selenium-webdriver/lib/error.js\u001b[2m:524:15)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat parseHttpResponse (\u001b[22m\u001b[2mnode_modules/selenium-webdriver/lib/http.js\u001b[2m:587:13)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Executor.execute (\u001b[22m\u001b[2mnode_modules/selenium-webdriver/lib/http.js\u001b[2m:515:28)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Driver.execute (\u001b[22m\u001b[2mnode_modules/selenium-webdriver/lib/webdriver.js\u001b[2m:745:17)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat HomePage.clickButton (\u001b[22m\u001b[2mpageobjects/basepage.js\u001b[2m:29:16)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat HomePage.agreeWithCookies (\u001b[22m\u001b[2mpageobjects/homepage.js\u001b[2m:37:9)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[22m\u001b[2m\u001b[0m\u001b[36mtests/search.test.js\u001b[39m\u001b[0m\u001b[2m:28:9)\u001b[22m\u001b[2m\u001b[22m\n\n\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mSearch products › Test Search by Keyword\u001b[39m\u001b[22m\n\n    ElementClickInterceptedError: element click intercepted: Element <button rel=\"nofollow\" href=\"#\" class=\"btn btn-sm btn-yes\">...</button> is not clickable at point (400, 504). Other element would receive the click: <div class=\"modal fade status-success in\" style=\"display: block; padding-right: 17px;\">...</div>\n      (Session info: headless chrome=112.0.5615.137)\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 27 |\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 28 |\u001b[39m     \u001b[36masync\u001b[39m clickButton(element) {\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 29 |\u001b[39m         \u001b[36mreturn\u001b[39m \u001b[36mawait\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdriver\u001b[33m.\u001b[39mfindElement(element)\u001b[33m.\u001b[39mclick()\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m    |\u001b[39m                \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 30 |\u001b[39m     }\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 31 |\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 32 |\u001b[39m     \u001b[36masync\u001b[39m sendText(element\u001b[33m,\u001b[39m text) {\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.throwDecodedError (\u001b[22m\u001b[2mnode_modules/selenium-webdriver/lib/error.js\u001b[2m:524:15)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat parseHttpResponse (\u001b[22m\u001b[2mnode_modules/selenium-webdriver/lib/http.js\u001b[2m:587:13)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Executor.execute (\u001b[22m\u001b[2mnode_modules/selenium-webdriver/lib/http.js\u001b[2m:515:28)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Driver.execute (\u001b[22m\u001b[2mnode_modules/selenium-webdriver/lib/webdriver.js\u001b[2m:745:17)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat HomePage.clickButton (\u001b[22m\u001b[2mpageobjects/basepage.js\u001b[2m:29:16)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat HomePage.agreeWithCookies (\u001b[22m\u001b[2mpageobjects/homepage.js\u001b[2m:37:9)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[22m\u001b[2m\u001b[0m\u001b[36mtests/search.test.js\u001b[39m\u001b[0m\u001b[2m:28:9)\u001b[22m\u001b[2m\u001b[22m\n\n\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mSearch products › Test Sort by price\u001b[39m\u001b[22m\n\n    ElementClickInterceptedError: element click intercepted: Element <button rel=\"nofollow\" href=\"#\" class=\"btn btn-sm btn-yes\">...</button> is not clickable at point (400, 504). Other element would receive the click: <div class=\"modal fade status-success in\" style=\"display: block; padding-right: 17px;\">...</div>\n      (Session info: headless chrome=112.0.5615.137)\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 27 |\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 28 |\u001b[39m     \u001b[36masync\u001b[39m clickButton(element) {\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 29 |\u001b[39m         \u001b[36mreturn\u001b[39m \u001b[36mawait\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdriver\u001b[33m.\u001b[39mfindElement(element)\u001b[33m.\u001b[39mclick()\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m    |\u001b[39m                \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 30 |\u001b[39m     }\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 31 |\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 32 |\u001b[39m     \u001b[36masync\u001b[39m sendText(element\u001b[33m,\u001b[39m text) {\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.throwDecodedError (\u001b[22m\u001b[2mnode_modules/selenium-webdriver/lib/error.js\u001b[2m:524:15)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat parseHttpResponse (\u001b[22m\u001b[2mnode_modules/selenium-webdriver/lib/http.js\u001b[2m:587:13)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Executor.execute (\u001b[22m\u001b[2mnode_modules/selenium-webdriver/lib/http.js\u001b[2m:515:28)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Driver.execute (\u001b[22m\u001b[2mnode_modules/selenium-webdriver/lib/webdriver.js\u001b[2m:745:17)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat HomePage.clickButton (\u001b[22m\u001b[2mpageobjects/basepage.js\u001b[2m:29:16)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat HomePage.agreeWithCookies (\u001b[22m\u001b[2mpageobjects/homepage.js\u001b[2m:37:9)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[22m\u001b[2m\u001b[0m\u001b[36mtests/search.test.js\u001b[39m\u001b[0m\u001b[2m:28:9)\u001b[22m\u001b[2m\u001b[22m\n\n\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mSearch products › Test Filter by format\u001b[39m\u001b[22m\n\n    ElementClickInterceptedError: element click intercepted: Element <button rel=\"nofollow\" href=\"#\" class=\"btn btn-sm btn-yes\">...</button> is not clickable at point (400, 504). Other element would receive the click: <div class=\"modal fade status-success in\" style=\"display: block; padding-right: 17px;\">...</div>\n      (Session info: headless chrome=112.0.5615.137)\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 27 |\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 28 |\u001b[39m     \u001b[36masync\u001b[39m clickButton(element) {\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 29 |\u001b[39m         \u001b[36mreturn\u001b[39m \u001b[36mawait\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdriver\u001b[33m.\u001b[39mfindElement(element)\u001b[33m.\u001b[39mclick()\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m    |\u001b[39m                \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 30 |\u001b[39m     }\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 31 |\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 32 |\u001b[39m     \u001b[36masync\u001b[39m sendText(element\u001b[33m,\u001b[39m text) {\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.throwDecodedError (\u001b[22m\u001b[2mnode_modules/selenium-webdriver/lib/error.js\u001b[2m:524:15)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat parseHttpResponse (\u001b[22m\u001b[2mnode_modules/selenium-webdriver/lib/http.js\u001b[2m:587:13)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Executor.execute (\u001b[22m\u001b[2mnode_modules/selenium-webdriver/lib/http.js\u001b[2m:515:28)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Driver.execute (\u001b[22m\u001b[2mnode_modules/selenium-webdriver/lib/webdriver.js\u001b[2m:745:17)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat HomePage.clickButton (\u001b[22m\u001b[2mpageobjects/basepage.js\u001b[2m:29:16)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat HomePage.agreeWithCookies (\u001b[22m\u001b[2mpageobjects/homepage.js\u001b[2m:37:9)\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[22m\u001b[2m\u001b[0m\u001b[36mtests/search.test.js\u001b[39m\u001b[0m\u001b[2m:28:9)\u001b[22m\u001b[2m\u001b[22m\n","testResults":[{"ancestorTitles":["Search products"],"duration":0,"failureMessages":["ElementClickInterceptedError: element click intercepted: Element <button rel=\"nofollow\" href=\"#\" class=\"btn btn-sm btn-yes\">...</button> is not clickable at point (400, 504). Other element would receive the click: <div class=\"modal fade status-success in\" style=\"display: block; padding-right: 17px;\">...</div>\n  (Session info: headless chrome=112.0.5615.137)\n    at Object.throwDecodedError (C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\node_modules\\selenium-webdriver\\lib\\error.js:524:15)\n    at parseHttpResponse (C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\node_modules\\selenium-webdriver\\lib\\http.js:587:13)\n    at Executor.execute (C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\node_modules\\selenium-webdriver\\lib\\http.js:515:28)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at Driver.execute (C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\node_modules\\selenium-webdriver\\lib\\webdriver.js:745:17)\n    at HomePage.clickButton (C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\pageobjects\\basepage.js:29:16)\n    at HomePage.agreeWithCookies (C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\pageobjects\\homepage.js:37:9)\n    at Object.<anonymous> (C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\tests\\search.test.js:28:9)"],"fullName":"Search products Test Open Web Page","status":"failed","title":"Test Open Web Page"},{"ancestorTitles":["Search products"],"duration":0,"failureMessages":["ElementClickInterceptedError: element click intercepted: Element <button rel=\"nofollow\" href=\"#\" class=\"btn btn-sm btn-yes\">...</button> is not clickable at point (400, 504). Other element would receive the click: <div class=\"modal fade status-success in\" style=\"display: block; padding-right: 17px;\">...</div>\n  (Session info: headless chrome=112.0.5615.137)\n    at Object.throwDecodedError (C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\node_modules\\selenium-webdriver\\lib\\error.js:524:15)\n    at parseHttpResponse (C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\node_modules\\selenium-webdriver\\lib\\http.js:587:13)\n    at Executor.execute (C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\node_modules\\selenium-webdriver\\lib\\http.js:515:28)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at Driver.execute (C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\node_modules\\selenium-webdriver\\lib\\webdriver.js:745:17)\n    at HomePage.clickButton (C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\pageobjects\\basepage.js:29:16)\n    at HomePage.agreeWithCookies (C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\pageobjects\\homepage.js:37:9)\n    at Object.<anonymous> (C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\tests\\search.test.js:28:9)"],"fullName":"Search products Test Search by Keyword","status":"failed","title":"Test Search by Keyword"},{"ancestorTitles":["Search products"],"duration":1,"failureMessages":["ElementClickInterceptedError: element click intercepted: Element <button rel=\"nofollow\" href=\"#\" class=\"btn btn-sm btn-yes\">...</button> is not clickable at point (400, 504). Other element would receive the click: <div class=\"modal fade status-success in\" style=\"display: block; padding-right: 17px;\">...</div>\n  (Session info: headless chrome=112.0.5615.137)\n    at Object.throwDecodedError (C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\node_modules\\selenium-webdriver\\lib\\error.js:524:15)\n    at parseHttpResponse (C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\node_modules\\selenium-webdriver\\lib\\http.js:587:13)\n    at Executor.execute (C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\node_modules\\selenium-webdriver\\lib\\http.js:515:28)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at Driver.execute (C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\node_modules\\selenium-webdriver\\lib\\webdriver.js:745:17)\n    at HomePage.clickButton (C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\pageobjects\\basepage.js:29:16)\n    at HomePage.agreeWithCookies (C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\pageobjects\\homepage.js:37:9)\n    at Object.<anonymous> (C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\tests\\search.test.js:28:9)"],"fullName":"Search products Test Sort by price","status":"failed","title":"Test Sort by price"},{"ancestorTitles":["Search products"],"duration":0,"failureMessages":["ElementClickInterceptedError: element click intercepted: Element <button rel=\"nofollow\" href=\"#\" class=\"btn btn-sm btn-yes\">...</button> is not clickable at point (400, 504). Other element would receive the click: <div class=\"modal fade status-success in\" style=\"display: block; padding-right: 17px;\">...</div>\n  (Session info: headless chrome=112.0.5615.137)\n    at Object.throwDecodedError (C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\node_modules\\selenium-webdriver\\lib\\error.js:524:15)\n    at parseHttpResponse (C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\node_modules\\selenium-webdriver\\lib\\http.js:587:13)\n    at Executor.execute (C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\node_modules\\selenium-webdriver\\lib\\http.js:515:28)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at Driver.execute (C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\node_modules\\selenium-webdriver\\lib\\webdriver.js:745:17)\n    at HomePage.clickButton (C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\pageobjects\\basepage.js:29:16)\n    at HomePage.agreeWithCookies (C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\pageobjects\\homepage.js:37:9)\n    at Object.<anonymous> (C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\tests\\search.test.js:28:9)"],"fullName":"Search products Test Filter by format","status":"failed","title":"Test Filter by format"}]}],"config":{"bail":0,"changedFilesWithAncestor":false,"ci":false,"collectCoverage":false,"collectCoverageFrom":[],"coverageDirectory":"C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\coverage","coverageProvider":"babel","coverageReporters":["json","text","lcov","clover"],"detectLeaks":false,"detectOpenHandles":false,"errorOnDeprecated":false,"expand":false,"findRelatedTests":false,"forceExit":false,"json":false,"lastCommit":false,"listTests":false,"logHeapUsage":false,"maxConcurrency":5,"maxWorkers":3,"noStackTrace":false,"nonFlagArgs":[],"notify":false,"notifyMode":"failure-change","onlyChanged":false,"onlyFailures":false,"openHandlesTimeout":1000,"passWithNoTests":false,"projects":[],"reporters":[["default",{}],["C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\node_modules\\jest-html-reporters\\index.js",{}]],"rootDir":"C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests","runTestsByPath":false,"seed":-525024072,"skipFilter":false,"snapshotFormat":{"escapeString":false,"printBasicPrototype":false},"testFailureExitCode":1,"testPathPattern":"","testSequencer":"C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests\\node_modules\\@jest\\test-sequencer\\build\\index.js","testTimeout":200000,"updateSnapshot":"new","useStderr":false,"watch":false,"watchAll":false,"watchman":true,"workerThreads":false},"endTime":1682077279573,"_reporterOptions":{"publicPath":"C:\\Users\\TA-20V-433\\Juri-Skljarenko-TA-20V-SeleniumJestTests","filename":"jest_html_reporters.html","expand":false,"pageTitle":"","hideIcon":false,"testCommand":"","openReport":false,"failureMessageOnly":0,"enableMergeData":false,"dataMergeLevel":1,"inlineSource":false,"urlForTestFiles":"","darkTheme":false,"includeConsoleLog":false},"logInfoMapping":{},"attachInfos":{}})
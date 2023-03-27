# Selenium & Jest test automation - Webshop
The task is to add tests to Bookdepository.com webpage following the test cases.

## How to get the project

To solve the task, proceed as follows:
1. Fork this repository on to your account
2. Clone the forked repo to your computer using `git clone URL`
3. Run `npm install` to instal all needed packages
4. Make all necessary changes - write tests according to test case descriptions
5. Confirm all changes with test run: `npm test` or `npx jest`
6. Commit your changes and make a pull request for the original repo on GitHub
7. Grade (2p) is awarded to students:
   - who made the pull request with finished tests

## Test cases

**Search products**

| Steps                                                  | Expected result (assertions)                                                                     |
|--------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| Open bookdepository.com webpage                        | Verify that the web page has a Book Depository title.                                            |
| Search for keyword “harry potter”                      | Verify that there are more than 1 products found.                                                |
|                                                        | Verify that products presented have searched keyword in it.                                      |
|                                                        | Verify that found products can be sorted.                                                        |
| Sort searched items by price                           | Verify that the products are sorted correctly.                                                   |
|                                                        | Verify that products can be filtered by 6 categories: Keyword, Age, Price, Availability, Language, Format |
| Filter products by Format, select filter as “Hardback” | Verify that products list contains less items now.                                               |
|                                                        | Verify that items selected have correct format.                                                  |

**Add products to cart**

| Steps                                   | Expected result (assertions)                                         |
|-----------------------------------------|----------------------------------------------------------------------|
| Open bookdepository.com webpage         | Verify that the web page has a Book Depository title.                |
| Search for any product keyword          | Verify that there are more than 1 products found.                    |
|                                         | Verify that products can be added to cart.                           |
| Add 1 item to cart.                     | Verify that notification about product being added to cart is shown. |
| Continue Shopping                       | Verify user is taken back to product items                           |
| Select another item, add it to the cart | Verify that notification about product being added to cart is shown. |
| Click Basket/Checkout button            | Verify that user is transferred to cart view.                        |
|                                         | Verify that cart has 2 items.                                        |
| Remove first product from the cart      | Verify that cart has 1 item.                                         |

**Find products from menu**

| Steps                              | Expected result (assertions)                              |
|------------------------------------|-----------------------------------------------------------|
| Open bookdepository.com webpage    | Verify that the web page has a Book Depository title.     |
| Click on “Shop by Category” menu   | Verify that submenu page is opened.                       |
| Select “Audio Books” from submenu  | Verify Audio Books page is opened.                        |
| Select “Food & Drink” from submenu | Verify that there are more than 1 products found.         |
| Select “Beverages” from submenu    | Verify that page title has selected category as its name. |
|                                    | Verify  products list now contains less items.            |
|                                    | Verify that page submenu routing is correct.              |
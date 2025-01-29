const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const allure = require('allure-commandline');
const bookStore_page = require('../pageobjects/bookStore_page')
// const SecurePage = require('../pageobjects/secure.page');

When(/^I am on the login page$/, async () => {
    await bookStore_page.open()
});

Then(/^I login with (.*) and (.*)$/, async (username, password) => {
    await bookStore_page.loginPage(username, password)
});

When(/^Select a product and add it to the cart$/, async () => {
    await bookStore_page.addingCart()
});

Then(/^Success adding to cart$/, async () => {
    return true
});

Then(/^see list product$/, async () => {
    await bookStore_page.validateListProducts()
});

When(/^Click cart icon$/, async () => {
    await bookStore_page.clickIconCart()
});

Then(/^Go to cart page$/, async () => {
    await bookStore_page.goToCartPage();
});
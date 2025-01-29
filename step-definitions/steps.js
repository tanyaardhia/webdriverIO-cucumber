const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const allure = require('allure-commandline');
const bookStore_page = require('../pageobjects/bookStore_page')
// const SecurePage = require('../pageobjects/secure.page');

When(/^(.*)_I am on the login page$/, async (code) => {
    await bookStore_page.open()
});

Then(/^(.*)_I login with (.*) and (.*)$/, async (code, username, password) => {
    await bookStore_page.loginPage(username, password)
});

When(/^(.*)_Select a product and add it to the cart$/, async (code) => {
    await bookStore_page.addingCart()
});

Then(/^(.*)_Success adding to cart$/, async (code) => {
    return true
});

Then(/^(.*)_see list product$/, async (code) => {
    await bookStore_page.validateListProducts()
});

When(/^(.*)_Click cart icon$/, async (code) => {
    await bookStore_page.clickIconCart()
});

Then(/^(.*)_Go to cart page$/, async (code) => {
    await bookStore_page.goToCartPage();
});

When(/^(.*)_Click icon checkout$/, async (code) => {
    await bookStore_page.clickIconCheckout()
});

Then(/^(.*)_Go to page your infomation$/, async (code) => {
    await bookStore_page.goToCheckoutPage()
});

When(/^(.*)_fill the form order (.*), (.*), (.*)$/, async (code, firstname, lastname, postalcode) => {
    await bookStore_page.fillTheForm(firstname, lastname, postalcode)
});

Then(/^(.*)_Click Continue$/, async (code) => {
    await bookStore_page.clickButtonContinue()
});

When(/^(.*)_Go to Checkout overview$/, async (code) =>{
    await bookStore_page.validateOverview()
});

Then(/^(.*)_click button finish$/, async (code) => {
    await bookStore_page.clickButtonFinish()
});

Then(/^(.*)_Go to page thank you for order$/,  async (code) => {
    await bookStore_page.validateThankyouPage()
});
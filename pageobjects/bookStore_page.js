const { $ } = require('@wdio/globals');
const BookStore_Key = require('../keyDefination/bookStore_Key');

const bookStoreKey = new BookStore_Key(); // Buat instance dari BookStore_Key

class BookStore_page {
    async open(path = '') {
        const baseUrl = 'https://www.saucedemo.com/';
        return browser.url(`${baseUrl}${path}`);
    }

    async loginPage(username, password) {
        await $(bookStoreKey.formUsername).setValue(username); // Gunakan instance
        await $(bookStoreKey.formPassword).setValue(password); // Gunakan instance
        await $(bookStoreKey.buttonLogin).click(); // Gunakan instance
    }

    async addingCart() {
        await $(bookStoreKey.addingToCart).click();
    }

    async validateListProducts() {
        await $(bookStoreKey.listProducts).isExisting();
    }

    async clickIconCart() {
        await $(bookStoreKey.iconCart).click()
    }

    async goToCartPage() {
        await $(bookStoreKey.titleOnCartPage).isExisting();
    }

    async clickIconCheckout() {
        await $(bookStoreKey.iconCheckout).click()
    }

    async goToCheckoutPage() {
        await $(bookStoreKey.titleOnCheckoutPage).isExisting();
    }

    async fillTheForm(firstname, lastname, postalcode) {
        await $(bookStoreKey.formFirstName).setValue(firstname);
        await $(bookStoreKey.formLastName).setValue(lastname);
        await $(bookStoreKey.formPostalcode).setValue(postalcode);
    }

    async clickButtonContinue() {
        await $(bookStoreKey.buttonContinue).click();
    }

}

module.exports = new BookStore_page();

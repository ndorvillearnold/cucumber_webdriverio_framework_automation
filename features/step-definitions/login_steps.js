// const { Given, When, Then } = require('@wdio/cucumber-framework');
const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage
}

// add  gerneral common steps under common like I click etc
Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

Then(/^I click "(.*)" in the login page$/, async (signInButton) => {
    await browser.pause(3000)
    await LoginPage.signInButton.click();
});

When(/^I login with "(.*)" and "(.*)"$/, async (inputEmail, inputPassword) => {
    // setValue("cucumberselenium504@gmail.com")
    await LoginPage.inputEmail.setValue(inputEmail)
    await LoginPage.continueBtn.click();
    await LoginPage.inputPassword.setValue(inputPassword)
    await LoginPage.signInbtn.click();
    //  await browser.pause(5000)
    //  await LoginPage.searchField.click();
    // await searchDropdownBox.click();

});

Then(/^I info in the search field "(.*)"$/, async (searchTextBox) => {
    await browser.pause(5000)
    // await LoginPage.searchTextBox.waitForDisplayed();
    await LoginPage.searchTextBox.setValue(searchTextBox);
    await browser.pause(5000)

});


When(/^I click search icon "(.*)"$/, async (searchIcon) => {
    await LoginPage.searchIcon.click();
    await browser.pause(5000)
});


// Then(/^I click on the cart "(.*)"$/, async (shoppingCart) => {
//     await browser.pause(5000)
//    await LoginPage.amzSpecificItem.waitForDisplayed()
//     await LoginPage.amzSpecificItem.click()
//     await browser.pause(5000)
//     await LoginPage.shoppingCart.click();
// });

When(/^I add item to my cart "(.*)"$/, async (addToCartBtn) => {
    await browser.pause(5000)
   
    await LoginPage.addToCartBtn.waitForDisplayed()
    await LoginPage.addToCartBtn.click();
});

 Then (/^I click on the item "(.*)"$/, async (amzSpecificItem) => {
    await browser.pause(3000)

    await (await LoginPage.amzSpecificItem).isDisplayed()
    await LoginPage.amzSpecificItem.click()
    await browser.pause(9000)
 });

Then(/^I click buy now "(.*)"$/, async (buyNowBtn) => {
    await browser.pause(5000)
    await LoginPage.buyNowBtn.waitForDisplayed()
    await LoginPage.buyNowBtn.click();
});



// await LoginPage.searchIcon.click();
//     await LoginPage.BuyNowBtn.click();

  // await browser.pause(6000)
    // await LoginPage.addToCartBtn.click();

    //input[@id='add-to-cart-button']






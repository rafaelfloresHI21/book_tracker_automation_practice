const { Then } = require("@wdio/cucumber-framework");

const LoginPage = require("../pageobjects/login.page");
const Searchpage = require("../pageobjects/search.page");
const Detailedpage = require("../pageobjects/detailed.page");
const detailedPage = require("../pageobjects/detailed.page");
const Bookshelf = require("../pageobjects/bookshelf.page")
const { title } = require("../pageobjects/detailed.page");
const { deletionConfirmation } = require("../pageobjects/bookshelf.page");

Then(/^I must be redirect to the Homepage$/, async () => {
  await expect(browser).toHaveUrl("https://www.goodreads.com/");
});

Then(/^I must receive a (.*)$/, async message => {
  await expect(LoginPage.loginAlert).toBeExisting();
  await expect(LoginPage.loginAlert).toHaveTextContaining(message);
});

Then(/^I must see a list of Books that match (.*)$/, async query => {
  await Searchpage.tableResults.forEach(async (elem, index) => {
    let temp = await elem.$('span');
    await expect(temp).toHaveTextContaining(query, {ignoreCase: true});
    if (!index) {
      Detailedpage.detailedBookName(temp.getText());
    }
  });
});

Then(/^I must see that there aren't results$/, async () => {
  expect(Searchpage.NoReultsHeader).toExist;
  expect(Searchpage.NoReultsHeader).toHaveText("No Results.");
});

Then(/^I must be redirected to the book detailed page$/, async () => {
  expect(Detailedpage.title).toExist;
  expect(Detailedpage.title).toHaveText(Detailedpage.bookName);
});

Then(/^that button must change to a label with a green checkmark$/, async () => {
  await expect(await detailedPage.wantToReadStatus).toExisting
});

Then(/^then I must see the book I just added$/, async () => {
  // Obtener las filas de la tabla
  // Ciclcar y por cada una buscar la que tenga en el campo field title
  // el nombre del libro
  console.log(await Bookshelf.checkNewBook("How to Win Friends and Influence People"));
});

Then(/^a custom shelf must be created$/, async () => {
    await browser.pause(10000)
    // await browser.waitUntil(async () => {
    //   return (await browser.isLoading()) === false
    // }, {
    //   interval: 2500,
    //   timeout: 10000
    // })
    await Bookshelf.assertCustomBookShelf()
});

Then(/^the custom Boolshelf must be deleted$/, async () => {
  await Bookshelf.deletionConfirmation()
});
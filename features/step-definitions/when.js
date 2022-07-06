const { When } = require("@wdio/cucumber-framework");

const utils = require("../../utils/General")
const LoginPage = require("../pageobjects/login.page");
const Homepage = require("../pageobjects/home.page");
const Searchpage = require("../pageobjects/search.page");
const Detailedpage = require("../pageobjects/detailed.page");
const Header = require("../pageobjects/header.page")
const Bookshelf = require("../pageobjects/bookshelf.page")

When(/^I login with (\S+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

When(/^I try to login with (\S+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

When(/^I enter a search (.+)$/, async query => {
  await Homepage.search(query);
});

When(/^I enter an invalid search (.+)$/, async query => {
  await Homepage.search(query);
});

When(/^I click on a book from the result list$/, async () => {
  await Searchpage.clickOnFirstBook();
});

When(/^I click the Want to Read button$/, async () => {
  await Detailedpage.addBookToBookshelf();
});

When(/^the user clicks the My Books link on the page header$/, async () => {
  await Header.goToMyBooks()
});

When(/^the user clicks the Add shelf button at the left pane$/, async () => {
  await Bookshelf.addCustomBookshelf()
});

When(/^I enter a name for the bookshelf$/, async () => {
  await Bookshelf.nameCustomBookshelf(await browser.getData("/defaultCustomBookshelf"))
});

When(/^I click the add button$/, async () => {
 await Bookshelf.submitCustomBookshelf()
});

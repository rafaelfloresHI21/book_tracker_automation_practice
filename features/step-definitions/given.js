const { Given } = require("@wdio/cucumber-framework");

const utils = require("../../utils/General")
const LoginPage = require("../pageobjects/login.page");
const Homepage = require("../pageobjects/home.page");
const Header = require("../pageobjects/header.page")

const pages = {
  home: Homepage,
  login: LoginPage
};

Given(/^I am on the (\w+) page$/, async page => {
  await pages[page].open();
});

Given(/^I am at a Detailed Screen of a book$/, async () => {
  //Load default book page
  await browser.url(utils.defaultBook.url)
});

Given(/^I am at My Books Screen$/, async () => {
  await Header.goToMyBooks()
});
